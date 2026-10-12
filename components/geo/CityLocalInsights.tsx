import Link from 'next/link';
import { Building2, CheckCircle2, MapPin, Scale, UserRoundCheck } from 'lucide-react';
import { cityLocations, type CityLocation } from '@/lib/locations-data';

const countyRoutes: Record<string, { probate: string; guardianship: string }> = {
  'Cook County': { probate: '/probate/cook-county/', guardianship: '/guardianship/cook-county/' },
  'DuPage County': { probate: '/probate/dupage-county/', guardianship: '/guardianship/dupage-county/' },
  'Kane County': { probate: '/probate/kane-county/', guardianship: '/guardianship/kane-county/' },
  'Will County': { probate: '/probate/will-county/', guardianship: '/guardianship/will-county/' },
};

export function CityLocalInsights({ location }: { location: CityLocation }) {
  const routes = countyRoutes[location.county];
  const nearby = location.nearbyCommunities
    .map((name) => cityLocations.find((candidate) => candidate.city === name))
    .filter((candidate): candidate is CityLocation => Boolean(candidate));

  return (
    <>
      <section className="bg-white py-16 lg:py-20" aria-labelledby="local-planning-title">
        <div className="container mx-auto max-w-[1140px] px-4">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#547298]">Local planning considerations</p>
            <h2 id="local-planning-title" className="mt-3 font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[#33414E]">
              Questions we help {location.city} families resolve
            </h2>
            <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-slate-600">
              {location.localNote} These considerations are starting points—not assumptions about any particular family.
              We confirm ownership, beneficiaries, family circumstances, and goals before recommending a document or package.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {location.localPlanningConsiderations.map((consideration) => (
              <article key={consideration} className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6">
                <CheckCircle2 className="h-7 w-7 text-[#547298]" aria-hidden="true" />
                <p className="mt-4 leading-7 text-slate-700">{consideration}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#33414E] py-16" aria-labelledby="local-legal-path-title">
        <div className="container mx-auto max-w-[1140px] px-4">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#B9CCE2]">City service, county procedure</p>
              <h2 id="local-legal-path-title" className="mt-3 font-['Plus_Jakarta_Sans'] text-3xl font-bold text-white">
                How location affects an Illinois legal matter
              </h2>
              <div className="mt-5 space-y-4 leading-relaxed text-white/80">
                <p>
                  Estate-planning documents use Illinois law and can usually be prepared through the firm&apos;s virtual process.
                  A court case is different: probate venue generally follows the decedent&apos;s residence, guardianship venue depends
                  on the respondent&apos;s circumstances, and deeds are recorded in the county where the property is located.
                </p>
                <p>
                  Most {location.city} matters connected to {location.county} are handled through the {location.countyCourtName}.
                  Cities and mailing addresses can cross county boundaries, so the firm confirms the controlling residence or property
                  address before selecting a courthouse, recorder, filing path, or county-specific page.
                </p>
              </div>

              {routes && (
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href={routes.probate} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#33414E] hover:bg-[#F2F6FA]">
                    <Scale className="h-4 w-4" aria-hidden="true" /> {location.county} probate
                  </Link>
                  <Link href={routes.guardianship} className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-bold text-white hover:bg-white/10">
                    <Building2 className="h-4 w-4" aria-hidden="true" /> {location.county} guardianship
                  </Link>
                </div>
              )}
            </div>

            <aside className="rounded-2xl border border-white/15 bg-white/[0.07] p-7">
              <UserRoundCheck className="h-9 w-9 text-[#B9CCE2]" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-bold text-white">Attorney reviewed</h3>
              <p className="mt-3 leading-relaxed text-white/80">
                This page was reviewed by Illinois attorney Mary Liberty for service accuracy and local routing. Legal information is
                educational; the correct strategy depends on the client&apos;s documents, assets, family circumstances, and objectives.
              </p>
              <Link href="/about/" className="mt-5 inline-flex font-bold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white">
                Meet Mary and the legal team
              </Link>
              <p className="mt-4 text-xs text-white/60">Last reviewed October 2026</p>
            </aside>
          </div>
        </div>
      </section>

      {nearby.length > 0 && (
        <section className="bg-[#F8FAFC] py-12" aria-labelledby="nearby-service-areas-title">
          <div className="container mx-auto max-w-[1140px] px-4">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#547298]">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                  <h2 id="nearby-service-areas-title" className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#33414E]">
                    Nearby communities we serve
                  </h2>
                </div>
                <p className="mt-2 text-sm text-slate-600">Explore locally relevant planning information for nearby Illinois communities.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {nearby.map((community) => (
                  <Link
                    key={community.slug}
                    href={`/${community.slug}-estate-planning-lawyer/`}
                    className="rounded-full border border-[#C9D6E2] bg-white px-4 py-2 text-sm font-bold text-[#33414E] hover:border-[#547298] hover:text-[#547298]"
                  >
                    {community.city}
                  </Link>
                ))}
                <Link href="/areas-we-serve/" className="rounded-full bg-[#547298] px-4 py-2 text-sm font-bold text-white hover:bg-[#33414E]">
                  All service areas
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
