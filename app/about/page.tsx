import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Meet Our Team | Illinois Estate Law',
  description: "Meet the team at Illinois Estate Law — experienced estate planning and probate professionals dedicated to making high-quality legal planning accessible for Illinois families.",
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  alternates: {
    canonical: 'https://www.illinoisestatelaw.com/about/',
  },
  openGraph: {
    url: 'https://www.illinoisestatelaw.com/about/',
    siteName: 'Illinois Estate Law',
    locale: 'en_US',
    type: 'article',
    title: 'Meet Our Team | Illinois Estate Law',
    description: "Meet the team at Illinois Estate Law — experienced estate planning and probate professionals dedicated to making high-quality legal planning accessible for Illinois families.",
  },
  twitter: {
    card: 'summary',
    title: 'Meet Our Team | Illinois Estate Law',
    description: "Meet the team at Illinois Estate Law — experienced estate planning and probate professionals dedicated to making high-quality legal planning accessible for Illinois families.",
  },
};

const attorneySchema = {
  "@context": "https://schema.org",
  "@type": "Attorney",
  "name": "Mary Liberty",
  "url": "https://www.illinoisestatelaw.com/about",
  "jobTitle": "Estate Planning & Probate Attorney",
  "worksFor": {
    "@type": "LegalService",
    "name": "Illinois Estate Law",
    "url": "https://www.illinoisestatelaw.com"
  },
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Loyola University Chicago School of Law"
  },
  "award": "SuperLawyers Rising Star 2025, 2026",
  "knowsAbout": [
    "Estate Planning",
    "Probate Law",
    "Wills",
    "Trusts",
    "Powers of Attorney",
    "Illinois Estate Law"
  ]
};

// ─── Staff data ────────────────────────────────────────────────────────────────

const staffMembers = [
  {
    name: 'Brittany Hardy',
    title: 'Lead Paralegal',
    photo: 'https://i.imgur.com/X9nucbX.jpeg',
    photoPosition: '50% 30%',
    bio: [
      "Brittany Hardy is a paralegal at Illinois Estate Law, where she supports clients through the estate planning and probate process with care, precision, and a commitment to getting the details right. With more than seven years of legal experience spanning estate law, guardianship, family law, and real estate, Brittany brings both depth of knowledge and a steady hand to every matter she touches.",
      "Prior to joining Illinois Estate Law, Brittany built her career supporting attorneys across a range of practice areas, where she managed complex caseloads, developed internal systems, and trained incoming staff. She holds a paralegal certificate and is passionate about the operational side of legal practice — building workflows and processes that allow the firm to serve clients more efficiently and effectively.",
      "Outside of work, Brittany enjoys life at home with her two boys, Aiden and Liam, and their dog Rip. She is dedicated to making the legal process feel less overwhelming for clients navigating some of life's most significant transitions.",
    ],
  },
  {
    name: 'Jessica Sallows',
    title: 'Paralegal',
    photo: 'https://i.imgur.com/frsdrvF.jpeg',
    photoPosition: '50% 20%',
    bio: [
      "Having worked her way up within the firm, Jessica brings a well-rounded understanding of what it takes to deliver a supportive and efficient experience from start to finish. She works across all areas of Illinois Estate Law with a commitment to keeping matters running smoothly and ensuring every client feels informed and in capable hands throughout the process.",
      "She takes pride in the meaningful nature of her work — supporting people through some of life's most challenging times and helping them reach the best possible outcome is something she finds genuinely rewarding.",
      "When she isn't working, Jessica can usually be found planning her next adventure. Australia currently holds the top spot on her list of favourite destinations.",
    ],
  },
  {
    name: 'Maggie Patterson',
    title: 'Intake Specialist',
    photo: 'https://i.imgur.com/e8WsqQd.jpeg',
    photoPosition: '50% 8%',
    bio: [
      "Hi! I'm Maggie Patterson, Customer Service Specialist at Illinois Estate Law. I graduated from the University of Wisconsin–River Falls in 2016 with a degree in Communication Studies. Originally from the Chanhassen/Minnetonka area in Minnesota (and a proud Packers fan), I spent the last seven years in the health and wellness industry before transitioning into estate law.",
      "I recently moved to Northern Michigan with my partner, Kyle, and our black lab, Sam. We love fishing, spending time with friends and family, traveling, and enjoying the outdoors. I'm excited to bring my passion for helping people and building meaningful relationships to the Illinois Estate Law team and to start this new chapter in the Upper Peninsula.",
    ],
  },
];

