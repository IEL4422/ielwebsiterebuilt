'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, ArrowLeft, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { createClient } from '@supabase/supabase-js';

const getSupabaseClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase environment variables are not configured');
  }

  return createClient(supabaseUrl, supabaseAnonKey);
};

interface QuizAnswers {
  needType: 'estate-planning' | 'probate' | 'prenuptial' | 'small-business' | '';
  maritalStatus: 'single' | 'married' | '';
  ownsRealEstate: 'yes' | 'no' | '';
  estateValue: 'under-100k' | '100k-3.5m' | 'over-3.5m' | '';
  needsAncillary: 'yes' | 'no' | '';
  hasSpecialNeeds: 'yes' | 'no' | '';
  decedentCounty: string;
  decedentEstateValue: 'under-100k' | 'over-100k' | '';
  decedentHasRealEstate: 'yes' | 'no' | '';
  issuesAmongHeirs: 'yes' | 'no' | '';
  allDebtsPaid: 'yes' | 'no' | '';
  isRepresentative: 'yes' | 'no' | '';
  needsNewAttorney: 'yes' | 'no' | '';
  prenupNeed: 'draft-negotiate' | 'review-negotiate' | 'draft' | 'review' | '';
  hasExistingPrenup: 'yes' | 'no' | '';
  needsNegotiation: 'yes' | 'no' | '';
  businessNeed: 'full-package' | 'llc-only' | 'trademark-only' | '';
  hasExistingBusiness: 'yes' | 'no' | '';
  needsTrademark: 'yes' | 'no' | '';
}

interface ServiceRecommendation {
  name: string;
  price: string;
  description: string;
  includes: string[];
  addOns: Array<{
    id: string;
    name: string;
    price: number;
    description: string;
    suggested?: boolean;
  }>;
  serviceId: string;
  clientType?: 'individual' | 'joint';
  requiresConsultation?: boolean;
}

const counties = [
  'Cook County',
  'DuPage County',
  'Kane County',
  'Lake County',
  'Will County',
  'McHenry County',
  'Other'
];

