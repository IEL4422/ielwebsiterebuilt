import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Scale, FileText, Users, UserCheck, HeartHandshake, ClipboardCheck } from 'lucide-react';
import { guardianshipCounties, getGuardianshipCounty } from '@/lib/guardianship-counties';
import { GUARDIANSHIP_FLAT, GUARDIANSHIP_COMPLIANCE, RETAINERS, usd, retainerLabel } from '@/lib/pricing';
import { BOOKING_GUARDIANSHIP } from '@/lib/booking';
import { LocationHero } from '@/components/geo/LocationHero';
import { ServiceCard } from '@/components/geo/ServiceCard';
import { FAQAccordion } from '@/components/geo/FAQAccordion';
import { CTABanner } from '@/components/geo/CTABanner';
import { CourthouseCard } from '@/components/geo/CourthouseCard';

export async function generateStaticParams() {
  return guardianshipCounties.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const loc = getGuardianshipCounty(params.slug);
  if (!loc) return { title: 'Not Found' };
  const title = `${loc.county} Guardianship Attorney | Adult & Minor Guardianship`;
  const description = `Guardianship attorney serving ${loc.county}, Illinois — adult and minor guardianship, contested and uncontested. Filed at ${loc.courthouseName} in ${loc.seat}. Free consultation.`;
  const url = `https://www.illinoisestatelaw.com/guardianship/${loc.slug}-county/`;
  return {
    title, description,
    alternates: { canonical: url },
    openGraph: { title: `${title} | Illinois Estate Law`, description, url, siteName: 'Illinois Estate Law', locale: 'en_US', type: 'website' },
    twitter: { card: 'summary', title: `${title} | Illinois Estate Law`, description },
  };
}

const services = [
  { icon: Users, title: 'Minor Guardianship', description: 'For a grandparent, relative, or family friend seeking guardianship of a child under 18. Uncontested is a flat fee; if a parent objects it converts to hourly.' },
  { icon: HeartHandshake, title: 'Adult Guardianship of the Person & Estate', description: 'Authority over care, medical decisions, money, and property for an adult who can no longer decide — dementia, developmental disability, or catastrophic injury.' },
  { icon: Scale, title: 'Contested Guardianship', description: 'When the respondent objects, a sibling files a competing petition, or an existing guardian faces removal. Litigation, billed hourly against a retainer.' },
  { icon: ClipboardCheck, title: 'Annual Compliance', description: 'Illinois guardians must report to the court every year. We prepare and file the annual report on the ward and the estate accounting, on the court’s schedule.' },
  { icon: UserCheck, title: 'Guardian ad Litem Coordination', description: 'Cook County appoints a GAL in every estate guardianship. We coordinate with the GAL and respond to the GAL report.' },
  { icon: FileText, title: 'Interim Petitions & Termination', description: 'Sale of the ward’s real estate, extraordinary expenditures, change of placement, and petitions to end a guardianship and restore rights.' },
];

function faqs(county: string, court: string) {
  return [
    { question: `How much does a guardianship attorney cost in ${county}?`, answer: `For an uncontested minor guardianship, Illinois Estate Law charges a flat ${usd(GUARDIANSHIP_FLAT.minorUncontested)}, all-inclusive of court costs. Adult guardianship of the person and estate is billed hourly against a ${usd(RETAINERS.adultGuardianshipUncontested)} retainer, because even an uncontested adult guardianship involves a physician’s report, personal service on the respondent, and a court-appointed guardian ad litem — work whose scope we do not fully control. Any contested guardianship is billed hourly against a ${usd(RETAINERS.contestedGuardianship)} retainer. The guardian ad litem fee is a court-set cost billed to the client in the hourly matters.` },
    { question: `Where are guardianship cases heard in ${county}?`, answer: `Guardianship cases in ${county} are heard at the ${court} in ${'${loc.seat}'}. We appear remotely wherever the county permits.` },
    { question: 'What is the difference between guardianship of the person and of the estate?', answer: 'Guardianship of the person is authority over care, residence, and medical decisions. Guardianship of the estate is authority over money and property. Many adult guardianships involve both. Guardianship of the estate carries a duty to account to the court, and the guardian bears the burden of proving every disbursement was proper (755 ILCS 5/24-11).' },
    { question: 'Do I have to go to court in person?', answer: 'Usually not. Illinois probate courts conduct guardianship hearings by remote video appearance, and Illinois Estate Law handles matters virtually. Personal service on the respondent in an adult guardianship still requires a sheriff or special process server.' },
    { question: 'What are a guardian’s ongoing duties after appointment?', answer: 'A guardian of the person must file an annual report on the ward (755 ILCS 5/11a-17(b)). A guardian of the estate must file an accounting within 30 days of the one-year anniversary of appointment, and thereafter every three years unless the court orders otherwise. These duties last for the life of the guardianship, and the client cannot skip them — the court requires the filing.' },
  ];
}

