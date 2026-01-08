# Setup Instructions for New Supabase Project

Your code is already configured to use your NEW Supabase project:
- Project URL: https://qecdozjdvxqcdrhunjfz.supabase.co
- Project ID: qecdozjdvxqcdrhunjfz

## Step 1: Update Environment Variables in Vercel

Go to your Vercel project settings → Environment Variables and add/update these:

```
SUPABASE_URL=https://qecdozjdvxqcdrhunjfz.supabase.co
NEXT_PUBLIC_SUPABASE_URL=https://qecdozjdvxqcdrhunjfz.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlY2RvempkdnhxY2RyaHVuamZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc4MzkwOTQsImV4cCI6MjA4MzQxNTA5NH0.Gevfu5syEtis-porP6DzhQEzahNL2yBvURYPN47GYFY
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlY2RvempkdnhxY2RyaHVuamZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc4MzkwOTQsImV4cCI6MjA4MzQxNTA5NH0.Gevfu5syEtis-porP6DzhQEzahNL2yBvURYPN47GYFY
```

## Step 2: Create Database Tables

1. Go to your Supabase Dashboard: https://supabase.com/dashboard/project/qecdozjdvxqcdrhunjfz
2. Click on "SQL Editor" in the left sidebar
3. Click "New Query"
4. Copy and paste the entire contents of `scripts/001_create_tables_new_project.sql`
5. Click "Run" to create all tables

## Step 3: Setup Storage Buckets

1. Stay in the SQL Editor
2. Click "New Query" again
3. Copy and paste the entire contents of `scripts/002_create_storage_buckets.sql`
4. Click "Run" to create storage buckets and policies

## Step 4: Add Sample Data (Optional)

1. In SQL Editor, click "New Query"
2. Copy and paste the entire contents of `scripts/003_seed_initial_data.sql`
3. Click "Run" to add sample categories and products

## Step 5: Verify Setup

After running the SQL scripts, verify in your Supabase dashboard:

### Tables (should see 6 tables):
- categories
- products
- orders
- order_items
- reviews
- testimonials

### Storage Buckets (should see 2 buckets):
- product-images
- testimonials

## Step 6: Redeploy Your Vercel Project

After updating the environment variables in Vercel, redeploy your project so the new Supabase connection takes effect.

## Verification

Once deployed, your site should:
- Load products from your new Supabase project
- Allow admin login at /auth/login
- Enable product management at /admin-deba
- Store images in your Supabase Storage buckets

---

## Troubleshooting

**If you see "Could not find table" errors:**
- Make sure you ran ALL SQL scripts in the correct order
- Check that the tables exist in the "public" schema
- Verify environment variables are set correctly in Vercel

**If admin login doesn't work:**
- You need to create an admin user in Supabase Authentication
- Go to Dashboard → Authentication → Users
- Click "Add User" and create your admin account
- Use that email/password to log into /auth/login
