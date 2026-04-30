/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.illinoisestatelaw.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
      {
        protocol: 'https',
        hostname: 'www.digitaljournal.com',
      },
      {
        protocol: 'https',
        hostname: 'i.forbesimg.com',
      },
      {
        protocol: 'https',
        hostname: 'www.ap.org',
      },
    ],
  },
  trailingSlash: true,
  async redirects() {
    return [
      // Short URL redirects to practice area pages
      { source: '/probate/', destination: '/chicago-probate-lawyer/', permanent: true },
      { source: '/wills/', destination: '/chicago-wills-lawyer/', permanent: true },
      { source: '/trusts/', destination: '/chicago-revocable-trusts-lawyer/', permanent: true },
      { source: '/powers-of-attorney/', destination: '/chicago-powers-of-attorney-lawyer/', permanent: true },
      { source: '/healthcare-directives/', destination: '/chicago-healthcare-directives-lawyer/', permanent: true },
      { source: '/deeds/', destination: '/chicago-deeds-lawyer/', permanent: true },
      { source: '/prenuptial-agreements/', destination: '/chicago-prenuptial-agreements-lawyer/', permanent: true },
      { source: '/real-estate-closings/', destination: '/chicago-real-estate-closings-lawyer/', permanent: true },

      // Short URL redirects to service/utility pages
      { source: '/pricing/', destination: '/services-pricing/', permanent: true },
      { source: '/pricing-packages/', destination: '/services-pricing/', permanent: true },
      { source: '/faq/', destination: '/frequently-asked-questions/', permanent: true },
      { source: '/tax-calculator/', destination: '/illinois-estate-tax-calculator/', permanent: true },
      { source: '/consultation/', destination: '/book-consultation/', permanent: true },
      { source: '/services/', destination: '/services-pricing/', permanent: true },

      // Legacy redirects
      { source: '/chicago-uncontested-probate-lawyer/', destination: '/chicago-probate-lawyer/', permanent: true },
      { source: '/homepage/', destination: '/', permanent: true },
      { source: '/post/special-needs-trusts-in-illinois-a-vital-tool-for-protecting-your-loved-ones/', destination: '/', permanent: true },
      { source: '/post/step-by-step-guide-to-the-probate-process-in-kane-county-illinois/', destination: '/', permanent: true },
      { source: '/post/understanding-probate-in-illinois-what-you-need-to-know/', destination: '/', permanent: true },
      { source: '/post/how-much-do-wills-and-trusts-cost/', destination: '/', permanent: true },
      { source: '/specialneeds-planning/', destination: '/', permanent: true },
      { source: '/elmhurst/', destination: '/', permanent: true },
      { source: '/_files/ugd/20efe8_28e07de1ce484511addb986e26765710.docx', destination: '/wp-content/uploads/2025/09/Personal-Property-Memorandum.docx', permanent: true },
      { source: '/ook-county-probate-paperwork-every-form-one-bookmark-illinois-estate-law/', destination: '/cook-county-probate-paperwork-every-form-one-bookmark-illinois-estate-law/', permanent: true },
      { source: '/asset-protection/', destination: '/', permanent: true },
      { source: '/elder-law/', destination: '/blog/legal-considerations-for-aging-adults/', permanent: true },
      { source: '/estatetaxes/', destination: '/', permanent: true },
      { source: '/executor-administrator-guide/', destination: '/', permanent: true },
      { source: '/digital-asset-inventory-tool/', destination: '/', permanent: true },
      { source: '/trust-funding-checklist/', destination: '/', permanent: true },
      { source: '/guidebook-request/', destination: '/', permanent: true },
      { source: '/glossary/', destination: '/learning-center/', permanent: true },
      { source: '/glossary/:slug/', destination: '/learning-center/:slug/', permanent: true },
    ];
  },
};

module.exports = nextConfig;
