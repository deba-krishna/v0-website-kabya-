-- Update products table to support expanded categories
ALTER TABLE public.products DROP CONSTRAINT IF EXISTS products_category_check;

-- Add new constraint with all categories
ALTER TABLE public.products 
ADD CONSTRAINT products_category_check 
CHECK (category IN ('Special', 'Anniversary', 'Sorry', 'Birthday', 'Proposal', 'Friendship', 'Thank You', 'Confession', 'Miss You'));

-- Update existing products to ensure they match new categories
-- (You may need to manually update existing products to match the new categories)
