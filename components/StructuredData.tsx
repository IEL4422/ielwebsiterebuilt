import { ATTORNEYS, FIRM, SITE_URL, postalAddress, OPENING_HOURS } from '@/lib/seo';

const practiceOfferings = [
  { name: 'Estate planning', path: '/estate-planning/' },
  { name: 'Wills', path: '/chicago-wills-lawyer/' },
  { name: 'Revocable living trusts', path: '/chicago-revocable-trusts-lawyer/' },
  { name: 'Powers of attorney', path: '/chicago-powers-of-attorney-lawyer/' },
  { name: 'Healthcare directives', path: '/chicago-healthcare-directives-lawyer/' },
  { name: 'Probate and estate administration', path: '/chicago-probate-lawyer/' },
  { name: 'Trust administration', path: '/services-pricing/#trusts' },
  { name: 'Adult and minor guardianship', path: '/guardianship/' },
  { name: 'Residential real estate closings', path: '/chicago-real-estate-closings-lawyer/' },
  { name: 'Deed preparation and transfers', path: '/chicago-deeds-lawyer/' },
] as const;

/**
 * Site-wide JSON-LD graph: the firm (LegalService / Attorney / LocalBusiness),
 * the Organization, and the WebSite entity.
 *
 * Rating data reflects the firm's public Google reviews. Do not edit the
 * aggregateRating block unless the underlying Google rating actually changes.
 */
export function StructuredData() {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LegalService', 'Attorney', 'LocalBusiness'],
        '@id': `${SITE_URL}/#legalservice`,
        name: FIRM.name,
        legalName: FIRM.legalName,
        description: FIRM.description,
        url: SITE_URL,
        telephone: FIRM.phone,
        email: FIRM.email,
        priceRange: '$$',
        image: FIRM.logo,
        logo: FIRM.logo,
        hasMap: FIRM.mapUrl,
        address: postalAddress,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: FIRM.latitude,
          longitude: FIRM.longitude,
        },
        areaServed: [
          { '@type': 'State', name: 'Illinois' },
          { '@type': 'AdministrativeArea', name: 'Cook County, Illinois' },
          { '@type': 'AdministrativeArea', name: 'DuPage County, Illinois' },
          { '@type': 'City', name: 'Chicago' },
        ],
        availableLanguage: ['English', 'Arabic'],
        openingHoursSpecification: [OPENING_HOURS],
        knowsAbout: [
          'Illinois estate planning',
          'Illinois probate and estate administration',
          'Revocable living trusts',
          'Powers of attorney',
          'Healthcare directives',
          'Illinois real estate closings',
          'Illinois deeds and property transfers',
          'Illinois adult and minor guardianship',
        ],
        parentOrganization: { '@id': `${SITE_URL}/#organization` },
        sameAs: FIRM.sameAs,
        makesOffer: practiceOfferings.map((service) => ({
          '@type': 'Offer',
          url: `${SITE_URL}${service.path}`,
          itemOffered: {
            '@type': 'Service',
            name: service.name,
            url: `${SITE_URL}${service.path}`,
            provider: { '@id': `${SITE_URL}/#legalservice` },
            areaServed: { '@type': 'State', name: 'Illinois' },
          },
        })),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Illinois Estate Law services',
          itemListElement: practiceOfferings.map((service) => ({
            '@type': 'Offer',
            url: `${SITE_URL}${service.path}`,
            itemOffered: { '@type': 'Service', name: service.name },
          })),
        },
        potentialAction: {
          '@type': 'ReserveAction',
          name: 'Book a free consultation',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE_URL}/book-consultation/`,
            inLanguage: 'en-US',
            actionPlatform: [
              'http://schema.org/DesktopWebPlatform',
              'http://schema.org/MobileWebPlatform',
            ],
          },
        },
      },
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: FIRM.name,
        legalName: FIRM.legalName,
        url: SITE_URL,
        logo: { '@type': 'ImageObject', url: FIRM.logo },
        email: FIRM.email,
        telephone: FIRM.phone,
        address: postalAddress,
        sameAs: FIRM.sameAs,
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: FIRM.phone,
            email: FIRM.email,
            contactType: 'customer service',
            areaServed: 'US-IL',
            availableLanguage: ['English', 'Arabic'],
          },
        ],
        founder: {
          '@type': 'Person',
          '@id': `${SITE_URL}/about/#mary-liberty`,
          name: 'Mary Liberty',
          jobTitle: 'Founding Attorney & Owner',
        },
        employee: ATTORNEYS.map((attorney) => ({
          '@type': 'Person',
          '@id': `${SITE_URL}/about/#${attorney.name.toLowerCase().replace(/[^a-z]+/g, '-')}`,
          name: attorney.name,
          jobTitle: attorney.jobTitle,
          knowsAbout: attorney.knowsAbout,
        })),
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: FIRM.name,
        description: FIRM.description,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en-US',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
