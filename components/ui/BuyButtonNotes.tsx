import { ATTORNEY_PROMISE, ONLINE_DISCOUNT_LINE, hasAttorneyPromise, hasOnlineDiscount } from '@/lib/online-signup';

/**
 * The short lines that sit right under a buy button: the attorney promise and,
 * for eligible estate planning packages, the online-purchase incentive.
 * Renders nothing for services that carry neither.
 */
export function BuyButtonNotes({
  serviceId,
  tone = 'light',
  align = 'center',
  className = '',
}: {
  serviceId: string;
  tone?: 'light' | 'dark';
  align?: 'center' | 'left';
  className?: string;
}) {
  const promise = hasAttorneyPromise(serviceId);
  const discount = hasOnlineDiscount(serviceId);
  if (!promise && !discount) return null;

  const promiseColor = tone === 'dark' ? 'text-white/85' : 'text-[#33414E]';
  const discountColor = tone === 'dark' ? 'text-[#C6D7E7]' : 'text-[#2F6B3F]';

  return (
    <div className={`mt-2 space-y-0.5 text-xs leading-relaxed ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      {promise && <p className={`font-semibold ${promiseColor}`}>{ATTORNEY_PROMISE}</p>}
      {discount && <p className={`font-semibold ${discountColor}`}>{ONLINE_DISCOUNT_LINE}</p>}
    </div>
  );
}
