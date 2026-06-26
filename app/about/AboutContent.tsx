'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface TeamMember {
  name: string;
  title: string;
  email?: string;
  photo: string;
  photoPosition?: string;
  badge?: string;
  bio: string[];
  education?: { school: string; degrees: string[] }[];
  barAdmissions?: string[];
  memberships?: string[];
}

const attorneys: TeamMember[] = [
  {
    name: 'Mary Liberty',
    title: 'Founding Attorney & Owner',
    email: 'mary@illinoisestatelaw.com',
    photo: 'https://i.imgur.com/6wIB2nu.jpeg',
    bio: [
      "Mary Liberty is a Chicago-based estate planning and probate attorney who blends modern convenience with genuine human connection. She founded her virtual law practice with one mission in mind: to make high-quality legal planning accessible, affordable, and stress-free for families.",
      "Her work focuses on estate planning, probate, and her unique partial probate service, which helps clients smoothly transition their case from another attorney when communication or costs have become a problem. She's known for handling these matters with precision, empathy, and a dedication to clear communication.",
      "Unlike traditional firms, Mary operates on a 100% flat-fee model. There are no hourly bills, no hidden fees, and no surprise charges. Every client knows exactly what to expect from day one. And because her practice is entirely online, you can complete your entire legal process, from consultation to signed documents, without leaving your home.",
      "Mary works with a wide range of clients, from young parents naming guardians for the first time to blended families navigating complex dynamics. She is especially trusted by busy, tech-savvy professionals who appreciate her responsiveness, clear explanations, and ability to guide them through sensitive decisions without unnecessary stress.",
      "Clients often describe Mary as approachable, detail-oriented, and refreshingly transparent. They know she will respond quickly, explain everything in plain language, and take the time to understand their goals before recommending a solution.",
      "When she's not practicing law, Mary enjoys spending time with her family and her husband, going on adventures with her dog Margo, traveling, trying new restaurants, watching movies, and reading all types of books.",
    ],
    education: [
      { school: 'University of Illinois Urbana-Champaign', degrees: ["Bachelor's degree, Political Science & Social Work"] },
      { school: 'Loyola University Chicago School of Law', degrees: ['Doctor of Law (J.D.), Cum Laude'] },
    ],
    barAdmissions: ['Illinois'],
  },
  {
    name: 'Yassmin Koudmani',
    title: 'Senior Attorney',
    email: 'yassmin@illinoisestatelaw.com',
    photo: 'https://i.imgur.com/awwM5UZ.jpeg',
    badge: '🌐 Fluent in Arabic',
    bio: [
      "Yassmin is an estate planning and real estate Chicago-area attorney who helps clients plan for the future with clarity and confidence. Whether a client is buying their first home, growing a real estate portfolio, or making sure their loved ones are taken care of after passing, Yassmin is committed to making the process as seamless and stress-free as possible.",
      "Her estate planning work ranges from straightforward plans designed to keep assets out of probate, to more intricate strategies for business owners looking to protect what they have built. She works with clients to ensure that their estate plan is not only legally efficient, but also tailored to their specific wants and needs. On the real estate side, she counsels everyone from individual homebuyers and sellers to experienced investors, providing practical guidance at every step of the transaction.",
      "Yassmin is proud to serve Chicagoland's vibrant and diverse communities, offering counsel that is not only legally sound but culturally aware and personally attentive. She believes that every client deserves to feel informed, respected, and confident in the decisions that shape their family's future.",
      "Outside of the office, you will find Yassmin enjoying time with her family, experimenting with new recipes, and painting.",
    ],
    education: [
      { school: 'Columbia University in the City of New York', degrees: ["Bachelor's Degree, Political Science & Middle Eastern and South Asian Studies"] },
      { school: 'DePaul University College of Law', degrees: ['Doctor of Law (J.D.)'] },
    ],
    barAdmissions: ['Illinois'],
  },
  {
    name: 'Victoria Lozano',
    title: 'Senior Attorney',
    email: 'victoria@illinoisestatelaw.com',
    photo: 'https://i0.wp.com/planforwardlegal.com/wp-content/uploads/2026/01/IMG_3670.jpg',
    bio: [
      "Victoria Lozano is a senior attorney at Illinois Estate Law with a practice spanning estate planning, trust administration, and probate. She is especially passionate about helping families of every background — including LGBTQ+ individuals and couples — put thoughtful, comprehensive plans in place to protect the people they love.",
      "Before law school, Victoria built a career in academia, teaching English composition at both Coastal Carolina University and Appalachian State University, where she also served on the Women and Gender Studies Advisory Board. She later co-founded Blue Seven Content, a legal marketing firm serving attorneys nationwide. Victoria earned her J.D. from Chicago-Kent College of Law in 2022.",
      "At Illinois Estate Law, Victoria brings the same precision and commitment to clear communication she developed in her academic career to every client matter. She approaches each estate plan with care and close attention to her clients' individual goals and needs.",
    ],
    education: [
      { school: 'Coastal Carolina University', degrees: ["Bachelor's Degree, English"] },
      { school: 'Appalachian State University', degrees: ["Master's Degree, English"] },
      { school: 'Chicago-Kent College of Law', degrees: ['Doctor of Law (J.D.), 2022'] },
    ],
    barAdmissions: ['Illinois'],
    memberships: [
      'Chicago Bar Association',
      'American Bar Association',
      'Lesbian and Gay Bar Association of Chicago (LAGBAC)',
    ],
  },
];

