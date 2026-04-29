import { MapPin, Phone, FileText } from 'lucide-react';

interface CourthouseCardProps {
  county: string;
  address: string;
  phone: string;
  filingSystems: string;
}

export function CourthouseCard({ county, address, phone, filingSystems }: CourthouseCardProps) {
  return (
    <section className="py-16 lg:py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <div className="max-w-[1140px] mx-auto">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 md:p-10 max-w-2xl mx-auto">
            <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#2D3E50] mb-6">
              {county} Circuit Court
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#4A708B] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-slate-700">Address</p>
                  <p className="text-sm text-slate-600">{address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[#4A708B] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-slate-700">Phone</p>
                  <p className="text-sm text-slate-600">{phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-[#4A708B] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-slate-700">Filing Notes</p>
                  <p className="text-sm text-slate-600">{filingSystems}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
