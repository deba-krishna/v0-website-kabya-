-- Create products table for Deba eCommerce
CREATE TABLE IF NOT EXISTS public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  price INTEGER NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('Love', 'Sorry', 'Birthday', 'Anniversary')),
  description TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read products (public access)
CREATE POLICY "Allow public read access to products"
  ON public.products
  FOR SELECT
  USING (true);

-- Only allow authenticated users to insert products
CREATE POLICY "Allow authenticated users to insert products"
  ON public.products
  FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

-- Only allow authenticated users to update products
CREATE POLICY "Allow authenticated users to update products"
  ON public.products
  FOR UPDATE
  USING (auth.uid() IS NOT NULL);

-- Only allow authenticated users to delete products
CREATE POLICY "Allow authenticated users to delete products"
  ON public.products
  FOR DELETE
  USING (auth.uid() IS NOT NULL);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS products_category_idx ON public.products(category);
CREATE INDEX IF NOT EXISTS products_created_at_idx ON public.products(created_at DESC);
