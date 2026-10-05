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
 const paths=['lib/practice-faqs.ts','app/flat-fee-vs-hourly-probate-illinois/page.tsx','app/blog/what-happens-when-guardianship-is-contested-illinois/page.tsx','app/blog/adult-vs-minor-guardianship-illinois/page.tsx','app/chicago-probate-lawyer/page.tsx','app/probate/[slug]-county/page.tsx','app/[slug]-estate-planning-lawyer/page.tsx','app/flat-fee-vs-hourly-probate-illinois/layout.tsx','lib/blog-posts-data.ts'];
 for(const path of paths){const source=readFileSync(path,'utf8');expect(source).not.toMatch(/(?:billed|handled|converts? to) hourly|hourly (?:against|if contested|billing reserved)|not an honest promise|hours we actually work|contested probate not a flat fee|no honest fixed price|why it is not a flat fee|credited toward (?:that|the) retainer/i);}
});

it('renders every comparison-table cell consistently with defined-proceeding fixed fees', async()=>{
 const {default: ComparisonPage}=await import('@/app/flat-fee-vs-hourly-probate-illinois/page');
 const html=renderToStaticMarkup(<ComparisonPage/>);
 const table=html.match(/<table\b[^>]*>([\s\S]*?)<\/table>/)?.[1];
 expect(table).toBeTruthy();
 const rows=[...table!.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/g)].map(row=>
   [...row[1].matchAll(/<(?:th|td)\b[^>]*>([\s\S]*?)<\/(?:th|td)>/g)].map(cell=>
     cell[1].replace(/<[^>]*>/g,'').replace(/&nbsp;/g,' ').trim()));
 expect(rows).toEqual([
  ['', 'Flat fee (uncontested)', 'Fixed-fee litigation (contested)'],
  ['What you pay', '$5,000 standard estate; $5,000 + 0.5% for estates exceeding $4,000,000 due to estate-tax complexity; $1,000 small estate administration', '$50,000 standard will contest; other disputes use the approved service menu or an individual fixed quote'],
  ['Known in advance?', 'Base fee and percentage formula disclosed before engagement; percentage charged during administration only if estate value exceeds $4,000,000', 'Yes — complexity is screened and one exact fixed quote is approved upfront'],
  ['Court filing fees', 'Included in the fee', 'As stated in the signed scope; previously included expenses remain included'],
  ['Creditor publication', 'Included in the fee', 'As stated in the signed scope; previously included expenses remain included'],
  ['Recording fees', 'Included in the fee', 'As stated in the signed scope; previously included expenses remain included'],
  ['Paid separately', 'Surety bond premium only, if the court requires a bond', 'Only exclusions expressly stated in the signed scope; previously included expenses remain included'],
  ['Charged for phone calls?', 'No', 'No separate time-based charge for calls within the defined proceeding'],
  ['Who carries overrun risk', 'The firm', 'The firm within the defined proceeding; new work outside that scope requires a separately accepted fixed-fee addendum'],
 ]);
 expect(table).not.toMatch(/time is billed as worked|All costs —|>The client</);
});

it('generated real-estate price list includes catalog-priced FSBO and its existing closing terms', async()=>{
 const {REAL_ESTATE}=await import('@/lib/pricing');
 execFileSync(process.execPath,['scripts/build-pricing-sheet.mjs']);
 const html=readFileSync('public/pricing-sheet.html','utf8');
 const section=html.split('<div class="section-title">Real Estate</div>')[1]?.split('</table>')[0];
 expect(section).toBeTruthy();
 const rows=[...section!.matchAll(/<tr\b[^>]*>[\s\S]*?<\/tr>/g)].map(match=>match[0]);
 const fsbo=rows.find(row=>row.includes('For Sale By Owner (FSBO) Representation'));
 expect(REAL_ESTATE.fsboRepresentation).toBe(1500);
 expect(fsbo).toContain(`<td class="price">$${REAL_ESTATE.fsboRepresentation.toLocaleString('en-US')}</td>`);
 expect(fsbo).toContain('paid at closing out of sale proceeds, not in advance');
 expect(fsbo).toContain('Does not include closing costs');
 expect(fsbo).toContain('coordination normally handled by the agent');
 for(const name of ['Residential Closing (Buyer or Seller)','Multi-Unit or Investment Closing','Estate, Trust, or Nonstandard Title Closing'])expect(section).toContain(name);
 expect(rows.filter(row=>row.includes('FSBO'))).toHaveLength(1);
});

