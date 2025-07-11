# Vercel Deployment Guide

## Quick Setup

1. **Fork/Clone this repository**
2. **Create a Vercel account** at vercel.com
3. **Set up a PostgreSQL database** (recommended: [Neon](https://neon.tech/))
4. **Deploy to Vercel**

## Step-by-Step Deployment

### 1. Database Setup

Create a free PostgreSQL database:
- Go to [Neon](https://neon.tech/) and create an account
- Create a new database
- Copy the connection string (starts with `postgresql://`)

### 2. Deploy to Vercel

**Option A: Import from GitHub**
1. Connect your GitHub account to Vercel
2. Import this repository
3. Set environment variables (see below)
4. Deploy

**Option B: Vercel CLI**
```bash
npm install -g vercel
vercel
```

### 3. Environment Variables

In your Vercel dashboard, add these environment variables:

| Variable | Value |
|----------|-------|
| `DATABASE_URL` | Your PostgreSQL connection string |
| `NODE_ENV` | `production` |

### 4. Custom Domain (Optional)

After deployment, you can add a custom domain in your Vercel dashboard:
- Go to your project settings
- Navigate to "Domains"
- Add your custom domain

## Build Configuration

The project is pre-configured with:
- ✅ `vercel.json` - Vercel configuration
- ✅ `api/index.ts` - Serverless API handler
- ✅ Build optimization for production
- ✅ Static asset serving
- ✅ Database initialization

## Troubleshooting

**Build Issues:**
- Ensure all dependencies are installed
- Check that `DATABASE_URL` is properly set

**Database Issues:**
- Verify your PostgreSQL connection string
- Check that your database allows external connections

**Asset Loading:**
- Thumbnails are served from `/api/assets/` endpoint
- All assets are included in the deployment

## Production Optimizations

The deployment includes:
- Server-side rendering for better SEO
- Optimized asset serving
- Database connection pooling
- Serverless function optimization
- Static asset caching

Your streaming platform will be live at `https://your-project-name.vercel.app`!