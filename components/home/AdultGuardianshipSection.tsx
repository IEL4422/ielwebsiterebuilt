import { Shield, Heart, Scale, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Legal Protection',
    description: 'Establish legal authority to make decisions for adults who can no longer manage their own affairs due to illness, injury, or disability.',
  },
  {
    icon: Heart,
    title: 'Compassionate Care',
    description: 'Ensure your loved ones receive the care they deserve from someone they trust, rather than leaving these crucial decisions to the courts.',
  },
  {
    icon: Scale,
    title: 'Court Navigation',
    description: 'We guide you through the Illinois guardianship process, handling petitions, hearings, and ongoing reporting requirements.',
  },
  {
    icon: Users,
    title: 'Family Peace of Mind',
    description: 'Proactive guardianship planning brings clarity and protection to your entire family, preventing disputes and uncertainty.',
  },
];

export function AdultGuardianshipSection() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Adult Guardianship
            </h2>
            <div className="w-16 h-1 bg-[#77B1D4] mb-6" />

            <div className="prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-5">
              <p>
                When a loved one can no longer make decisions for themselves due to illness, injury, or cognitive decline, adult guardianship provides a legal framework to protect their well-being. At Illinois Estate Law, we help families navigate this sensitive process with care and clarity.
              </p>
              <p>
                Guardianship planning ensures that children, elderly parents, or incapacitated loved ones receive care from someone you trust. It allows you to make these important decisions proactively rather than leaving them to the courts. Establishing guardianship in advance brings clarity, protection, and peace of mind to your family's future.
              </p>
              <p>
                Whether you need to establish guardianship of the person, guardianship of the estate, or both, our team will guide you through every step of the Illinois court process. We handle the legal complexities so you can focus on what matters most: caring for your loved one.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:3123730731"
                className="inline-flex items-center justify-center px-6 py-3 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors"
              >
                Call (312) 373-0731
              </a>
              <a
                href="/contact/"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#77B1D4] text-white font-semibold rounded-lg hover:bg-[#5A9BC4] transition-colors"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-[#E5F2F9] rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[#77B1D4]" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
