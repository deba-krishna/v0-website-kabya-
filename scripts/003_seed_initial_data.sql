-- Insert sample categories
INSERT INTO categories (name, slug, description) VALUES
  ('Special', 'special', 'Special moments deserve special memories'),
  ('Anniversary', 'anniversary', 'Celebrate your journey together'),
  ('Sorry', 'sorry', 'Express your apologies sincerely'),
  ('Birthday', 'birthday', 'Make their day unforgettable'),
  ('Proposal', 'proposal', 'Pop the question in style'),
  ('Friendship', 'friendship', 'Celebrate your amazing friendship'),
  ('Thank You', 'thank-you', 'Show gratitude beautifully'),
  ('Confession', 'confession', 'Express your true feelings'),
  ('Miss You', 'miss-you', 'Let them know you miss them')
ON CONFLICT (slug) DO NOTHING;
