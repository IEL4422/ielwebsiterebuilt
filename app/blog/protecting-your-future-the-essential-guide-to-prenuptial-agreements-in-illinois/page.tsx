'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Shield, Heart, FileText, Scale, CheckCircle2, AlertTriangle, ChevronDown, ChevronUp, Lock, Users, DollarSign, Home, Briefcase, TrendingUp } from 'lucide-react';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogSummary from '@/components/blog/BlogSummary';
import BlogNavigation from '@/components/blog/BlogNavigation';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogContactForm from '@/components/blog/BlogContactForm';
import { getBlogPost, getAdjacentPosts, getRelatedPosts } from '@/lib/blog-posts-data';

export default function Page() {
  const currentSlug = 'protecting-your-future-the-essential-guide-to-prenuptial-agreements-in-illinois';
  const currentPost = getBlogPost(currentSlug);
  const { previous, next } = getAdjacentPosts(currentSlug);
  const relatedPosts = getRelatedPosts(currentSlug, 3);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());
  const [expandedMyth, setExpandedMyth] = useState<number | null>(null);
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);

  const tocItems = [
    {
      id: 'article-summary',
      title: 'Article Summary',
      level: 2,
      numeration: '1',
    },
    {
      id: 'what-is-prenuptial-agreement',
      title: 'What Is a Prenuptial Agreement?',
      level: 2,
      numeration: '2',
    },
    {
      id: 'why-prenuptial-agreements-matter',
      title: 'Why Prenuptial Agreements Matter More Than Ever',
      level: 2,
      numeration: '3',
    },
    {
      id: 'what-prenups-protect',
      title: 'What Do Prenuptial Agreements Protect?',
      level: 2,
      numeration: '4',
    },
    {
      id: 'common-myths',
      title: 'Common Myths About Prenuptial Agreements',
      level: 2,
      numeration: '5',
    },
    {
      id: 'real-world-scenarios',
      title: 'Real-World Scenarios: When Prenups Make a Difference',
      level: 2,
      numeration: '6',
    },
    {
      id: 'illinois-specific-considerations',
      title: 'Illinois-Specific Considerations',
      level: 2,
      numeration: '7',
    },
    {
      id: 'prenup-process',
      title: 'The Prenuptial Agreement Process',
      level: 2,
      numeration: '8',
    },
    {
      id: 'checklist',
      title: 'Interactive Prenup Planning Checklist',
      level: 2,
      numeration: '9',
    },
    {
      id: 'faq',
      title: 'Frequently Asked Questions',
      level: 2,
      numeration: '10',
    },
    {
      id: 'next-steps',
      title: 'Taking the Next Step',
      level: 2,
      numeration: '11',
    },
  ];

  const myths = [
    {
      myth: "Prenups are only for wealthy people",
      reality: "Prenuptial agreements benefit couples at all income levels. They protect assets you've worked hard to build, regardless of their value. Whether you own a small business, have student loan debt, expect an inheritance, or simply want to protect your retirement savings, a prenup provides clarity and protection."
    },
    {
      myth: "Getting a prenup means you're planning to divorce",
      reality: "A prenup is insurance, not a prophecy. Just like having life insurance doesn't mean you're planning to die, having a prenup doesn't mean you're planning to divorce. It's about being responsible and protecting both partners in case the unexpected happens."
    },
    {
      myth: "Prenups are unromantic and show lack of trust",
      reality: "Actually, discussing a prenup demonstrates maturity, transparency, and commitment to honest communication. It forces couples to have important conversations about money, goals, and expectations before marriage—conversations that strengthen relationships."
    },
    {
      myth: "Courts won't enforce prenups anyway",
      reality: "When properly drafted and executed according to Illinois law, prenuptial agreements are generally enforceable. Courts respect agreements made by informed adults who had independent legal counsel and made full financial disclosures."
    },
    {
      myth: "I don't have enough assets to need a prenup",
      reality: "Prenups aren't just about protecting existing assets—they also address future earnings, business ventures, inheritances, and debt protection. They can prevent your spouse's creditors from accessing your separate property and clarify financial expectations throughout the marriage."
    }
  ];

  const scenarios = [
    {
      id: 'business-owner',
      title: 'The Business Owner',
      icon: Briefcase,
      scenario: "Sarah, 32, owns a successful marketing agency she built from scratch over 8 years. She's marrying Tom, who works as a teacher. Without a prenup, Tom could potentially claim 50% of the business value accrued during marriage if they divorce.",
      outcome: "With a prenup, Sarah protects her business from division in divorce while still ensuring Tom is fairly treated. The agreement specifies that the business remains Sarah's separate property, preventing business disruption during a potential divorce.",
      protection: ["Business ownership protected", "Prevents forced sale or liquidation", "Maintains business relationships", "Protects employees and clients"]
    },
    {
      id: 'second-marriage',
      title: 'The Second Marriage',
      icon: Users,
      scenario: "Robert, 58, is remarrying after his first wife passed away. He has two adult children from his first marriage and wants to ensure they inherit his estate. His fiancée, Linda, has her own retirement savings.",
      outcome: "The prenup specifies that Robert's estate will pass to his children while ensuring Linda is provided for during the marriage. This prevents conflicts and ensures both families are protected.",
      protection: ["Children's inheritance protected", "Prevents family disputes", "Clarifies estate planning", "Protects family heirlooms"]
    },
    {
      id: 'debt-protection',
      title: 'The Debt Protection Case',
      icon: DollarSign,
      scenario: "Emily is entering marriage with $150,000 in student loan debt from medical school. Her fiancé, James, has no debt. Without a prenup, James could become responsible for helping pay this debt if they divorce.",
      outcome: "The prenup clearly designates Emily's student loans as her separate debt, protecting James from responsibility while allowing them to decide together how to manage payments during marriage.",
      protection: ["Spouse protected from debt", "Clear financial responsibilities", "Prevents credit damage", "Allows collaborative planning"]
    },
    {
      id: 'inheritance',
      title: 'The Inheritance Situation',
      icon: Home,
      scenario: "Michael expects to inherit his family's farm worth approximately $2 million. He's marrying Jessica, who comes from a non-farming background. Without protection, the inheritance could become marital property.",
      outcome: "The prenup ensures that Michael's inheritance remains his separate property, allowing the farm to stay in his family while protecting Jessica's interests through other provisions.",
      protection: ["Family property preserved", "Generational wealth protected", "Prevents forced sale", "Honors family legacy"]
    }
  ];

  const checklistItems = [
    {
      category: "Financial Documentation",
      items: [
        "Complete list of all assets (bank accounts, investments, real estate)",
        "List of all debts and liabilities",
        "Recent tax returns (typically 2-3 years)",
        "Business valuations (if applicable)",
        "Retirement account statements",
        "Documentation of expected inheritances"
      ]
    },
    {
      category: "Legal Requirements",
      items: [
        "Each person retains independent legal counsel",
        "Full financial disclosure completed by both parties",
        "Agreement drafted at least 30-60 days before wedding",
        "Both parties have time to review and understand the agreement",
        "No evidence of coercion or pressure",
        "Agreement executed with proper formalities"
      ]
    },
    {
      category: "Key Topics to Address",
      items: [
        "Division of premarital assets",
        "Treatment of inheritance and gifts",
        "Business ownership and interests",
        "Debt responsibility",
        "Spousal support/maintenance provisions",
        "Property acquired during marriage",
        "Estate planning considerations"
      ]
    },
    {
      category: "Timeline Planning",
      items: [
        "Initial discussion with partner (6-12 months before wedding)",
        "Consult with attorney (4-6 months before wedding)",
        "Exchange financial information (3-4 months before wedding)",
        "Review and negotiate terms (2-3 months before wedding)",
        "Final execution of agreement (at least 30 days before wedding)",
        "Store copies in safe location"
      ]
    }
  ];

  const faqs = [
    {
      question: "How much does a prenuptial agreement cost in Illinois?",
      answer: "Prenuptial agreements in Illinois typically range from $2,500 to $10,000 per person, depending on the complexity of your financial situation and the level of negotiation required. While this may seem expensive, it's far less than the cost of a contested divorce. At Motherway Law, we offer transparent flat-rate pricing for prenuptial services. The investment protects potentially millions of dollars in assets and saves significant legal fees and emotional distress in the event of divorce."
    },
    {
      question: "Can a prenup address child custody or child support?",
      answer: "No. Illinois law, like most states, does not allow prenuptial agreements to predetermine child custody or child support arrangements. These matters must be decided based on the child's best interests at the time of separation, as circumstances and the child's needs change over time. However, prenups can address how you'll handle other aspects of family life, such as property division and spousal support."
    },
    {
      question: "How far in advance should we create a prenup?",
      answer: "Ideally, start the prenup conversation 6-12 months before your wedding. The drafting and execution process typically takes 2-4 months. Illinois courts are more likely to enforce agreements signed well in advance of the wedding, as this demonstrates both parties had adequate time to review, understand, and negotiate the terms without pressure. Last-minute prenups signed days before the wedding are more vulnerable to being challenged as signed under duress."
    },
    {
      question: "Can we modify our prenup after we're married?",
      answer: "Yes! Prenuptial agreements can be modified after marriage through a postnuptial agreement. This requires the same formalities as the original prenup—full financial disclosure, independent counsel for both parties, and voluntary agreement. Many couples choose to update their agreements after major life events such as the birth of children, starting a business, receiving an inheritance, or significant changes in financial circumstances."
    },
    {
      question: "What makes a prenup invalid in Illinois?",
      answer: "Illinois courts may invalidate a prenup if: (1) it was signed under fraud, duress, or coercion; (2) there wasn't full and fair disclosure of assets and liabilities; (3) one party didn't have independent legal counsel or waived it without understanding the implications; (4) the terms are unconscionably unfair; (5) it was signed too close to the wedding date; or (6) proper formalities weren't followed. This is why working with an experienced attorney is essential."
    },
    {
      question: "Does Illinois require both parties to have separate attorneys?",
      answer: "While not strictly required by law, Illinois strongly encourages both parties to have independent legal representation. Having separate attorneys significantly strengthens the enforceability of the agreement and ensures both parties fully understand their rights and the agreement's implications. Many courts view agreements without independent counsel skeptically and may scrutinize them more carefully for fairness."
    },
    {
      question: "Can a prenup protect me from my spouse's business debts?",
      answer: "Yes, this is one of the most important protections a prenup offers. If your spouse owns a business or professional practice, their business debts and liabilities could potentially affect marital property. A well-drafted prenup can specify that business debts remain the separate obligation of the business owner and protect your separate property from business creditors."
    },
    {
      question: "Will a prenup affect our taxes?",
      answer: "Generally, prenups themselves don't directly affect your tax filing status or obligations during marriage. However, they can have significant tax implications in divorce by determining how assets are divided. Your prenup should be coordinated with your overall financial and estate planning to optimize tax efficiency. We recommend consulting with both an attorney and a financial advisor when creating your prenup."
    }
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const toggleMyth = (index: number) => {
    setExpandedMyth(expandedMyth === index ? null : index);
  };

  const toggleChecklistItem = (categoryIndex: number, itemIndex: number) => {
    const key = categoryIndex * 100 + itemIndex;
    const newChecked = new Set(checkedItems);
    if (newChecked.has(key)) {
      newChecked.delete(key);
    } else {
      newChecked.add(key);
    }
    setCheckedItems(newChecked);
  };

  if (!currentPost) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Shield className="w-20 h-20 text-white" />
            </div>
            <h1 className="font-['Plus_Jakarta_Sans'] text-5xl font-bold mb-6">
              {currentPost.title}
            </h1>
            <p className="font-['Plus_Jakarta_Sans'] text-xl mb-8 text-gray-100">
              A comprehensive guide to understanding, creating, and benefiting from prenuptial agreements in Illinois
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <span className="flex items-center">
                <FileText className="w-4 h-4 mr-2" />
                15 min read
              </span>
              <span className="flex items-center">
                <Scale className="w-4 h-4 mr-2" />
                Updated {currentPost.date}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Table of Contents - Sticky Sidebar */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-8">
              <TableOfContents items={tocItems} />
            </div>
          </aside>

          {/* Article Content */}
          <article className="lg:col-span-9">
            {/* Article Summary */}
            <section id="article-summary" className="mb-16 scroll-mt-8">
              <BlogSummary
                summary="Prenuptial agreements protect both parties' financial interests and provide clarity in case of divorce. In Illinois, prenups can protect businesses, inheritances, separate property, and shield you from a partner's debts. Valid prenups require full financial disclosure, independent legal counsel, and adequate time before the wedding. The process typically takes 2-4 months and costs $2,500-$10,000 per person. Prenups cannot address child custody or child support arrangements. Having difficult financial conversations before marriage actually strengthens relationships by fostering transparency and trust."
              />
            </section>

            {/* Main Article Content */}
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <div className="bg-blue-50 border-l-4 border-[#2D3E50] p-6 mb-8 rounded-r-lg">
                <p className="text-lg font-medium text-gray-800 mb-0">
                  Marriage is one of life's most beautiful commitments—and one of its most significant legal contracts. While no one enters marriage planning for it to end, the reality is that roughly 50% of marriages in the United States end in divorce. A prenuptial agreement isn't about pessimism; it's about preparation, protection, and partnership.
                </p>
              </div>

              <section id="what-is-prenuptial-agreement" className="mb-12 scroll-mt-8">
                <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[#2D3E50] mb-6 flex items-center">
                  <FileText className="w-8 h-8 mr-3 text-[#4A708B]" />
                  What Is a Prenuptial Agreement?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  A prenuptial agreement (commonly called a "prenup") is a legally binding contract created by two people before they marry. This document outlines how assets, debts, and financial responsibilities will be handled during the marriage and in the event of divorce or death.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  In Illinois, prenuptial agreements are governed by the Illinois Uniform Premarital Agreement Act (750 ILCS 10/). This law provides a framework for creating valid, enforceable agreements that protect both parties' interests while ensuring fairness.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-semibold text-[#2D3E50] mb-4">Core Purposes of a Prenuptial Agreement:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Asset Protection:</strong> Clearly defines what property remains separate and what becomes marital</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Debt Liability:</strong> Establishes responsibility for pre-marital and marital debts</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Business Protection:</strong> Safeguards business interests from division in divorce</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Inheritance Planning:</strong> Ensures certain assets pass to children or other beneficiaries</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Spousal Support:</strong> May address or limit spousal maintenance (alimony)</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="why-prenuptial-agreements-matter" className="mb-12 scroll-mt-8">
                <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[#2D3E50] mb-6 flex items-center">
                  <TrendingUp className="w-8 h-8 mr-3 text-[#4A708B]" />
                  Why Prenuptial Agreements Matter More Than Ever
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The landscape of marriage has evolved dramatically. People are marrying later in life, often after establishing careers, businesses, and significant assets. According to the U.S. Census Bureau, the median age for first marriage is now 30 for men and 28 for women—considerably older than previous generations.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  This shift means couples are bringing more complex financial situations into marriage:
                </p>
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <div className="flex items-center mb-4">
                      <Briefcase className="w-6 h-6 text-[#4A708B] mr-3" />
                      <h3 className="font-semibold text-lg text-[#2D3E50]">Business Ownership</h3>
                    </div>
                    <p className="text-gray-700">More couples own businesses or professional practices before marriage, requiring protection from potential division in divorce.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <div className="flex items-center mb-4">
                      <DollarSign className="w-6 h-6 text-[#4A708B] mr-3" />
                      <h3 className="font-semibold text-lg text-[#2D3E50]">Student Loan Debt</h3>
                    </div>
                    <p className="text-gray-700">Average student loan debt exceeds $30,000 per borrower, making debt protection a critical concern for partners.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <div className="flex items-center mb-4">
                      <Home className="w-6 h-6 text-[#4A708B] mr-3" />
                      <h3 className="font-semibold text-lg text-[#2D3E50]">Real Estate Holdings</h3>
                    </div>
                    <p className="text-gray-700">Many individuals purchase property before marriage and want to protect this investment and any associated appreciation.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <div className="flex items-center mb-4">
                      <Users className="w-6 h-6 text-[#4A708B] mr-3" />
                      <h3 className="font-semibold text-lg text-[#2D3E50]">Second Marriages</h3>
                    </div>
                    <p className="text-gray-700">With children from previous relationships, estate planning and inheritance protection become paramount concerns.</p>
                  </div>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-6 rounded-r-lg">
                  <div className="flex items-start">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-yellow-900 mb-2">Recent Survey Findings:</p>
                      <p className="text-yellow-800">
                        According to a 2022 survey by the American Academy of Matrimonial Lawyers, 62% of attorneys reported an increase in prenup requests over the past three years, with millennials driving much of this growth. The stigma around prenups is fading as couples recognize them as smart financial planning tools.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="what-prenups-protect" className="mb-12 scroll-mt-8">
                <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[#2D3E50] mb-6 flex items-center">
                  <Shield className="w-8 h-8 mr-3 text-[#4A708B]" />
                  What Do Prenuptial Agreements Protect?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Prenuptial agreements in Illinois can address a wide range of financial matters. Understanding what can and cannot be included is essential for creating an effective agreement.
                </p>

                <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-semibold text-[#2D3E50] mb-4 mt-8">What CAN Be Included:</h3>
                <div className="space-y-4 mb-8">
                  <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
                      <Lock className="w-5 h-5 mr-2 text-green-600" />
                      Separate Property Designation
                    </h4>
                    <p className="text-gray-700">Specify which assets remain separate property regardless of marital duration. This includes property owned before marriage, inheritances received during marriage, gifts from third parties, and property acquired with separate funds. Without a prenup, separate property can become "commingled" with marital property and lose its separate character—a prenup prevents this.</p>
                  </div>

                  <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
                      <Briefcase className="w-5 h-5 mr-2 text-green-600" />
                      Business Interests
                    </h4>
                    <p className="text-gray-700">Protect business ownership, prevent forced valuation and division, shield business partners from involvement in divorce, and maintain operational control. This is crucial for business owners who want to ensure their company isn't disrupted by marital dissolution. The prenup can specify that business appreciation during marriage remains separate property or establish a formula for compensating the non-owner spouse without dividing the business itself.</p>
                  </div>

                  <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
                      <DollarSign className="w-5 h-5 mr-2 text-green-600" />
                      Debt Responsibility
                    </h4>
                    <p className="text-gray-700">Clarify that pre-marital debts remain the responsibility of the spouse who incurred them. This is particularly important for student loans, business debts, credit card balances, and tax liabilities. Without clear designation, Illinois courts might consider marital income used to pay separate debts as creating a reimbursement claim. A prenup eliminates this ambiguity.</p>
                  </div>

                  <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
                      <Home className="w-5 h-5 mr-2 text-green-600" />
                      Real Estate
                    </h4>
                    <p className="text-gray-700">Address how real property will be treated, whether purchased before or during marriage. You can specify that a home owned before marriage remains separate property, determine what happens to appreciation in value, establish how mortgage payments affect ownership, and address jointly purchased property. This prevents disputes about whether a home is marital or separate property and how equity should be divided.</p>
                  </div>

                  <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                      Retirement Accounts and Investments
                    </h4>
                    <p className="text-gray-700">Specify how retirement accounts, pensions, 401(k)s, IRAs, stock options, and investment portfolios will be treated. In Illinois, retirement benefits earned during marriage are generally considered marital property, but a prenup can alter this default rule. This is especially important for high-earning professionals or those with substantial pre-marital retirement savings.</p>
                  </div>

                  <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-green-600" />
                      Spousal Support (Maintenance)
                    </h4>
                    <p className="text-gray-700">In Illinois, prenups can address spousal maintenance, including waiving it entirely, setting a specific amount or formula, establishing duration limits, or creating conditions for modification. However, courts will scrutinize maintenance provisions more carefully than property provisions and may refuse to enforce unconscionable terms.</p>
                  </div>

                  <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-green-600" />
                      Estate Planning Provisions
                    </h4>
                    <p className="text-gray-700">Coordinate with estate plans to ensure certain property passes to children from previous marriages, specify inheritance rights, address life insurance beneficiaries, and establish trusts for specific purposes. This is particularly important in second marriages where both parties want to provide for their respective children.</p>
                  </div>
                </div>

                <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-semibold text-[#2D3E50] mb-4 mt-8">What CANNOT Be Included:</h3>
                <div className="space-y-4 mb-8">
                  <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-semibold text-lg text-gray-800 mb-2">Child Custody or Visitation</h4>
                    <p className="text-gray-700">Illinois law prohibits prenuptial agreements from determining child custody arrangements. These decisions must be made based on the child's best interests at the time of separation, as circumstances change and children's needs evolve.</p>
                  </div>

                  <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-semibold text-lg text-gray-800 mb-2">Child Support</h4>
                    <p className="text-gray-700">Parents cannot waive or predetermine child support obligations. Child support is the right of the child, not the parents, and must be calculated according to Illinois child support guidelines at the time of separation.</p>
                  </div>

                  <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-semibold text-lg text-gray-800 mb-2">Non-Financial Personal Matters</h4>
                    <p className="text-gray-700">Prenups cannot include provisions about personal behavior, lifestyle choices, household duties, or other non-financial matters. Clauses about who does housework, weight requirements, or similar personal matters are unenforceable and may actually jeopardize the entire agreement.</p>
                  </div>

                  <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-semibold text-lg text-gray-800 mb-2">Illegal Provisions</h4>
                    <p className="text-gray-700">Any provision that encourages divorce or violates public policy will not be enforced. This includes "sunset clauses" that terminate the agreement after a certain time period, though Illinois courts have been somewhat flexible on this issue.</p>
                  </div>
                </div>
              </section>

              <section id="common-myths" className="mb-12 scroll-mt-8">
                <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[#2D3E50] mb-6">
                  Common Myths About Prenuptial Agreements
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Despite their growing popularity and proven benefits, prenuptial agreements are still surrounded by misconceptions. Let's separate fact from fiction:
                </p>
                <div className="space-y-3">
                  {myths.map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                      <button
                        onClick={() => toggleMyth(index)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-start flex-1">
                          <AlertTriangle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                          <span className="font-semibold text-lg text-gray-800">
                            Myth: "{item.myth}"
                          </span>
                        </div>
                        {expandedMyth === index ? (
                          <ChevronUp className="w-5 h-5 text-gray-500 ml-4 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500 ml-4 flex-shrink-0" />
                        )}
                      </button>
                      {expandedMyth === index && (
                        <div className="px-6 py-4 bg-green-50 border-t border-gray-200">
                          <div className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                            <div>
                              <p className="font-semibold text-green-900 mb-2">Reality:</p>
                              <p className="text-gray-700">{item.reality}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              <section id="real-world-scenarios" className="mb-12 scroll-mt-8">
                <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[#2D3E50] mb-6">
                  Real-World Scenarios: When Prenups Make a Difference
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Understanding abstract legal concepts is one thing, but seeing how prenups work in real situations brings their value to life. Here are four common scenarios where prenuptial agreements provide critical protection:
                </p>
                <div className="grid gap-4 mb-6">
                  {scenarios.map((scenario) => (
                    <button
                      key={scenario.id}
                      onClick={() => setSelectedScenario(selectedScenario === scenario.id ? null : scenario.id)}
                      className="w-full text-left"
                    >
                      <div className={`border-2 rounded-lg p-6 transition-all ${
                        selectedScenario === scenario.id
                          ? 'border-[#4A708B] bg-blue-50'
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center">
                            <scenario.icon className="w-8 h-8 text-[#4A708B] mr-3" />
                            <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#2D3E50]">
                              {scenario.title}
                            </h3>
                          </div>
                          {selectedScenario === scenario.id ? (
                            <ChevronUp className="w-6 h-6 text-[#4A708B]" />
                          ) : (
                            <ChevronDown className="w-6 h-6 text-gray-400" />
                          )}
                        </div>
                        {selectedScenario === scenario.id && (
                          <div className="mt-4 space-y-4">
                            <div>
                              <p className="font-semibold text-gray-800 mb-2">The Situation:</p>
                              <p className="text-gray-700">{scenario.scenario}</p>
                            </div>
                            <div>
                              <p className="font-semibold text-gray-800 mb-2">How the Prenup Helped:</p>
                              <p className="text-gray-700">{scenario.outcome}</p>
                            </div>
                            <div>
                              <p className="font-semibold text-gray-800 mb-2">Key Protections:</p>
                              <ul className="space-y-2">
                                {scenario.protection.map((item, idx) => (
                                  <li key={idx} className="flex items-center text-gray-700">
                                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </section>

              <section id="illinois-specific-considerations" className="mb-12 scroll-mt-8">
                <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[#2D3E50] mb-6">
                  Illinois-Specific Considerations
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Illinois has specific laws governing prenuptial agreements that differ from other states. Understanding these requirements is essential for creating a valid, enforceable agreement.
                </p>

                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-semibold text-[#2D3E50] mb-4">The Illinois Uniform Premarital Agreement Act</h3>
                <p className="text-gray-700 mb-4">
                  Illinois adopted the Uniform Premarital Agreement Act (750 ILCS 10/) to provide consistency in how prenups are created and enforced. Key provisions include:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Scale className="w-5 h-5 text-[#4A708B] mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-800">Full Disclosure Required:</strong>
                        <p className="text-gray-700">Both parties must provide fair and reasonable disclosure of their assets and financial obligations. Hiding assets is grounds for invalidating the entire agreement.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Scale className="w-5 h-5 text-[#4A708B] mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-800">Unconscionability Standard:</strong>
                        <p className="text-gray-700">Courts will not enforce agreements that are unconscionably unfair at the time of enforcement, even if they seemed fair when signed.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Scale className="w-5 h-5 text-[#4A708B] mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-gray-800">Independent Counsel Recommended:</strong>
                        <p className="text-gray-700">While not legally required, having separate attorneys for each party significantly strengthens enforceability.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-semibold text-[#2D3E50] mb-4">Illinois Property Division Rules</h3>
                <p className="text-gray-700 mb-4">
                  Without a prenup, Illinois follows the principle of "equitable distribution" in divorce. This means property is divided fairly, though not necessarily equally. The court considers factors like:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
                  <li>Length of the marriage</li>
                  <li>Each spouse's contribution to marital property</li>
                  <li>Age, health, and earning capacity of each spouse</li>
                  <li>Economic circumstances of each party</li>
                  <li>Custodial provisions for children</li>
                </ul>
                <p className="text-gray-700 mb-6">
                  A prenup allows you to bypass these subjective factors and establish your own rules for property division, providing certainty and reducing potential conflict.
                </p>
              </section>

              <section id="prenup-process" className="mb-12 scroll-mt-8">
                <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[#2D3E50] mb-6">
                  The Prenuptial Agreement Process
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Creating a prenuptial agreement is a multi-step process that requires time, transparency, and professional guidance. Here's what to expect:
                </p>

                <div className="space-y-6">
                  <div className="bg-white border-l-4 border-[#4A708B] p-6 rounded-r-lg shadow-sm">
                    <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-semibold text-[#2D3E50] mb-3">Step 1: Have the Conversation (6-12 months before wedding)</h3>
                    <p className="text-gray-700 mb-3">
                      Start by discussing the idea with your partner. This conversation should happen early—ideally 6-12 months before your wedding. Focus on the practical benefits and emphasize that you're protecting both parties.
                    </p>
                    <div className="bg-blue-50 p-4 rounded">
                      <p className="text-sm font-semibold text-gray-800 mb-2">Conversation Tips:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Choose a calm, private setting without time pressure</li>
                        <li>• Frame it as protecting both of you, not just yourself</li>
                        <li>• Acknowledge that it's an uncomfortable topic but an important one</li>
                        <li>• Listen to your partner's concerns without becoming defensive</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white border-l-4 border-[#4A708B] p-6 rounded-r-lg shadow-sm">
                    <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-semibold text-[#2D3E50] mb-3">Step 2: Consult with Attorneys (4-6 months before wedding)</h3>
                    <p className="text-gray-700 mb-3">
                      Each person should retain their own attorney who specializes in family law and prenuptial agreements. Your attorney will explain your rights under Illinois law, what a prenup can and cannot do, and help you understand the implications of various provisions.
                    </p>
                    <p className="text-gray-700">
                      At Motherway Law, we guide clients through this process with sensitivity and expertise, ensuring you understand every aspect of your agreement.
                    </p>
                  </div>

                  <div className="bg-white border-l-4 border-[#4A708B] p-6 rounded-r-lg shadow-sm">
                    <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-semibold text-[#2D3E50] mb-3">Step 3: Full Financial Disclosure (3-4 months before wedding)</h3>
                    <p className="text-gray-700 mb-3">
                      Both parties must provide complete disclosure of their financial situation, including assets, debts, income, and expected inheritances. Incomplete or fraudulent disclosure is the primary reason prenups get invalidated.
                    </p>
                  </div>

                  <div className="bg-white border-l-4 border-[#4A708B] p-6 rounded-r-lg shadow-sm">
                    <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-semibold text-[#2D3E50] mb-3">Step 4: Negotiate and Draft (2-3 months before wedding)</h3>
                    <p className="text-gray-700 mb-3">
                      Your attorneys will negotiate the terms and draft the agreement. This involves back-and-forth discussions to ensure both parties feel the agreement is fair. Don't rush this phase—thoughtful negotiation creates a stronger, more enforceable agreement.
                    </p>
                  </div>

                  <div className="bg-white border-l-4 border-[#4A708B] p-6 rounded-r-lg shadow-sm">
                    <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-semibold text-[#2D3E50] mb-3">Step 5: Review and Sign (at least 30 days before wedding)</h3>
                    <p className="text-gray-700 mb-3">
                      Once both parties and their attorneys are satisfied, you'll sign the agreement. This should happen at least 30 days before the wedding, ideally longer. Last-minute prenups are vulnerable to claims of duress.
                    </p>
                    <p className="text-gray-700">
                      The agreement must be in writing and signed by both parties to be enforceable under Illinois law.
                    </p>
                  </div>
                </div>
              </section>

              <section id="checklist" className="mb-12 scroll-mt-8">
                <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[#2D3E50] mb-6">
                  Interactive Prenup Planning Checklist
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Use this comprehensive checklist to track your progress through the prenuptial agreement process. Click items as you complete them to stay organized.
                </p>
                <div className="space-y-6">
                  {checklistItems.map((category, catIndex) => (
                    <div key={catIndex} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                      <div className="bg-gradient-to-r from-[#2D3E50] to-[#4A708B] px-6 py-4">
                        <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-white">
                          {category.category}
                        </h3>
                      </div>
                      <div className="p-6">
                        <div className="space-y-3">
                          {category.items.map((item, itemIndex) => {
                            const key = catIndex * 100 + itemIndex;
                            const isChecked = checkedItems.has(key);
                            return (
                              <button
                                key={itemIndex}
                                onClick={() => toggleChecklistItem(catIndex, itemIndex)}
                                className="w-full flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
                              >
                                <div className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center mr-3 mt-0.5 ${
                                  isChecked
                                    ? 'bg-green-500 border-green-500'
                                    : 'border-gray-300'
                                }`}>
                                  {isChecked && (
                                    <CheckCircle2 className="w-4 h-4 text-white" />
                                  )}
                                </div>
                                <span className={`text-gray-700 ${isChecked ? 'line-through text-gray-400' : ''}`}>
                                  {item}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-6 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-gray-700">
                    <strong>Progress Tip:</strong> Bookmark this page and return to it as you work through your prenup process. Having a clear checklist helps ensure nothing important is overlooked.
                  </p>
                </div>
              </section>

              <section id="faq" className="mb-12 scroll-mt-8">
                <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[#2D3E50] mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-lg text-gray-800 pr-4">
                          {faq.question}
                        </span>
                        {expandedFaq === index ? (
                          <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        )}
                      </button>
                      {expandedFaq === index && (
                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                          <p className="text-gray-700">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              <section id="next-steps" className="mb-12 scroll-mt-8">
                <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[#2D3E50] mb-6">
                  Taking the Next Step
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Creating a prenuptial agreement is an investment in your future—one that provides peace of mind, protects your assets, and can actually strengthen your relationship by fostering honest communication about finances.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At Motherway Law, we understand that discussing a prenup can feel uncomfortable. Our approach is compassionate, professional, and focused on creating agreements that protect both parties fairly. We've helped hundreds of Illinois couples navigate this process successfully.
                </p>
                <div className="bg-gradient-to-br from-[#2D3E50] to-[#4A708B] rounded-xl p-8 text-white">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold mb-4">Ready to Protect Your Future?</h3>
                  <p className="text-lg mb-6">
                    Schedule a consultation to discuss your prenuptial agreement. We offer transparent flat-rate pricing and personalized service tailored to your unique situation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/book-consultation"
                      className="inline-block bg-white text-[#2D3E50] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                    >
                      Schedule Consultation
                    </Link>
                    <Link
                      href="/chicago-prenuptial-agreements-lawyer"
                      className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#2D3E50] transition-colors text-center"
                    >
                      Learn More About Our Services
                    </Link>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                  <p className="text-gray-800">
                    <strong>Time-Sensitive Reminder:</strong> If you're getting married soon, don't delay. The prenup process takes 2-4 months, and agreements signed too close to the wedding date are vulnerable to legal challenges. Start the conversation today.
                  </p>
                </div>
              </section>
            </div>

            {/* Blog Navigation */}
            <div className="mt-16">
              <BlogNavigation previousPost={previous} nextPost={next} />
            </div>

            {/* Related Articles */}
            {relatedPosts.length > 0 && (
              <div className="mt-16">
                <RelatedArticles articles={relatedPosts} />
              </div>
            )}

            {/* Contact Form */}
            <div className="mt-16">
              <BlogContactForm />
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