export default function RecommendedServicePage() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<QuizAnswers>({
    needType: '',
    maritalStatus: '',
    ownsRealEstate: '',
    estateValue: '',
    needsAncillary: '',
    hasSpecialNeeds: '',
    decedentCounty: '',
    decedentEstateValue: '',
    decedentHasRealEstate: '',
    issuesAmongHeirs: '',
    allDebtsPaid: '',
    isRepresentative: '',
    needsNewAttorney: '',
    prenupNeed: '',
    hasExistingPrenup: '',
    needsNegotiation: '',
    businessNeed: '',
    hasExistingBusiness: '',
    needsTrademark: ''
  });
  const [showResult, setShowResult] = useState(false);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [trustFundingQuantity, setTrustFundingQuantity] = useState(1);
  const [clientInfo, setClientInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [showClientInfo, setShowClientInfo] = useState(false);
  const [showAgreement, setShowAgreement] = useState(false);
  const [agreementAccepted, setAgreementAccepted] = useState(false);
  const [signature, setSignature] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [purchaseId, setPurchaseId] = useState<string | null>(null);
  const [showPaymentSelection, setShowPaymentSelection] = useState(false);

  const updateAnswer = <K extends keyof QuizAnswers>(key: K, value: QuizAnswers[K]) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  const getRecommendation = (): ServiceRecommendation | null => {
    const {
      needType,
      maritalStatus,
      ownsRealEstate,
      estateValue,
      needsAncillary,
      hasSpecialNeeds,
      decedentCounty,
      decedentEstateValue,
      decedentHasRealEstate,
      issuesAmongHeirs,
      allDebtsPaid,
      isRepresentative,
      needsNewAttorney,
      prenupNeed,
      hasExistingPrenup,
      needsNegotiation,
      businessNeed,
      hasExistingBusiness,
      needsTrademark
    } = answers;

    if (needType === 'prenuptial') {
      if (hasExistingPrenup === 'yes' && needsNegotiation === 'yes') {
        return {
          name: 'Prenuptial Agreement Review & Negotiation',
          price: '$3,000',
          description: 'Professional review and negotiation of an existing prenuptial agreement to protect your interests.',
          includes: [
            'Comprehensive legal review',
            'Analysis of fairness and enforceability',
            'Negotiation on your behalf',
            'Recommendations for modifications',
            'Protection of your interests'
          ],
          addOns: [],
          serviceId: 'prenuptial-review-negotiation',
          requiresConsultation: false
        };
      }

      if (hasExistingPrenup === 'yes' && needsNegotiation === 'no') {
        return {
          name: 'Prenuptial Agreement Review',
          price: '$2,000',
          description: 'Professional review of your prenuptial agreement to understand implications and identify any concerns.',
          includes: [
            'Detailed legal analysis',
            'Identification of unfair provisions',
            'Consultation on implications',
            'Recommendations for protection'
          ],
          addOns: [],
          serviceId: 'prenuptial-review',
          requiresConsultation: false
        };
      }

      if (hasExistingPrenup === 'no' && needsNegotiation === 'yes') {
        return {
          name: 'Prenuptial Agreement Drafting & Negotiation',
          price: '$5,000',
          description: 'Comprehensive prenuptial agreement service including custom drafting and negotiation between parties.',
          includes: [
            'Initial consultation with both parties',
            'Full financial disclosure review',
            'Custom drafting tailored to your situation',
            'Negotiation between parties',
            'Finalization and execution'
          ],
          addOns: [],
          serviceId: 'prenuptial-drafting-negotiation',
          requiresConsultation: false
        };
      }

      if (hasExistingPrenup === 'no' && needsNegotiation === 'no') {
        return {
          name: 'Prenuptial Agreement Drafting',
          price: '$3,000',
          description: 'Custom prenuptial agreement drafting service tailored to your specific needs and situation.',
          includes: [
            'Initial consultation',
            'Custom agreement drafting',
            'Legal compliance review',
            'Finalization and execution guidance'
          ],
          addOns: [],
          serviceId: 'prenuptial-drafting',
          requiresConsultation: false
        };
      }
    }

    if (needType === 'small-business') {
      if (hasExistingBusiness === 'no' && needsTrademark === 'yes') {
        return {
          name: 'Small Business Package',
          price: '$2,000',
          description: 'Comprehensive business formation and brand protection package including LLC registration, trademark protection, and all necessary documentation.',
          includes: [
            'LLC Registration',
            'Trademark Registration',
            'Operating Agreement',
            'EIN Number',
            'All Filing Fees Included'
          ],
          addOns: [],
          serviceId: 'small-business-package',
          requiresConsultation: false
        };
      }

      if (hasExistingBusiness === 'no' && needsTrademark === 'no') {
        return {
          name: 'Business Essentials',
          price: '$1,000',
          description: 'Essential business formation package with LLC registration and operating agreement.',
          includes: [
            'LLC Registration',
            'EIN Number',
            'Operating Agreement',
            'Filing Fees Included'
          ],
          addOns: [],
          serviceId: 'business-essentials',
          requiresConsultation: false
        };
      }

      if (hasExistingBusiness === 'yes' || needsTrademark === 'yes') {
        return {
          name: 'Trademark Registration',
          price: '$1,250',
          description: 'Protect your brand identity with federal trademark registration, including comprehensive searches and application filing.',
          includes: [
            'Comprehensive trademark search',
            'Federal trademark application filing',
            'Filing fees included',
            'Expert guidance throughout the process'
          ],
          addOns: [],
          serviceId: 'trademark-registration',
          requiresConsultation: false
        };
      }
    }

    if (needType === 'probate') {
      if (isRepresentative === 'no') {
        return {
          name: 'Heir Representation',
          price: '$2,500',
          description: 'Full legal representation for non-representative heirs throughout the probate process.',
          includes: [
            'Full Legal Representation Throughout the Probate Proceeding',
            'Review of All Filings and Court Documents',
            'Protection of Heir\'s Interests and Inheritance Rights',
            'Attendance at All Court Hearings on Behalf of Heir',
            'Unlimited Attorney Consultation'
          ],
          addOns: [],
          serviceId: 'heir-representation',
          requiresConsultation: false
        };
      }

      if (needsNewAttorney === 'yes') {
        return {
          name: 'Partial Probate',
          price: 'Varies - Consultation Required',
          description: 'For probate cases that have already been filed and need new legal representation.',
          includes: [
            'Preparation and Filing of All Necessary Documents',
            'Notification of Heirs and Creditors',
            'Heirship Research',
            'Asset Search',
            'Representation at All Court Hearings',
            'Preparation of Final Accounting',
            'Unlimited Attorney Consultation'
          ],
          addOns: [],
          serviceId: 'partial-probate',
          requiresConsultation: true
        };
      }

      if (decedentCounty === 'Other') {
        return null;
      }

      if (issuesAmongHeirs === 'yes') {
        return {
          name: 'Probate Package - Contested Matter',
          price: 'Varies - Consultation Required',
          description: 'For probate matters with disputes among heirs. Pricing varies based on complexity.',
          includes: [
            'Preparation and Filing of All Necessary Documents',
            'Notification of Heirs and Creditors',
            'Heirship Research',
            'Asset Search',
            'Representation at All Court Hearings',
            'Filing Fees',
            'Creditor Notification Publication Fees',
            'Preparation of Final Accounting',
            'Access to Client Portal',
            'Unlimited Attorney Consultation'
          ],
          addOns: [],
          serviceId: 'probate-package-contested',
          requiresConsultation: true
        };
      }

      if (decedentEstateValue === 'under-100k' && decedentHasRealEstate === 'no' && allDebtsPaid === 'yes') {
        return {
          name: 'Summary Probate',
          price: '$4,000',
          description: 'For estates valued at $100,000 or less with no real estate and all debts paid.',
          includes: [
            'Preparation and Filing of All Necessary Documents',
            'Notification of Heirs and Creditors',
            'Heirship Research',
            'Asset Search',
            'Representation at All Court Hearings',
            'Filing Fees',
            'Creditor Notification Publication Fees',
            'Preparation of Final Accounting',
            'Access to Client Portal',
            'Unlimited Attorney Consultation'
          ],
          addOns: [],
          serviceId: 'summary-probate',
          requiresConsultation: false
        };
      }

      const needsFullProbate = decedentEstateValue === 'over-100k' || decedentHasRealEstate === 'yes';
      if (needsFullProbate && issuesAmongHeirs === 'no') {
        return {
          name: 'Probate Package',
          price: '$7,500',
          description: 'Full probate administration for estates valued at $100,000 or more, or with real estate.',
          includes: [
            'Preparation and Filing of All Necessary Documents',
            'Notification of Heirs and Creditors',
            'Heirship Research',
            'Asset Search',
            'Representation at All Court Hearings',
            'Filing Fees',
            'Creditor Notification Publication Fees',
            'Preparation of Final Accounting',
            'Access to Client Portal',
            'Unlimited Attorney Consultation'
          ],
          addOns: [],
          serviceId: 'probate-package',
          requiresConsultation: false
        };
      }

      return null;
    }

    const needsTrust = ownsRealEstate === 'yes' || estateValue === '100k-3.5m' || estateValue === 'over-3.5m';
    const needsTaxPlanning = estateValue === 'over-3.5m';
    const isMarried = maritalStatus === 'married';

    const addOns: ServiceRecommendation['addOns'] = [];

    if (needsTrust && needsAncillary === 'yes') {
      if (needsTaxPlanning) {
        addOns.push({
          id: 'estate-tax-planning',
          name: 'Estate Tax Planning',
          price: 5000,
          description: 'Comprehensive estate tax planning strategies for estates over $3.5 million',
          suggested: true
        });
      }

      if (hasSpecialNeeds === 'yes') {
        addOns.push({
          id: 'special-needs-planning',
          name: 'Special Needs Planning',
          price: 2500,
          description: 'Special needs trust planning and documentation',
          suggested: true
        });
      }

      addOns.push({
        id: 'trust-funding',
        name: 'Trust Funding Assistance',
        price: 100,
        description: '$100 per asset - Professional assistance with transferring financial assets into your trust'
      });

      addOns.push({
        id: 'additional-deed',
        name: 'Additional Deed',
        price: 500,
        description: 'For those owning multiple properties'
      });

      return {
        name: isMarried ? 'Joint Trust Package' : 'Individual Trust Package',
        price: isMarried ? '$5,000' : '$3,500',
        description: `Perfect for ${isMarried ? 'married couples' : 'individuals'} who own real estate or have estates over $100,000 and need comprehensive estate planning protection.`,
        includes: [
          'Revocable Living Trust',
          'Pour-Over Will',
          'Power of Attorney for Healthcare and Property',
          'Healthcare Directive (Living Will)',
          'Remembrance & Services Memorandum',
          'Personal Property Memorandum',
          '(1) Deed Transfer of Real Estate to Trust',
          'Online or Mobile Notarization',
          'Physical & Digital Portfolio',
          'Access to Client Portal',
          'Unlimited Attorney Consultation'
        ],
        addOns,
        serviceId: 'trust-package',
        clientType: isMarried ? 'joint' : 'individual'
      };
    }

    if (needsTrust && needsAncillary === 'no') {
      if (needsTaxPlanning) {
        addOns.push({
          id: 'estate-tax-planning',
          name: 'Estate Tax Planning',
          price: 5000,
          description: 'Comprehensive estate tax planning strategies for estates over $3.5 million',
          suggested: true
        });
      }

      if (hasSpecialNeeds === 'yes') {
        addOns.push({
          id: 'special-needs-planning',
          name: 'Special Needs Planning',
          price: 2500,
          description: 'Special needs trust planning and documentation',
          suggested: true
        });
      }

      addOns.push({
        id: 'trust-funding',
        name: 'Trust Funding Assistance',
        price: 100,
        description: '$100 per asset - Professional assistance with transferring financial assets into your trust'
      });

      return {
        name: `${isMarried ? 'Joint' : 'Individual'} Revocable Living Trust (A La Carte)`,
        price: isMarried ? '$3,500' : '$2,500',
        description: `For ${isMarried ? 'married couples' : 'individuals'} who need a trust but already have or don't need powers of attorney and healthcare directives.`,
        includes: [
          'Revocable Living Trust only',
          'Can add other documents separately as needed'
        ],
        addOns,
        serviceId: 'revocable-living-trust',
        clientType: isMarried ? 'joint' : 'individual'
      };
    }

    if (ownsRealEstate === 'yes' && estateValue === 'under-100k' && needsAncillary === 'yes') {
      return {
        name: `${isMarried ? 'Joint' : 'Individual'} Probate Avoidance Package`,
        price: isMarried ? '$2,250' : '$1,750',
        description: `For ${isMarried ? 'married couples' : 'individuals'} who own real estate but have estates under $100,000 and want to avoid probate without a full trust.`,
        includes: [
          'Last Will & Testament',
          'Power of Attorney for Healthcare and Property',
          'Transfer-on-Death Instrument',
          'Healthcare Directive (Living Will)',
          'Remembrance & Services Memorandum',
          'Personal Property Memorandum',
          'Online or Mobile Notarization',
          'Physical & Digital Portfolio',
          'Access to Client Portal',
          'Unlimited Attorney Consultation'
        ],
        addOns: [],
        serviceId: 'probate-avoidance-package',
        clientType: isMarried ? 'joint' : 'individual'
      };
    }

    return {
      name: `${isMarried ? 'Joint' : 'Individual'} Will Package`,
      price: isMarried ? '$1,750' : '$1,250',
      description: `For ${isMarried ? 'married couples' : 'individuals'} who need basic estate planning with essential documents.`,
      includes: [
        'Last Will & Testament',
        'Power of Attorney for Healthcare and Property',
        'Healthcare Directive (Living Will)',
        'Remembrance & Services Memorandum',
        'Personal Property Memorandum',
        'Online or Mobile Notarization',
        'Physical & Digital Portfolio',
        'Access to Client Portal',
        'Unlimited Attorney Consultation'
      ],
      addOns: [],
      serviceId: 'will-package',
      clientType: isMarried ? 'joint' : 'individual'
    };
  };

  const getMaxSteps = () => {
    if (answers.needType === 'prenuptial') {
      return 3;
    }
    if (answers.needType === 'small-business') {
      return 3;
    }
    if (answers.needType === 'probate') {
      if (answers.isRepresentative === 'no') return 2;
      if (answers.isRepresentative === 'yes' && answers.needsNewAttorney === 'yes') return 3;
      if (answers.decedentCounty === 'Other') return 4;
      if (answers.issuesAmongHeirs === 'yes') return 7;
      if (answers.decedentEstateValue === 'under-100k' && answers.decedentHasRealEstate === 'no') return 8;
      return 7;
    } else {
      return 6;
    }
  };

  const handleNext = () => {
    const maxSteps = getMaxSteps();
    if (step < maxSteps) {
      setStep(step + 1);
    } else {
      const recommendation = getRecommendation();
      if (recommendation) {
        setShowResult(true);
        if (recommendation.addOns.length > 0) {
          const suggestedAddOns = recommendation.addOns
            .filter(a => a.suggested)
            .map(a => a.id);
          setSelectedAddOns(suggestedAddOns);
        }
      }
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      setShowResult(false);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return answers.needType !== '';
      case 2:
        if (answers.needType === 'prenuptial') return answers.hasExistingPrenup !== '';
        if (answers.needType === 'small-business') return answers.hasExistingBusiness !== '';
        if (answers.needType === 'probate') return answers.isRepresentative !== '';
        return answers.maritalStatus !== '';
      case 3:
        if (answers.needType === 'prenuptial') return answers.needsNegotiation !== '';
        if (answers.needType === 'small-business') return answers.needsTrademark !== '';
        if (answers.needType === 'probate') return answers.needsNewAttorney !== '';
        return answers.ownsRealEstate !== '';
      case 4:
        if (answers.needType === 'probate') return answers.decedentCounty !== '';
        return answers.estateValue !== '';
      case 5:
        if (answers.needType === 'probate') return answers.decedentEstateValue !== '';
        return answers.needsAncillary !== '';
      case 6:
        if (answers.needType === 'probate') return answers.decedentHasRealEstate !== '';
        return answers.hasSpecialNeeds !== '';
      case 7:
        if (answers.needType === 'probate') return answers.issuesAmongHeirs !== '';
        return true;
      case 8:
        if (answers.needType === 'probate') return answers.allDebtsPaid !== '';
        return true;
      default:
        return false;
    }
  };

  const resetQuiz = () => {
    setStep(1);
    setAnswers({
      needType: '',
      maritalStatus: '',
      ownsRealEstate: '',
      estateValue: '',
      needsAncillary: '',
      hasSpecialNeeds: '',
      decedentCounty: '',
      decedentEstateValue: '',
      decedentHasRealEstate: '',
      issuesAmongHeirs: '',
      allDebtsPaid: '',
      isRepresentative: '',
      needsNewAttorney: '',
      prenupNeed: '',
      hasExistingPrenup: '',
      needsNegotiation: '',
      businessNeed: '',
      hasExistingBusiness: '',
      needsTrademark: ''
    });
    setShowResult(false);
    setShowClientInfo(false);
    setShowAgreement(false);
    setShowPaymentSelection(false);
    setSelectedAddOns([]);
    setTrustFundingQuantity(1);
    setAgreementAccepted(false);
    setSignature('');
  };

  const recommendation = showResult ? getRecommendation() : null;

  const toggleAddOn = (addOnId: string) => {
    setSelectedAddOns(prev =>
      prev.includes(addOnId)
        ? prev.filter(id => id !== addOnId)
        : [...prev, addOnId]
    );
  };

  const getTotalPrice = () => {
    if (!recommendation) return 0;

    const basePrice = parseFloat(recommendation.price.replace(/[$,]/g, ''));
    if (isNaN(basePrice)) return 0;

    const addOnsTotal = selectedAddOns.reduce((total, addOnId) => {
      const addOn = recommendation.addOns.find(a => a.id === addOnId);
      if (addOnId === 'trust-funding') {
        return total + ((addOn?.price || 0) * trustFundingQuantity);
      }
      return total + (addOn?.price || 0);
    }, 0);

    return basePrice + addOnsTotal;
  };

  const handleProceedToPurchase = () => {
    if (recommendation?.requiresConsultation) {
      window.location.href = '/book-consultation/';
      return;
    }
    setShowClientInfo(true);
  };

  const handleClientInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowClientInfo(false);
    setShowAgreement(true);
  };

  const handleAgreementSign = async () => {
    if (!agreementAccepted || !signature || !recommendation) return;

    setIsProcessing(true);

    try {
      const totalPrice = getTotalPrice();
      const addOnsNames = selectedAddOns.map(addOnId => {
        const addOn = recommendation.addOns.find(a => a.id === addOnId);
        if (addOnId === 'trust-funding') {
          return `${addOn?.name} (${trustFundingQuantity} asset${trustFundingQuantity > 1 ? 's' : ''})`;
        }
        return addOn?.name;
      }).filter(Boolean);

      const supabase = getSupabaseClient();
      const { data, error } = await supabase
        .from('service_purchases')
        .insert({
          client_name: clientInfo.name,
          client_email: clientInfo.email,
          client_phone: clientInfo.phone,
          service_type: recommendation.serviceId.includes('probate') ? 'probate' : 'estate-planning',
          service_name: recommendation.name,
          service_price: totalPrice,
          client_type: recommendation.clientType || 'individual',
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
      setShowAgreement(false);
      setShowPaymentSelection(true);
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePaymentMethodSelect = async (method: 'full' | 'plan') => {
    if (!recommendation) return;

    setIsProcessing(true);

    if (method === 'full') {
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
            serviceName: recommendation.name,
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
    } else {
      try {
        const totalPrice = getTotalPrice();
        const setupFee = totalPrice * 0.05;
        const totalWithFee = totalPrice + setupFee;

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
            packagePurchased: recommendation.name,
            totalPrice: totalWithFee,
            email: clientInfo.email,
            phoneNumber: clientInfo.phone,
            typeOfService: recommendation.serviceId.includes('probate') ? 'Probate' : 'Estate Planning'
          })
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Payment plan submission failed:', errorData);
          throw new Error(errorData.error || 'Payment plan submission failed');
        }

        window.location.href = '/purchase-service/success?payment=plan';
      } catch (error) {
        console.error('Payment plan error:', error);
        alert('An error occurred submitting your payment plan request. Please try again or contact us at (312) 373-0731.');
        setIsProcessing(false);
      }
    }
  };

  const maxSteps = getMaxSteps();

  return (
    <main>
      <section className="relative min-h-[180px] bg-gradient-to-r from-[#2D3E50] to-[#4a708b] flex items-center justify-center py-6 lg:min-h-[160px] sm:min-h-[140px]">
        <div className="mx-auto max-w-[1140px] px-5 lg:px-8">
          <div className="flex justify-center lg:justify-start">
            <h1 className="font-['Lobster_Two'] text-[50px] md:text-[60px] lg:text-[75px] font-normal text-[#fefefe] leading-[50px] md:leading-[65px] lg:leading-[75px] text-center lg:text-left capitalize">
              Find the Right Service for You
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[900px] px-5 lg:px-8">
          {!showResult && !showClientInfo && !showAgreement && !showPaymentSelection ? (
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <span className="font-['Plus_Jakarta_Sans'] text-sm font-semibold text-[#4a708b]">
                    Question {step} of {maxSteps}
                  </span>
                  <span className="font-['Plus_Jakarta_Sans'] text-sm font-semibold text-[#4a708b]">
                    {Math.round((step / maxSteps) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-[#4a708b] to-[#5B8AAA] h-3 rounded-full transition-all duration-300"
                    style={{ width: `${(step / maxSteps) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Question 1: Need Type */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="font-['Plus_Jakarta_Sans'] text-[28px] lg:text-[32px] font-bold text-[#2d3e50] mb-6">
                    What brings you here today?
                  </h2>
                  <div className="space-y-4">
                    <button
                      onClick={() => updateAnswer('needType', 'estate-planning')}
                      className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                        answers.needType === 'estate-planning'
                          ? 'border-[#4a708b] bg-[#4a708b]/10'
                          : 'border-gray-300 hover:border-[#4a708b]/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2d3e50] mb-1">
                            Estate Planning
                          </div>
                          <div className="font-['Plus_Jakarta_Sans'] text-sm text-gray-600">
                            I need to create or update my will, trust, or powers of attorney
                          </div>
                        </div>
                        {answers.needType === 'estate-planning' && (
                          <CheckCircle2 className="w-6 h-6 text-[#4a708b] flex-shrink-0 ml-4" />
                        )}
                      </div>
                    </button>
                    <button
                      onClick={() => updateAnswer('needType', 'probate')}
                      className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                        answers.needType === 'probate'
                          ? 'border-[#4a708b] bg-[#4a708b]/10'
                          : 'border-gray-300 hover:border-[#4a708b]/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2d3e50] mb-1">
                            Probate
                          </div>
                          <div className="font-['Plus_Jakarta_Sans'] text-sm text-gray-600">
                            A loved one has passed away and I need help with probate
                          </div>
                        </div>
                        {answers.needType === 'probate' && (
                          <CheckCircle2 className="w-6 h-6 text-[#4a708b] flex-shrink-0 ml-4" />
                        )}
                      </div>
                    </button>
                    <button
                      onClick={() => updateAnswer('needType', 'prenuptial')}
                      className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                        answers.needType === 'prenuptial'
                          ? 'border-[#4a708b] bg-[#4a708b]/10'
                          : 'border-gray-300 hover:border-[#4a708b]/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2d3e50] mb-1">
                            Prenuptial Agreement
                          </div>
                          <div className="font-['Plus_Jakarta_Sans'] text-sm text-gray-600">
                            I need help with a prenuptial agreement before getting married
                          </div>
                        </div>
                        {answers.needType === 'prenuptial' && (
                          <CheckCircle2 className="w-6 h-6 text-[#4a708b] flex-shrink-0 ml-4" />
                        )}
                      </div>
                    </button>
                    <button
                      onClick={() => updateAnswer('needType', 'small-business')}
                      className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                        answers.needType === 'small-business'
                          ? 'border-[#4a708b] bg-[#4a708b]/10'
                          : 'border-gray-300 hover:border-[#4a708b]/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2d3e50] mb-1">
                            Small Business Services
                          </div>
                          <div className="font-['Plus_Jakarta_Sans'] text-sm text-gray-600">
                            I need to form an LLC or register a trademark for my business
                          </div>
                        </div>
                        {answers.needType === 'small-business' && (
                          <CheckCircle2 className="w-6 h-6 text-[#4a708b] flex-shrink-0 ml-4" />
                        )}
                      </div>
                    </button>
                  </div>
                </div>
              )}

              {/* Estate Planning Path */}
              {answers.needType === 'estate-planning' && (
                <>
                  {step === 2 && (
                    <div className="space-y-6">
                      <h2 className="font-['Plus_Jakarta_Sans'] text-[28px] lg:text-[32px] font-bold text-[#2d3e50] mb-6">
                        What is your marital status?
                      </h2>
                      <div className="space-y-4">
                        <button
                          onClick={() => updateAnswer('maritalStatus', 'single')}
                          className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                            answers.maritalStatus === 'single'
                              ? 'border-[#4a708b] bg-[#4a708b]/10'
                              : 'border-gray-300 hover:border-[#4a708b]/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2d3e50]">
                              Single / Not Married
                            </span>
                            {answers.maritalStatus === 'single' && (
                              <CheckCircle2 className="w-6 h-6 text-[#4a708b]" />
                            )}
                          </div>
                        </button>
                        <button
                          onClick={() => updateAnswer('maritalStatus', 'married')}
                          className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                            answers.maritalStatus === 'married'
                              ? 'border-[#4a708b] bg-[#4a708b]/10'
                              : 'border-gray-300 hover:border-[#4a708b]/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2d3e50]">
                              Married
                            </span>
                            {answers.maritalStatus === 'married' && (
                              <CheckCircle2 className="w-6 h-6 text-[#4a708b]" />
                            )}
                          </div>
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-6">
                      <h2 className="font-['Plus_Jakarta_Sans'] text-[28px] lg:text-[32px] font-bold text-[#2d3e50] mb-6">
                        Do you own real estate?
                      </h2>
                      <p className="font-['Plus_Jakarta_Sans'] text-base text-gray-600 mb-6">
                        This includes your home, rental properties, vacant land, or any other real property.
                      </p>
                      <div className="space-y-4">
                        <button
                          onClick={() => updateAnswer('ownsRealEstate', 'yes')}
                          className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                            answers.ownsRealEstate === 'yes'
                              ? 'border-[#4a708b] bg-[#4a708b]/10'
                              : 'border-gray-300 hover:border-[#4a708b]/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2d3e50]">
                              Yes, I own real estate
                            </span>
                            {answers.ownsRealEstate === 'yes' && (
                              <CheckCircle2 className="w-6 h-6 text-[#4a708b]" />
                            )}
                          </div>
                        </button>
                        <button
                          onClick={() => updateAnswer('ownsRealEstate', 'no')}
                          className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                            answers.ownsRealEstate === 'no'
                              ? 'border-[#4a708b] bg-[#4a708b]/10'
                              : 'border-gray-300 hover:border-[#4a708b]/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2d3e50]">
                              No, I do not own real estate
                            </span>
                            {answers.ownsRealEstate === 'no' && (
                              <CheckCircle2 className="w-6 h-6 text-[#4a708b]" />
                            )}
                          </div>
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 4 && (
                    <div className="space-y-6">
                      <h2 className="font-['Plus_Jakarta_Sans'] text-[28px] lg:text-[32px] font-bold text-[#2d3e50] mb-6">
                        What is your estimated estate value?
                      </h2>
                      <p className="font-['Plus_Jakarta_Sans'] text-base text-gray-600 mb-6">
                        This includes all your assets: real estate, bank accounts, investments, retirement accounts, life insurance, vehicles, and personal property.
                      </p>
                      <div className="space-y-4">
                        <button
                          onClick={() => updateAnswer('estateValue', 'under-100k')}
                          className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                            answers.estateValue === 'under-100k'
                              ? 'border-[#4a708b] bg-[#4a708b]/10'
                              : 'border-gray-300 hover:border-[#4a708b]/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2d3e50]">
                              Under $100,000
                            </span>
                            {answers.estateValue === 'under-100k' && (
                              <CheckCircle2 className="w-6 h-6 text-[#4a708b]" />
                            )}
                          </div>
                        </button>
                        <button
                          onClick={() => updateAnswer('estateValue', '100k-3.5m')}
                          className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                            answers.estateValue === '100k-3.5m'
                              ? 'border-[#4a708b] bg-[#4a708b]/10'
                              : 'border-gray-300 hover:border-[#4a708b]/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2d3e50]">
                              $100,000 - $3.5 Million
                            </span>
                            {answers.estateValue === '100k-3.5m' && (
                              <CheckCircle2 className="w-6 h-6 text-[#4a708b]" />
                            )}
                          </div>
                        </button>
                        <button
                          onClick={() => updateAnswer('estateValue', 'over-3.5m')}
                          className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                            answers.estateValue === 'over-3.5m'
                              ? 'border-[#4a708b] bg-[#4a708b]/10'
                              : 'border-gray-300 hover:border-[#4a708b]/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2d3e50]">
                              Over $3.5 Million
                            </span>
                            {answers.estateValue === 'over-3.5m' && (
                              <CheckCircle2 className="w-6 h-6 text-[#4a708b]" />
                            )}
                          </div>
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 5 && (
                    <div className="space-y-6">
                      <h2 className="font-['Plus_Jakarta_Sans'] text-[28px] lg:text-[32px] font-bold text-[#2d3e50] mb-6">
                        Do you need powers of attorney and healthcare directives?
                      </h2>
                      <p className="font-['Plus_Jakarta_Sans'] text-base text-gray-600 mb-6">
                        These documents allow someone to make financial and medical decisions for you if you become incapacitated. Most people need these essential protections.
                      </p>
                      <div className="space-y-4">
                        <button
                          onClick={() => updateAnswer('needsAncillary', 'yes')}
                          className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                            answers.needsAncillary === 'yes'
                              ? 'border-[#4a708b] bg-[#4a708b]/10'
                              : 'border-gray-300 hover:border-[#4a708b]/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2d3e50] mb-1">
                                Yes, I need these documents
                              </div>
                              <div className="font-['Plus_Jakarta_Sans'] text-sm text-gray-600">
                                Recommended for complete protection
                              </div>
                            </div>
                            {answers.needsAncillary === 'yes' && (
                              <CheckCircle2 className="w-6 h-6 text-[#4a708b] flex-shrink-0 ml-4" />
                            )}
                          </div>
                        </button>
                        <button
                          onClick={() => updateAnswer('needsAncillary', 'no')}
                          className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                            answers.needsAncillary === 'no'
                              ? 'border-[#4a708b] bg-[#4a708b]/10'
                              : 'border-gray-300 hover:border-[#4a708b]/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2d3e50] mb-1">
                                No, I already have these or don't need them
                              </div>
                              <div className="font-['Plus_Jakarta_Sans'] text-sm text-gray-600">
                                For those with existing documents
                              </div>
                            </div>
                            {answers.needsAncillary === 'no' && (
                              <CheckCircle2 className="w-6 h-6 text-[#4a708b] flex-shrink-0 ml-4" />
                            )}
                          </div>
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 6 && (
                    <div className="space-y-6">
                      <h2 className="font-['Plus_Jakarta_Sans'] text-[28px] lg:text-[32px] font-bold text-[#2d3e50] mb-6">
                        Do you have a child or beneficiary with special needs?
                      </h2>
                      <p className="font-['Plus_Jakarta_Sans'] text-base text-gray-600 mb-6">
                        Special needs planning can help protect government benefits while providing for your loved one's future.
                      </p>
                      <div className="space-y-4">
                        <button
                          onClick={() => updateAnswer('hasSpecialNeeds', 'yes')}
                          className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                            answers.hasSpecialNeeds === 'yes'
                              ? 'border-[#4a708b] bg-[#4a708b]/10'
                              : 'border-gray-300 hover:border-[#4a708b]/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2d3e50]">
                              Yes
                            </span>
                            {answers.hasSpecialNeeds === 'yes' && (
                              <CheckCircle2 className="w-6 h-6 text-[#4a708b]" />
                            )}
                          </div>
                        </button>
                        <button
                          onClick={() => updateAnswer('hasSpecialNeeds', 'no')}
                          className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                            answers.hasSpecialNeeds === 'no'
                              ? 'border-[#4a708b] bg-[#4a708b]/10'
                              : 'border-gray-300 hover:border-[#4a708b]/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2d3e50]">
                              No
                            </span>
                            {answers.hasSpecialNeeds === 'no' && (
                              <CheckCircle2 className="w-6 h-6 text-[#4a708b]" />
                            )}
                          </div>
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* Prenuptial Path */}
              {answers.needType === 'prenuptial' && (
                <>
                  {step === 2 && (
                    <div className="space-y-6">
                      <h2 className="font-['Plus_Jakarta_Sans'] text-[28px] lg:text-[32px] font-bold text-[#2d3e50] mb-6">
                        Do you already have a prenuptial agreement?
                      </h2>
                      <p className="font-['Plus_Jakarta_Sans'] text-base text-gray-600 mb-6">
                        This will help us determine whether you need drafting or review services.
                      </p>
                      <div className="space-y-4">
                        <button
                          onClick={() => updateAnswer('hasExistingPrenup', 'yes')}
                          className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                            answers.hasExistingPrenup === 'yes'
                              ? 'border-[#4a708b] bg-[#4a708b]/10'
                              : 'border-gray-300 hover:border-[#4a708b]/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2d3e50] mb-1">
                                Yes, I have an existing agreement
                              </div>
                              <div className="font-['Plus_Jakarta_Sans'] text-sm text-gray-600">
                                I need help reviewing an agreement I've received
                              </div>
                            </div>
                            {answers.hasExistingPrenup === 'yes' && (
                              <CheckCircle2 className="w-6 h-6 text-[#4a708b] flex-shrink-0 ml-4" />
                            )}
                          </div>
                        </button>
                        <button
                          onClick={() => updateAnswer('hasExistingPrenup', 'no')}
                          className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                            answers.hasExistingPrenup === 'no'
                              ? 'border-[#4a708b] bg-[#4a708b]/10'
                              : 'border-gray-300 hover:border-[#4a708b]/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2d3e50] mb-1">
                                No, I need a new agreement
                              </div>
                              <div className="font-['Plus_Jakarta_Sans'] text-sm text-gray-600">
                                I need help creating a prenuptial agreement from scratch
                              </div>
                            </div>
                            {answers.hasExistingPrenup === 'no' && (
                              <CheckCircle2 className="w-6 h-6 text-[#4a708b] flex-shrink-0 ml-4" />
                            )}
                          </div>
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-6">
                      <h2 className="font-['Plus_Jakarta_Sans'] text-[28px] lg:text-[32px] font-bold text-[#2d3e50] mb-6">
                        Do you need negotiation assistance?
                      </h2>
                      <p className="font-['Plus_Jakarta_Sans'] text-base text-gray-600 mb-6">
                        Negotiation services help ensure fair terms and protect your interests during discussions with your partner or their attorney.
                      </p>
                      <div className="space-y-4">
                        <button
                          onClick={() => updateAnswer('needsNegotiation', 'yes')}
                          className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                            answers.needsNegotiation === 'yes'
                              ? 'border-[#4a708b] bg-[#4a708b]/10'
                              : 'border-gray-300 hover:border-[#4a708b]/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2d3e50]">
                              Yes, I need negotiation help
                            </span>
                            {answers.needsNegotiation === 'yes' && (
                              <CheckCircle2 className="w-6 h-6 text-[#4a708b]" />
                            )}
                          </div>
                        </button>
                        <button
                          onClick={() => updateAnswer('needsNegotiation', 'no')}
                          className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                            answers.needsNegotiation === 'no'
                              ? 'border-[#4a708b] bg-[#4a708b]/10'
                              : 'border-gray-300 hover:border-[#4a708b]/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2d3e50]">
                              No, just drafting or review
                            </span>
                            {answers.needsNegotiation === 'no' && (
                              <CheckCircle2 className="w-6 h-6 text-[#4a708b]" />
                            )}
                          </div>
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* Small Business Path */}
              {answers.needType === 'small-business' && (
                <>
                  {step === 2 && (
                    <div className="space-y-6">
                      <h2 className="font-['Plus_Jakarta_Sans'] text-[28px] lg:text-[32px] font-bold text-[#2d3e50] mb-6">
                        Do you already have an LLC?
                      </h2>
                      <p className="font-['Plus_Jakarta_Sans'] text-base text-gray-600 mb-6">
                        This will help us determine if you need business formation services or just trademark registration.
                      </p>
                      <div className="space-y-4">
                        <button
                          onClick={() => updateAnswer('hasExistingBusiness', 'yes')}
                          className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                            answers.hasExistingBusiness === 'yes'
                              ? 'border-[#4a708b] bg-[#4a708b]/10'
                              : 'border-gray-300 hover:border-[#4a708b]/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2d3e50] mb-1">
                                Yes, I have an existing LLC
                              </div>
                              <div className="font-['Plus_Jakarta_Sans'] text-sm text-gray-600">
                                I just need trademark or other services
                              </div>
                            </div>
                            {answers.hasExistingBusiness === 'yes' && (
                              <CheckCircle2 className="w-6 h-6 text-[#4a708b] flex-shrink-0 ml-4" />
                            )}
                          </div>
                        </button>
                        <button
                          onClick={() => updateAnswer('hasExistingBusiness', 'no')}
                          className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                            answers.hasExistingBusiness === 'no'
                              ? 'border-[#4a708b] bg-[#4a708b]/10'
                              : 'border-gray-300 hover:border-[#4a708b]/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2d3e50] mb-1">
                                No, I need to form an LLC
                              </div>
                              <div className="font-['Plus_Jakarta_Sans'] text-sm text-gray-600">
                                I need help creating a new business entity
                              </div>
                            </div>
                            {answers.hasExistingBusiness === 'no' && (
                              <CheckCircle2 className="w-6 h-6 text-[#4a708b] flex-shrink-0 ml-4" />
                            )}
                          </div>
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-6">
                      <h2 className="font-['Plus_Jakarta_Sans'] text-[28px] lg:text-[32px] font-bold text-[#2d3e50] mb-6">
                        Do you need trademark registration?
                      </h2>
                      <p className="font-['Plus_Jakarta_Sans'] text-base text-gray-600 mb-6">
                        Trademark registration protects your brand name, logo, or slogan from being used by competitors.
                      </p>
                      <div className="space-y-4">
                        <button
                          onClick={() => updateAnswer('needsTrademark', 'yes')}
                          className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                            answers.needsTrademark === 'yes'
                              ? 'border-[#4a708b] bg-[#4a708b]/10'
                              : 'border-gray-300 hover:border-[#4a708b]/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2d3e50]">
                              Yes, I need trademark protection
                            </span>
                            {answers.needsTrademark === 'yes' && (
                              <CheckCircle2 className="w-6 h-6 text-[#4a708b]" />
                            )}
                          </div>
                        </button>
                        <button
                          onClick={() => updateAnswer('needsTrademark', 'no')}
                          className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                            answers.needsTrademark === 'no'
                              ? 'border-[#4a708b] bg-[#4a708b]/10'
                              : 'border-gray-300 hover:border-[#4a708b]/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2d3e50]">
                              No, just LLC formation
                            </span>
                            {answers.needsTrademark === 'no' && (
                              <CheckCircle2 className="w-6 h-6 text-[#4a708b]" />
                            )}
                          </div>
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* Probate Path */}
              {answers.needType === 'probate' && (
                <>
                  {step === 2 && (
                    <div className="space-y-6">
                      <h2 className="font-['Plus_Jakarta_Sans'] text-[28px] lg:text-[32px] font-bold text-[#2d3e50] mb-6">
                        Are you the estate representative (executor)?
                      </h2>
                      <p className="font-['Plus_Jakarta_Sans'] text-base text-gray-600 mb-6">
                        The representative is the person responsible for administering the estate through probate.
                      </p>
                      <div className="space-y-4">
                        <button
                          onClick={() => updateAnswer('isRepresentative', 'yes')}
                          className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                            answers.isRepresentative === 'yes'
                              ? 'border-[#4a708b] bg-[#4a708b]/10'
                              : 'border-gray-300 hover:border-[#4a708b]/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2d3e50]">
                              Yes, I am the representative
                            </span>
                            {answers.isRepresentative === 'yes' && (
                              <CheckCircle2 className="w-6 h-6 text-[#4a708b]" />
                            )}
                          </div>
                        </button>
                        <button
                          onClick={() => updateAnswer('isRepresentative', 'no')}
                          className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                            answers.isRepresentative === 'no'
                              ? 'border-[#4a708b] bg-[#4a708b]/10'
                              : 'border-gray-300 hover:border-[#4a708b]/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2d3e50]">
                              No, I am an heir or beneficiary
                            </span>
                            {answers.isRepresentative === 'no' && (
                              <CheckCircle2 className="w-6 h-6 text-[#4a708b]" />
                            )}
                          </div>
                        </button>
                      </div>
                    </div>
                  )}

                  {answers.isRepresentative === 'yes' && step === 3 && (
                    <div className="space-y-6">
                      <h2 className="font-['Plus_Jakarta_Sans'] text-[28px] lg:text-[32px] font-bold text-[#2d3e50] mb-6">
                        Has probate already been filed?
                      </h2>
                      <p className="font-['Plus_Jakarta_Sans'] text-base text-gray-600 mb-6">
                        Are you seeking a new attorney to take over an existing probate case?
                      </p>
                      <div className="space-y-4">
                        <button
                          onClick={() => updateAnswer('needsNewAttorney', 'yes')}
                          className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                            answers.needsNewAttorney === 'yes'
                              ? 'border-[#4a708b] bg-[#4a708b]/10'
                              : 'border-gray-300 hover:border-[#4a708b]/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2d3e50]">
                              Yes, I need help with an existing case
                            </span>
                            {answers.needsNewAttorney === 'yes' && (
                              <CheckCircle2 className="w-6 h-6 text-[#4a708b]" />
                            )}
                          </div>
                        </button>
                        <button
                          onClick={() => updateAnswer('needsNewAttorney', 'no')}
                          className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                            answers.needsNewAttorney === 'no'
                              ? 'border-[#4a708b] bg-[#4a708b]/10'
                              : 'border-gray-300 hover:border-[#4a708b]/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2d3e50]">
                              No, I'm starting a new probate case
                            </span>
                            {answers.needsNewAttorney === 'no' && (
                              <CheckCircle2 className="w-6 h-6 text-[#4a708b]" />
                            )}
                          </div>
                        </button>
                      </div>
                    </div>
                  )}

                  {answers.isRepresentative === 'yes' && answers.needsNewAttorney === 'no' && step === 4 && (
                    <div className="space-y-6">
                      <h2 className="font-['Plus_Jakarta_Sans'] text-[28px] lg:text-[32px] font-bold text-[#2d3e50] mb-6">
                        In which county did the decedent reside?
                      </h2>
                      <div className="space-y-4">
                        {counties.map(county => (
                          <button
                            key={county}
                            onClick={() => updateAnswer('decedentCounty', county)}
                            className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                              answers.decedentCounty === county
                                ? 'border-[#4a708b] bg-[#4a708b]/10'
                                : 'border-gray-300 hover:border-[#4a708b]/50'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2d3e50]">
                                {county}
                              </span>
                              {answers.decedentCounty === county && (
                                <CheckCircle2 className="w-6 h-6 text-[#4a708b]" />
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {answers.isRepresentative === 'yes' && answers.needsNewAttorney === 'no' && answers.decedentCounty !== 'Other' && answers.decedentCounty !== '' && step === 5 && (
                    <div className="space-y-6">
                      <h2 className="font-['Plus_Jakarta_Sans'] text-[28px] lg:text-[32px] font-bold text-[#2d3e50] mb-6">
                        What is the estimated value of the estate?
                      </h2>
                      <div className="space-y-4">
                        <button
                          onClick={() => updateAnswer('decedentEstateValue', 'under-100k')}
                          className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                            answers.decedentEstateValue === 'under-100k'
                              ? 'border-[#4a708b] bg-[#4a708b]/10'
                              : 'border-gray-300 hover:border-[#4a708b]/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2d3e50]">
                              Under $100,000
                            </span>
                            {answers.decedentEstateValue === 'under-100k' && (
                              <CheckCircle2 className="w-6 h-6 text-[#4a708b]" />
                            )}
                          </div>
                        </button>
                        <button
                          onClick={() => updateAnswer('decedentEstateValue', 'over-100k')}
                          className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                            answers.decedentEstateValue === 'over-100k'
                              ? 'border-[#4a708b] bg-[#4a708b]/10'
                              : 'border-gray-300 hover:border-[#4a708b]/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2d3e50]">
                              $100,000 or more
                            </span>
                            {answers.decedentEstateValue === 'over-100k' && (
                              <CheckCircle2 className="w-6 h-6 text-[#4a708b]" />
                            )}
                          </div>
                        </button>
                      </div>
                    </div>
                  )}

                  {answers.isRepresentative === 'yes' && answers.needsNewAttorney === 'no' && answers.decedentCounty !== 'Other' && answers.decedentCounty !== '' && step === 6 && (
                    <div className="space-y-6">
                      <h2 className="font-['Plus_Jakarta_Sans'] text-[28px] lg:text-[32px] font-bold text-[#2d3e50] mb-6">
                        Does the estate include real estate?
                      </h2>
                      <div className="space-y-4">
                        <button
                          onClick={() => updateAnswer('decedentHasRealEstate', 'yes')}
                          className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                            answers.decedentHasRealEstate === 'yes'
                              ? 'border-[#4a708b] bg-[#4a708b]/10'
                              : 'border-gray-300 hover:border-[#4a708b]/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2d3e50]">
                              Yes
                            </span>
                            {answers.decedentHasRealEstate === 'yes' && (
                              <CheckCircle2 className="w-6 h-6 text-[#4a708b]" />
                            )}
                          </div>
                        </button>
                        <button
                          onClick={() => updateAnswer('decedentHasRealEstate', 'no')}
                          className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                            answers.decedentHasRealEstate === 'no'
                              ? 'border-[#4a708b] bg-[#4a708b]/10'
                              : 'border-gray-300 hover:border-[#4a708b]/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2d3e50]">
                              No
                            </span>
                            {answers.decedentHasRealEstate === 'no' && (
                              <CheckCircle2 className="w-6 h-6 text-[#4a708b]" />
                            )}
                          </div>
                        </button>
                      </div>
                    </div>
                  )}

                  {answers.isRepresentative === 'yes' && answers.needsNewAttorney === 'no' && answers.decedentCounty !== 'Other' && answers.decedentCounty !== '' && step === 7 && (
                    <div className="space-y-6">
                      <h2 className="font-['Plus_Jakarta_Sans'] text-[28px] lg:text-[32px] font-bold text-[#2d3e50] mb-6">
                        Are there any disputes or issues among the heirs?
                      </h2>
                      <div className="space-y-4">
                        <button
                          onClick={() => updateAnswer('issuesAmongHeirs', 'yes')}
                          className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                            answers.issuesAmongHeirs === 'yes'
                              ? 'border-[#4a708b] bg-[#4a708b]/10'
                              : 'border-gray-300 hover:border-[#4a708b]/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2d3e50]">
                              Yes, there are disputes
                            </span>
                            {answers.issuesAmongHeirs === 'yes' && (
                              <CheckCircle2 className="w-6 h-6 text-[#4a708b]" />
                            )}
                          </div>
                        </button>
                        <button
                          onClick={() => updateAnswer('issuesAmongHeirs', 'no')}
                          className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                            answers.issuesAmongHeirs === 'no'
                              ? 'border-[#4a708b] bg-[#4a708b]/10'
                              : 'border-gray-300 hover:border-[#4a708b]/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2d3e50]">
                              No, all heirs are in agreement
                            </span>
                            {answers.issuesAmongHeirs === 'no' && (
                              <CheckCircle2 className="w-6 h-6 text-[#4a708b]" />
                            )}
                          </div>
                        </button>
                      </div>
                    </div>
                  )}

                  {answers.isRepresentative === 'yes' && answers.needsNewAttorney === 'no' && answers.decedentCounty !== 'Other' && answers.decedentCounty !== '' && answers.decedentEstateValue === 'under-100k' && answers.decedentHasRealEstate === 'no' && step === 8 && (
                    <div className="space-y-6">
                      <h2 className="font-['Plus_Jakarta_Sans'] text-[28px] lg:text-[32px] font-bold text-[#2d3e50] mb-6">
                        Have all of the decedent's debts been paid?
                      </h2>
                      <div className="space-y-4">
                        <button
                          onClick={() => updateAnswer('allDebtsPaid', 'yes')}
                          className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                            answers.allDebtsPaid === 'yes'
                              ? 'border-[#4a708b] bg-[#4a708b]/10'
                              : 'border-gray-300 hover:border-[#4a708b]/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2d3e50]">
                              Yes, all debts are paid
                            </span>
                            {answers.allDebtsPaid === 'yes' && (
                              <CheckCircle2 className="w-6 h-6 text-[#4a708b]" />
                            )}
                          </div>
                        </button>
                        <button
                          onClick={() => updateAnswer('allDebtsPaid', 'no')}
                          className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                            answers.allDebtsPaid === 'no'
                              ? 'border-[#4a708b] bg-[#4a708b]/10'
                              : 'border-gray-300 hover:border-[#4a708b]/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-[#2d3e50]">
                              No, there are outstanding debts
                            </span>
                            {answers.allDebtsPaid === 'no' && (
                              <CheckCircle2 className="w-6 h-6 text-[#4a708b]" />
                            )}
                          </div>
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}

              {answers.needType === 'probate' && answers.decedentCounty === 'Other' && step === 4 && (
                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-8 text-center">
                  <AlertCircle className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                  <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#2d3e50] mb-4">
                    Service Area Notice
                  </h3>
                  <p className="font-['Plus_Jakarta_Sans'] text-base text-gray-700 mb-6">
                    We currently only practice in Cook, DuPage, Kane, Lake, Will, and McHenry Counties. Please contact us to discuss your specific situation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={() => window.location.href = '/book-consultation/'}
                      className="bg-[#4a708b] hover:bg-[#2d3e50] text-white px-8 py-3"
                    >
                      Book Consultation
                    </Button>
                    <Button
                      onClick={resetQuiz}
                      variant="outline"
                      className="border-2 border-[#4a708b] text-[#4a708b] hover:bg-[#4a708b]/10 px-8 py-3"
                    >
                      Start Over
                    </Button>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              {!(answers.needType === 'probate' && answers.decedentCounty === 'Other' && step === 4) && (
                <div className="flex gap-4 mt-8">
                  {step > 1 && (
                    <button
                      onClick={handleBack}
                      className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#4a708b] text-[#4a708b] font-['Plus_Jakarta_Sans'] font-semibold hover:bg-[#4a708b] hover:text-white transition-all"
                    >
                      <ArrowLeft className="w-5 h-5" />
                      Back
                    </button>
                  )}
                  <button
                    onClick={handleNext}
                    disabled={!canProceed()}
                    className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full font-['Plus_Jakarta_Sans'] font-semibold transition-all ${
                      canProceed()
                        ? 'bg-[#4a708b] text-white hover:bg-[#2d3e50]'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {step === maxSteps ? 'See My Recommendation' : 'Next'}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          ) : showResult && !showClientInfo && !showAgreement && !showPaymentSelection && recommendation ? (
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="font-['Plus_Jakarta_Sans'] text-[32px] lg:text-[40px] font-bold text-[#2d3e50] mb-4">
                  Your Recommended Service
                </h2>
                <p className="font-['Plus_Jakarta_Sans'] text-lg text-gray-600">
                  Based on your answers, here's the perfect package for you
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-2xl p-8 mb-8">
                <h3 className="font-['Plus_Jakarta_Sans'] text-[28px] font-bold text-white mb-2">
                  {recommendation.name}
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-[32px] font-bold text-white mb-4">
                  {recommendation.price}
                </p>
                <p className="font-['Plus_Jakarta_Sans'] text-base text-white/90 mb-6">
                  {recommendation.description}
                </p>

                <div className="bg-white/10 rounded-xl p-6 mb-6">
                  <h4 className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-white mb-4">
                    What's Included:
                  </h4>
                  <ul className="space-y-2">
                    {recommendation.includes.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-white/90">
                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="font-['Plus_Jakarta_Sans'] text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {recommendation.addOns.length > 0 && (
                  <div className="bg-white/10 rounded-xl p-6 mb-6">
                    <h4 className="font-['Plus_Jakarta_Sans'] text-lg font-semibold text-white mb-4">
                      Available Add-Ons:
                    </h4>
                    <div className="space-y-3">
                      {recommendation.addOns.map((addOn) => (
                        <div
                          key={addOn.id}
                          className={`bg-white/10 rounded-lg p-4 ${
                            addOn.id === 'trust-funding' ? '' : 'cursor-pointer hover:bg-white/20'
                          } transition-all ${
                            selectedAddOns.includes(addOn.id) ? 'ring-2 ring-white' : ''
                          }`}
                          onClick={addOn.id === 'trust-funding' ? undefined : () => toggleAddOn(addOn.id)}
                        >
                          <div className="flex items-start gap-3">
                            <Checkbox
                              checked={selectedAddOns.includes(addOn.id)}
                              onCheckedChange={() => toggleAddOn(addOn.id)}
                              className="mt-1 border-white data-[state=checked]:bg-white data-[state=checked]:text-[#2d3e50]"
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <h5 className="font-['Plus_Jakarta_Sans'] font-semibold text-white">
                                  {addOn.name}
                                  {addOn.suggested && (
                                    <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded">
                                      Suggested
                                    </span>
                                  )}
                                </h5>
                                <span className="font-['Plus_Jakarta_Sans'] font-bold text-white">
                                  {addOn.id === 'trust-funding' && selectedAddOns.includes(addOn.id)
                                    ? `$${(addOn.price * trustFundingQuantity).toLocaleString()}`
                                    : `$${addOn.price.toLocaleString()}`}
                                </span>
                              </div>
                              <p className="font-['Plus_Jakarta_Sans'] text-sm text-white/80">
                                {addOn.description}
                              </p>
                              {addOn.id === 'trust-funding' && selectedAddOns.includes(addOn.id) && (
                                <div className="mt-3 flex items-center gap-3">
                                  <span className="font-['Plus_Jakarta_Sans'] text-sm text-white/90">
                                    Number of assets:
                                  </span>
                                  <div className="flex items-center gap-2">
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setTrustFundingQuantity(Math.max(1, trustFundingQuantity - 1));
                                      }}
                                      className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white font-bold"
                                    >
                                      -
                                    </button>
                                    <span className="font-['Plus_Jakarta_Sans'] font-bold text-white w-12 text-center">
                                      {trustFundingQuantity}
                                    </span>
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setTrustFundingQuantity(trustFundingQuantity + 1);
                                      }}
                                      className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white font-bold"
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedAddOns.length > 0 && (
                  <div className="bg-white/10 rounded-xl p-6 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="font-['Plus_Jakarta_Sans'] text-xl font-semibold text-white">
                        Total with Add-Ons:
                      </span>
                      <span className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-white">
                        ${getTotalPrice().toLocaleString()}
                      </span>
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={handleProceedToPurchase}
                    className="flex-1 bg-white text-[#2d3e50] px-8 py-4 rounded-full font-['Plus_Jakarta_Sans'] font-bold hover:bg-gray-100"
                  >
                    {recommendation.requiresConsultation ? 'Book Consultation' : 'Get Started'}
                  </Button>
                  <Link
                    href="/services-pricing"
                    className="flex-1 bg-white/10 text-white px-8 py-4 rounded-full font-['Plus_Jakarta_Sans'] font-semibold text-center hover:bg-white/20 transition-all border-2 border-white/30 flex items-center justify-center"
                  >
                    View All Services
                  </Link>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={resetQuiz}
                  className="text-[#4a708b] font-['Plus_Jakarta_Sans'] font-semibold hover:underline"
                >
                  Take Quiz Again
                </button>
              </div>
            </div>
          ) : showClientInfo ? (
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <h2 className="font-['Plus_Jakarta_Sans'] text-[32px] font-bold text-[#2d3e50] mb-6">
                Your Information
              </h2>
              <form onSubmit={handleClientInfoSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-[#2d3e50] font-semibold mb-2 block">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    value={clientInfo.name}
                    onChange={(e) => setClientInfo(prev => ({ ...prev, name: e.target.value }))}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-[#2d3e50] font-semibold mb-2 block">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={clientInfo.email}
                    onChange={(e) => setClientInfo(prev => ({ ...prev, email: e.target.value }))}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-[#2d3e50] font-semibold mb-2 block">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={clientInfo.phone}
                    onChange={(e) => setClientInfo(prev => ({ ...prev, phone: e.target.value }))}
                    required
                    className="w-full"
                  />
                </div>
                <div className="flex gap-4">
                  <Button
                    type="button"
                    onClick={() => setShowClientInfo(false)}
                    variant="outline"
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button type="submit" className="flex-1 bg-[#4a708b] hover:bg-[#2d3e50]">
                    Continue to Agreement
                  </Button>
                </div>
              </form>
            </div>
          ) : showAgreement ? (
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <h2 className="font-['Plus_Jakarta_Sans'] text-[32px] font-bold text-[#2d3e50] mb-6">
                Client Services Agreement
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 mb-6 max-h-96 overflow-y-auto">
                <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-lg mb-4">Terms of Service</h3>
                <p className="text-sm text-gray-700 mb-4">
                  This Client Services Agreement is between you and Illinois Estate Law for the provision of legal services.
                </p>
                <p className="text-sm text-gray-700 mb-4">
                  By signing below, you agree to the terms and conditions outlined in this agreement, including the scope of services, fees, and responsibilities of both parties.
                </p>
                <p className="text-sm text-gray-700 mb-4">
                  Services: {recommendation?.name}
                </p>
                <p className="text-sm text-gray-700 mb-4">
                  Total Fee: ${getTotalPrice().toLocaleString()}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="agreement"
                    checked={agreementAccepted}
                    onCheckedChange={(checked) => setAgreementAccepted(checked as boolean)}
                  />
                  <Label htmlFor="agreement" className="text-sm text-gray-700 cursor-pointer">
                    I have read and agree to the Client Services Agreement and understand the terms of service.
                  </Label>
                </div>

                <div>
                  <Label htmlFor="signature" className="text-[#2d3e50] font-semibold mb-2 block">
                    Electronic Signature *
                  </Label>
                  <Input
                    id="signature"
                    value={signature}
                    onChange={(e) => setSignature(e.target.value)}
                    placeholder="Type your full name"
                    className="w-full font-['Lobster_Two'] text-2xl"
                  />
                  <p className="text-sm text-gray-600 mt-2">
                    By typing your name above, you agree that this is a legally binding signature.
                  </p>
                </div>

                <div className="flex gap-4">
                  <Button
                    onClick={() => setShowAgreement(false)}
                    variant="outline"
                    className="flex-1"
                    disabled={isProcessing}
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleAgreementSign}
                    disabled={!agreementAccepted || !signature || isProcessing}
                    className="flex-1 bg-[#4a708b] hover:bg-[#2d3e50]"
                  >
                    {isProcessing ? 'Processing...' : 'Sign & Continue'}
                  </Button>
                </div>
              </div>
            </div>
          ) : showPaymentSelection ? (
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <h2 className="font-['Plus_Jakarta_Sans'] text-[32px] font-bold text-[#2d3e50] mb-6 text-center">
                Choose Your Payment Option
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="border-2 border-gray-300 rounded-xl p-8 hover:border-[#4a708b] transition-all">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#2d3e50] mb-4">
                    Pay in Full
                  </h3>
                  <p className="text-4xl font-bold text-[#4a708b] mb-4">
                    ${getTotalPrice().toLocaleString()}
                  </p>
                  <p className="text-gray-600 mb-6">
                    Complete payment now via credit card through our secure payment processor.
                  </p>
                  <Button
                    onClick={() => handlePaymentMethodSelect('full')}
                    disabled={isProcessing}
                    className="w-full bg-[#4a708b] hover:bg-[#2d3e50]"
                  >
                    {isProcessing ? 'Processing...' : 'Pay in Full'}
                  </Button>
                </div>

                <div className="border-2 border-gray-300 rounded-xl p-8 hover:border-[#4a708b] transition-all">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#2d3e50] mb-4">
                    Payment Plan
                  </h3>
                  <p className="text-4xl font-bold text-[#4a708b] mb-4">
                    ${Math.round(getTotalPrice() * 1.05).toLocaleString()}
                  </p>
                  <p className="text-gray-600 mb-2">
                    Pay over 6 months with a 5% setup fee.
                  </p>
                  <p className="text-sm text-gray-500 mb-6">
                    Monthly payment: ${Math.round((getTotalPrice() * 1.05) / 6).toLocaleString()}
                  </p>
                  <Button
                    onClick={() => handlePaymentMethodSelect('plan')}
                    disabled={isProcessing}
                    variant="outline"
                    className="w-full border-2 border-[#4a708b] text-[#4a708b] hover:bg-[#4a708b]/10"
                  >
                    {isProcessing ? 'Processing...' : 'Select Payment Plan'}
                  </Button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