const staffMembers: TeamMember[] = [
  {
    name: 'Brittany Hardy',
    title: 'Lead Paralegal',
    email: 'brittany@illinoisestatelaw.com',
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
    email: 'jessica@illinoisestatelaw.com',
    photo: 'https://i.imgur.com/frsdrvF.jpeg',
    photoPosition: '50% 22%',
    bio: [
      "Having worked her way up within the firm, Jessica brings a well-rounded understanding of what it takes to deliver a supportive and efficient experience from start to finish. She works across all areas of Illinois Estate Law with a commitment to keeping matters running smoothly and ensuring every client feels informed and in capable hands throughout the process.",
      "She takes pride in the meaningful nature of her work — supporting people through some of life's most challenging times and helping them reach the best possible outcome is something she finds genuinely rewarding.",
      "When she isn't working, Jessica can usually be found planning her next adventure. Australia currently holds the top spot on her list of favourite destinations.",
    ],
  },
  {
    name: 'Maggie Patterson',
    title: 'Intake Specialist',
    email: 'maggie@illinoisestatelaw.com',
    photo: 'https://i.imgur.com/e8WsqQd.jpeg',
    photoPosition: '50% 8%',
    bio: [
      "Hi! I'm Maggie Patterson, Customer Service Specialist at Illinois Estate Law. I graduated from the University of Wisconsin–River Falls in 2016 with a degree in Communication Studies. Originally from the Chanhassen/Minnetonka area in Minnesota (and a proud Packers fan), I spent the last seven years in the health and wellness industry before transitioning into estate law.",
      "I recently moved to Northern Michigan with my partner, Kyle, and our black lab, Sam. We love fishing, spending time with friends and family, traveling, and enjoying the outdoors. I'm excited to bring my passion for helping people and building meaningful relationships to the Illinois Estate Law team and to start this new chapter in the Upper Peninsula.",
    ],
  },
];

function TeamCard({ member, onClick }: { member: TeamMember; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group text-left w-full rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-100 hover:shadow-md transition-all duration-200 cursor-pointer"
    >
      <div className="aspect-[3/4] overflow-hidden bg-slate-100 relative">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          style={{ objectPosition: member.photoPosition ?? '50% 20%' }}
        />
        <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="bg-white text-slate-800 text-sm font-semibold px-4 py-2 rounded-full shadow-md">
            View Bio →
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-slate-800 text-lg leading-snug">{member.name}</h3>
        <p className="text-[#4A708B] text-sm font-semibold font-['Plus_Jakarta_Sans'] mt-0.5">{member.title}</p>
        {member.badge && (
          <span className="inline-block mt-2 text-xs px-2.5 py-0.5 rounded-full bg-[#4A708B]/10 text-[#4A708B] font-semibold">
            {member.badge}
          </span>
        )}
      </div>
    </button>
  );
}

function BulletItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 text-slate-600 text-sm">
      <svg fill="none" height="8" width="8" xmlns="http://www.w3.org/2000/svg" className="mt-1.5 flex-shrink-0">
        <circle cx="4" cy="4" fill="#77B1D4" r="4" />
      </svg>
      <span>{text}</span>
    </div>
  );
}

export function AboutContent() {
  const [selected, setSelected] = useState<TeamMember | null>(null);

  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [close]);

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  return (
    <main>
      {/* Hero */}
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

      {/* Attorneys */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-[1140px] mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#4A708B]/10 text-[#4A708B] text-sm font-semibold font-['Plus_Jakarta_Sans'] whitespace-nowrap">
                Attorneys
              </span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {attorneys.map((member) => (
                <TeamCard key={member.name} member={member} onClick={() => setSelected(member)} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-[1140px] mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#4A708B]/10 text-[#4A708B] text-sm font-semibold font-['Plus_Jakarta_Sans'] whitespace-nowrap">
                Our Staff
              </span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {staffMembers.map((member) => (
                <TeamCard key={member.name} member={member} onClick={() => setSelected(member)} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video */}
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

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm"
          onClick={close}
        >
          <div className="flex min-h-full items-center justify-center p-4 py-8">
          <div
            className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={close}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-6 lg:p-8">
              {/* Header: photo + name */}
              <div className="flex flex-col sm:flex-row gap-6 mb-6">
                <div className="w-full sm:w-36 flex-shrink-0">
                  <div className="rounded-xl overflow-hidden relative" style={{ aspectRatio: '3/4' }}>
                    <Image
                      src={selected.photo}
                      alt={selected.name}
                      fill
                      className="object-cover"
                      style={{ objectPosition: selected.photoPosition ?? '50% 20%' }}
                    />
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <h2 className="text-2xl font-bold text-slate-800 mb-1">{selected.name}</h2>
                  <p className="text-[#4A708B] font-semibold font-['Plus_Jakarta_Sans'] mb-2">{selected.title}</p>
                  {selected.badge && (
                    <span className="inline-block text-xs px-2.5 py-0.5 rounded-full bg-[#4A708B]/10 text-[#4A708B] font-semibold mb-3">
                      {selected.badge}
                    </span>
                  )}
                  {selected.email && (
                    <a
                      href={`mailto:${selected.email}`}
                      className="flex items-center gap-1.5 text-slate-500 hover:text-[#4A708B] text-sm transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {selected.email}
                    </a>
                  )}
                </div>
              </div>

              {/* Bio */}
              <div className="w-12 h-0.5 bg-[#77B1D4] mb-5" />
              <div className="space-y-4 text-slate-600 leading-relaxed mb-6">
                {selected.bio.map((para, i) => <p key={i}>{para}</p>)}
              </div>

              {/* Education */}
              {selected.education && (
                <div className="border-t border-slate-100 pt-5 mb-5">
                  <h3 className="text-base font-bold text-slate-800 mb-3">Education</h3>
                  <div className="space-y-3">
                    {selected.education.map((edu, i) => (
                      <div key={i}>
                        <p className="font-semibold text-slate-700 text-sm mb-1">{edu.school}</p>
                        {edu.degrees.map((d, j) => <BulletItem key={j} text={d} />)}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Bar Admissions */}
              {selected.barAdmissions && (
                <div className="border-t border-slate-100 pt-5 mb-5">
                  <h3 className="text-base font-bold text-slate-800 mb-3">Bar Admission</h3>
                  {selected.barAdmissions.map((bar, i) => <BulletItem key={i} text={bar} />)}
                </div>
              )}

              {/* Memberships */}
              {selected.memberships && (
                <div className="border-t border-slate-100 pt-5">
                  <h3 className="text-base font-bold text-slate-800 mb-3">Professional Memberships</h3>
                  <div className="space-y-1">
                    {selected.memberships.map((m, i) => <BulletItem key={i} text={m} />)}
                  </div>
                </div>
              )}
            </div>
          </div>
          </div>
        </div>
      )}
    </main>
  );
}
