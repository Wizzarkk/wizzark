import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, FileText, Globe, Mail, Users, Clock } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-black pt-16 w-full">
      {/* Animated background elements matching landing page */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00C2FF]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#00C2FF]/5 to-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Back to Home Link */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-[#00C2FF] hover:text-cyan-300 transition-colors duration-200 font-medium glow-text-blue"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-br from-[#00C2FF] to-white text-black p-4 rounded-xl w-fit mx-auto mb-6 glow-icon">
            <Shield className="h-8 w-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 glow-text">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Wizzark ("we," "our," "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and protect your information in accordance with the UK GDPR, the Data Protection Act 2018, and the EU GDPR.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: December 15, 2024
          </p>
        </div>

        {/* Content */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700 space-y-8 glow-card">
          
          {/* Information We Collect */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Eye className="h-6 w-6 text-[#00C2FF] glow-icon" />
              <h2 className="text-2xl font-bold text-white glow-text">1. Information We Collect</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>We may collect and process the following personal data:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Identity Data: Name, company, job title.</li>
                <li>Contact Data: Email address, phone number, postal address.</li>
                <li>Business Data: Company information, CRM details, project preferences.</li>
                <li>Usage Data: Website analytics, cookies, IP addresses, browser type.</li>
                <li>Communication Data: Records of emails, support requests, and calls.</li>
              </ul>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Lock className="h-6 w-6 text-[#00C2FF] glow-icon" />
              <h2 className="text-2xl font-bold text-white glow-text">2. How We Use Your Information</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>We process your personal data for the following purposes:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>To provide our AI automation, CRM, and website services.</li>
                <li>To respond to enquiries and deliver customer support.</li>
                <li>To schedule demos, consultations, and appointments.</li>
                <li>To send marketing communications (with your consent).</li>
                <li>To improve our website, services, and customer experience.</li>
                <li>To comply with legal or regulatory obligations.</li>
              </ul>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-white mb-3 glow-text">Lawful Bases for Processing (UK/EU GDPR):</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Performance of a contract</li>
                  <li>Legitimate interests (e.g., business growth, client relationship management)</li>
                  <li>Legal obligation</li>
                  <li>Consent (e.g., for marketing emails)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Sharing & Transfers */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Users className="h-6 w-6 text-[#00C2FF] glow-icon" />
              <h2 className="text-2xl font-bold text-white glow-text">3. Data Sharing & Transfers</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>We do not sell your personal data. We may share information with:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Trusted service providers (e.g., hosting, CRM, payment processors).</li>
                <li>Professional advisers (e.g., legal, accounting).</li>
                <li>Authorities, where required by law.</li>
              </ul>
              
              <div className="mt-4">
                <p className="font-semibold text-white mb-2 glow-text">If data is transferred outside the UK/EU, we ensure it is protected through:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Adequacy decisions by the European Commission or UK Government.</li>
                  <li>Standard Contractual Clauses (SCCs).</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Retention */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Clock className="h-6 w-6 text-[#00C2FF] glow-icon" />
              <h2 className="text-2xl font-bold text-white glow-text">4. Data Retention</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>
                We retain personal data only for as long as necessary to fulfil the purposes outlined above or to comply with legal obligations. After this period, data is securely deleted or anonymised.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="h-6 w-6 text-[#00C2FF] glow-icon" />
              <h2 className="text-2xl font-bold text-white glow-text">5. Your Rights</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>Under UK GDPR and EU GDPR, you have the right to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Restrict or object to processing</li>
                <li>Data portability (receive a copy in machine-readable format)</li>
                <li>Withdraw consent at any time (for marketing or consent-based processing)</li>
              </ul>
            </div>
          </section>

          {/* Cookies & Tracking */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Globe className="h-6 w-6 text-[#00C2FF] glow-icon" />
              <h2 className="text-2xl font-bold text-white glow-text">6. Cookies & Tracking</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>Our website uses cookies and similar technologies to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Improve website functionality</li>
                <li>Analyse traffic and usage patterns</li>
                <li>Personalise your experience</li>
              </ul>
              <p className="text-sm mt-3">You can manage or disable cookies via your browser settings.</p>
            </div>
          </section>

          {/* Security */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Lock className="h-6 w-6 text-[#00C2FF] glow-icon" />
              <h2 className="text-2xl font-bold text-white glow-text">7. Security</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>
                We take appropriate technical and organisational measures to protect personal data from unauthorised access, alteration, disclosure, or destruction.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Mail className="h-6 w-6 text-[#00C2FF] glow-icon" />
              <h2 className="text-2xl font-bold text-white glow-text">8. Contact Us</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>If you have questions about this Privacy Policy or how your data is handled, please contact:</p>
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700 glow-card">
                <p><strong className="text-white glow-text">Wizzark</strong></p>
                <p><strong className="text-white glow-text">Email:</strong> contact@wizzark.com</p>
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicyPage;