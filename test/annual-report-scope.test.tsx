import React from 'react';
import {describe, it, expect} from 'vitest';
import {renderToStaticMarkup} from 'react-dom/server';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {allServices} from '@/lib/services-data';
import {GUARDIANSHIP_COMPLIANCE} from '@/lib/pricing';
import {guardianshipFAQs} from '@/lib/practice-faqs';
import StartOnlinePage from '@/app/start-online/page';

describe('prospective personal annual report scope', () => {
 it('selects the existing personal-report service, never the historical accounting bundle', () => {
  const service = allServices.find(row => row.id === 'annual-report-ward')!;
  expect(service.standardizedServiceName).toBe('Annual Report on the Ward');
  expect(service.fixedPrice).toBe(750);
  expect(service.requiresConsultation).toBe(true);
  expect(service.includes).toEqual(['Preparation of the personal annual report on the ward', 'Filing the personal annual report on the court schedule']);
  expect(allServices.some(row => row.id === 'annual-guardianship-compliance')).toBe(false);
  const html = renderToStaticMarkup(<StartOnlinePage searchParams={{service: service.id}}/>);
  expect(html).toContain('$750 / year');
  expect(html).toContain('Estate accounting is not included');
  expect(html).toContain('requires an attorney review');
  expect(html).not.toContain('$3,000');
  const recommendation = readFileSync('app/recommended-service/page.tsx', 'utf8');
  expect(recommendation).toContain("serviceId: 'annual-report-ward'");
  expect(recommendation).not.toContain("serviceId: 'annual-guardianship-compliance'");
 });
 it('renders the public cards, summary and FAQ schema with the personal-only scope', async () => {
  const {ServicesPricingModern} = await import('@/components/services/ServicesPricingModern');
  const {default: GuardianshipPage} = await import('@/app/guardianship/page');
  const {default: GuardianshipLayout} = await import('@/app/guardianship/layout');
  const pricing = renderToStaticMarkup(<ServicesPricingModern/>);
  const guardian = renderToStaticMarkup(<GuardianshipLayout><GuardianshipPage/></GuardianshipLayout>);
  for (const html of [pricing, guardian]) {
   expect(html).toContain('$750');
   expect(html).not.toMatch(/Guardianship Compliance Plan|\$3,000(?:<!--.*?-->)* \/ (?:yr|year)/);
  }
  expect(pricing).toContain('Personal annual report preparation and filing. Estate accounting is not included in this fee.');
  const schemas = [...guardian.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
  const faq = schemas.find(schema => schema['@type'] === 'FAQPage');
  const duties = faq.mainEntity.find((row: any) => row.name === 'What is a guardian’s ongoing duties after appointment?' || row.name === 'What are a guardian’s ongoing duties after appointment?');
  expect(duties.acceptedAnswer.text).toContain('$750 each year it is filed');
  expect(duties.acceptedAnswer.text).toContain('This fee does not include estate accounting');
 });
 it('removes bundle advertising from all public sources and the generated pricing sheet', () => {
  const paths = ['app/guardianship/page.tsx', 'app/guardianship/[slug]/page.tsx', 'app/recommended-service/page.tsx', 'components/services/ServicesPricingModern.tsx', 'lib/services-data.ts', 'lib/practice-faqs.ts', 'scripts/pricing-sheet.template.html', 'scripts/build-pricing-sheet.mjs', 'public/pricing-sheet.html'];
  for (const path of paths) {
   const source = readFileSync(path, 'utf8');
   expect(source, path).not.toMatch(/compliancePlanBundled|annualAccountingEstate|Guardianship Compliance Plan|Annual estate accounting support|Annual report and estate-accounting support/);
  }
  const html = readFileSync('public/pricing-sheet.html', 'utf8');
  expect(html).toMatch(/Annual Report on the Ward \(Personal\)[\s\S]*?price">\$750 \/ year/);
  expect(html).toContain('Estate accounting is not included');
 });
 it('keeps reporting duties and existing engagements intact in shared FAQ/schema content', () => {
  const answer = guardianshipFAQs.find(row => row.question === 'What are a guardian’s ongoing duties after appointment?')!.answer;
  expect(answer).toContain('$750 each year it is filed');
  expect(answer).toContain('guardian of the estate must file an accounting');
  expect(answer).toContain('This fee does not include estate accounting');
  expect(answer).toContain('only additional firm fee for ordinary uncontested guardianship');
  expect(answer).toContain('Existing signed engagements are honored');
 });
 it('does not change historical price constants or the already-approved PDF bytes', () => {
  expect(GUARDIANSHIP_COMPLIANCE).toMatchObject({annualReportPerson:750, annualAccountingEstate:2500, compliancePlanBundled:3000});
  const pdf = readFileSync('public/downloads/probate-guardianship-additional-flat-fees-2026-10-05.pdf');
  expect(createHash('sha256').update(pdf).digest('hex')).toBe('50724dfe45ce03f88ade313d42ad6666c27eb16b18f5087b1175cc944ba9d5c4');
 });
});