export default function CountyGuardianshipPage({ params }: { params: { slug: string } }) {
  const loc = getGuardianshipCounty(params.slug);
  if (!loc) notFound();
  const court = loc.courthouseName;
  const countyFaqs = faqs(loc.county, court).map((f) => ({ ...f, answer: f.answer.replace('${loc.seat}', loc.seat) }));

  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: countyFaqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) };
  const legalServiceSchema = {
    '@context': 'https://schema.org', '@type': 'LegalService',
    name: `${loc.county} Guardianship Services - Illinois Estate Law`,
    description: `Adult and minor guardianship, contested and uncontested, in ${loc.county}, Illinois`,
    url: `https://www.illinoisestatelaw.com/guardianship/${loc.slug}-county/`,
    telephone: '+1-312-373-0731',
    areaServed: { '@type': 'AdministrativeArea', name: `${loc.county}, Illinois` },
    serviceType: ['Adult Guardianship', 'Minor Guardianship', 'Contested Guardianship'],
    provider: { '@type': 'LegalService', name: 'Illinois Estate Law', telephone: '(312) 373-0731', address: { '@type': 'PostalAddress', streetAddress: '4422 N. Ravenswood Ave, Ste 212', addressLocality: 'Chicago', addressRegion: 'IL', postalCode: '60640', addressCountry: 'US' } },
  };
  const breadcrumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.illinoisestatelaw.com/' },
    { '@type': 'ListItem', position: 2, name: 'Guardianship', item: 'https://www.illinoisestatelaw.com/guardianship/' },
    { '@type': 'ListItem', position: 3, name: `${loc.county} Guardianship`, item: `https://www.illinoisestatelaw.com/guardianship/${loc.slug}-county/` },
  ] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <main>
        <LocationHero title={`${loc.county} Guardianship Attorney`} subtitle={`Adult and minor guardianship, contested and uncontested, in ${loc.county}, Illinois`} />
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4"><div className="max-w-[1140px] mx-auto">
            <h2 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-bold text-[#33414E] mb-6">Guardianship Attorney Serving {loc.county}</h2>
            <div className="w-16 h-1 bg-[#4A708B] mb-8" />
            <div className="space-y-4 text-slate-600 leading-relaxed max-w-4xl">
              <p>{loc.localNote}</p>
              <p>Illinois Estate Law handles all four kinds of guardianship in {loc.county}: <strong>uncontested minor guardianship</strong> (a flat {usd(GUARDIANSHIP_FLAT.minorUncontested)}), <strong>adult guardianship of the person and estate</strong> ({retainerLabel(RETAINERS.adultGuardianshipUncontested)}), and <strong>contested guardianship</strong> of either an adult or a minor ({retainerLabel(RETAINERS.contestedGuardianship)}). We also carry the ongoing annual compliance work every guardianship requires.</p>
              <p>{loc.divisionNote}</p>
            </div>
          </div></div>
        </section>
        <section className="py-16 lg:py-20 bg-[#f8f9fa]">
          <div className="container mx-auto px-4"><div className="max-w-[1140px] mx-auto">
            <h2 className="font-['Plus_Jakarta_Sans'] text-2xl md:text-3xl font-bold text-[#33414E] mb-10 text-center">Guardianship Services in {loc.county}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{services.map((s) => (<ServiceCard key={s.title} icon={s.icon} title={s.title} description={s.description} />))}</div>
          </div></div>
        </section>
        <CourthouseCard county={loc.county} address={loc.courthouseAddress} phone={loc.courthousePhone} filingSystems={loc.divisionNote} />
        <section className="py-12 bg-white"><div className="container mx-auto px-4"><div className="max-w-[1140px] mx-auto">
          <h2 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#33414E] mb-6">Guardianship in nearby counties</h2>
          <div className="flex flex-wrap gap-3">
            {guardianshipCounties.filter((c) => c.slug !== loc.slug).map((c) => (<Link key={c.slug} href={`/guardianship/${c.slug}-county/`} className="text-[#4A708B] underline underline-offset-4 hover:text-[#33414E]">{c.county}</Link>))}
            <span className="text-slate-300">|</span>
            <Link href="/guardianship/#adult" className="text-[#4A708B] underline underline-offset-4 hover:text-[#33414E]">Adult guardianship</Link>
            <span className="text-slate-300">|</span>
            <Link href="/guardianship/#minor" className="text-[#4A708B] underline underline-offset-4 hover:text-[#33414E]">Minor guardianship</Link>
          </div>
        </div></div></section>
        <CTABanner title={`Guardianship help in ${loc.county}`} subtitle="Adult or minor, contested or uncontested — schedule a consultation and we’ll tell you exactly what your matter needs." bookingUrl={BOOKING_GUARDIANSHIP} ctaLabel="Schedule a Guardianship Consultation" />
        <FAQAccordion title={`Guardianship FAQs — ${loc.county}`} items={countyFaqs} />
      </main>
    </>
  );
}
