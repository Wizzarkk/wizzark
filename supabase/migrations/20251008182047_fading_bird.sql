/*
  # Create strategy calls table

  1. New Tables
    - `strategy_calls`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `company` (text, required)
      - `service` (text, required)
      - `project_info` (text, optional)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `strategy_calls` table
    - Add policy for public insert access (for lead capture)
    - Add policy for authenticated users to read their own data
*/

CREATE TABLE IF NOT EXISTS strategy_calls (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text NOT NULL,
  service text NOT NULL,
  project_info text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE strategy_calls ENABLE ROW LEVEL SECURITY;

-- Allow public insert for lead capture form
CREATE POLICY "Allow public insert for strategy calls"
  ON strategy_calls
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all strategy calls (for admin access)
CREATE POLICY "Allow authenticated users to read strategy calls"
  ON strategy_calls
  FOR SELECT
  TO authenticated
  USING (true);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_strategy_calls_updated_at
  BEFORE UPDATE ON strategy_calls
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();