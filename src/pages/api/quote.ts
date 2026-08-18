// POST /api/quote — Preliminary quote estimate endpoint
// All estimates are preliminary and subject to on-site technician assessment

import type { APIRoute } from 'astro';

export const prerender = false;

// ── Pricing configuration ─────────────────────────────────────────────────────
// Update these ranges without touching the route logic.

const BASE_PRICE: Record<string, { min: number; max: number }> = {
  excavator:    { min: 1800, max: 5500 },
  loader:       { min: 1600, max: 4500 },
  dozer:        { min: 2000, max: 6000 },
  backhoe:      { min: 1500, max: 4000 },
  agricultural: { min: 1200, max: 3500 },
  industrial:   { min: 2500, max: 8000 },
  other:        { min: 1500, max: 5000 },
};

// Bore size multiplier brackets (diameter in inches)
function boreSizeMultiplier(size: number): number {
  if (size <= 3)   return 0.8;
  if (size <= 6)   return 1.0;
  if (size <= 10)  return 1.3;
  if (size <= 16)  return 1.6;
  return 2.0;
}

const URGENCY_MULTIPLIER: Record<string, number> = {
  standard:  1.0,
  urgent:    1.25,
  emergency: 1.5,
};

const TURNAROUND: Record<string, string> = {
  standard:  '1–2 business days',
  urgent:    'Same day',
  emergency: 'As soon as possible — emergency dispatch',
};

// ── Types ─────────────────────────────────────────────────────────────────────

interface QuoteRequest {
  equipmentType: string;
  boreSize: string;
  location: string;
  urgency: string;
  additionalDetails?: string;
}

// ── Rate limiting (in-memory, process-scoped) ─────────────────────────────────
const requestLog = new Map<string, number[]>();
const RATE_LIMIT_MAX = 10;      // max requests per window
const RATE_LIMIT_WINDOW = 60_000; // 1 minute in ms

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const window = requestLog.get(ip) ?? [];
  const recent = window.filter(ts => now - ts < RATE_LIMIT_WINDOW);
  recent.push(now);
  requestLog.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX;
}

// ── Validation ────────────────────────────────────────────────────────────────

const VALID_EQUIPMENT = ['excavator', 'loader', 'dozer', 'backhoe', 'agricultural', 'industrial', 'other'];
const VALID_URGENCY   = ['standard', 'urgent', 'emergency'];

function validate(body: unknown): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!body || typeof body !== 'object') {
    return { valid: false, errors: ['Request body must be a JSON object.'] };
  }

  const req = body as Record<string, unknown>;

  if (!req.equipmentType || typeof req.equipmentType !== 'string') {
    errors.push('equipmentType is required.');
  } else if (!VALID_EQUIPMENT.includes(req.equipmentType)) {
    errors.push(`equipmentType must be one of: ${VALID_EQUIPMENT.join(', ')}.`);
  }

  if (!req.boreSize || typeof req.boreSize !== 'string') {
    errors.push('boreSize is required.');
  } else {
    const n = parseFloat(req.boreSize);
    if (isNaN(n) || n <= 0 || n > 48) {
      errors.push('boreSize must be a positive number up to 48 inches.');
    }
  }

  if (!req.location || typeof req.location !== 'string' || req.location.trim().length < 2) {
    errors.push('location is required.');
  }

  if (!req.urgency || typeof req.urgency !== 'string') {
    errors.push('urgency is required.');
  } else if (!VALID_URGENCY.includes(req.urgency)) {
    errors.push(`urgency must be one of: ${VALID_URGENCY.join(', ')}.`);
  }

  if (req.additionalDetails && typeof req.additionalDetails !== 'string') {
    errors.push('additionalDetails must be a string.');
  }

  if (req.additionalDetails && typeof req.additionalDetails === 'string' && req.additionalDetails.length > 1000) {
    errors.push('additionalDetails must be under 1000 characters.');
  }

  return { valid: errors.length === 0, errors };
}

// ── Route ─────────────────────────────────────────────────────────────────────

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const ip = clientAddress ?? 'unknown';

  // Rate limiting
  if (isRateLimited(ip)) {
    return new Response(
      JSON.stringify({ success: false, error: 'Too many requests. Please try again shortly.' }),
      { status: 429, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // Parse JSON body
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response(
      JSON.stringify({ success: false, error: 'Invalid JSON in request body.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // Validate
  const { valid, errors } = validate(body);
  if (!valid) {
    return new Response(
      JSON.stringify({ success: false, errors }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const req = body as QuoteRequest;

  // Calculate estimate
  try {
    const boreSize = parseFloat(req.boreSize);
    const base = BASE_PRICE[req.equipmentType] ?? BASE_PRICE['other'];
    const boreMult = boreSizeMultiplier(boreSize);
    const urgencyMult = URGENCY_MULTIPLIER[req.urgency] ?? 1;

    const min = Math.round(base.min * boreMult * urgencyMult / 100) * 100;
    const max = Math.round(base.max * boreMult * urgencyMult / 100) * 100;

    const response = {
      success: true,
      quote: {
        equipmentType: req.equipmentType,
        boreSize: req.boreSize,
        location: req.location.trim(),
        urgency: req.urgency,
        estimatedPrice: {
          min,
          max,
          currency: 'CAD' as const,
        },
        turnaround: TURNAROUND[req.urgency] ?? 'Contact for details',
        validFor: '48 hours',
        disclaimer: 'Preliminary estimate only. Subject to on-site technician assessment. Not a binding quote.',
      },
      nextSteps: {
        message: 'Call or contact us to confirm availability and schedule service.',
        // TODO: Replace with real business phone and email before launch
        phone: '(519) 555-0123',
        email: 'info@ontariolineboring.ca',
      },
    };

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    // Never expose stack traces
    console.error('Quote calculation error:', err);
    return new Response(
      JSON.stringify({ success: false, error: 'An unexpected error occurred. Please call us directly.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

// Reject non-POST methods cleanly
export const GET: APIRoute = () =>
  new Response(JSON.stringify({ error: 'Method not allowed. Use POST.' }), {
    status: 405,
    headers: { 'Content-Type': 'application/json', Allow: 'POST' },
  });
