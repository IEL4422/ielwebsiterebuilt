'use client';

import Link from 'next/link';
import { Check } from 'lucide-react';
import { usd } from '@/lib/pricing';
import { FEE_STRUCTURE_NOTE } from '@/lib/fee-structure';
import {
  serviceCategories,
  type Service,
  type ServiceCategory,
} from './CategorizedServicesDisplay';

const GET_STARTED = '/get-started/';
const BOOK = '/book-consultation/';

function byId(id: string): ServiceCategory {
  return serviceCategories.find((c) => c.id === id) as ServiceCategory;
}

const estatePlanning = byId('estate-planning');
const probate = byId('probate');
const trustAdmin = byId('trust-administration');
const deeds = byId('deeds');
const realEstate = byId('real-estate');

/* ---------- shared bits ---------- */

function PriceBlock({ service }: { service: Service }) {
  if (service.individualPrice != null && service.jointPrice != null) {
    return (
      <div className="flex flex-wrap items-baseline gap-x-8 gap-y-1 py-3 border-y border-[#E3EAF1] mb-4">
        <div className="flex items-baseline gap-2">
          <span className="text-[12.5px] font-bold uppercase tracking-wide text-[#547298]">Individual</span>
          <span className="text-[20px] font-extrabold text-[#33414E]">{usd(service.individualPrice)}</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-[12.5px] font-bold uppercase tracking-wide text-[#547298]">Joint</span>
          <span className="text-[20px] font-extrabold text-[#33414E]">{usd(service.jointPrice)}</span>
        </div>
      </div>
    );
  }
  if (service.pricingLabel) {
    return (
      <div className="py-3 border-y border-[#E3EAF1] mb-4">
        <span className="text-[22px] font-extrabold text-[#33414E]">{service.pricingLabel}</span>
      </div>
    );
  }
  return (
    <div className="py-3 border-y border-[#E3EAF1] mb-4">
      <span className="text-[26px] font-extrabold text-[#33414E]">{usd(service.fixedPrice as number)}</span>
    </div>
  );
}

type Cta = { label: string; href: string; variant: 'primary' | 'ghost' };

function CardCtas({ ctas }: { ctas: Cta[] }) {
  return (
    <div className="mt-auto flex flex-wrap gap-2.5 pt-2">
      {ctas.map((c) =>
        c.variant === 'primary' ? (
          <Link
            key={c.label}
            href={c.href}
            className="inline-flex items-center justify-center rounded-full bg-[#547298] px-4 py-2 text-sm font-bold text-white shadow-[0_6px_16px_rgba(84,114,152,0.28)] hover:bg-[#33414E] transition-colors"
          >
            {c.label}
          </Link>
        ) : (
          <Link
            key={c.label}
            href={c.href}
            className="inline-flex items-center justify-center rounded-full border-2 border-[#7E9CC0] bg-white px-4 py-2 text-sm font-bold text-[#33414E] hover:border-[#547298] hover:text-[#547298] hover:bg-[#F6F9FC] transition-colors"
          >
            {c.label}
          </Link>
        )
      )}
    </div>
  );
}

function PackageCard({
  service,
  ctas,
  feature,
  badge,
}: {
  service: Service;
  ctas: Cta[];
  feature?: boolean;
  badge?: string;
}) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl bg-white p-6 transition-shadow hover:shadow-[0_16px_34px_rgba(51,65,78,0.10)] ${
        feature ? 'border-2 border-[#547298] shadow-[0_10px_26px_rgba(84,114,152,0.14)]' : 'border border-[#E3EAF1]'
      }`}
    >
      {badge && (
        <span className="absolute -top-3 left-6 rounded-full bg-[#547298] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
          {badge}
        </span>
      )}
      <h3 className="text-[19px] font-bold text-[#33414E] mb-1">{service.name}</h3>
      {service.subtitle && <p className="text-sm text-[#5f6b76] mb-2">{service.subtitle}</p>}
      <PriceBlock service={service} />
      {service.includes.length > 0 && (
        <ul className="mb-4 flex flex-col gap-2">
          {service.includes.map((inc, i) => (
            <li key={i} className="flex gap-2 text-[13.5px] text-[#2b3742]">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#547298]" />
              <span>{inc}</span>
            </li>
          ))}
        </ul>
      )}
      {service.note && <p className="mb-4 text-xs leading-relaxed text-[#5f6b76]">{service.note}</p>}
      <CardCtas ctas={ctas} />
    </div>
  );
}

function MiniCard({ service }: { service: Service }) {
  return (
    <div className="rounded-xl border border-[#E3EAF1] bg-[#F6F9FC] p-4">
      <b className="block text-[14.5px] font-bold text-[#33414E]">{service.name}</b>
      {service.subtitle && <span className="mt-0.5 block text-xs text-[#5f6b76]">{service.subtitle}</span>}
      <div className="mt-1.5 text-[16px] font-extrabold text-[#547298]">
        {service.individualPrice != null && service.jointPrice != null
          ? `${usd(service.individualPrice)} / ${usd(service.jointPrice)}`
          : service.pricingLabel
          ? service.pricingLabel
          : usd(service.fixedPrice as number)}
      </div>
      {service.individualPrice != null && service.jointPrice != null && (
        <span className="text-[11px] text-[#5f6b76]">Individual / Joint</span>
      )}
      {service.note && <span className="mt-1 block text-[11px] leading-snug text-[#5f6b76]">{service.note}</span>}
    </div>
  );
}

function CatHead({ kick, title }: { kick: string; title: string }) {
  return (
    <div className="mb-1 flex items-baseline gap-3">
      <span className="text-[13px] font-bold uppercase tracking-wide text-[#547298]">{kick}</span>
      <h2 className="text-[30px] font-bold text-[#33414E] sm:text-[24px]">{title}</h2>
    </div>
  );
}

/* ---------- full price list table ---------- */

type Row = { name: string; individual: string; joint: string; notes: string };

function toRow(s: Service): Row {
  let individual = '';
  let joint = '';
  if (s.individualPrice != null && s.jointPrice != null) {
    individual = usd(s.individualPrice);
    joint = usd(s.jointPrice);
  } else if (s.pricingLabel) {
    individual = s.pricingLabel;
  } else if (s.fixedPrice != null) {
    individual = usd(s.fixedPrice);
  }
  return { name: s.name, individual, joint, notes: s.subtitle || s.note || '' };
}

const priceGroups: Array<{ label: string; rows: Row[] }> = [
  { label: 'Estate Planning — Packages', rows: estatePlanning.packages.map(toRow) },
  {
    label: 'Estate Planning — À La Carte & Add-Ons',
    rows: [...estatePlanning.aLaCarte, ...estatePlanning.addOns].map(toRow),
  },
  { label: 'Probate & Administration', rows: probate.packages.map(toRow) },
  { label: 'Trust Administration', rows: trustAdmin.packages.map(toRow) },
  { label: 'Real Estate & Deeds', rows: [...realEstate.packages, ...deeds.aLaCarte].map(toRow) },
];

/* ---------- always-included band ---------- */

const included = [
  ['Unlimited Consultations', 'Talk as many times as you like until your documents are final.'],
  ['100% Flat-Fee*', 'Your price is shown before you commit. Hourly only for contested matters.'],
  ['Notarization Included', 'Online or mobile notarization included on all packages.'],
  ['Client Portal Access', 'Track status, message your attorney, and access documents 24/7.'],
  ['Physical & Digital Portfolio', 'Your finished plan delivered both ways.'],
  ['Same-Week Appointments', 'Virtual or in-person, at your pace, anywhere in Illinois.'],
  ['Payment Plans', 'We are pleased to offer payment plans for all services.'],
  ['Trust Deed Included', 'Trust packages include one deed of real estate into the trust, recording included.'],
];

/* ================================================================= */

export function ServicesPricingModern() {
  return (
    <div className="font-['Plus_Jakarta_Sans']">
      {/* Sticky category nav */}
      <div className="sticky top-[64px] lg:top-[74px] z-40 border-b border-[#E3EAF1] bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1180px] flex-wrap justify-center gap-2.5 px-5 py-3">
          {[
            ['Estate Planning', '#estate-planning'],
            ['Trusts & Administration', '#trusts'],
            ['Probate & Administration', '#probate'],
            ['Real Estate & Deeds', '#realestate'],
            ['Guardianship', '#guardianship'],
            ['Full Price List', '#table'],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-full border border-[#E3EAF1] bg-[#F6F9FC] px-4 py-2 text-[13.5px] font-bold text-[#33414E] transition-colors hover:border-[#547298] hover:bg-[#547298] hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1180px] px-5">
        {/* 01 Estate Planning */}
        <section id="estate-planning" className="scroll-mt-[150px] py-12">
          <CatHead kick="01" title="Estate Planning" />
          <p className="mb-7 max-w-[760px] text-[16px] text-[#5f6b76]">
            Wills, trusts, powers of attorney, and healthcare directives drafted to Illinois legal standards. Every
            package includes unlimited attorney consultations, notarization, a physical &amp; digital portfolio, and
            client portal access.
          </p>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {estatePlanning.packages.map((s, i) => {
              const isTrust = s.name === 'Trust Package';
              const isTax = s.name.startsWith('Estate Tax');
              const ctas: Cta[] = isTax
                ? [{ label: 'Book a Consult', href: BOOK, variant: 'primary' }]
                : isTrust
                ? [
                    { label: 'Get Started', href: GET_STARTED, variant: 'primary' },
                    { label: 'Free Consult', href: BOOK, variant: 'ghost' },
                  ]
                : [{ label: 'Get Started', href: GET_STARTED, variant: 'primary' }];
              return (
                <PackageCard
                  key={i}
                  service={s}
                  ctas={ctas}
                  feature={isTrust}
                  badge={isTrust ? 'Most Complete' : undefined}
                />
              );
            })}
          </div>

          <h3 id="a-la-carte" className="scroll-mt-[150px] mb-4 mt-10 text-[22px] font-bold text-[#33414E]">
            À La Carte &amp; Add-Ons
          </h3>
          <div className="grid grid-cols-2 gap-3.5 md:grid-cols-3 lg:grid-cols-4">
            {[...estatePlanning.aLaCarte, ...estatePlanning.addOns].map((s, i) => (
              <MiniCard key={i} service={s} />
            ))}
          </div>
        </section>

        {/* 02 Trust Administration */}
        <section id="trusts" className="scroll-mt-[150px] border-t border-[#E3EAF1] py-12">
          <CatHead kick="02" title="Trust Administration" />
          <p className="mb-7 max-w-[760px] text-[16px] text-[#5f6b76]">
            Attorney guidance for individuals serving as trustee. Note: Illinois Estate Law provides consulting only and
            does not serve as trustee.
          </p>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {trustAdmin.packages.map((s, i) => (
              <PackageCard
                key={i}
                service={s}
                ctas={[{ label: 'Book a Free Consultation', href: BOOK, variant: 'primary' }]}
              />
            ))}
          </div>
        </section>

        {/* 03 Probate & Administration */}
        <section id="probate" className="scroll-mt-[150px] border-t border-[#E3EAF1] py-12">
          <CatHead kick="03" title="Probate &amp; Administration" />
          <p className="mb-7 max-w-[820px] text-[16px] text-[#5f6b76]">
            Flat-fee guidance for executors and families through Illinois probate — from opening through closing.
            Uncontested matters are flat-fee; contested matters are billed hourly against a retainer. Surety bond
            premiums, if required, are paid directly to the bond provider and are not included.
          </p>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {probate.packages.map((s, i) => (
              <PackageCard
                key={i}
                service={s}
                ctas={[{ label: 'Book a Consult', href: BOOK, variant: 'primary' }]}
              />
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-[#E3EAF1] bg-[#F6F9FC] p-5">
            <p className="text-[15px] text-[#33414E]">
              <strong>Wrongful Death Cases:</strong> Ask us about our special wrongful death attorney referral pricing.{' '}
              <Link href={BOOK} className="text-[#547298] underline hover:text-[#33414E]">
                Schedule a consultation
              </Link>{' '}
              or call{' '}
              <a href="tel:3123730731" className="text-[#547298] underline hover:text-[#33414E]">
                (312) 373-0731
              </a>
              .
            </p>
          </div>
        </section>

        {/* 04 Real Estate & Deeds */}
        <section id="realestate" className="scroll-mt-[150px] border-t border-[#E3EAF1] py-12">
          <CatHead kick="04" title="Real Estate &amp; Deeds" />
          <p className="mb-7 max-w-[760px] text-[16px] text-[#5f6b76]">
            Residential closings and deed services for Illinois families protecting their property. Deed fees include
            recording.
          </p>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {realEstate.packages.map((s, i) => (
              <PackageCard
                key={i}
                service={s}
                ctas={[
                  { label: 'Get Started', href: GET_STARTED, variant: 'primary' },
                  { label: 'Free Consult', href: BOOK, variant: 'ghost' },
                ]}
              />
            ))}
            <div className="flex flex-col rounded-2xl border border-[#E3EAF1] bg-white p-6">
              <h3 className="text-[19px] font-bold text-[#33414E] mb-1">Deed Services</h3>
              <p className="mb-4 text-sm text-[#5f6b76]">À la carte deeds — recording fee included on each.</p>
              <ul className="mb-4 flex flex-col gap-2.5">
                {deeds.aLaCarte.map((s, i) => (
                  <li
                    key={i}
                    className="flex items-baseline justify-between gap-3 border-b border-[#E3EAF1] pb-2 last:border-b-0 last:pb-0"
                  >
                    <span className="text-[14px] text-[#2b3742]">{s.name}</span>
                    <span className="text-[15px] font-extrabold text-[#547298]">{usd(s.fixedPrice as number)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Link
                  href="/chicago-deeds-lawyer/"
                  className="inline-flex items-center justify-center rounded-full border-2 border-[#7E9CC0] bg-white px-4 py-2 text-sm font-bold text-[#33414E] hover:border-[#547298] hover:text-[#547298] hover:bg-[#F6F9FC] transition-colors"
                >
                  Explore Deed Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 05 Guardianship (descriptive — no published price on this page) */}
        <section id="guardianship" className="scroll-mt-[150px] border-t border-[#E3EAF1] py-12">
          <CatHead kick="05" title="Guardianship" />
          <p className="mb-7 max-w-[820px] text-[16px] text-[#5f6b76]">
            Guardianship of an adult who can no longer decide, or of a minor child — contested and uncontested — plus the
            annual court reporting that follows appointment. Uncontested guardianship is handled flat-fee; contested
            guardianship is billed hourly against a retainer.
          </p>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              ['Guardianship of the Person', 'For an adult who can no longer make decisions, or a minor child.'],
              ['Guardianship of the Estate', 'Management of the financial affairs of the person under guardianship.'],
              ['Annual Guardian Compliance', 'The annual court reporting and compliance that follows appointment.'],
            ].map(([title, body]) => (
              <div key={title} className="flex flex-col rounded-2xl border border-[#E3EAF1] bg-white p-6">
                <h3 className="text-[18px] font-bold text-[#33414E] mb-2">{title}</h3>
                <p className="mb-4 text-sm text-[#5f6b76]">{body}</p>
                <Link
                  href="/guardianship/"
                  className="mt-auto inline-flex w-fit items-center justify-center rounded-full border-2 border-[#7E9CC0] bg-white px-4 py-2 text-sm font-bold text-[#33414E] hover:border-[#547298] hover:text-[#547298] hover:bg-[#F6F9FC] transition-colors"
                >
                  Explore Guardianship
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[15px] text-[#5f6b76]">
            Guardianship matters are quoted based on the facts of your case.{' '}
            <Link href={BOOK} className="text-[#547298] underline hover:text-[#33414E]">
              Book a free consultation
            </Link>{' '}
            for exact flat-fee pricing.
          </p>
        </section>
      </div>

      {/* What's Always Included band */}
      <section className="bg-[#33414E] py-14">
        <div className="mx-auto max-w-[1180px] px-5">
          <span className="text-[13px] font-bold uppercase tracking-wide text-[#7E9CC0]">Every flat-fee matter</span>
          <h2 className="mt-1 text-[30px] font-bold text-white sm:text-[24px]">What&apos;s Always Included</h2>
          <p className="mb-6 mt-2 max-w-[720px] text-[16px] text-[#c4d2e0]">
            The things other firms nickel-and-dime — included in your flat fee, every time.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {included.map(([title, body]) => (
              <div key={title} className="rounded-2xl border border-white/15 bg-white/[0.06] p-5">
                <b className="mb-1.5 block text-[15px] text-white">{title}</b>
                <span className="text-[13.5px] text-[#c4d2e0]">{body}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full price list */}
      <section id="table" className="scroll-mt-[120px] py-14">
        <div className="mx-auto max-w-[1180px] px-5">
          <span className="text-[13px] font-bold uppercase tracking-wide text-[#547298]">At a glance</span>
          <h2 className="mt-1 text-[30px] font-bold text-[#33414E] sm:text-[24px]">Full Price List</h2>
          <p className="mb-6 mt-2 max-w-[720px] text-[16px] text-[#5f6b76]">
            Every service and its exact flat fee, in one place. Individual / Joint pricing shown where applicable.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-[#E3EAF1]">
            <table className="w-full min-w-[640px] border-collapse text-[14px]">
              <thead>
                <tr>
                  <th className="border-b-2 border-[#E3EAF1] bg-[#F6F9FC] px-4 py-3.5 text-left text-[12.5px] uppercase tracking-wide text-[#33414E]">Service</th>
                  <th className="border-b-2 border-[#E3EAF1] bg-[#F6F9FC] px-4 py-3.5 text-left text-[12.5px] uppercase tracking-wide text-[#33414E]">Individual</th>
                  <th className="border-b-2 border-[#E3EAF1] bg-[#F6F9FC] px-4 py-3.5 text-left text-[12.5px] uppercase tracking-wide text-[#33414E]">Joint</th>
                  <th className="border-b-2 border-[#E3EAF1] bg-[#F6F9FC] px-4 py-3.5 text-left text-[12.5px] uppercase tracking-wide text-[#33414E]">Notes</th>
                </tr>
              </thead>
              <tbody>
                {priceGroups.flatMap((group) => [
                  <tr key={group.label} className="bg-[#33414E]">
                    <td colSpan={4} className="px-4 py-2.5 text-[12.5px] font-bold uppercase tracking-wide text-white">
                      {group.label}
                    </td>
                  </tr>,
                  ...group.rows.map((r, i) => (
                    <tr key={group.label + '-' + i} className="hover:bg-[#fbfdff]">
                      <td className="border-b border-[#E3EAF1] px-4 py-3 font-bold text-[#33414E]">{r.name}</td>
                      <td className="whitespace-nowrap border-b border-[#E3EAF1] px-4 py-3 font-extrabold text-[#547298]">{r.individual}</td>
                      <td className="whitespace-nowrap border-b border-[#E3EAF1] px-4 py-3 font-extrabold text-[#547298]">{r.joint || '—'}</td>
                      <td className="border-b border-[#E3EAF1] px-4 py-3 text-[#5f6b76]">{r.notes}</td>
                    </tr>
                  )),
                ])}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-[#5f6b76]">*{FEE_STRUCTURE_NOTE}</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-14">
        <div className="mx-auto max-w-[1180px] px-5">
          <div className="rounded-3xl bg-gradient-to-br from-[#547298] to-[#33414E] px-6 py-11 text-center">
            <h2 className="mb-2.5 text-[30px] font-bold text-white sm:text-[24px]">Ready to Get Started?</h2>
            <p className="mx-auto mb-6 max-w-[620px] text-[#dbe6f2]">
              At Illinois Estate Law, we offer innovative estate planning and probate solutions that can be customized to
              fit your unique needs.
            </p>
            <div className="flex flex-wrap justify-center gap-3.5">
              <Link
                href={GET_STARTED}
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-bold text-[#33414E] hover:bg-[#F6F9FC] transition-colors"
              >
                Get Started Online
              </Link>
              <Link
                href={BOOK}
                className="inline-flex items-center justify-center rounded-full border-2 border-white bg-transparent px-6 py-3 text-base font-bold text-white hover:bg-white/10 transition-colors"
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
