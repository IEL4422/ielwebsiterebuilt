export const SITE_URL = 'https://www.illinoisestatelaw.com';

export const FIRM = {
  name: 'Illinois Estate Law',
  legalName: 'Illinois Estate Law Firm',
  description:
    'Illinois Estate Law is an Illinois law firm providing flat-fee estate planning, wills, trusts, probate and estate administration, deeds, and residential real estate closings to clients throughout Illinois.',
  url: SITE_URL,
  phone: '+1-312-373-0731',
  phoneDisplay: '(312) 373-0731',
  email: 'contact@illinoisestatelaw.com',
  streetAddress: '4422 N. Ravenswood Ave, Ste 212',
  addressLocality: 'Chicago',
  addressRegion: 'IL',
  postalCode: '60640',
  addressCountry: 'US',
  latitude: 41.9622,
  longitude: -87.6739,
  mapUrl: 'https://maps.app.goo.gl/EvyUmQa3QaEx4dzm9',
  reviewUrl: 'https://g.page/r/CXtTQeh-RTV-EBM/review',
  googleProfileUrl: 'https://g.page/r/CXtTQeh-RTV-EBM',
  hoursText: 'Monday to Friday, 9:00 AM to 5:00 PM Central',
  logo: 'https://i.imgur.com/bSfExtA.png',
  sameAs: [
    'https://www.facebook.com/profile.php?id=61561472971623',
    'https://x.com/IllinoisEstate',
    'https://www.instagram.com/illinoisestatelaw/',
    'https://www.linkedin.com/company/illinois-estate-law/',
    'https://www.youtube.com/channel/UCgnYeLkyQuInlCyfFpBQtgA',
    'https://g.page/r/CXtTQeh-RTV-EBM',
  ],
} as const;

/**
 * Office hours. Assumed Monday-Friday 9:00-17:00 America/Chicago.
 * If the firm keeps different or additional days, edit this one array and both
 * the JSON-LD and the on-page hours text follow.
 */
export const OPENING_HOURS = {
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  opens: '09:00',
  closes: '17:00',
};

export const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: FIRM.streetAddress,
  addressLocality: FIRM.addressLocality,
  addressRegion: FIRM.addressRegion,
  postalCode: FIRM.postalCode,
  addressCountry: FIRM.addressCountry,
};

export const firmRef = { '@id': `${SITE_URL}/#legalservice` };

export interface Crumb {
  name: string;
  path: string;
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...crumbs].map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}${opts.path}#service`,
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    url: `${SITE_URL}${opts.path}`,
    provider: {
      '@type': 'LegalService',
      '@id': `${SITE_URL}/#legalservice`,
      name: FIRM.name,
      url: SITE_URL,
      telephone: FIRM.phone,
      address: postalAddress,
    },
    areaServed: { '@type': 'State', name: 'Illinois' },
    audience: { '@type': 'Audience', audienceType: 'Illinois residents and property owners' },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${SITE_URL}/book-consultation/`,
      servicePhone: { '@type': 'ContactPoint', telephone: FIRM.phone },
    },
  };
}

export interface QA {
  question: string;
  answer: string;
}

export function faqPageSchema(faqs: QA[], path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE_URL}${path}#faq`,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export interface AttorneyProfile {
  name: string;
  jobTitle: string;
  email: string;
  image?: string;
  description: string;
  alumniOf: string[];
  knowsAbout: string[];
  memberOf?: string[];
  award?: string[];
}

export const ATTORNEYS: AttorneyProfile[] = [
  {
    name: 'Mary Liberty',
    jobTitle: 'Founding Attorney & Owner',
    email: 'mary@illinoisestatelaw.com',
    image: 'https://i.imgur.com/6wIB2nu.jpeg',
    description:
      'Mary Liberty is the founding attorney of Illinois Estate Law, a Chicago-based estate planning and probate attorney licensed in Illinois. Her practice focuses on estate planning, probate, and partial probate representation, all on a flat-fee basis.',
    alumniOf: [
      'University of Illinois Urbana-Champaign',
      'Loyola University Chicago School of Law',
    ],
    knowsAbout: [
      'Illinois estate planning',
      'Illinois probate',
      'Wills',
      'Revocable living trusts',
      'Powers of attorney',
    ],
    award: ['Super Lawyers Rising Star, 2025', 'Super Lawyers Rising Star, 2026'],
  },
  {
    name: 'Yassmin Koudmani',
    jobTitle: 'Senior Attorney',
    email: 'yassmin@illinoisestatelaw.com',
    image: 'https://i.imgur.com/awwM5UZ.jpeg',
    description:
      'Yassmin Koudmani is a senior attorney at Illinois Estate Law licensed in Illinois. She handles estate planning and residential and investment real estate matters, including closings, for clients across the Chicago area. She is fluent in Arabic.',
    alumniOf: [
      'Columbia University in the City of New York',
      'DePaul University College of Law',
    ],
    knowsAbout: [
      'Illinois estate planning',
      'Illinois real estate closings',
      'Deeds and property transfers',
      'Trust planning for business owners',
    ],
  },
  {
    name: 'Victoria Lozano',
    jobTitle: 'Senior Attorney',
    email: 'victoria@illinoisestatelaw.com',
    image: 'https://i0.wp.com/planforwardlegal.com/wp-content/uploads/2026/01/IMG_3670.jpg',
    description:
      'Victoria Lozano is a senior attorney at Illinois Estate Law licensed in Illinois, with a practice spanning estate planning, trust administration, and probate. She earned her J.D. from Chicago-Kent College of Law in 2022.',
    alumniOf: [
      'Coastal Carolina University',
      'Appalachian State University',
      'Chicago-Kent College of Law',
    ],
    knowsAbout: [
      'Illinois estate planning',
      'Trust administration',
      'Illinois probate',
      'LGBTQ+ estate planning',
    ],
    memberOf: [
      'Chicago Bar Association',
      'American Bar Association',
      'Lesbian and Gay Bar Association of Chicago (LAGBAC)',
    ],
  },
];

export function personSchema(a: AttorneyProfile) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Attorney',
    '@id': `${SITE_URL}/about/#${a.name.toLowerCase().replace(/[^a-z]+/g, '-')}`,
    name: a.name,
    jobTitle: a.jobTitle,
    email: a.email,
    image: a.image,
    description: a.description,
    url: `${SITE_URL}/about/`,
    worksFor: {
      '@type': 'LegalService',
      '@id': `${SITE_URL}/#legalservice`,
      name: FIRM.name,
      url: SITE_URL,
    },
    alumniOf: a.alumniOf.map((s) => ({ '@type': 'EducationalOrganization', name: s })),
    knowsAbout: a.knowsAbout,
    knowsLanguage: a.name === 'Yassmin Koudmani' ? ['English', 'Arabic'] : ['English'],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Bar admission',
      recognizedBy: { '@type': 'Organization', name: 'Supreme Court of Illinois' },
      name: 'Licensed to practice law in Illinois',
    },
    ...(a.memberOf
      ? { memberOf: a.memberOf.map((m) => ({ '@type': 'Organization', name: m })) }
      : {}),
    ...(a.award ? { award: a.award } : {}),
    areaServed: { '@type': 'State', name: 'Illinois' },
  };
}
