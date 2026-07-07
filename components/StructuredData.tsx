export function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Illinois Estate Law',
    description:
      'Flat-fee estate planning, probate, trust administration, and real estate law serving all of Illinois.',
    url: 'https://www.illinoisestatelaw.com',
    telephone: '+1-312-373-0731',
    email: 'contact@illinoisestatelaw.com',
    priceRange: '$$',
    image: 'https://www.illinoisestatelaw.com/favicon.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4422 N. Ravenswood Ave, Ste 212',
      addressLocality: 'Chicago',
      addressRegion: 'IL',
      postalCode: '60640',
      addressCountry: 'US',
    },
    areaServed: { '@type': 'State', name: 'Illinois' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '50',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
