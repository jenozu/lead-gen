# Ontario Mobile Line Boring - Astro SEO Powerhouse

High-performance Astro website for mobile line boring services targeting Ontario's Tier 2 and Tier 3 cities.

## Quick Start

### Prerequisites
- Node.js 18.x or later
- npm or pnpm

### Installation

```bash
# Navigate to project directory
cd mobile-line-boring-ontario

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Build for Production

```bash
# Build static site
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.astro          # Navigation header
│   ├── Footer.astro          # Site footer
│   └── QuoteCalculator.astro # 60-second quote calculator
├── layouts/
│   └── BaseLayout.astro      # Base layout with SEO & schema
├── pages/
│   ├── index.astro                     # Homepage
│   ├── locations/
│   │   └── [city].astro                # Dynamic location pages
│   ├── services/
│   │   ├── mobile-line-boring.astro    # Core service page
│   │   ├── bore-welding-repair.astro   # Welding service
│   │   └── pin-bushing-replacement.astro # Pin/bushing service
│   ├── emergency/
│   │   └── 24-7-line-boring.astro      # Emergency landing page
│   └── api/
│       └── quote.ts                    # Quote calculator API
├── data/
│   ├── locations.ts      # Location data for programmatic SEO
│   └── services.ts       # Service definitions
└── styles/
    └── global.css        # Global styles with Tailwind
```

## Target Cities

- Guelph, ON
- Peterborough, ON
- Kingston, ON
- Sarnia, ON
- Belleville, ON

## Key Features

- **Programmatic SEO**: Dynamic location pages for 5+ cities
- **Emergency Service Funnel**: 24/7 landing page with downtime calculator
- **AI Quote Calculator**: Instant pricing estimates via API
- **Schema.org Markup**: LocalBusiness, Service, and EmergencyService schemas
- **Mobile-First Design**: Tailwind CSS responsive design
- **Fast Performance**: Static site generation with Astro

## Money Keywords Targeted

- `emergency line boring Guelph`
- `mobile line boring near me Peterborough`
- `24/7 bore welding repair Kingston`
- `on-site machining Sarnia emergency`
- `heavy equipment bore repair Belleville`

## Next Steps

1. **Customize Content**: Update phone numbers, email addresses, and business details
2. **Add Real Data**: Replace placeholder location data with actual service areas
3. **Deploy**: Connect to Vercel, Netlify, or Cloudflare Pages
4. **Launch 48-Hour Test**: Run Google Ads campaign targeting Guelph keywords
5. **Expand**: Add 15-20 more location pages based on test results

## License

MIT
