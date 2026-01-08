# Environment Variables Configuration

## Action Required

Please update the following environment variables in your Vercel project settings (Vars section):

### 1. Recreate POSTGRES_USER
Based on your POSTGRES_URL, extract the username (the part between `postgres://` and `@`).

**Variable Name:** `POSTGRES_USER`
**Value:** Extract from your existing POSTGRES_URL (the username portion)

Example: If POSTGRES_URL is `postgres://username:password@host/db`, the username is `username`

### 2. Configure New Supabase Project Variables

**SUPABASE_URL**
```
https://qecdozjdvxqcdrhunjfz.supabase.co
```

**NEXT_PUBLIC_SUPABASE_URL**
```
https://qecdozjdvxqcdrhunjfz.supabase.co
```

**SUPABASE_ANON_KEY**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlY2RvempkdnhxY2RyaHVuamZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc4MzkwOTQsImV4cCI6MjA4MzQxNTA5NH0.Gevfu5syEtis-porP6DzhQEzahNL2yBvURYPN47GYFY
```

**NEXT_PUBLIC_SUPABASE_ANON_KEY**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlY2RvempkdnhxY2RyaHVuamZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc4MzkwOTQsImV4cCI6MjA4MzQxNTA5NH0.Gevfu5syEtis-porP6DzhQEzahNL2yBvURYPN47GYFY
```

## Steps to Update in Vercel

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Update/Add each variable listed above
4. Click "Save"
5. Redeploy your project for changes to take effect

## Important Notes

- Do NOT modify or delete any other existing environment variables
- Only the anon key is used (no service_role key needed in frontend)
- Both public (NEXT_PUBLIC_*) and private versions are needed for proper SSR/client-side functionality
- After updating, your app will connect to your NEW Supabase project at qecdozjdvxqcdrhunjfz

## Verification

After updating the variables and redeploying:
1. Check that the admin login works at `/auth/login`
2. Verify the admin panel loads at `/admin-deba`
3. Test that product data loads on the homepage and shop page
