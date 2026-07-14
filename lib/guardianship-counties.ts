/**
 * Counties targeted for the guardianship and contested-probate practice areas.
 *
 * These are the SAME counties where IEL already does probate:
 *   - Cook and DuPage already have hand-built static probate pages
 *     (app/probate/cook-county, app/probate/dupage-county)
 *   - Lake, Will, Kane and McHenry are generated from
 *     `countyProbateLocations` in lib/locations-data.ts
 *
 * Declared here as a self-contained list (rather than extending
 * locations-data.ts) so the guardianship pages can ship without touching the
 * existing probate routing. If we later consolidate, this becomes the single
 * county registry and locations-data.ts reads from it.
 *
 * The firm serves all 102 Illinois counties. These six are where we CONCENTRATE
 * and where county-qualified SEO is worth the pages.
 */

export interface GuardianshipCounty {
  county: string;
  /** URL slug. Pages render at /guardianship/{slug}-county/ */
  slug: string;
  seat: string;
  courthouseName: string;
  courthouseAddress: string;
  courthousePhone: string;
  /** Where guardianship (as opposed to decedent's-estate probate) is actually heard. */
  divisionNote: string;
  /** County-specific practical colour. Must be true and useful, not filler. */
  localNote: string;
}

export const guardianshipCounties: GuardianshipCounty[] = [
  {
    county: 'Cook County',
    slug: 'cook',
    seat: 'Chicago',
    courthouseName: 'Circuit Court of Cook County, Probate Division',
    courthouseAddress: 'Richard J. Daley Center, 50 W. Washington St., Chicago, IL 60602',
    courthousePhone: '(312) 603-6441',
    divisionNote:
      'Cook County hears adult and minor guardianship in the Probate Division at the Daley Center. Adult guardianship and minor guardianship are administered as separate calendars.',
    localNote:
      'Cook County is the most procedurally demanding guardianship venue in Illinois. A guardian ad litem is appointed in every estate guardianship, and in any person-guardianship that could result in a physical intrusion (such as surgery or forced medication) or a denial of rights (such as involuntary placement, or where the respondent objects). Budget for the GAL fee from day one — it is a real cost and it is not part of our flat fee.',
  },
  {
    county: 'DuPage County',
    slug: 'dupage',
    seat: 'Wheaton',
    courthouseName: 'DuPage County Circuit Court',
    courthouseAddress: '505 N. County Farm Rd., Wheaton, IL 60187',
    courthousePhone: '(630) 407-8700',
    divisionNote:
      'DuPage County hears guardianship matters in its Probate Division in Wheaton.',
    localNote:
      'DuPage has a large population of aging homeowners with meaningful equity, which means guardianship of the estate — not just the person — is frequently required. That triggers a surety bond, an inventory, and a court accounting, so the matter is meaningfully more involved than a person-only guardianship.',
  },
  {
    county: 'Lake County',
    slug: 'lake',
    seat: 'Waukegan',
    courthouseName: 'Lake County Circuit Court',
    courthouseAddress: '18 N. County St., Waukegan, IL 60085',
    courthousePhone: '(847) 377-3600',
    divisionNote:
      'Lake County hears guardianship in its Civil/Probate Division in Waukegan. The county uses the Odyssey case management system.',
    localNote:
      'Lake County is one of the wealthiest counties in Illinois. Estate guardianships here often involve investment accounts and multiple properties, which raises the stakes on the annual accounting — the guardian personally bears the burden of proving every disbursement was proper.',
  },
  {
    county: 'Will County',
    slug: 'will',
    seat: 'Joliet',
    courthouseName: 'Will County Circuit Court',
    courthouseAddress: '14 W. Jefferson St., Joliet, IL 60432',
    courthousePhone: '(815) 727-8592',
    divisionNote:
      'Will County hears guardianship matters through its Civil Division in Joliet.',
    localNote:
      'Will County is one of the fastest-growing counties in the country. Rapid growth in Joliet, Plainfield, Bolingbrook and Lockport means a rising volume of both minor guardianships (often grandparents stepping in) and adult guardianships, on a court calendar that is busier every year.',
  },
  {
    county: 'Kane County',
    slug: 'kane',
    seat: 'Geneva',
    courthouseName: 'Kane County Circuit Court',
    courthouseAddress: '100 S. Third St., Geneva, IL 60134',
    courthousePhone: '(630) 232-3413',
    divisionNote:
      'Kane County hears guardianship in its Probate Division in Geneva, serving the Fox Valley corridor from Elgin through Aurora and St. Charles.',
    localNote:
      'Kane County covers the Fox River Valley — Elgin, Aurora, St. Charles, Geneva. Its mix of large multigenerational households and a substantial senior population makes both minor and adult guardianship common here.',
  },
  {
    county: 'McHenry County',
    slug: 'mchenry',
    seat: 'Woodstock',
    courthouseName: 'McHenry County Circuit Court',
    courthouseAddress: '2200 N. Seminary Ave., Woodstock, IL 60098',
    courthousePhone: '(815) 334-4190',
    divisionNote:
      'McHenry County hears guardianship matters through its Law Division, with cases filed in Woodstock.',
    localNote:
      'McHenry County is an exurban county with a fast-aging population in Crystal Lake, Algonquin, Cary and Woodstock. Adult guardianship petitions here frequently follow a dementia diagnosis where no power of attorney was ever signed — the exact situation guardianship exists to solve.',
  },
];

export function getGuardianshipCounty(slug: string): GuardianshipCounty | undefined {
  return guardianshipCounties.find((c) => c.slug === slug);
}
