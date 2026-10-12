import { Metadata } from 'next';
import Link from 'next/link';
import { Building2, CheckCircle2, MapPin, Scale } from 'lucide-react';
import { InnerPageHero } from '@/components/layout/InnerPageHero';
import { CTABand } from '@/components/ui/CTAButtons';
import { cityLocations } from '@/lib/locations-data';
import { guardianshipCounties } from '@/lib/guardianship-counties';

const canonical = 'https://www.illinoisestatelaw.com/areas-we-serve/';

export const metadata: Metadata = {
  title: 'Illinois Estate Planning Service Areas | Cities & Counties',
  description: 'Explore Illinois Estate Law service areas for virtual estate planning and county-specific probate and guardianship representation across Illinois.',
  alternates: { canonical },
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    url: canonical,
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'website',
    title: 'Illinois Estate Planning Service Areas | Cities & Counties',
    description: 'Find local estate-planning information and county-specific probate and guardianship resources from Illinois Estate Law.',
  },
  twitter: {
    card: 'summary',
    title: 'Illinois Estate Planning Service Areas | Cities & Counties',
    description: 'Local estate-planning information and county-specific probate and guardianship resources across Illinois.',
  },
};

const cityItems = cityLocations.map((location, index) => ({
  '@type': 'ListItem',
  position: index + 1,
  name: `${location.city} Estate Planning Lawyer`,
  url: `https://www.illinoisestatelaw.com/${location.slug}-estate-planning-lawyer/`,
}));

const countyItems = guardianshipCounties.map((location, index) => ({
  '@type': 'ListItem',
  position: index + 1,
  name: `${location.county} Probate and Guardianship`,
  url: `https://www.illinoisestatelaw.com/probate/${location.slug}-county/`,
}));

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Illinois Estate Law Service Areas',
  url: canonical,
  dateModified: '2026-10-12',
  mainEntity: [
    { '@type': 'ItemList', name: 'Illinois city estate-planning guides', itemListElement: cityItems },
    { '@type': 'ItemList', name: 'Illinois county court guides', itemListElement: countyItems },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.illinoisestatelaw.com/' },
    { '@type': 'ListItem', position: 2, name: 'Areas We Serve', item: canonical },
  ],
};

export default function AreasWeServePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main>
        <InnerPageHero
          title="Estate Planning, Probate & Guardianship Across Illinois"
          subtitle="Statewide virtual estate planning, plus county-specific court guidance for the communities we serve most often."
        />

        <section className="bg-white py-14 lg:py-20">
          <div className="container mx-auto grid max-w-[1140px] gap-10 px-4 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <p className="font-['Plus_Jakarta_Sans'] text-sm font-bold uppercase tracking-[0.16em] text-[#547298]">One Illinois firm, the right local pathway</p>
              <h2 className="mt-3 font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#33414E] md:text-3xl">Find the Right Path for Your Illinois Matter</h2>
              <div className="mt-5 space-y-4 leading-7 text-slate-600">
                <p>Illinois Estate Law prepares wills, trusts, powers of attorney, and related estate-planning documents for clients throughout Illinois through a convenient virtual process. Most planning work does not require a trip to a courthouse or an office.</p>
                <p>Probate, guardianship, and deed matters are location-sensitive. The correct county can depend on the decedent&apos;s residence, the respondent&apos;s circumstances, or where real estate is located. City and mailing boundaries do not always match county lines, so we confirm the controlling address before choosing a court, recorder, or filing route.</p>
              </div>
            </div>

            <aside className="rounded-2xl border border-[#D9E3EC] bg-[#F6F9FC] p-7">
              <MapPin className="h-9 w-9 text-[#547298]" aria-hidden="true" />
              <h2 className="mt-4 font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#33414E]">Clear Service-Area Information</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                <li className="flex gap-3"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#547298]" /> Review planning issues relevant to your community and family.</li>
                <li className="flex gap-3"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#547298]" /> Follow the correct county pathway for probate and guardianship.</li>
                <li className="flex gap-3"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#547298]" /> Complete planning virtually, with meeting locations available to current clients by appointment.</li>
              </ul>
              <p className="mt-5 text-xs text-slate-500">Service-area content updated October 2026</p>
            </aside>
          </div>
        </section>

        <section className="bg-[#F8FAFC] py-16 lg:py-20" aria-labelledby="city-guides-title">
          <div className="container mx-auto max-w-[1140px] px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex items-center justify-center gap-2 text-[#547298]"><MapPin className="h-5 w-5" aria-hidden="true" /><span className="text-sm font-bold uppercase tracking-[0.16em]">City planning guides</span></div>
              <h2 id="city-guides-title" className="mt-3 font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#33414E] md:text-3xl">Estate Planning in Your Community</h2>
              <p className="mt-4 leading-7 text-slate-600">Each guide combines Illinois-wide planning principles with property, family, and county-routing issues that commonly matter in that community.</p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cityLocations.map((location) => (
                <Link key={location.slug} href={`/${location.slug}-estate-planning-lawyer/`} className="group rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#7E9CC0] hover:shadow-md">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#33414E] group-hover:text-[#547298]">{location.city} Estate Planning</h3>
                  <p className="mt-1 text-sm text-slate-500">{location.county}</p>
                  <p className="mt-3 text-sm font-bold text-[#547298]">View local guide <span aria-hidden="true">→</span></p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-20" aria-labelledby="county-guides-title">
          <div className="container mx-auto max-w-[1140px] px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex items-center justify-center gap-2 text-[#547298]"><Building2 className="h-5 w-5" aria-hidden="true" /><span className="text-sm font-bold uppercase tracking-[0.16em]">County court guides</span></div>
              <h2 id="county-guides-title" className="mt-3 font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#33414E] md:text-3xl">Probate and Guardianship by County</h2>
              <p className="mt-4 leading-7 text-slate-600">These county pages explain the relevant courthouse, local filing context, services, pricing, and what to expect next. We also serve clients elsewhere in Illinois after confirming that the matter is a fit.</p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {guardianshipCounties.map((county) => (
                <article key={county.slug} className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#33414E]">{county.county}</h3>
                  <p className="mt-1 text-sm text-slate-500">Court in {county.seat}</p>
                  <div className="mt-5 flex flex-col gap-3">
                    <Link href={`/probate/${county.slug}-county/`} className="inline-flex items-center gap-2 font-bold text-[#547298] hover:text-[#33414E]"><Scale className="h-4 w-4" aria-hidden="true" /> Probate in {county.county} <span aria-hidden="true">→</span></Link>
                    <Link href={`/guardianship/${county.slug}-county/`} className="inline-flex items-center gap-2 font-bold text-[#547298] hover:text-[#33414E]"><Building2 className="h-4 w-4" aria-hidden="true" /> Guardianship in {county.county} <span aria-hidden="true">→</span></Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#33414E] py-14">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-white">Do Not See Your City or County?</h2>
            <p className="mx-auto mt-4 max-w-3xl leading-7 text-white/80">You can still contact us. Estate planning is available statewide, and we will confirm whether we can accept a court matter in your county before you engage the firm.</p>
            <Link href="/contact/" className="mt-6 inline-flex rounded-full border border-white/50 px-6 py-3 text-sm font-bold text-white hover:bg-white/10">Ask about your location</Link>
          </div>
        </section>

        <CTABand title="Choose the next step that works for you" subtitle="Start online now or book a free consultation to discuss your Illinois estate matter." />
      </main>
    </>
  );
}
