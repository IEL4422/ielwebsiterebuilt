'use client';

import { Shield, MessageSquare, Clock, FileCheck, ChevronRight, FileText, TrendingUp, Bell } from 'lucide-react';

export function ClientPortalSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              Stay Connected with Your Secure <a href="/client-portal" className="text-[#77B1D4] hover:underline">Client Portal</a>
            </h2>
            <div className="h-1 w-24 bg-[#77B1D4] mx-auto mb-6" />
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Whether you're creating an estate plan or managing probate, our <a href="/client-portal" className="text-[#77B1D4] hover:underline">client portal</a> keeps you informed and empowered every step of the way.
            </p>
          </div>

          <div className="mb-16 relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 border border-slate-200">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="inline-block px-4 py-2 bg-[#77B1D4]/10 rounded-full">
                    <span className="text-[#77B1D4] font-semibold text-sm">Your Portal Dashboard</span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-800">
                    Everything You Need in One Place
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    Access your case information, communicate with your attorney, and manage documents from a single, secure platform designed specifically for estate planning and probate clients.
                  </p>
                  <div className="flex items-center gap-3 text-sm text-slate-500">
                    <Shield className="w-5 h-5 text-[#77B1D4]" />
                    <span>256-bit SSL Encryption</span>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 shadow-xl">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#77B1D4] rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">JD</span>
                        </div>
                        <div>
                          <p className="text-white font-semibold text-sm">John Doe</p>
                          <p className="text-slate-400 text-xs">Estate Planning Client</p>
                        </div>
                      </div>
                      <Bell className="w-5 h-5 text-slate-400" />
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <FileCheck className="w-5 h-5 text-emerald-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-white font-medium text-sm mb-1">Will & Trust Package</p>
                            <div className="flex items-center gap-2 mb-2">
                              <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-400 rounded-full" style={{ width: '75%' }} />
                              </div>
                              <span className="text-emerald-400 text-xs font-semibold">75%</span>
                            </div>
                            <p className="text-slate-400 text-xs">In Progress</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <MessageSquare className="w-5 h-5 text-blue-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-white font-medium text-sm mb-1">New Message from Attorney</p>
                            <p className="text-slate-400 text-xs">2 hours ago</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <FileText className="w-5 h-5 text-amber-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-white font-medium text-sm mb-1">3 Documents Ready</p>
                            <p className="text-slate-400 text-xs">Review & Sign</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">Last login: Today at 2:34 PM</span>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                          <span className="text-emerald-400 font-medium">Active</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#77B1D4]/20 rounded-full blur-2xl" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#77B1D4] rounded-full flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Track Your Matter Status</h3>
              </div>
              <p className="text-slate-600 mb-4 leading-relaxed">
                View real-time updates on your estate plan or probate case. Know exactly where you are in the process, what's been completed, and what's coming next.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#77B1D4] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">See document preparation progress</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#77B1D4] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Monitor court filing statuses</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#77B1D4] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Access completed documents anytime</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#77B1D4] rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Direct Attorney Communication</h3>
              </div>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Have a question? Send a secure message directly to your attorney through the portal and receive prompt, professional responses.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#77B1D4] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">No more phone tag or email delays</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#77B1D4] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">All conversations documented and saved</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#77B1D4] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Get answers without scheduling calls</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#77B1D4] rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Access 24/7</h3>
              </div>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Your portal is available whenever you need it. Review documents, check status updates, and communicate with your attorney on your schedule.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#77B1D4] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Login from any device, anywhere</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#77B1D4] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Perfect for busy schedules</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#77B1D4] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">No office hours limitations</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#77B1D4] rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Bank-Level Security</h3>
              </div>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Your sensitive information deserves the highest protection. Our portal uses industry-leading encryption to keep your documents and communications secure.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#77B1D4] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">End-to-end encryption</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#77B1D4] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">HIPAA-compliant data storage</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-[#77B1D4] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Secure document sharing</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 rounded-xl p-8 lg:p-12 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Experience the Difference of Modern Legal Service
            </h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              From estate planning to probate administration, our client portal ensures transparency, convenience, and peace of mind throughout your entire journey with Illinois Estate Law.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/get-started"
                className="inline-block px-8 py-4 bg-[#77B1D4] text-white font-semibold rounded-lg hover:bg-[#5A9BC4] transition-colors text-lg"
              >
                Get Started Today
              </a>
              <a
                href="/client-portal"
                className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-800 transition-colors text-lg"
              >
                Learn More About Client Portal
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
