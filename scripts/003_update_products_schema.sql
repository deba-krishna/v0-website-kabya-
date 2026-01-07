-- Add new columns to products table for Product Detail Page
ALTER TABLE public.products
ADD COLUMN IF NOT EXISTS features JSONB DEFAULT '[]'::jsonb,
ADD COLUMN IF NOT EXISTS guarantee_text TEXT DEFAULT 'We guarantee 100% satisfaction or your money back within 7 days',
ADD COLUMN IF NOT EXISTS support_email TEXT DEFAULT 'bringuouthere@gmail.com',
ADD COLUMN IF NOT EXISTS validity_period TEXT DEFAULT '1 Year',
ADD COLUMN IF NOT EXISTS delivery_info TEXT DEFAULT 'Delivered within 12-24 hours to your registered email',
ADD COLUMN IF NOT EXISTS technical_details TEXT DEFAULT 'Fully responsive on mobile, tablet, and desktop. Optimized for all modern browsers.';

-- Create index for better performance
CREATE INDEX IF NOT EXISTS products_features_idx ON public.products USING GIN (features);

COMMENT ON COLUMN public.products.features IS 'Array of product features/highlights stored as JSON';
COMMENT ON COLUMN public.products.guarantee_text IS 'Money-back guarantee description';
COMMENT ON COLUMN public.products.support_email IS 'Customer support email address';
COMMENT ON COLUMN public.products.validity_period IS 'How long the product/website remains valid';
COMMENT ON COLUMN public.products.delivery_info IS 'Information about what customer receives';
COMMENT ON COLUMN public.products.technical_details IS 'Technical specifications and compatibility info';
