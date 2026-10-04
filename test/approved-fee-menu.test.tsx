import React from 'react';
import {describe,it,expect} from 'vitest';
import {renderToStaticMarkup} from 'react-dom/server';
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
  const html=readFileSync('public/pricing-sheet.html','utf8');
  for(const item of policy.fee_items)expect(html).toContain(item.label.replaceAll('&','&amp;'));
  expect(html).not.toContain('retainer + hourly');
  expect(html).toContain('without stacking those charges');expect(html).toContain('mandatory reasonableness');
 });
});
