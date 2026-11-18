// Only public catalog identifiers cross domains. No answers, prices, or arbitrary
// query parameters belong in this URL. Extend this map only with verified parity.
const packages: Record<string, string> = {
  'trust-package': 'trust',
  'will-package': 'will',
  'probate-avoidance-package': 'probate-avoidance',
  'diy-estate-plan-review': 'diy-review',
};

export function portalHandoff(serviceId?: string, clientType: 'individual' | 'joint' = 'individual') {
  const base = 'https://portal.illinoisestatelaw.com/get-started';
  const prefix = serviceId && Object.prototype.hasOwnProperty.call(packages, serviceId) ? packages[serviceId] : undefined;
  if (!prefix) return base;
  const tier = clientType === 'joint' ? 'joint' : 'individual';
  return `${base}?${new URLSearchParams({ handoff: 'website-v1', service: 'estate-planning', package: `${prefix}-${tier}` })}`;
}
