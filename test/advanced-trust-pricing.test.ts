import { describe, expect, it } from 'vitest';
import { serviceCategories } from '../components/services/CategorizedServicesDisplay';
import { ESTATE_PLANNING } from '../lib/pricing';
import { allServices } from '../lib/services-data';

describe('standalone advanced-trust pricing', () => {
  it('uses the approved concrete prices from the canonical pricing source', () => {
    expect(ESTATE_PLANNING.medicaidAssetProtectionTrust).toBe(4000);
    expect(ESTATE_PLANNING.irrevocableLifeInsuranceTrust).toBe(4000);
    expect(ESTATE_PLANNING.irrevocableTrust).toBe(4000);
    expect(ESTATE_PLANNING.medicaidAssetProtectionTrustJoint).toBe(5000);
    expect(ESTATE_PLANNING.maptPackageIndividual).toBe(6000);
    expect(ESTATE_PLANNING.maptPackageJoint).toBe(7500);
  });

  it('offers MAPT and ILIT as independent selectable services', () => {
    const mapTrust = allServices.find(service => service.id === 'medicaid-asset-protection-trust');
    const lifeInsuranceTrust = allServices.find(service => service.id === 'irrevocable-life-insurance-trust');

    expect(mapTrust).toMatchObject({
      name: 'Medicaid Asset Protection Trust',
      individualPrice: 4000,
      jointPrice: 5000,
      standardizedServiceName: 'Medicaid Asset Protection Trust',
    });
    expect(mapTrust?.description).toContain('standalone');
    expect(mapTrust?.includes.join(' ')).toContain('five-year look-back');
    expect(mapTrust?.note).toContain('no other estate-planning package is required');

    expect(lifeInsuranceTrust).toMatchObject({
      name: 'Irrevocable Life Insurance Trust (ILIT)',
      fixedPrice: 4000,
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
    const mapt = standalone?.find(service => service.name === 'Medicaid Asset Protection Trust');
    const ilit = standalone?.find(service => service.name !== 'Medicaid Asset Protection Trust');
    expect(mapt).toMatchObject({ individualPrice: 4000, jointPrice: 5000 });
    expect(ilit?.fixedPrice).toBe(4000);
    expect(estatePlanning?.aLaCarte.some(service => service.name === 'Irrevocable Trust')).toBe(false);
  });

  it('offers the MAPT Package at $6,000 individual and $7,500 joint', () => {
    const pkg = allServices.find(service => service.id === 'medicaid-asset-protection-trust-package');
    expect(pkg).toMatchObject({ individualPrice: 6000, jointPrice: 7500 });
    const estatePlanning = serviceCategories.find(category => category.id === 'estate-planning');
    const card = estatePlanning?.packages.find(p => p.name.includes('Medicaid Asset Protection Trust Package'));
    expect(card).toMatchObject({ individualPrice: 6000, jointPrice: 7500 });
  });
});
