'use client';

import { useState, useEffect } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { estatePlanningPackages, probatePackages, aLaCarteServices, prenuptialServices, type Service } from '@/lib/services-data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { createClient } from '@supabase/supabase-js';
import { CheckIcon } from '@/components/icons/CheckIcon';

const getSupabaseClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase environment variables are not configured');
  }

  return createClient(supabaseUrl, supabaseAnonKey);
};

type Step = 'select-service' | 'add-ons' | 'client-info' | 'agreement' | 'payment-selection' | 'payment-plan-confirmation';

interface AddOn {
  id: string;
  name: string;
  price: number;
  individualPrice?: number;
  jointPrice?: number;
  description: string;
}

const allAddOns: AddOn[] = [
  {
    id: 'trust-funding',
    name: 'Trust Funding Assistance',
    price: 500,
    individualPrice: 500,
    jointPrice: 1000,
    description: 'Professional assistance with transferring bank accounts, investment accounts, and other financial assets into your trust'
  },
  {
    id: 'additional-deed',
    name: 'Additional Deed',
    price: 500,
    description: 'One deed transferring property to trust is included in the package. For those owning multiple properties, purchase additional deeds here.'
  },
  {
    id: 'transfer-on-death',
    name: 'Transfer-On-Death Instrument',
    price: 500,
    description: 'Transfer on death designation for real estate'
  },
  {
    id: 'special-needs-planning',
    name: 'Special Needs Planning',
    price: 2500,
    description: 'Special needs trust planning and documentation'
  },
  {
    id: 'estate-tax-planning',
    name: 'Estate Tax Planning',
    price: 5000,
    description: 'Comprehensive estate tax planning strategies'
  },
  {
    id: 'charitable-planning',
    name: 'Charitable Planning',
    price: 2500,
    description: 'Charitable giving and trust planning'
  }
];

const getAvailableAddOns = (serviceId: string): AddOn[] => {
  switch (serviceId) {
    case 'trust-package':
      return allAddOns.filter(a =>
        ['trust-funding', 'additional-deed', 'special-needs-planning', 'estate-tax-planning', 'charitable-planning'].includes(a.id)
      );
    case 'probate-avoidance-package':
      return [];
    case 'will-package':
      return allAddOns.filter(a => a.id === 'transfer-on-death');
    case 'diy-estate-plan-review':
      return allAddOns.filter(a => a.id === 'transfer-on-death');
    case 'revocable-living-trust':
      return allAddOns.filter(a => a.id === 'trust-funding');
    default:
      return [];
  }
};