it('rendered contested-probate cost card preserves agreed included expenses without promising blanket cost coverage', async()=>{
 const {default: ProbatePage}=await import('@/app/chicago-probate-lawyer/page');
 const html=renderToStaticMarkup(<ProbatePage/>);
 expect(html).not.toContain('are billed to you as expenses');
 expect(html).not.toContain('You receive an itemized bill');
 expect(html).toContain('Previously included expenses remain included.');
 expect(html).toContain('costs are charged separately only where disclosed and expressly agreed in that scope.');
});

it('public GAL FAQ does not automatically pass all contested expenses through to the client', async()=>{
 const {guardianshipFAQs}=await import('@/lib/practice-faqs');
 const answer=guardianshipFAQs.find(row=>row.question==='What is a guardian ad litem and do I have to pay for one?')!.answer;
 expect(answer).toContain('In uncontested matters it is an identified third-party exclusion');
 expect(answer).toContain('only where disclosed and expressly agreed in the written scope');
 expect(answer).toContain('previously included expenses remain included');
 expect(answer).not.toContain('always disclosed to you and billed separately');
});

it('renders catalog-derived restatement prices separately from approved guardianship variants', async()=>{
 const {A_LA_CARTE}=await import('@/lib/pricing');
 execFileSync(process.execPath,['scripts/build-pricing-sheet.mjs']);
 const html=readFileSync('public/pricing-sheet.html','utf8');
 const rows=[...html.matchAll(/<tr\b[^>]*>[\s\S]*?<\/tr>/g)].map(match=>match[0]);
 const exactServiceRow=(name:string)=>rows.filter(row=>row.includes(`<div class="service-name">${name}</div>`));
 const restatement=exactServiceRow('Trust Restatement');
 expect(restatement).toHaveLength(1);
 expect([A_LA_CARTE.trustRestatementIndividual,A_LA_CARTE.trustRestatementJoint]).toEqual([2000,3000]);
 expect([...restatement[0].matchAll(/<td class="price">([^<]+)<\/td>/g)].map(match=>match[1])).toEqual([
  `$${A_LA_CARTE.trustRestatementIndividual.toLocaleString('en-US')}`,
  `$${A_LA_CARTE.trustRestatementJoint.toLocaleString('en-US')}`,
 ]);
 const guardianship=exactServiceRow('Guardianship Termination / Restoration of Rights');
 expect(guardianship).toHaveLength(1);
 expect(guardianship[0]).toContain('<td class="price">$2,500</td>');
 const variant=rows.find(row=>row.includes('<td>Guardianship modification, restoration or termination</td>'));
 expect(variant).toContain('$2,500 uncontested / $12,500 contested');
 expect(restatement[0]).not.toContain('$2,500');
 expect(restatement[0]).not.toContain('$12,500');
});

it('all rendered county guardianship pages and FAQ schemas qualify bond/GAL exclusions by the agreed scope', async()=>{
 const {default: CountyPage}=await import('@/app/guardianship/[slug]/page');
 const {guardianshipCounties}=await import('@/lib/guardianship-counties');
 expect(guardianshipCounties).toHaveLength(6);
 for(const county of guardianshipCounties){
  const html=renderToStaticMarkup(<CountyPage params={{slug:`${county.slug}-county`}}/>);
  const main=html.match(/<main>([\s\S]*?)<\/main>/)![1];
  expect(main).toContain('$25,000 standard fixed fee');
  expect(main).toContain('Court filing fees are included in the uncontested packages.');
  expect(main).toContain('remain separate only where identified as exclusions in the written engagement.');
  expect(main).toContain('separate charges require disclosure and express agreement.');
  expect(main).toContain('Previously included expenses remain included.');
  expect(main).not.toContain('included in the flat-fee packages; bond premiums');
  expect(main).not.toContain('it is not part of our flat fee');
  const schemas=[...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match=>JSON.parse(match[1]));
  const faq=schemas.find(schema=>schema['@type']==='FAQPage');
  const cost=faq.mainEntity.find((row:any)=>row.name.startsWith('How much does a guardianship attorney cost'));
  expect(cost.acceptedAnswer.text).toContain('remain separate only where identified as exclusions in the written engagement.');
  expect(cost.acceptedAnswer.text).toContain('For a defined contested proceeding, the agreed scope identifies included and separately payable expenses');
  expect(cost.acceptedAnswer.text).toContain('Previously included expenses remain included.');
 }
});

