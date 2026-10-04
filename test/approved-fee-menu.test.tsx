import React from 'react';
import {describe,it,expect} from 'vitest';
import {renderToStaticMarkup} from 'react-dom/server';
import {execFileSync} from 'node:child_process';
import {GUARDIANSHIP_FLAT} from '@/lib/pricing';
import {readFileSync} from 'node:fs';
import ApprovedFeeMenu from '@/components/services/ApprovedFeeMenu';
import {approvedAdditionalServices} from '@/lib/services-data';
import policy from '@/lib/fee-scope-policy.json';
import StartOnlinePage from '@/app/start-online/page';

describe('Mary-approved prospective fee menu',()=>{
 it('renders all 21 exact fees with quantities, variants and no automatic acceptance',()=>{
  const html=renderToStaticMarkup(<ApprovedFeeMenu/>);
  expect(policy.fee_items).toHaveLength(21);
  for(const item of policy.fee_items){expect(html).toContain(`service=fee-${item.id}`);}
  for(const text of ['$750 per recipient','$3,500 per respondent','$50,000','$25,000','$2,500 uncontested / $12,500 contested','Individually quoted fixed fee','does not automatically retain'])expect(html).toContain(text);
  expect(html).toContain('without stacking those charges');expect(html).toContain('Existing signed engagements');
 });
 it('every menu selection goes through attorney review rather than a payment session',()=>{
  for(const service of approvedAdditionalServices){
   expect(service.requiresConsultation).toBe(true);
   const html=renderToStaticMarkup(<StartOnlinePage searchParams={{service:service.id}}/>);
   expect(html).toContain('requires an attorney review');
   expect(html).not.toContain('stripe.com');
   expect(html).toContain(service.pricingLabel);
  }
 });
 it('generated public pricing sheet contains the complete approved menu and scope protections',()=>{
  const before=readFileSync('public/pricing-sheet.html','utf8');
  execFileSync(process.execPath,['scripts/build-pricing-sheet.mjs']);
  const html=readFileSync('public/pricing-sheet.html','utf8');
  expect(html).toBe(before);
  expect(GUARDIANSHIP_FLAT.emergencyTemporaryAddOn).toBe(5000);
  expect(html).toMatch(/Extraordinary Guardianship Petition[\s\S]*?price">\$3,500/);
  expect(html).toMatch(/Guardianship Termination \/ Restoration of Rights[\s\S]*?price">\$2,500/);
  expect(html).toContain('$10,000<span class="price-note">$5,000 full case + $5,000 emergency add-on');
  for(const item of policy.fee_items)expect(html).toContain(item.label.replaceAll('&','&amp;'));
  expect(html).not.toContain('retainer + hourly');
  expect(html).toContain('without stacking those charges');expect(html).toContain('mandatory reasonableness');
 });
});

// Covers visible copy as well as FAQ/schema and metadata source strings.
it('prospective articles and location FAQs do not promise hourly conversion',()=>{
 const paths=['app/blog/what-happens-when-guardianship-is-contested-illinois/page.tsx','app/blog/adult-vs-minor-guardianship-illinois/page.tsx','app/chicago-probate-lawyer/page.tsx','app/probate/[slug]-county/page.tsx','app/[slug]-estate-planning-lawyer/page.tsx','app/flat-fee-vs-hourly-probate-illinois/layout.tsx','lib/blog-posts-data.ts'];
 for(const path of paths){const source=readFileSync(path,'utf8');expect(source).not.toMatch(/(?:billed|handled|converts? to) hourly|hourly (?:against|if contested|billing reserved)|no honest fixed price|why it is not a flat fee|credited toward (?:that|the) retainer/i);}
});