export default function PurchaseServicePage() {
  const [step, setStep] = useState<Step>('select-service');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [clientType, setClientType] = useState<'individual' | 'joint'>('individual');
  const [clientInfo, setClientInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [agreementAccepted, setAgreementAccepted] = useState(false);
  const [probateAcknowledgment, setProbateAcknowledgment] = useState(false);
  const [signature, setSignature] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [expandedDescriptions, setExpandedDescriptions] = useState<Set<string>>(new Set());
  const [paymentMethod, setPaymentMethod] = useState<'full' | 'plan' | null>(null);
  const [purchaseId, setPurchaseId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'ads_conversion_Purchase_1', {});
    }
  }, []);

  const getServicePrice = (service: Service, type: 'individual' | 'joint') => {
    if (service.fixedPrice) return service.fixedPrice;
    return type === 'individual' ? service.individualPrice! : service.jointPrice!;
  };

  const getAddOnsTotal = () => {
    return selectedAddOns.reduce((total, addOnId) => {
      const addOn = allAddOns.find(a => a.id === addOnId);
      if (!addOn) return total;

      if (addOn.id === 'trust-funding') {
        return total + (clientType === 'individual' ? addOn.individualPrice! : addOn.jointPrice!);
      }

      return total + addOn.price;
    }, 0);
  };

  const getTotalPrice = () => {
    if (!selectedService) return 0;
    const basePrice = getServicePrice(selectedService, clientType);
    return basePrice + getAddOnsTotal();
  };

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setProbateAcknowledgment(false);
    if (service.category === 'estate-planning' || service.id === 'revocable-living-trust') {
      setStep('add-ons');
    } else {
      setStep('client-info');
    }
  };

  const toggleAddOn = (addOnId: string) => {
    setSelectedAddOns(prev =>
      prev.includes(addOnId)
        ? prev.filter(id => id !== addOnId)
        : [...prev, addOnId]
    );
  };

  const handleAddOnsComplete = () => {
    setStep('client-info');
  };

  const handleClientInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('agreement');
  };

  const handleAgreementSign = async () => {
    if (!agreementAccepted || !signature || !selectedService) return;

    setIsProcessing(true);

    try {
      const totalPrice = getTotalPrice();
      const addOnsNames = selectedAddOns.map(addOnId => {
        const addOn = allAddOns.find(a => a.id === addOnId);
        return addOn?.name;
      }).filter(Boolean);

      const supabase = getSupabaseClient();
      const { data, error } = await supabase
        .from('service_purchases')
        .insert({
          client_name: clientInfo.name,
          client_email: clientInfo.email,
          client_phone: clientInfo.phone,
          service_type: selectedService.category,
          service_name: selectedService.name,
          service_price: totalPrice,
          client_type: clientType,
          agreement_signed: true,
          agreement_signature: signature,
          agreement_signed_at: new Date().toISOString(),
          stripe_payment_status: 'pending',
          add_ons: addOnsNames.length > 0 ? addOnsNames.join(', ') : null
        })
        .select()
        .maybeSingle();

      if (error) throw error;

      setPurchaseId(data?.id || null);
      setStep('payment-selection');
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePaymentMethodSelect = async (method: 'full' | 'plan') => {
    setPaymentMethod(method);

    if (method === 'full') {
      setIsProcessing(true);
      try {
        const totalPrice = getTotalPrice();
        const apiUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/create-checkout-session`;
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            purchaseId: purchaseId,
            serviceName: selectedService?.name,
            price: totalPrice,
            clientEmail: clientInfo.email
          })
        });

        if (!response.ok) throw new Error('Failed to create checkout session');

        const { url } = await response.json();
        window.location.href = url;
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
        setIsProcessing(false);
      }
    } else if (method === 'plan') {
      setIsProcessing(true);
      try {
        const totalPrice = getTotalPrice();
        const setupFee = totalPrice * 0.05;
        const totalWithFee = totalPrice + setupFee;

        const getServiceType = (category: string, serviceName: string) => {
          if (category === 'estate-planning') return 'Estate Planning';
          if (category === 'probate') return 'Probate';
          if (category === 'a-la-carte') {
            const deedServices = ['Quit Claim Deed', 'Transfer-on-Death Instrument', 'Life Estate Deed'];
            if (deedServices.some(d => serviceName.includes(d))) return 'Deed';
            if (serviceName.includes('Document Review')) return 'Document Review';
            return 'Estate Planning';
          }
          return 'Estate Planning';
        };

        const apiUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/submit-payment-plan`;
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: clientInfo.name.split(' ')[0],
            lastName: clientInfo.name.split(' ').slice(1).join(' '),
            packagePurchased: selectedService?.name,
            totalPrice: totalWithFee,
            email: clientInfo.email,
            phoneNumber: clientInfo.phone,
            typeOfService: getServiceType(selectedService?.category || '', selectedService?.name || '')
          })
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Payment plan submission failed:', errorData);
          throw new Error(errorData.error || 'Payment plan submission failed');
        }

        setStep('payment-plan-confirmation');
      } catch (error) {
        console.error('Payment plan error:', error);
        alert('An error occurred submitting your payment plan request. Please try again or contact us at (312) 373-0731.');
      } finally {
        setIsProcessing(false);
      }
    }
  };

  const toggleDescription = (serviceId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedDescriptions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(serviceId)) {
        newSet.delete(serviceId);
      } else {
        newSet.add(serviceId);
      }
      return newSet;
    });
  };

  const renderServiceCard = (service: Service) => {
    const hasMultiplePrices = service.individualPrice && service.jointPrice;
    const isExpanded = expandedDescriptions.has(service.id);

    return (
      <div
        key={service.id}
        className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-[10px] p-6 hover:shadow-lg transition-shadow"
      >
        <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[24px] text-[#fefefe] mb-4">
          {service.name}
        </h3>
        <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[20px] text-[#fefefe] mb-4">
          {hasMultiplePrices ? (
            <>
              Individual: ${service.individualPrice}<br />
              Joint: ${service.jointPrice}
            </>
          ) : (
            `$${service.fixedPrice}`
          )}
        </p>
        {service.note && (
          <p className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] text-[#f3f3f3] italic mb-4">
            {service.note}
          </p>
        )}
        {service.includes.length > 0 && (
          <div className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] text-[#f3f3f3] mb-4">
            <p>
              <span className="underline">Includes</span>: {service.includes.join(', ')}
            </p>
          </div>
        )}
        {service.description && (
          <div className="mb-4">
            {isExpanded && (
              <p className="font-['Plus_Jakarta_Sans'] font-normal text-[16px] text-[#f3f3f3] mb-3 leading-relaxed">
                {service.description}
              </p>
            )}
            <button
              onClick={(e) => toggleDescription(service.id, e)}
              className="font-['Plus_Jakarta_Sans'] text-[14px] text-[#fefefe] underline hover:text-gray-200 transition-colors"
            >
              {isExpanded ? 'Show Less' : 'More Info'}
            </button>
          </div>
        )}
        <Button
          className="w-full mt-4 bg-white text-[#2d3e50] hover:bg-gray-100"
          onClick={() => handleServiceSelect(service)}
        >
          Select This Service
        </Button>
      </div>
    );
  };

  return (
    <main>
      <section className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] min-h-[180px] flex items-center py-6">
        <div className="container mx-auto px-5 max-w-[1240px]">
          <h1 className="font-['Lobster_Two'] font-normal text-[#fefefe] capitalize text-[50px] md:text-[60px] lg:text-[100px] leading-[50px] md:leading-[65px] lg:leading-[100px] text-center">
            Purchase Service
          </h1>
        </div>
      </section>

      <div className="bg-white border-l-4 border-[#4a708b] py-6">
        <div className="container mx-auto px-5 max-w-[1240px]">
          <p className="font-['Plus_Jakarta_Sans'] text-lg text-[#2d3e50] text-center">
            We are pleased to offer payment plans for all services.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-5 max-w-[1240px] py-[60px]">
        {step === 'select-service' && (
          <>
            <div className="mb-12">
              <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[36px] text-[#2d3e50] mb-6">
                Estate Planning Packages
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {estatePlanningPackages.map(renderServiceCard)}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[36px] text-[#2d3e50] mb-6">
                Probate Packages
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {probatePackages.map(renderServiceCard)}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[36px] text-[#2d3e50] mb-6">
                A La Carte Services
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {aLaCarteServices
                  .filter(service =>
                    !['special-needs-planning', 'estate-tax-planning', 'transfer-on-death'].includes(service.id)
                  )
                  .map(renderServiceCard)
                }
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[36px] text-[#2d3e50] mb-6">
                Prenuptial Agreement Services
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {prenuptialServices.map(renderServiceCard)}
              </div>
            </div>
          </>
        )}

        {step === 'add-ons' && selectedService && (
          <div className="max-w-4xl mx-auto">
            <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[36px] text-[#2d3e50] mb-6">
              {selectedService.id === 'probate-avoidance-package' ? 'Select Plan Type' : 'Enhance Your Estate Plan'}
            </h2>

            <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-[10px] p-6 mb-8">
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[24px] text-[#fefefe] mb-2">
                Selected Package: {selectedService.name}
              </h3>
              <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[20px] text-[#fefefe]">
                Base Price: ${getServicePrice(selectedService, clientType).toLocaleString()}
              </p>
            </div>

            {(selectedService.individualPrice && selectedService.jointPrice) && (
              <div className="mb-8">
                <Label className="text-[#2d3e50] font-semibold text-[18px] mb-4 block">
                  Plan Type
                </Label>
                <RadioGroup value={clientType} onValueChange={(value: any) => setClientType(value)}>
                  <div className="border-2 rounded-[10px] p-4 mb-3 hover:border-[#4a708b] transition-colors">
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="individual" id="individual-addon" />
                      <Label htmlFor="individual-addon" className="cursor-pointer flex-1">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-[18px]">Individual</span>
                          <span className="font-bold text-[20px] text-[#2d3e50]">${selectedService.individualPrice?.toLocaleString()}</span>
                        </div>
                      </Label>
                    </div>
                  </div>
                  <div className="border-2 rounded-[10px] p-4 hover:border-[#4a708b] transition-colors">
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="joint" id="joint-addon" />
                      <Label htmlFor="joint-addon" className="cursor-pointer flex-1">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-[18px]">Joint (Spouses/Partners)</span>
                          <span className="font-bold text-[20px] text-[#2d3e50]">${selectedService.jointPrice?.toLocaleString()}</span>
                        </div>
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            )}

            {getAvailableAddOns(selectedService.id).length > 0 && (
              <>
                <p className="font-['Plus_Jakarta_Sans'] text-[18px] text-[#2d3e50] mb-6">
                  Select any additional services you'd like to add to your estate plan:
                </p>

                <div className="space-y-4 mb-8">
                  {getAvailableAddOns(selectedService.id).map(addOn => {
                    const displayPrice = addOn.id === 'trust-funding'
                      ? (clientType === 'individual' ? addOn.individualPrice! : addOn.jointPrice!)
                      : addOn.price;

                    return (
                      <div
                        key={addOn.id}
                        className={`border-2 rounded-[10px] p-6 cursor-pointer transition-all ${
                          selectedAddOns.includes(addOn.id)
                            ? 'border-[#2d3e50] bg-blue-50'
                            : 'border-gray-300 hover:border-[#4a708b]'
                        }`}
                        onClick={() => toggleAddOn(addOn.id)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-4 flex-1">
                            <Checkbox
                              checked={selectedAddOns.includes(addOn.id)}
                              onCheckedChange={() => toggleAddOn(addOn.id)}
                              className="mt-1"
                            />
                            <div className="flex-1">
                              <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-[20px] text-[#2d3e50] mb-2">
                                {addOn.name}
                              </h4>
                              <p className="font-['Plus_Jakarta_Sans'] text-[16px] text-gray-700">
                                {addOn.description}
                              </p>
                            </div>
                          </div>
                          <div className="font-['Plus_Jakarta_Sans'] font-bold text-[22px] text-[#2d3e50] ml-4">
                            ${displayPrice.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {selectedAddOns.length > 0 && (
              <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-[10px] p-6 mb-6">
                <div className="flex justify-between items-center text-[#fefefe]">
                  <div>
                    <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[18px]">
                      Base Price: ${getServicePrice(selectedService, clientType).toLocaleString()}
                    </p>
                    <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[18px]">
                      Add-Ons: ${getAddOnsTotal().toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="font-['Plus_Jakarta_Sans'] font-bold text-[28px]">
                      Total: ${getTotalPrice().toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setStep('select-service');
                  setSelectedAddOns([]);
                }}
                className="flex-1"
              >
                Back to Services
              </Button>
              <Button
                onClick={handleAddOnsComplete}
                className="flex-1 bg-[#2d3e50] hover:bg-[#4a708b]"
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {step === 'client-info' && selectedService && (
          <div className="max-w-2xl mx-auto">
            <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[36px] text-[#2d3e50] mb-6">
              Client Information
            </h2>

            <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-[10px] p-6 mb-6">
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[24px] text-[#fefefe] mb-2">
                Selected Service: {selectedService.name}
              </h3>
              <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[20px] text-[#fefefe] mb-2">
                {selectedService.fixedPrice
                  ? `$${selectedService.fixedPrice.toLocaleString()}`
                  : `${clientType === 'individual' ? 'Individual' : 'Joint'}: $${getServicePrice(selectedService, clientType).toLocaleString()}`
                }
              </p>
              {selectedAddOns.length > 0 && (
                <>
                  <p className="font-['Plus_Jakarta_Sans'] font-semibold text-[18px] text-[#fefefe] mt-3">
                    Add-Ons Selected:
                  </p>
                  <ul className="font-['Plus_Jakarta_Sans'] text-[16px] text-[#fefefe] mt-1">
                    {selectedAddOns.map(addOnId => {
                      const addOn = allAddOns.find(a => a.id === addOnId);
                      if (!addOn) return null;

                      const displayPrice = addOn.id === 'trust-funding'
                        ? (clientType === 'individual' ? addOn.individualPrice! : addOn.jointPrice!)
                        : addOn.price;

                      return (
                        <li key={addOnId}>• {addOn.name} (+${displayPrice.toLocaleString()})</li>
                      );
                    })}
                  </ul>
                </>
              )}
              {(selectedAddOns.length > 0 || (selectedService.individualPrice && selectedService.jointPrice)) && (
                <p className="font-['Plus_Jakarta_Sans'] font-bold text-[22px] text-[#fefefe] mt-3 border-t border-white/30 pt-3">
                  Total: ${getTotalPrice().toLocaleString()}
                </p>
              )}
            </div>

            <form onSubmit={handleClientInfoSubmit} className="space-y-6">
              {(selectedService.individualPrice && selectedService.jointPrice && selectedService.category !== 'estate-planning') && (
                <div>
                  <Label className="text-[#2d3e50] font-semibold mb-3 block">
                    Service Type
                  </Label>
                  <RadioGroup value={clientType} onValueChange={(value: any) => setClientType(value)}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="individual" id="individual" />
                      <Label htmlFor="individual" className="cursor-pointer">
                        Individual (${selectedService.individualPrice})
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="joint" id="joint" />
                      <Label htmlFor="joint" className="cursor-pointer">
                        Joint (${selectedService.jointPrice})
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              )}

              <div>
                <Label htmlFor="name" className="text-[#2d3e50] font-semibold">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={clientInfo.name}
                  onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-[#2d3e50] font-semibold">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={clientInfo.email}
                  onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-[#2d3e50] font-semibold">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={clientInfo.phone}
                  onChange={(e) => setClientInfo({ ...clientInfo, phone: e.target.value })}
                  className="mt-2"
                />
              </div>

              {selectedService.category === 'probate' && (
                <div className="bg-amber-50 border-2 border-amber-200 rounded-[10px] p-6">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="probate-acknowledgment"
                      checked={probateAcknowledgment}
                      onChange={(e) => setProbateAcknowledgment(e.target.checked)}
                      className="mt-1 h-5 w-5 text-[#2d3e50] border-gray-300 rounded focus:ring-[#2d3e50]"
                      required
                    />
                    <Label htmlFor="probate-acknowledgment" className="cursor-pointer text-[#2d3e50] font-semibold leading-relaxed">
                      I understand that this package is for uncontested (no disputes) probate. If it becomes contested, I understand that my attorney may charge additional fees or may withdraw from the matter.
                    </Label>
                  </div>
                  <p className="mt-4 text-sm text-[#2d3e50] ml-8">
                    <strong>Note:</strong> If you believe this matter will be contested, please first{' '}
                    <Link href="/book-consultation/" className="text-[#4a708b] underline hover:text-[#2d3e50]">
                      book a consultation
                    </Link>.
                  </p>
                </div>
              )}

              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setProbateAcknowledgment(false);
                    if (selectedService?.category === 'estate-planning') {
                      setStep('add-ons');
                    } else {
                      setStep('select-service');
                      setSelectedService(null);
                    }
                  }}
                  className="flex-1"
                >
                  Back
                </Button>
                <Button type="submit" className="flex-1 bg-[#2d3e50] hover:bg-[#4a708b]">
                  Continue to Agreement
                </Button>
              </div>
            </form>
          </div>
        )}

        {step === 'agreement' && selectedService && (
          <div className="max-w-4xl mx-auto">
            <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[36px] text-[#2d3e50] mb-6">
              Client Service Agreement
            </h2>

            <div className="bg-white border border-gray-300 rounded-lg p-8 mb-6 max-h-[500px] overflow-y-auto text-sm">
              <div className="prose prose-sm max-w-none">
                <p className="font-semibold mb-4">
                  This Client Service Agreement ("Agreement") is made and entered into by and between Illinois Estate Law ("Firm"), located at 4422 N. Ravenswood Ave, Ste 212 Chicago, Illinois 60640 and Client.
                </p>

                <h3 className="font-bold text-lg mt-6 mb-3">1. Scope of Representation.</h3>

                <p className="mb-3"><strong>1.1 Scope.</strong> Our attorney-client relationship is strictly limited to legal services in the Client's estate planning, probate, or guardianship matters, unless otherwise described in the addendum that may accompany this document. The Client understands that the Client is not relying on us for business, investment, accounting, or valuation decisions, or to investigate the character or credit of persons or firms with whom the Client may be dealing (such as insurance companies or investment advisors) unless otherwise specified in the letter. The Firm will advise the Client of developments as necessary to perform our services and will consult with the Client as necessary to ensure the timely and effective completion of our work.</p>

                <p className="mb-3"><strong>1.2 Services Provided.</strong> Representation is limited to the services purchased. Unless expressly added in writing, the Firm does not: (i) appear in contested hearings or litigation; (ii) prepare or file tax returns; (iii) provide investment or accounting advice; or (iv) handle appeals.</p>

                <p className="mb-3"><strong>1.3 Illinois Law.</strong> The Firm will provide these services in accordance with the laws of the State of Illinois and the ethical standards governing the legal profession. All services will be conducted virtually via phone, email, or video conferencing.</p>

                <p className="mb-3"><strong>1.4 No Guarantee.</strong> Client acknowledges the Firm has made no promises regarding the outcome and any opinions are expressions of professional judgment - not guarantees.</p>

                <h3 className="font-bold text-lg mt-6 mb-3">2. Legal Fees & Costs.</h3>

                <p className="mb-3"><strong>2.1</strong> Legal services and costs will be billed in a flat-fee manner, which is paid prior to any work being commenced on a matter.</p>

                <p className="mb-3"><strong>2.3 Receipt of Payment.</strong> The Client acknowledges and understands that substantive work cannot begin on their case until said payment is made.</p>

                <p className="mb-3"><strong>2.5 Flat-Fee Disclosure.</strong> Client understands the fee quoted is a flat fee for the defined scope of services. Unless otherwise stated in writing, the flat fee is an advance payment retainer and will be deposited into the Firm's operating account in exchange for the Firm's commitment to be available and to prioritize the matter. Any unearned portion, if the engagement ends before completion, will be refunded in accordance with work completed on said matter. Fees are considered to be earned by the Firm upon receipt from the Client.</p>

                <p className="mb-3"><strong>2.6 Payment Method.</strong> All payments can be made via credit card or electronic funds transfer. Detailed payment instructions will be provided on the invoice.</p>

                <p className="mb-3"><strong>2.7 Payment Plans.</strong> Payment plans are available through Partial.ly. Payment plans require a one-time fee of 5% of the service cost. A 20% down payment is required to start any substantive work on a matter. A payment plan will default after 5 failed payment attempts. In the instance of a defaulted payment plan, all services with the Firm are terminated and the Firm reserves the right to collect fees through a collection agency or legal firm.</p>

                <h3 className="font-bold text-lg mt-6 mb-3">3. Communication.</h3>

                <p className="mb-3"><strong>3.1 Communication Methods.</strong> The Firm will communicate with the Client regarding the progress of their estate planning matters via phone, email, or video conferencing. The Client may contact the Firm at:</p>

                <p className="mb-3 ml-4">Phone: 312-373-0731<br />Email: contact@illinoisestatelaw.com</p>

                <p className="mb-3"><strong>3.2 In-Person Meetings.</strong> In-person meetings are by appointment only. Client shall specify preferred office location prior to requested meeting.</p>

                <p className="mb-3"><strong>3.3 Client Information.</strong> The Client agrees to provide the Firm with accurate and complete information necessary for the provision of legal services and to promptly notify the Firm of any changes in their contact information or circumstances that may affect their estate planning needs.</p>

                <h3 className="font-bold text-lg mt-6 mb-3">4. Confidentiality.</h3>

                <p className="mb-3"><strong>4.1</strong> The Professional Ethics rules require the Firm to keep all information that the Client disclose to us confidential and not disclose it to persons outside of the Firm without the Client's permission. The lawyer who is primarily responsible for the Client's estate planning work may need to disclose information about the Client's affairs to other lawyers and paralegals within the Firm to best meet the Client's needs.</p>

                <p className="mb-3"><strong>4.2</strong> If other professionals not in the Firm are working with the Firm on the Client's estate planning with the Client's permission (such as the Client's accountant, a bank trust office, a financial planner, an insurance agent, or another law firm), the Client agrees that the Firm may disclose information to them as necessary to allow them to fulfill their role in the Client's estate planning. The Firm will use their best judgment in making disclosures to these other professionals; unless the Client instructs the Firm otherwise, the Client agrees that the Firm may disclose information to them as the Firm decides is necessary for the Client's best interests.</p>

                <p className="mb-3"><strong>4.3 Joint Representation.</strong> If the Firm is employed by spouses, jointly, the Client(s) understand that information may be shared between both spouses. Therefore, if the Firm jointly represents the Client and the Client's spouse, the Client understand and agree that information relevant and material to said representation may be shared with one or both clients. The Firm will not take any action or refrain from taking an action (pertaining to the subject matter of our representation of the Client) that affects one of the Client without the other's knowledge and consent. Anything either Client discusses with the Firm is confidential, and will not be disclosed to third parties, unless the Client authorize us to disclose the information or disclosure is required or permitted by law or the rules governing our professional conduct. If a conflict of interest arises between said spouses in the joint representation, the Firm reserves the right to withdraw from said representation of both clients.</p>

                <p className="mb-3"><strong>4.4 Presence of Third Parties.</strong> The Client understands that if a third party is present during any conversations or is copied on any correspondence between the Client(s) and the Firm that attorney-client privilege is lost and shall not apply.</p>

                <p className="mb-3"><strong>4.5</strong> If someone else pays Client's fees, the Firm's duties run solely to Client. No information will be shared with the payor absent Client consent.</p>

                <h3 className="font-bold text-lg mt-6 mb-3">5. Incapacitation.</h3>

                <p className="mb-3"><strong>5.1</strong> The professional ethics rules authorize the Firm to attempt to continue a normal attorney-client relationship with the Client if the Client become unable to make sound decisions about the matters the Client has retained the Firm to advise the Client about. These rules also authorize the Firm to seek the appointment of a guardian or to take other actions to protect the Client's interests if the Firm reasonably believe this necessary.</p>

                <p className="mb-3"><strong>5.2</strong> The law permits the Client to appoint an authorized agent to act on the Client's behalf. For example, the Client can appoint an attorney-in-fact under a durable-power-of-attorney document. The authorized agent can continue to act on the Client's behalf even if the Client later becomes unable to make their own decisions. If the authority that the Client gives to the authorized agent is broad enough, the authorized agent can make decisions for the Client concerning the Client's estate planning and any other matters that the Client has retained the Firm to advise the Client about. For example, that authority could include that ability to make gifts of the Client's assets during the Client's lifetime (and perhaps include the ability to make gifts to this authorized agent), and to execute contracts and agreements on the Client's behalf.</p>

                <p className="mb-3"><strong>5.3</strong> If The Client has designated an authorized agent to act on the Client's behalf under a power-of-attorney document or some other arrangement, and if in the Firm's judgment that authorization is broad enough to include the authority for that person to instruct us on the Client's estate planning or any other matters that the Client's has retained us to advise the Client about, the Client agrees that the Firm can continue to represent the Client in the Client's estate planning or those other matters, and that the Firm may rely upon the communications and instructions from the Client's authorized agent. The Client also agree that the Firm may communicate with the Client's authorized agents and disclose information to them that is relevant and necessary to allow them to make informed decisions on the Client's behalf, including information that has been communicated to the Firm by the Client that is protected by attorney-client confidentiality.</p>

                <p className="mb-3"><strong>5.3</strong> The Firm reserves the right to refuse to act upon the Client's authorized agent's instructions and instead to take whatever action that the Firm reasonably believes is necessary to protect the Client's interests if the Firm reasonably believe that the Client's authorized agent does not have the authority to act on the Client's behalf in the matter that the Firm represent the Client on, or if the Firm reasonably believe that the Client's agent is not acting in the Client's best interests or in furtherance of the Client's objectives as the Firm understand them.</p>

                <h3 className="font-bold text-lg mt-6 mb-3">6. Termination.</h3>

                <p className="mb-3"><strong>6.1</strong> Either party may terminate this Agreement at any time by providing written notice to the other party.</p>

                <p className="mb-3"><strong>6.2</strong> Upon termination, the Client will be responsible for any fees incurred up to the date of termination, including any outstanding extraneous fees. The Firm will provide the Client with a final invoice within thirty (30) days of termination. The Client agrees to pay this invoice within thirty (30) days of receipt.</p>

                <h3 className="font-bold text-lg mt-6 mb-3">7. Entire Agreement.</h3>
                <p className="mb-3">This Agreement constitutes the entire agreement between the parties and supersedes all prior agreements and understandings, whether written or oral, relating to the subject matter hereof.</p>

                <h3 className="font-bold text-lg mt-6 mb-3">8. Amendments.</h3>
                <p className="mb-3">Any amendments or modifications to this Agreement must be in writing and signed by both parties.</p>

                <h3 className="font-bold text-lg mt-6 mb-3">9. Dispute Resolution.</h3>

                <p className="mb-3"><strong>9.1</strong> In the event of any dispute arising out of or relating to this Agreement, the parties agree to first attempt to resolve the dispute through good faith negotiation.</p>

                <p className="mb-3"><strong>9.2</strong> By this document, the Client and the Firm agree that any controversy or claim arising out of or relating to this contract, including but not limited to any dispute relating to services provided, attorney fees or expenses, shall be settled by arbitration administered in accordance with the laws of the State of Illinois and judgment on the arbitration award may be entered in any court that has jurisdiction.</p>

                <h3 className="font-bold text-lg mt-6 mb-3">10. Miscellaneous</h3>

                <p className="mb-3"><strong>10.01 Notary Services.</strong> Client consents to electronic signatures, remote notarization where permitted, and electronic delivery of documents and notices. Online notary services are included in all services. Mobile notary services (in-person notarization at a location of client's choosing) are included only in estate planning packages and probate packages. Mobile notary services are not included in a la carte services unless specifically added.</p>

                <p className="mb-3"><strong>10.02 Probate Surety Bond.</strong> For probate services, the cost of the surety bond required by the court is not included in the service price and is due directly to the surety bond company. The Firm will assist in obtaining the bond, but the Client is responsible for payment of the bond premium to the bonding company.</p>

                <p className="mb-3"><strong>10.03</strong> Client authorizes the Firm to use reputable third-party service providers for document storage, e-signature, scheduling, payments, and communications. The Firm will take reasonable measures to protect Client information but cannot guarantee absolute security of electronic communications.</p>

                <p className="mb-3"><strong>10.04 Client Responsibilities.</strong> Provide complete and accurate information; respond to requests within 5 business days; meet deadlines; keep contact info current; and promptly review drafts. Delays or inaccuracies may increase cost or limit available options.</p>

                <p className="mb-3"><strong>10.05 Trust Funding.</strong> Client is responsible for funding all assets into trust, unless otherwise noted in Paragraph 2.1. The Firm is not responsible for Client's failure to fund assets into their respective trust.</p>

                <h3 className="font-bold text-lg mt-6 mb-3">STATEMENT OF CLIENT'S RIGHTS AND RESPONSIBILITIES</h3>

                <p className="mb-3"><strong>(1) CLIENT SERVICE AGREEMENT.</strong> The client service agreement, prepared by the Firm, shall clearly address the objectives of representation and detail the fee arrangement, including all material terms. The client shall receive a copy of the client service agreement and any additional clarification requested and is advised not to sign any such agreement which the client finds to be unsatisfactory or does not understand.</p>

                <p className="mb-3"><strong>(2) REPRESENTATION.</strong> Representation will commence upon the signing of the client service agreement. The Firm will provide competent representation, which requires legal knowledge, skill, thoroughness and preparation to handle those matters set forth in the client service agreement. Once employed, the Firm will act with reasonable diligence and promptness, as well as use his best efforts on behalf of the client. During the course of representation and afterwards, the counsel may not use or reveal a client's confidence or secrets, except as required or permitted by law.</p>

                <p className="mb-3"><strong>(3) COMMUNICATION.</strong> The Firm will keep the client reasonably informed about the status of representation and will promptly respond to reasonable requests for information. The client shall be truthful in all discussions with the counsel and provide all information or documentation required to enable the counsel to provide competent representation.</p>

                <p className="mb-3"><strong>(4) ETHICAL CONDUCT.</strong> The counsel cannot be required to engage in conduct, which is illegal, unethical, or fraudulent. A counsel who cannot ethically abide by his client's directions shall be allowed to withdraw from representation.</p>

                <p className="mb-3"><strong>(5) DISPUTES.</strong> The counsel-client relationship is regulated by the Illinois Rules of Professional Conduct (Article VIII of the Illinois Supreme Court Rules), and any dispute shall be reviewed under the terms of such Rules.</p>

                <h3 className="font-bold text-lg mt-6 mb-3">PRIVACY POLICY NOTICE</h3>

                <p className="mb-3">Attorneys, like other professionals who advise on personal financial matters, are now required by federal law to inform their clients of their policies regarding privacy of client information. Attorneys have been and continue to be bound by professional standards of confidentiality that are even more stringent than those required by this new law. Therefore, we have always protected our client's right to privacy.</p>

                <p className="mb-3">In the course of providing our clients with legal advice, we sometimes receive significant personal financial information from our clients. If you are a client of Illinois Estate Plan, you should know that all information that we receive from you is held in confidence, and is not released to people outside the firm, except as agreed to by you, or as required under applicable law. We retain records relating to professional services that we provide so that we are better able to assist you with your professional needs and, in some cases, to comply with professional guidelines. In order to guard your nonpublic personal information, we maintain physical, electronic, and procedural safeguards that comply with our professional standards.</p>

                <p className="mb-3 font-semibold">IN WITNESS WHEREOF, the parties have executed this Agreement as of the date written below. It is specifically understood that joint or collaborative services may be signed by one party.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="agreement"
                  checked={agreementAccepted}
                  onCheckedChange={(checked) => setAgreementAccepted(checked as boolean)}
                />
                <Label htmlFor="agreement" className="cursor-pointer leading-tight">
                  I have read and agree to the Client Service Agreement
                </Label>
              </div>

              <div>
                <Label htmlFor="signature" className="text-[#2d3e50] font-semibold">
                  Electronic Signature (Type your full name) *
                </Label>
                <Input
                  id="signature"
                  type="text"
                  value={signature}
                  onChange={(e) => setSignature(e.target.value)}
                  placeholder="John Doe"
                  className="mt-2 font-['Brush_Script_MT',cursive] text-2xl"
                  disabled={!agreementAccepted}
                />
                <p className="text-sm text-gray-600 mt-2">
                  By typing your name, you are providing an electronic signature that is legally binding.
                </p>
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep('client-info')}
                  className="flex-1"
                  disabled={isProcessing}
                >
                  Back
                </Button>
                <Button
                  onClick={handleAgreementSign}
                  disabled={!agreementAccepted || !signature || isProcessing}
                  className="flex-1 bg-[#2d3e50] hover:bg-[#4a708b]"
                >
                  {isProcessing ? 'Processing...' : 'Proceed to Payment'}
                </Button>
              </div>
            </div>
          </div>
        )}

        {step === 'payment-selection' && selectedService && (
          <div className="max-w-3xl mx-auto">
            <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[36px] text-[#2d3e50] mb-6 text-center">
              Select Payment Method
            </h2>

            <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-[10px] p-6 mb-8">
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[24px] text-[#fefefe] mb-2">
                Selected Service: {selectedService.name}
              </h3>
              <p className="font-['Plus_Jakarta_Sans'] font-bold text-[28px] text-[#fefefe]">
                Total: ${getTotalPrice().toLocaleString()}
              </p>
            </div>

            <p className="font-['Plus_Jakarta_Sans'] text-[18px] text-[#2d3e50] mb-6 text-center">
              Choose how you would like to pay for your service:
            </p>

            <div className="space-y-4 mb-8">
              <button
                onClick={() => handlePaymentMethodSelect('full')}
                disabled={isProcessing}
                className="w-full border-2 border-[#2d3e50] rounded-[10px] p-8 hover:bg-blue-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-left"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[24px] text-[#2d3e50] mb-2">
                      Pay in Full
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans'] text-[16px] text-gray-700">
                      Complete payment today with credit card via secure Stripe checkout
                    </p>
                  </div>
                  <div className="ml-4">
                    <p className="font-['Plus_Jakarta_Sans'] font-bold text-[28px] text-[#2d3e50]">
                      ${getTotalPrice().toLocaleString()}
                    </p>
                    <p className="font-['Plus_Jakarta_Sans'] text-[14px] text-gray-600 text-right">
                      No additional fees
                    </p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => handlePaymentMethodSelect('plan')}
                disabled={isProcessing}
                className="w-full border-2 border-[#2d3e50] rounded-[10px] p-8 hover:bg-blue-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-left"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[24px] text-[#2d3e50] mb-2">
                      Payment Plan
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans'] text-[16px] text-gray-700 mb-2">
                      Spread payments over time with a flexible payment plan
                    </p>
                    <p className="font-['Plus_Jakarta_Sans'] text-[14px] text-amber-700 font-semibold">
                      5% one-time setup fee applies
                    </p>
                  </div>
                  <div className="ml-4">
                    <p className="font-['Plus_Jakarta_Sans'] font-bold text-[28px] text-[#2d3e50]">
                      ${(getTotalPrice() * 1.05).toLocaleString()}
                    </p>
                    <p className="font-['Plus_Jakarta_Sans'] text-[14px] text-gray-600 text-right">
                      Total with 5% fee
                    </p>
                  </div>
                </div>
              </button>
            </div>

            {isProcessing && (
              <div className="text-center py-4">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#2d3e50]"></div>
                <p className="font-['Plus_Jakarta_Sans'] text-[#2d3e50] mt-2">
                  {paymentMethod === 'full' ? 'Redirecting to payment...' : 'Submitting payment plan request...'}
                </p>
              </div>
            )}

            <div className="flex justify-center mt-6">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep('agreement')}
                disabled={isProcessing}
              >
                Back to Agreement
              </Button>
            </div>
          </div>
        )}

        {step === 'payment-plan-confirmation' && selectedService && (
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
              <CheckIcon className="w-10 h-10 text-green-600" />
            </div>

            <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-[36px] text-[#2d3e50] mb-4">
              Payment Plan Request Received
            </h2>

            <p className="font-['Plus_Jakarta_Sans'] text-[#2d3e50] text-lg mb-6">
              Thank you! Your payment plan request has been successfully submitted.
            </p>

            <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-[10px] p-8 mb-8 text-left">
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[24px] text-[#fefefe] mb-4">
                What Happens Next?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="text-[#f3f3f3]">
                    <strong>Check Your Email:</strong> You will receive an email with instructions to set up your payment plan through Partial.ly within the next few minutes.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div className="text-[#f3f3f3]">
                    <strong>Check Spam Folder:</strong> If you don't see the email in your inbox, please check your spam or junk folder.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div className="text-[#f3f3f3]">
                    <strong>Complete Setup:</strong> Follow the link in the email to complete your payment plan setup. A 20% down payment is required to begin work on your matter.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div className="text-[#f3f3f3]">
                    <strong>Service Details:</strong> Service: {selectedService.name} | Total with 5% setup fee: ${(getTotalPrice() * 1.05).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-2 border-amber-200 rounded-[10px] p-6 mb-8">
              <p className="font-['Plus_Jakarta_Sans'] text-[#2d3e50] font-semibold">
                <strong>Important:</strong> Work on your matter cannot begin until your payment plan is set up and the 20% down payment is received.
              </p>
            </div>

            <div className="space-y-4">
              <p className="font-['Plus_Jakarta_Sans'] text-[#2d3e50]">
                If you have any questions or need assistance, please contact us:
              </p>
              <div className="font-['Plus_Jakarta_Sans'] text-[#2d3e50] font-semibold">
                <p>Phone: <a href="tel:312-373-0731" className="text-[#4a708b] hover:underline">312-373-0731</a></p>
                <p>Email: <a href="mailto:contact@illinoisestatelaw.com" className="text-[#4a708b] hover:underline">contact@illinoisestatelaw.com</a></p>
              </div>

              <div className="pt-6">
                <Link
                  href="/"
                  className="inline-block bg-[#2d3e50] text-white font-['Plus_Jakarta_Sans'] font-bold text-base uppercase py-[14px] px-8 rounded-[32px] hover:bg-[#4a708b] transition-colors"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
