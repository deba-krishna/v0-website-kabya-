-- Seed products for all categories
-- This script adds sample products for each category to demonstrate the system

INSERT INTO public.products (name, price, category, description, image_url, features, guarantee_text, support_email, validity_period, delivery_info, technical_details)
VALUES
  -- Special
  ('Special Moments Website', 249, 'Special', 'Create a beautiful website for any special occasion', '/placeholder.svg?height=400&width=600', 
   '["Fully customizable design", "Unlimited photos & videos", "Music integration", "Premium animations"]', 
   '100% satisfaction guarantee or full refund within 48 hours', 'bringuouthere@gmail.com', 'Lifetime hosting included', 
   'Delivered within 12-24 hours via email', 'Responsive on mobile, tablet, and desktop'),

  -- Anniversary
  ('Anniversary Love Story', 299, 'Anniversary', 'Celebrate your love story with a stunning website', '/placeholder.svg?height=400&width=600', 
   '["Timeline of memories", "Photo gallery", "Love story narration", "Romantic animations"]', 
   '100% satisfaction guarantee or full refund within 48 hours', 'bringuouthere@gmail.com', 'Lifetime hosting included', 
   'Delivered within 12-24 hours via email', 'Responsive on mobile, tablet, and desktop'),

  ('First Anniversary Special', 249, 'Anniversary', 'Perfect for celebrating your first year together', '/placeholder.svg?height=400&width=600', 
   '["One year journey", "Couple photos", "Special messages", "Music player"]', 
   '100% satisfaction guarantee or full refund within 48 hours', 'bringuouthere@gmail.com', 'Lifetime hosting included', 
   'Delivered within 12-24 hours via email', 'Responsive on mobile, tablet, and desktop'),

  -- Sorry
  ('Heartfelt Apology', 199, 'Sorry', 'Express your sincere apology beautifully', '/placeholder.svg?height=400&width=600', 
   '["Personalized message", "Photo collage", "Music integration", "Heartfelt design"]', 
   '100% satisfaction guarantee or full refund within 48 hours', 'bringuouthere@gmail.com', 'Lifetime hosting included', 
   'Delivered within 12-24 hours via email', 'Responsive on mobile, tablet, and desktop'),

  ('I Am Sorry Website', 179, 'Sorry', 'Make amends with a touching website', '/placeholder.svg?height=400&width=600', 
   '["Custom apology letter", "Memory photos", "Soft animations", "Personal touch"]', 
   '100% satisfaction guarantee or full refund within 48 hours', 'bringuouthere@gmail.com', 'Lifetime hosting included', 
   'Delivered within 12-24 hours via email', 'Responsive on mobile, tablet, and desktop'),

  -- Birthday
  ('Birthday Celebration', 199, 'Birthday', 'Make their birthday unforgettable', '/placeholder.svg?height=400&width=600', 
   '["Animated wishes", "Photo gallery", "Birthday countdown", "Music & confetti"]', 
   '100% satisfaction guarantee or full refund within 48 hours', 'bringuouthere@gmail.com', 'Lifetime hosting included', 
   'Delivered within 12-24 hours via email', 'Responsive on mobile, tablet, and desktop'),

  ('Special Birthday Wish', 149, 'Birthday', 'Send personalized birthday wishes', '/placeholder.svg?height=400&width=600', 
   '["Custom birthday message", "Photo collage", "Confetti animation", "Birthday music"]', 
   '100% satisfaction guarantee or full refund within 48 hours', 'bringuouthere@gmail.com', 'Lifetime hosting included', 
   'Delivered within 12-24 hours via email', 'Responsive on mobile, tablet, and desktop'),

  -- Proposal
  ('Proposal Website', 349, 'Proposal', 'Pop the question in the most memorable way', '/placeholder.svg?height=400&width=600', 
   '["Will You Marry Me design", "Love story timeline", "Photo gallery", "Ring reveal animation"]', 
   '100% satisfaction guarantee or full refund within 48 hours', 'bringuouthere@gmail.com', 'Lifetime hosting included', 
   'Delivered within 12-24 hours via email', 'Responsive on mobile, tablet, and desktop'),

  ('Romantic Proposal', 329, 'Proposal', 'Create the perfect proposal moment', '/placeholder.svg?height=400&width=600', 
   '["Custom proposal message", "Couple photos", "Romantic music", "Special effects"]', 
   '100% satisfaction guarantee or full refund within 48 hours', 'bringuouthere@gmail.com', 'Lifetime hosting included', 
   'Delivered within 12-24 hours via email', 'Responsive on mobile, tablet, and desktop'),

  -- Friendship
  ('Best Friend Forever', 199, 'Friendship', 'Celebrate your friendship beautifully', '/placeholder.svg?height=400&width=600', 
   '["Friendship timeline", "Memory photos", "Inside jokes section", "Fun animations"]', 
   '100% satisfaction guarantee or full refund within 48 hours', 'bringuouthere@gmail.com', 'Lifetime hosting included', 
   'Delivered within 12-24 hours via email', 'Responsive on mobile, tablet, and desktop'),

  ('Friendship Day Special', 179, 'Friendship', 'Show your bestie how much they mean', '/placeholder.svg?height=400&width=600', 
   '["Custom friendship message", "Photo gallery", "Funny moments", "Music player"]', 
   '100% satisfaction guarantee or full refund within 48 hours', 'bringuouthere@gmail.com', 'Lifetime hosting included', 
   'Delivered within 12-24 hours via email', 'Responsive on mobile, tablet, and desktop'),

  -- Thank You
  ('Thank You Website', 149, 'Thank You', 'Express gratitude in a special way', '/placeholder.svg?height=400&width=600', 
   '["Personalized thank you note", "Photo memories", "Elegant design", "Soft animations"]', 
   '100% satisfaction guarantee or full refund within 48 hours', 'bringuouthere@gmail.com', 'Lifetime hosting included', 
   'Delivered within 12-24 hours via email', 'Responsive on mobile, tablet, and desktop'),

  ('Heartfelt Thanks', 129, 'Thank You', 'Show your appreciation beautifully', '/placeholder.svg?height=400&width=600', 
   '["Custom thank you message", "Gratitude photos", "Warm design", "Music integration"]', 
   '100% satisfaction guarantee or full refund within 48 hours', 'bringuouthere@gmail.com', 'Lifetime hosting included', 
   'Delivered within 12-24 hours via email', 'Responsive on mobile, tablet, and desktop'),

  -- Confession
  ('Love Confession', 199, 'Confession', 'Confess your feelings beautifully', '/placeholder.svg?height=400&width=600', 
   '["Personalized confession", "Romantic photos", "Heart animations", "Music integration"]', 
   '100% satisfaction guarantee or full refund within 48 hours', 'bringuouthere@gmail.com', 'Lifetime hosting included', 
   'Delivered within 12-24 hours via email', 'Responsive on mobile, tablet, and desktop'),

  ('Secret Admirer', 179, 'Confession', 'Reveal your feelings in style', '/placeholder.svg?height=400&width=600', 
   '["Anonymous confession option", "Photo reveal", "Romantic design", "Special effects"]', 
   '100% satisfaction guarantee or full refund within 48 hours', 'bringuouthere@gmail.com', 'Lifetime hosting included', 
   'Delivered within 12-24 hours via email', 'Responsive on mobile, tablet, and desktop'),

  -- Miss You
  ('Miss You Website', 179, 'Miss You', 'Tell them how much you miss them', '/placeholder.svg?height=400&width=600', 
   '["Heartfelt message", "Memory photos", "Emotional design", "Music integration"]', 
   '100% satisfaction guarantee or full refund within 48 hours', 'bringuouthere@gmail.com', 'Lifetime hosting included', 
   'Delivered within 12-24 hours via email', 'Responsive on mobile, tablet, and desktop'),

  ('Long Distance Love', 199, 'Miss You', 'Perfect for long distance relationships', '/placeholder.svg?height=400&width=600', 
   '["Custom miss you note", "Photo gallery", "Countdown timer", "Romantic animations"]', 
   '100% satisfaction guarantee or full refund within 48 hours', 'bringuouthere@gmail.com', 'Lifetime hosting included', 
   'Delivered within 12-24 hours via email', 'Responsive on mobile, tablet, and desktop');