it('machine-readable public policy regenerates all approved fees and scope without stale hourly or emergency terms',()=>{
 const before=readFileSync('public/llms.txt','utf8');
 execFileSync(process.execPath,['scripts/build-pricing-sheet.mjs']);
 const text=readFileSync('public/llms.txt','utf8');
 expect(text).toBe(before);
 for(const item of policy.fee_items){
  const amount='variants' in item && item.variants ? '$2,500 uncontested / $12,500 contested' : item.amount==null ? 'Individually quoted fixed fee' : `$${item.amount.toLocaleString('en-US')}${'unit' in item && item.unit ? ` ${item.unit}` : ''}`;
  expect(text).toContain(`- ${item.label}: ${amount}`);
 }
 for(const key of ['routine_scope','litigation_scope','additional_scope','supervision_scope','refund_scope','legacy_scope'] as const)expect(text).toContain(policy[key]);
 expect(text).toContain('**$5,000 add-on**, for a concrete **$10,000** emergency-and-full-case total');
 expect(text).toContain('separate charges require disclosure and express agreement');
 expect(text).not.toMatch(/billed hourly against a retainer|which is replenished|no honest fixed price|converts to hourly against|\$7,500|\$2,500 add-on|\{\{[A-Z_]+\}\}/i);
});

it('adult guardianship description, OpenGraph, Twitter and service schema share the catalog-derived emergency total', async()=>{
 const {default: Layout,metadata}=await import('@/app/adult-guardianship-lawyer/layout');
 const expected=`Illinois adult guardianship lawyer for dementia, disability, stroke, and emergencies. $${GUARDIANSHIP_FLAT.adultUncontested.toLocaleString('en-US')} standard flat fee; $${(GUARDIANSHIP_FLAT.adultUncontested+GUARDIANSHIP_FLAT.emergencyTemporaryAddOn).toLocaleString('en-US')} with temporary guardianship.`;
 expect(expected).toContain('$10,000 with temporary guardianship');
 expect(metadata.description).toBe(expected);
 expect(metadata.openGraph?.description).toBe(expected);
 expect(metadata.twitter?.description).toBe(expected);
 const html=renderToStaticMarkup(<Layout><div>Fixture child</div></Layout>);
 const schemas=[...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)].map(match=>JSON.parse(match[1]));
 const service=schemas.find(schema=>schema.description===expected);
 expect(service).toBeTruthy();
 expect(html).not.toContain('$7,500');
});

it('printable Bond in Lieu belongs only to Real Estate with its exact existing price and scope',()=>{
 const html=readFileSync('public/pricing-sheet.html','utf8');
 const realEstate=html.split('<div class="section-title">Real Estate</div>')[1].split('</table>')[0];
 const probate=html.split('<div class="section-title">Probate</div>')[1]?.split('</table>')[0];
 const rows=[...realEstate.matchAll(/<tr\b[^>]*>[\s\S]*?<\/tr>/g)].map(match=>match[0]);
 const bond=rows.find(row=>row.includes('<div class="service-name">Bond in Lieu of Probate</div>'));
 expect(bond).toContain('<td class="price">$1,500</td>');
 expect(bond).toContain('When the sole estate asset is real estate and all heirs agree. Includes title-transfer documentation, title-company coordination, and attorney consultations related to the included scope. Surety bond premium paid directly to bond provider.');
 expect(probate).toBeDefined();
 expect(probate).not.toContain('Bond in Lieu');
 expect(html.match(/<div class="service-name">Bond in Lieu of Probate<\/div>/g)).toHaveLength(1);
});

it('public text assets do not restore the removed prospective hourly-conversion claims', async()=>{
 const {readdirSync}=await import('node:fs');
 const paths:string[]=[];
 const visit=(dir:string)=>{for(const entry of readdirSync(dir,{withFileTypes:true})){const path=`${dir}/${entry.name}`;if(entry.isDirectory())visit(path);else if(/\.(?:txt|html|xml|json|md|csv)$/.test(path))paths.push(path);}};
 visit('public');
 expect(paths).toContain('public/llms.txt');expect(paths).toContain('public/blog/posts.json');
 for(const path of paths)expect(readFileSync(path,'utf8'),path).not.toMatch(/billed hourly against a retainer|a matter converts to hourly|no honest fixed price can be quoted|Costs and expenses are billable to the client in these matters|time is billed as worked/i);
});
