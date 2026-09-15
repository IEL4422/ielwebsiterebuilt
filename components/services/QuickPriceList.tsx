'use client';

import { useState } from 'react';
import { X, ListChecks } from 'lucide-react';
import {
  serviceCategories,
  getServicePriceText,
  type Service,
} from './CategorizedServicesDisplay';

/**
 * Quick, scannable name -> price list of every current service.
 *
 * Pulls straight from `serviceCategories` (the same data that renders the full
 * Services & Pricing cards), so prices can never drift from the page. This view
 * intentionally shows ONLY the service name and its price — no inclusion
 * bullets, notes, or marketing copy.
 */
export function QuickPriceList() {
  const [open, setOpen] = useState(false);

  const rowsFor = (services: Service[]) =>
    services.map((service, i) => (
      <li
        key={i}
        className="flex items-baseline justify-between gap-4 py-2 border-b border-gray-100 last:border-b-0"
      >
        <span className="font-['Plus_Jakarta_Sans'] text-[15px] text-[#2d3e50] sm:text-[14px]">
          {service.name}
        </span>
        <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[15px] text-[#33414E] text-right whitespace-nowrap sm:whitespace-normal sm:text-[13px]">
          {getServicePriceText(service)}
        </span>
      </li>
    ));

  return (
    <div className="mb-6">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-[10px] bg-gradient-to-r from-[#33414E] to-[#4A708B] px-6 py-3 font-['Plus_Jakarta_Sans'] font-bold text-[16px] text-[#fefefe] shadow-sm hover:from-[#4A708B] hover:to-[#33414E] transition-all sm:text-[15px] sm:px-5 sm:py-3 sm:w-full sm:justify-center"
      >
        <ListChecks className="w-5 h-5 flex-shrink-0" />
        Quick price list — see all services &amp; prices
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/50 p-4 sm:p-2"
          role="dialog"
          aria-modal="true"
          aria-label="Quick price list of all services"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative my-8 w-full max-w-[720px] rounded-xl bg-white shadow-xl sm:my-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 flex items-center justify-between gap-4 rounded-t-xl border-b border-gray-200 bg-gradient-to-r from-[#33414E] to-[#4A708B] px-6 py-4 sm:px-4">
              <div>
                <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[22px] text-[#fefefe] sm:text-[18px]">
                  All Services &amp; Prices
                </h2>
                <p className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#e5e5e5] mt-0.5 sm:text-[12px]">
                  Quick reference. Scroll the full page for what each includes.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close price list"
                className="flex-shrink-0 rounded-full p-2 text-[#fefefe] hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto px-6 py-5 sm:px-4">
              {serviceCategories.map((category) => {
                const groups: Array<{ label: string | null; items: Service[] }> = [
                  { label: null, items: category.packages },
                  { label: 'A La Carte', items: category.aLaCarte },
                  { label: 'Add-Ons', items: category.addOns },
                ].filter((g) => g.items.length > 0);

                if (groups.length === 0) return null;

                return (
                  <div key={category.id} className="mb-6 last:mb-0">
                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[18px] text-[#33414E] border-b-2 border-[#4A708B] pb-1 mb-2 sm:text-[16px]">
                      {category.name}
                    </h3>
                    {groups.map((group, gi) => (
                      <div key={gi} className="mb-2 last:mb-0">
                        {group.label && (
                          <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[13px] uppercase tracking-wide text-[#4A708B] mt-3 mb-1">
                            {group.label}
                          </p>
                        )}
                        <ul>{rowsFor(group.items)}</ul>
                      </div>
                    ))}
                  </div>
                );
              })}

              <p className="font-['Plus_Jakarta_Sans'] text-[12px] text-gray-500 mt-4 border-t border-gray-100 pt-3">
                Prices are flat fees unless noted. Some matters (e.g. estate tax,
                large estate, contested probate) include a base fee plus a
                percentage or hourly component as shown. Third-party costs such as
                surety bonds are billed separately.
              </p>
            </div>

            <div className="rounded-b-xl border-t border-gray-200 bg-gray-50 px-6 py-3 text-right sm:px-4">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-[8px] bg-[#33414E] px-5 py-2 font-['Plus_Jakarta_Sans'] font-semibold text-[14px] text-[#fefefe] hover:bg-[#4A708B] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
