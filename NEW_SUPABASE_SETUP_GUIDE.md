# Setup Guide for Your New Supabase Project

Your website is now configured to connect to your new Supabase project.

## Step 1: Update Environment Variables

Go to your Vercel project settings and update these environment variables in the **Vars** section:

```
SUPABASE_URL=https://qecdozjdvxqcdrhunjfz.supabase.co
NEXT_PUBLIC_SUPABASE_URL=https://qecdozjdvxqcdrhunjfz.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlY2RvempkdnhxY2RyaHVuamZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc4MzkwOTQsImV4cCI6MjA4MzQxNTA5NH0.Gevfu5syEtis-porP6DzhQEzahNL2yBvURYPN47GYFY
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlY2RvempkdnhxY2RyaHVuamZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc4MzkwOTQsImV4cCI6MjA4MzQxNTA5NH0.Gevfu5syEtis-porP6DzhQEzahNL2yBvURYPN47GYFY
```

## Step 2: Run Database Migrations in Your Supabase Dashboard

1. Go to your Supabase dashboard: https://supabase.com/dashboard/project/qecdozjdvxqcdrhunjfz
2. Click on **SQL Editor** in the left sidebar
3. Run these SQL files in order:

### First: Create Tables
Copy and paste the content from `scripts/001_create_tables_new_project.sql` and click **Run**

### Second: Create Storage Buckets
Copy and paste the content from `scripts/002_create_storage_buckets.sql` and click **Run**

### Third: Seed Initial Data (Optional)
Copy and paste the content from `scripts/003_seed_initial_data.sql` and click **Run**

## Step 3: Setup Authentication

1. In your Supabase dashboard, go to **Authentication** > **Providers**
2. Enable **Email** provider
3. Go to **Authentication** > **Users**
4. Create your admin user account

## Step 4: Verify Setup

After completing the steps above:
- All tables should appear in **Database** > **Tables**
- Storage buckets should appear in **Storage**
- Your admin panel at `/admin-deba` should work
- Login at `/auth/login` with your admin credentials

## What's Connected

Your website now uses:
- **Supabase Auth** - Admin login at `/auth/login`
- **Supabase Postgres** - All data storage
- **Supabase Storage** - Product images and testimonials
- **Admin Panel** - Fully functional at `/admin-deba`

## Important Notes

- The old Supabase project (wuuoxyjguoerplgnydau) is completely disconnected
- All backend operations now use YOUR project (qecdozjdvxqcdrhunjfz)
- Environment variables are used - no hardcoded keys in the code
- SERVICE_ROLE_KEY is never exposed to the frontend

## Troubleshooting

If you see any errors:
1. Verify environment variables are set in Vercel
2. Redeploy your site after updating environment variables
3. Check that all SQL migrations ran successfully in Supabase dashboard
4. Verify your admin user exists in Supabase Auth
