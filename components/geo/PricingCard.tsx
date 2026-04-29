import { CircleCheck as CheckCircle } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: string;
  featured?: boolean;
}

export function PricingCard({ name, price, featured }: PricingCardProps) {
  return (
    <div
      className={`rounded-xl p-6 text-center border ${
        featured
          ? 'bg-[#2D3E50] text-white border-[#2D3E50] shadow-lg'
          : 'bg-white text-[#2D3E50] border-slate-200'
      }`}
    >
      <h3 className="font-['Plus_Jakarta_Sans'] text-base font-bold mb-3">{name}</h3>
      <p className={`text-3xl font-bold mb-1 ${featured ? 'text-white' : 'text-[#2D3E50]'}`}>
        {price}
      </p>
      <p className={`text-sm ${featured ? 'text-white/70' : 'text-slate-500'}`}>flat fee</p>
      <div className="mt-4 pt-4 border-t border-current/10">
        <span className={`inline-flex items-center gap-1.5 text-xs ${featured ? 'text-white/80' : 'text-slate-500'}`}>
          <CheckCircle className="h-3.5 w-3.5" />
          Unlimited consultation included
        </span>
      </div>
    </div>
  );
}
