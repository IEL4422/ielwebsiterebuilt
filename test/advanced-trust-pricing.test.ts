import { describe, expect, it } from 'vitest';
import { serviceCategories } from '../components/services/CategorizedServicesDisplay';
import { ESTATE_PLANNING } from '../lib/pricing';
import { allServices } from '../lib/services-data';

describe('standalone advanced-trust pricing', () => {
  it('uses the approved concrete prices from the canonical pricing source', () => {
    expect(ESTATE_PLANNING.medicaidAssetProtectionTrust).toBe(6500);
    expect(ESTATE_PLANNING.irrevocableLifeInsuranceTrust).toBe(5500);
  });

  it('offers MAPT and ILIT as independent selectable services', () => {
    const mapTrust = allServices.find(service => service.id === 'medicaid-asset-protection-trust');
    const lifeInsuranceTrust = allServices.find(service => service.id === 'irrevocable-life-insurance-trust');

    expect(mapTrust).toMatchObject({
      name: 'Medicaid Asset Protection Trust',
      fixedPrice: 6500,
      standardizedServiceName: 'Medicaid Asset Protection Trust',
    });
    expect(mapTrust?.description).toContain('standalone');
    expect(mapTrust?.includes.join(' ')).toContain('five-year look-back');
    expect(mapTrust?.note).toContain('no other estate-planning package is required');

    expect(lifeInsuranceTrust).toMatchObject({
      name: 'Irrevocable Life Insurance Trust (ILIT)',
      fixedPrice: 5500,
      standardizedServiceName: 'Irrevocable Life Insurance Trust',
    });
    expect(lifeInsuranceTrust?.description).toContain('standalone');
    expect(lifeInsuranceTrust?.includes.join(' ')).toContain('Crummey withdrawal-notice');
    expect(lifeInsuranceTrust?.note).toContain('no other estate-planning package is required');
    expect(allServices.some(service => service.id === 'irrevocable-trust')).toBe(false);
  });

  it('shows both standalone services on the public pricing surface', () => {
    const estatePlanning = serviceCategories.find(category => category.id === 'estate-planning');
    const standalone = estatePlanning?.aLaCarte.filter(service =>
      ['Medicaid Asset Protection Trust', 'Irrevocable Life Insurance Trust (ILIT)'].includes(service.name)
    );

    expect(standalone).toHaveLength(2);
    expect(standalone?.map(service => service.fixedPrice).sort()).toEqual([5500, 6500]);
    expect(estatePlanning?.aLaCarte.some(service => service.name === 'Irrevocable Trust')).toBe(false);
  });
});
