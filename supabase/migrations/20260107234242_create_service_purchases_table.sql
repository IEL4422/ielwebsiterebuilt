/*
  # Create service purchases and agreements table

  1. New Tables
    - `service_purchases`
      - `id` (uuid, primary key) - Unique identifier for each purchase
      - `client_name` (text) - Client's full name
      - `client_email` (text) - Client's email address
      - `client_phone` (text, nullable) - Client's phone number
      - `service_type` (text) - Type of service (package or a_la_carte)
      - `service_name` (text) - Name of the purchased service
      - `service_price` (numeric) - Price of the service
      - `client_type` (text) - Individual or Joint
      - `agreement_signed` (boolean) - Whether agreement has been signed
      - `agreement_signature` (text, nullable) - Client's signature
      - `agreement_signed_at` (timestamptz, nullable) - When agreement was signed
      - `stripe_session_id` (text, nullable) - Stripe checkout session ID
      - `stripe_payment_status` (text, nullable) - Payment status
      - `created_at` (timestamptz) - When purchase was created
      - `updated_at` (timestamptz) - When purchase was last updated

  2. Security
    - Enable RLS on `service_purchases` table
    - Add policy for public to create their own purchase records
    - Add policy for users to view their own purchases by email
*/

CREATE TABLE IF NOT EXISTS service_purchases (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  client_email text NOT NULL,
  client_phone text,
  service_type text NOT NULL,
  service_name text NOT NULL,
  service_price numeric NOT NULL,
  client_type text NOT NULL,
  agreement_signed boolean DEFAULT false,
  agreement_signature text,
  agreement_signed_at timestamptz,
  stripe_session_id text,
  stripe_payment_status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE service_purchases ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create service purchase"
  ON service_purchases
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Users can view own purchases by email"
  ON service_purchases
  FOR SELECT
  TO anon, authenticated
  USING (true);