# Deba eCommerce - Setup Guide

This guide will help you set up and configure your Deba eCommerce website with Supabase, Razorpay, and Formspark integrations.

## Environment Variables

Add the following environment variables in the **Vars section** of the v0 in-chat sidebar:

### Supabase Configuration
Supabase is already configured via the Vercel integration. The following variables are automatically available:
- Supabase URL
- Supabase anon key
- Supabase service role key

### Payment Gateway Configuration
To enable Razorpay checkout, add your Razorpay credentials from https://dashboard.razorpay.com/app/keys

The application requires:
- A public Razorpay test key (for client-side SDK initialization)
- A secret Razorpay key (for server-side order creation)

Add both keys in the Vars section with the appropriate environment variable names.

## Database Setup

### 1. Run SQL Scripts

The project includes SQL scripts in the `/scripts` folder. Run them in order:

1. **001_create_products_table.sql** - Creates the products table with RLS policies
2. **002_seed_products.sql** - Seeds initial product data
3. **003_update_products_schema.sql** - Adds new PDP fields (features, guarantee, support, etc.)
4. **004_seed_products_with_full_data.sql** - Seeds products with complete PDP data

You can run these scripts directly from v0's script execution feature.

### 2. Products Table Schema

\`\`\`sql
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  price INTEGER NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('Love', 'Sorry', 'Birthday', 'Anniversary')),
  description TEXT,
  image_url TEXT,
  features JSONB DEFAULT '[]'::jsonb,
  guarantee_text TEXT DEFAULT 'We guarantee 100% satisfaction or your money back within 7 days',
  support_email TEXT DEFAULT 'bringuouthere@gmail.com',
  validity_period TEXT DEFAULT '1 Year',
  delivery_info TEXT DEFAULT 'Delivered within 12-24 hours to your registered email',
  technical_details TEXT DEFAULT 'Fully responsive on mobile, tablet, and desktop',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
\`\`\`

## Authentication Setup

### Admin Access

1. Create an admin user in Supabase:
   - Go to Authentication > Users in Supabase dashboard
   - Click "Add user"
   - Enter email and password
   - User can now login at `/auth/login`

2. Access admin panel at `/admin-deba` (requires authentication)

## Integrations

### 1. Tawk.to Live Chat

Already integrated in `app/layout.tsx`. The chat widget will appear on all pages.

To customize:
- Login to your Tawk.to dashboard
- Update the widget ID in `app/layout.tsx` if needed

### 2. Formspark Reviews

The review form submits to: `https://submit-form.com/form_v1_dggF1nmg4IMbcR3efgiaJFzL`

Features:
- Two-tab system (Product Review & Website Feedback)
- 5-star rating system
- Image upload support
- Anonymous feedback option

### 3. Razorpay Payment Gateway

Test Mode is enabled by default:
- Test Card: 4111 1111 1111 1111
- Any future expiry date and CVV

Payment Flow:
1. User adds items to cart or clicks "Buy Now"
2. On product detail page, user can purchase instantly or add to cart
3. Clicks "Checkout" button in cart
4. API creates Razorpay order server-side
5. Razorpay modal opens with order details
6. User completes payment
7. Success/Error page shows next steps

**Mock Payment Mode:**
- Currently using a mock payment modal for testing
- Shows "Simulate Success" and "Simulate Failure" buttons
- Replace with real Razorpay integration by configuring payment gateway credentials

To go live with real payments:
1. Complete KYC on Razorpay dashboard
2. Replace test keys with live keys in environment variables
3. Update payment gateway configuration in Vars section

## Features

### Product Detail Pages (PDP)
- Dynamic `/product/[id]` routes for each product
- Pinakk-style high-converting layout with:
  - Large hero image and product showcase
  - Dual CTA buttons: "Buy It Now" and "Add to Cart"
  - "What You'll Receive" section with deliverables
  - "How It Works" 4-step timeline
  - Trust badges: Money-back guarantee, 24/7 support, validity period
  - Technical specifications and device compatibility
  - "You May Also Like" related products carousel
- All data dynamically loaded from Supabase
- Mobile-optimized with beautiful animations

### Dynamic Product Management
- Products are fetched from Supabase in real-time
- Admin panel for CRUD operations (add, edit, delete)
- Category filtering on shop page
- Image URL support for product visuals

### Shopping Cart & Checkout
- Client-side cart with localStorage persistence
- Quantity management (add, remove, update)
- Razorpay payment integration
- Success and error pages with helpful next steps
- WhatsApp checkout fallback option

### Low-Friction Buying
- "Buy Now" button on every product card - instant navigation to PDP
- "Add to Cart" button - updates cart count immediately
- Dual-action buttons on product detail pages
- Quick purchase flow optimized for conversions

### Mobile-First Design
- Fully responsive on all devices (mobile, tablet, desktop)
- Dark mode with neon purple (#8B5CF6) accents
- Mobile navigation menu
- Touch-friendly buttons and interactions
- Optimized images and fast loading

### Reviews & Feedback
- Product review submission with star ratings
- Website feedback with feature selection chips
- Device tracking (mobile, desktop, tablet)
- Image upload support
- Formspark integration for form handling

## Pages

1. **Home (/)** - Hero, features, best selling products with Buy Now buttons
2. **Shop (/shop)** - Full product catalog with category filters and dual-action buttons
3. **Product Detail (/product/[id])** - High-converting PDP with complete product info
4. **Cart (/cart)** - Shopping cart with checkout
5. **Success (/success)** - Payment success page with "What Happens Next" guide
6. **Error (/error)** - Payment error page with troubleshooting tips
7. **How It Works (/how-it-works)** - Step-by-step guide
8. **Reviews (/review)** - Two-tab customer feedback forms
9. **Legal (/legal)** - Terms and policies
10. **Admin (/admin-deba)** - Product management dashboard with edit functionality

## Development

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
\`\`\`

## Deployment

This project is optimized for Vercel deployment:

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard or v0 Vars section
3. Supabase integration should already be connected
4. Deploy!

## Security Notes

- Supabase RLS policies protect product data
- Admin routes require authentication via middleware
- Payment credentials are properly secured
- All sensitive operations happen server-side
- Mock payment mode prevents accidental charges during testing

## Testing the Application

### Test the Shopping Flow:
1. Visit the home page and browse products
2. Click "Buy Now" on any product to view details
3. Add items to cart or buy immediately
4. Review cart and click checkout
5. Complete payment flow
6. View success/error pages

### Test Admin Panel:
1. Create a user in Supabase Auth
2. Login at `/auth/login`
3. Navigate to `/admin-deba`
4. Add, edit, and delete products
5. Verify changes appear on shop page

### Test Reviews:
1. Visit `/review`
2. Fill out product review form
3. Switch to website feedback tab
4. Submit both forms
5. Check Formspark dashboard for submissions

## Support

For issues or questions:
- Email: bringuouthere@gmail.com
- Live Chat: Available on all pages via Tawk.to

---

Built with Next.js 16, Supabase, Razorpay, and love 💜