// ──────────────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(attorneySchema) }}
      />

      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] min-h-[180px] flex items-center py-10 lg:min-h-[160px] sm:min-h-[140px]">
        <div className="container mx-auto px-4">
          <div className="max-w-[1140px] mx-auto text-center">
            <h1 className="font-['Lobster_Two'] text-[50px] md:text-[60px] lg:text-[75px] font-normal text-white leading-[54px] md:leading-[65px] lg:leading-[80px]">
              Meet Our Team
            </h1>
            <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto font-['Plus_Jakarta_Sans']">
              Dedicated professionals committed to making estate planning and probate approachable for every Illinois family.
            </p>
          </div>
        </div>
      </section>

      {/* ── Mary Liberty — Lead Attorney ── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-[1140px] mx-auto">

            {/* Section label */}
            <div className="flex items-center gap-4 mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#4A708B]/10 text-[#4A708B] text-sm font-semibold font-['Plus_Jakarta_Sans'] whitespace-nowrap">
                Founding Attorney
              </span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Left Column — Content */}
              <div className="lg:col-span-2">
                {/* Mobile photo */}
                <div className="lg:hidden mb-8">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://i.imgur.com/6wIB2nu.jpeg"
                      alt="Mary Liberty — Attorney"
                      width={400}
                      height={600}
                      className="w-full h-auto object-cover"
                      priority
                    />
                  </div>
                </div>

                <h2 className="text-2xl lg:text-3xl font-bold mb-2 text-slate-800">Mary Liberty</h2>
                <p className="text-[#4A708B] font-semibold font-['Plus_Jakarta_Sans'] mb-6">Estate Planning &amp; Probate Attorney</p>
                <div className="w-16 h-1 bg-[#77B1D4] mb-8" />

                <div className="space-y-4 text-slate-600 leading-relaxed mb-12">
                  <p>Mary Liberty is a Chicago-based estate planning and probate attorney who blends modern convenience with genuine human connection. She founded her virtual law practice with one mission in mind: to make high-quality legal planning accessible, affordable, and stress-free for families.</p>
                  <p>Her work focuses on estate planning, probate, and her unique partial probate service, which helps clients smoothly transition their case from another attorney when communication or costs have become a problem. She&apos;s known for handling these matters with precision, empathy, and a dedication to clear communication.</p>
                  <p>Unlike traditional firms, Mary operates on a 100% flat-fee model. There are no hourly bills, no hidden fees, and no surprise charges. Every client knows exactly what to expect from day one. And because her practice is entirely online, you can complete your entire legal process, from consultation to signed documents, without leaving your home.</p>
                  <p>Mary works with a wide range of clients, from young parents naming guardians for the first time to blended families navigating complex dynamics. She is especially trusted by busy, tech-savvy professionals who appreciate her responsiveness, clear explanations, and ability to guide them through sensitive decisions without unnecessary stress.</p>
                  <p>Clients often describe Mary as approachable, detail-oriented, and refreshingly transparent. They know she will respond quickly, explain everything in plain language, and take the time to understand their goals before recommending a solution.</p>
                  <p>When she&apos;s not practicing law, Mary enjoys spending time with her family and her husband, going on adventures with her dog Margo, traveling, trying new restaurants, watching movies, and reading all types of books.</p>
                </div>

                <div className="mt-12">
                  <p className="text-xl lg:text-2xl font-bold text-slate-800 mb-6">Education</p>

                  <h3 className="text-lg font-bold text-slate-800 mb-3">University of Illinois Urbana-Champaign</h3>
                  <ul className="mb-8">
                    <li className="flex items-start gap-3 text-slate-600">
                      <svg fill="none" height="12" width="12" xmlns="http://www.w3.org/2000/svg" className="mt-2 flex-shrink-0">
                        <circle cx="6" cy="6" fill="#77B1D4" r="6" />
                      </svg>
                      <span>Bachelor&apos;s degree, Political Science &amp; Social Work</span>
                    </li>
                  </ul>

                  <h3 className="text-lg font-bold text-slate-800 mb-3">Loyola University Chicago School of Law</h3>
                  <ul className="mb-8">
                    <li className="flex items-start gap-3 text-slate-600">
                      <svg fill="none" height="12" width="12" xmlns="http://www.w3.org/2000/svg" className="mt-2 flex-shrink-0">
                        <circle cx="6" cy="6" fill="#77B1D4" r="6" />
                      </svg>
                      <span>Doctor of Law (J.D.), (Cum Laude)</span>
                    </li>
                  </ul>

                  <p className="text-xl lg:text-2xl font-bold text-slate-800 mb-4">Bar Admission</p>
                  <ul>
                    <li className="flex items-start gap-3 text-slate-600">
                      <svg fill="none" height="12" width="12" xmlns="http://www.w3.org/2000/svg" className="mt-2 flex-shrink-0">
                        <circle cx="6" cy="6" fill="#77B1D4" r="6" />
                      </svg>
                      <span>Illinois</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column — Sticky photo (desktop) */}
              <div className="lg:col-span-1 hidden lg:block">
                <div className="sticky top-24">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://i.imgur.com/6wIB2nu.jpeg"
                      alt="Mary Liberty — Attorney"
                      width={400}
                      height={600}
                      className="w-full h-auto object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Staff Members ── */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-[1140px] mx-auto">

            {/* Section label */}
            <div className="flex items-center gap-4 mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#4A708B]/10 text-[#4A708B] text-sm font-semibold font-['Plus_Jakarta_Sans'] whitespace-nowrap">
                Our Staff
              </span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
              {staffMembers.map((member) => (
                <div
                  key={member.name}
                  className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col"
                >
                  {/* Photo */}
                  <div className="w-full aspect-[4/3] overflow-hidden bg-slate-100">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={600}
                      height={450}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: member.photoPosition ?? '50% 30%' }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8 flex flex-col flex-1">
                    <div className="mb-5">
                      <h2 className="text-xl font-bold text-slate-800 mb-1">{member.name}</h2>
                      <p className="text-[#4A708B] font-semibold text-sm font-['Plus_Jakarta_Sans']">{member.title}</p>
                    </div>
                    <div className="w-12 h-0.5 bg-[#77B1D4] mb-5" />
                    <div className="space-y-4 text-slate-600 leading-relaxed text-sm lg:text-base">
                      {member.bio.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Video ── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-[1140px] mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4 text-center">
              Meet Illinois Estate Law
            </h2>
            <div className="w-16 h-1 bg-[#77B1D4] mb-8 mx-auto" />
            <p className="text-slate-600 text-lg text-center mb-12 max-w-3xl mx-auto">
              Watch this video to learn more about Illinois Estate Law and how we can help you with your estate planning needs.
            </p>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video bg-slate-100 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/mkZU_fciF9o"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
