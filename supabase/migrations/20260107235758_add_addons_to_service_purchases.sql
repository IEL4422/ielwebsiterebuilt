/*
  # Add add_ons column to service_purchases table

  1. Changes
    - Add `add_ons` (text, nullable) column to `service_purchases` table
      - Stores comma-separated list of selected add-on services
      - NULL if no add-ons selected
  
  2. Notes
    - This is a backward-compatible change
    - Existing records will have NULL for add_ons
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'service_purchases' AND column_name = 'add_ons'
  ) THEN
    ALTER TABLE service_purchases ADD COLUMN add_ons text;
  END IF;
END $$;
