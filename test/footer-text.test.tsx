import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import path from 'node:path';

// The footer shows on every page. Its source once held text that had been
// decoded twice, so visitors saw "Copyright Â©" and "STATE.â" in the
// disclaimer. Keep the file free of those garbled sequences.
describe('footer text', () => {
  const source = readFileSync(path.resolve(__dirname, '../components/layout/Footer.tsx'), 'utf-8');

  it('shows a plain copyright sign', () => {
    expect(source).toContain('Copyright © {currentYear} Illinois Estate Law Firm');
    expect(source).not.toContain('Â');
  });

  it('has no double-decoded characters or hidden zero-width spaces', () => {
    expect(source).not.toMatch(/â[\u0080-¿]/);
    expect(source).not.toMatch(/[ÂÃ][\u0080-¿]/);
    expect(source).not.toContain('​');
    expect(source).toContain('ATTORNEY LICENSED IN YOUR STATE. By contacting us');
  });
});
