import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-[#2D3E50] rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#2D3E50] mb-2">
        {title}
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
