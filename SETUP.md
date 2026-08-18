
# 🚀 MOBILE LINE BORING ONTARIO - SETUP INSTRUCTIONS

## Step 1: Install Dependencies

Open your terminal and navigate to the project directory:

```bash
cd mobile-line-boring-ontario
```

Install all dependencies:

```bash
npm install
```

This will install:
- Astro 4.x (static site generator)
- Tailwind CSS (styling)
- TypeScript (type safety)

## Step 2: Run Development Server

Start the local development server:

```bash
npm run dev
```

Your site will be available at: **http://localhost:4321**

## Step 3: Verify the Build

The site should now be running with:
- ✅ Homepage with hero section, services, and CTAs
- ✅ 5 dynamic location pages (Guelph, Peterborough, Kingston, Sarnia, Belleville)
- ✅ 3 service pages (Mobile Line Boring, Bore Welding, Pin & Bushing)
- ✅ Emergency landing page with downtime cost calculator
- ✅ Quote calculator API endpoint at `/api/quote`
- ✅ SEO-optimized BaseLayout with schema.org markup
- ✅ Responsive Header and Footer components

## Step 4: Test Key Features

### Test Location Pages
Visit these URLs to see programmatic location pages:
- http://localhost:4321/locations/guelph
- http://localhost:4321/locations/peterborough
- http://localhost:4321/locations/kingston
- http://localhost:4321/locations/sarnia
- http://localhost:4321/locations/belleville

### Test Service Pages
- http://localhost:4321/services/mobile-line-boring
- http://localhost:4321/services/bore-welding-repair
- http://localhost:4321/services/pin-bushing-replacement

### Test Emergency Page
- http://localhost:4321/emergency/24-7-line-boring
  - Try the downtime cost calculator!

### Test Quote Calculator API
Visit: http://localhost:4321/api/quote (GET request to see API docs)

Or test with curl:
```bash
curl -X POST http://localhost:4321/api/quote \
  -H "Content-Type: application/json" \
  -d '{
    "equipmentType": "excavator",
    "boreSize": "4.5",
    "location": "Guelph, ON",
    "urgency": "emergency"
  }'
```

## Step 5: Build for Production

When ready to deploy:

```bash
npm run build
```

This generates a static site in the `dist/` folder.

Preview the production build:

```bash
npm run preview
```

## Step 6: Deploy (Optional)

### Option A: Vercel (Recommended)
```bash
npm i -g vercel
vercel deploy
```

### Option B: Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

### Option C: Cloudflare Pages
```bash
npm run build
wrangler pages deploy dist
```

## Step 7: 48-Hour Litmus Test

Once deployed:

1. **Set up Google Ads campaign** targeting:
   - `emergency line boring Guelph`
   - `mobile line boring near me`
   - `24/7 bore welding repair Guelph`

2. **Budget**: $50 for 48 hours

3. **Success Metric**: 3+ phone calls within 24 hours

4. **Track**: Use call tracking number or Google Analytics events

## Next Development Steps

1. **Customize Content**:
   - Update phone number in Header.astro, Footer.astro, and all pages
   - Replace placeholder email addresses
   - Add real business name and branding

2. **Add More Locations**:
   - Expand `src/data/locations.ts` with 15-20 more Ontario cities
   - Programmatic pages will auto-generate

3. **Add Blog**:
   - Create `src/pages/blog/` directory
   - Write 3-5 posts targeting long-tail keywords

4. **Add Call Tracking**:
   - Integrate CallRail or similar for call attribution

5. **Optimize Performance**:
   - Add image optimization
   - Implement lazy loading
   - Target Lighthouse score 95+

## Troubleshooting

### Port Already in Use
If port 4321 is busy:
```bash
npm run dev -- --port 4322
```

### Dependency Issues
Clear cache and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
Check for TypeScript errors:
```bash
npx astro check
```

## Resources

- **AGENTS.md**: Project overview and strategy
- **README.md**: Technical documentation
- **Astro Docs**: https://docs.astro.build
- **Tailwind Docs**: https://tailwindcss.com/docs

---

**Ready to start vibe coding? 🎨**

Run `npm run dev` and open http://localhost:4321 to see your SEO powerhouse in action!
