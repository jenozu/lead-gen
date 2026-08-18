# 🚀 Quick Deploy to GitHub Guide

## Step 1: Initialize Git Repository

```bash
# Navigate to your project
cd mobile-line-boring-ontario

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Mobile Line Boring Ontario SEO site"
```

## Step 2: Connect to Your GitHub Repo

```bash
# Add your remote repository
git remote add origin https://github.com/jenozu/lead-gen.git

# Verify remote
git remote -v
# Should show:
# origin  https://github.com/jenozu/lead-gen.git (fetch)
# origin  https://github.com/jenozu/lead-gen.git (push)
```

## Step 3: Push to GitHub

```bash
# Push to main branch
git push -u origin main

# If you get an error about branch name, try:
git branch -M main
git push -u origin main
```

## Step 4: Deploy to Vercel

### Option A: Via Vercel Dashboard (Easiest)

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New Project"
4. Select "Import Git Repository"
5. Find and select `lead-gen` repository
6. Click "Deploy"
7. Wait 2-3 minutes
8. Done! Your site is live! 🎉

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
cd mobile-line-boring-ontario
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Link to existing project? N (first time)
# - Project name? lead-gen
# - Directory? ./
# - Override settings? N

# Deploy to production
vercel --prod
```

## Step 5: Verify Deployment

Visit your production URLs:

- Homepage: https://lead-gen-[your-username].vercel.app
- Guelph: https://lead-gen-[your-username].vercel.app/locations/guelph
- Peterborough: https://lead-gen-[your-username].vercel.app/locations/peterborough
- Kingston: https://lead-gen-[your-username].vercel.app/locations/kingston
- Sarnia: https://lead-gen-[your-username].vercel.app/locations/sarnia
- Belleville: https://lead-gen-[your-username].vercel.app/locations/belleville
- Emergency: https://lead-gen-[your-username].vercel.app/emergency/24-7-line-boring
- API: https://lead-gen-[your-username].vercel.app/api/quote

## Troubleshooting

### If you get "remote origin already exists" error:

```bash
git remote remove origin
git remote add origin https://github.com/jenozu/lead-gen.git
```

### If you get "permission denied" error:

Make sure you're logged into GitHub:
```bash
# Check git config
git config --global user.name
git config --global user.email

# If not set, configure:
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

### If Vercel build fails:

1. Check that all files are in the repository
2. Verify `package.json` exists
3. Check Vercel build logs for specific errors
4. Common fix: Ensure `@astrojs/tailwind` is installed

```bash
npm install @astrojs/tailwind tailwindcss
git add .
git commit -m "Add tailwind dependencies"
git push
```

## Quick Commands Summary

```bash
# Complete workflow from start to finish:
cd mobile-line-boring-ontario
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/jenozu/lead-gen.git
git branch -M main
git push -u origin main

# Then deploy to Vercel:
vercel --prod
```

## Next Steps After Deployment

1. ✅ Test all location pages
2. ✅ Test API endpoint with curl
3. ✅ Run Lighthouse audit (target 90+)
4. ✅ Add custom domain (optional)
5. ✅ Launch 48-hour Google Ads test in Guelph

Good luck! 🚀
