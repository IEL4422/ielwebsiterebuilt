import { FIRM, SITE_URL, postalAddress, OPENING_HOURS } from '@/lib/seo';

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
        ],
        parentOrganization: { '@id': `${SITE_URL}/#organization` },
        sameAs: FIRM.sameAs,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          reviewCount: '50',
        },
        makesOffer: [
          'Estate planning',
          'Wills',
          'Revocable living trusts',
          'Powers of attorney',
          'Healthcare directives',
          'Probate administration',
          'Trust administration',
          'Residential real estate closings',
          'Deed preparation and transfers',
        ].map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s, areaServed: { '@type': 'State', name: 'Illinois' } },
        })),
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
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: FIRM.name,
        description: FIRM.description,
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'en-US',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE_URL}/learning-center/?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
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
