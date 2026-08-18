# LeadGen — Master Task List

This is the single-source checklist for the LeadGen sandbox project. Keep this file in the repo and update it as you work through items. Use the checkboxes to track progress.

---

## How to use
- Edit this file in the repo to update progress (git commit/update). I can also update it for you — tell me which boxes to check or ask me to create/modify items.
- Priority: ![P0] Critical / Launch, ![P1] High, ![P2] Medium, ![P3] Low.

---

## 1. Project & Repo (P0)
- [x] Initialize project directory and commit initial import (local) — done
- [ ] Create remote GitHub repository `jenozu/lead-gen` and push main branch (requires remote) — ACTION: push when remote available
- [ ] Add README / deployment notes to repository (review & finalize)

## 2. Access & Automation (P0)
- [x] Generate per-VPS SSH keypair (scoped) — done
- [ ] Add public key as deploy key with write access on `jenozu/lead-gen` (or install GitHub App) — ACTION: add on GitHub
- [ ] Decide automation model: Deploy key (quick) / Bot account / GitHub App (recommended for scale)
- [ ] If GitHub App chosen: create App, download private key, install in repo (I can help wire it)

## 3. Local dev & build (P0)
- [x] Move project files into `src/` structure — done
- [x] Add Tailwind config, sitemap, robots.txt — done
- [x] Install dependencies and verify `npm run build` — done
- [x] Verify local dev (`npm run dev`) and API endpoints — done

## 4. Pages & Features (P0)
- [x] Homepage — done
- [x] Programmatic location pages (/locations/[city]) — done
- [x] Service pages (/services/*) — done
- [x] Emergency page with downtime calculator — done
- [x] QuoteCalculator component — done (frontend)
- [x] `/api/quote` POST endpoint — done (prelim)
- [ ] Add lead-capture routing (email / webhook / CRM) and confirm receiving destination (required before ads)

## 5. Data & Content (P1)
- [x] locations.ts with localized H1, intro, FAQs — done
- [x] services.ts — done
- [ ] Write unique 300+ word localized content for each city (final copy review)
- [ ] Add real photos / brand assets and update BaseLayout Open Graph image

## 6. SEO & Technical SEO (P1)
- [x] Schema.org JSON-LD on pages (LocalBusiness, Service, FAQPage) — done
- [x] Sitemap generation configured — done
- [x] robots.txt created — done
- [ ] Finalize meta titles & descriptions for all pages (unique)
- [ ] Run Lighthouse audits and fix any P0/P1 issues (target 90+)

## 7. Testing, QA & CI (P1)
- [x] Basic build test — `npm run build` passes — done
- [ ] Add automated test runner (unit tests) and run in CI
- [ ] Add GitHub Actions workflow (or Vercel preview) for PR builds
- [ ] Create acceptance tests for MVP functional criteria (quote API, location pages, emergency calculator)

## 8. Security & Privacy (P0)
- [x] Templates for Privacy & Terms pages — done (drafts)
- [ ] Add a real privacy policy and contact details (legal review required)
- [ ] Ensure API input validation & basic rate limiting (done in `/api/quote`) — verify and harden
- [ ] Secrets storage plan (GitHub App key or secrets manager) — decide where to store

## 9. SLM / Agent Automation (P2)
- [ ] Prototype commit-msg / PR description SLM (local model) that suggests commit messages from diffs
- [ ] Prototype labeler SLM for issues (triage) with confidence score and human review
- [ ] Design hybrid flow: SLM workers for repetitive tasks + LLM fallback for planning
- [ ] Instrument logs & audit trail for automated agent actions

## 10. Pre-launch & Ads readiness (P0)
- [ ] Verify lead delivery path is live and monitored (email, webhook, CRM) — REQUIRED before ads
- [ ] Add GA4 tracking & configure conversion events (click_phone, quote_form_submit, quote_api_success)
- [ ] Prepare Google Ads draft (Guelph 48-hour test) — keep draft until human approval
- [ ] Finalize phone number and domain (no placeholder numbers live)
- [ ] Legal review of all claims (response times, availability) before publishing

## 11. Ops & Monitoring (P2)
- [ ] Add error logging for API endpoints (Sentry / provider logs)
- [ ] Set up uptime / health check for public site and API endpoints
- [ ] Schedule automated backups for any persistent data or logs (if added later)

## 12. Stretch / Phase 2 (P3)
- [ ] Expand to 20+ cities with programmatic content pipeline
- [ ] Integrate Call tracking (CallRail) and CRM automation (Zapier/Make/HubSpot)
- [ ] Add blog content and backlink strategy
- [ ] Pursue SLM distillation from LLMs for heavy automation tasks

---

Notes & conventions
- Branching: `feature/*` for new features, `fix/*` for bugfixes, `chore/*` for maintenance.
- Commit messages: follow Conventional Commits (feat/fix/chore/docs/test)
- Human approval: no ad spend or production publish without explicit human approval recorded in the repo (ADD a `DEPLOY_APPROVAL.md` when ready).

---

Status summary (auto-update this manually or ask the agent to):
- Completed: 10
- In progress: 0
- Todo: Remaining items above

File path: `/opt/data/projects/LeadGen/TASKS.md`

If you'd like, I can:
- Add this file to the repo and make a commit (done if you want),
- Create a GitHub Project/Issue board from these tasks,
- Output the tasks as a checklist in a Notion / Google Doc / external tracker (you choose).

Which of the follow-ups do you want next? (push to GitHub, create GitHub Project board, or run an SLM prototype?)