import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Scale, Shield, AlertTriangle, CheckCircle, Users, Clock } from 'lucide-react';

const TermsOfServicePage = () => {
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
            <Scale className="h-8 w-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 glow-text">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Welcome to Wizzark ("we," "our," "us"). These Terms of Service ("Terms") govern your access and use of our website, services, and solutions ("Services"). By using our Services, you agree to these Terms.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Effective Date: December 15, 2024
          </p>
        </div>

        {/* Content */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700 space-y-8 glow-card">
          
          {/* Who We Are */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle className="h-6 w-6 text-[#00C2FF] glow-icon" />
              <h2 className="text-2xl font-bold text-white glow-text">1. Who We Are</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Wizzark provides AI automation solutions, including lead capture and CRM integration, customer support automation, appointment scheduling, and website design & optimisation.
            </p>
          </section>

          {/* Eligibility */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Users className="h-6 w-6 text-[#00C2FF] glow-icon" />
              <h2 className="text-2xl font-bold text-white glow-text">2. Eligibility</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>You must:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Be at least 18 years old (or of legal age in your jurisdiction).</li>
                <li>Have the authority to enter into contracts if acting on behalf of a business.</li>
              </ul>
            </div>
          </section>

          {/* Our Services */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="h-6 w-6 text-[#00C2FF] glow-icon" />
              <h2 className="text-2xl font-bold text-white glow-text">3. Our Services</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Services are described on our website and in service agreements.</li>
                <li>We may update, improve, or modify Services at any time.</li>
                <li>Some Services may require a written contract in addition to these Terms.</li>
              </ul>
            </div>
          </section>

          {/* Your Responsibilities */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="h-6 w-6 text-[#00C2FF] glow-icon" />
              <h2 className="text-2xl font-bold text-white glow-text">4. Your Responsibilities</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>When using our Services, you agree to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Provide accurate and complete information.</li>
                <li>Use our Services only for lawful purposes.</li>
                <li>Not misuse, copy, or attempt to reverse-engineer our technology.</li>
                <li>Ensure that any personal data you share with us complies with UK/EU data protection laws (UK GDPR, EU GDPR).</li>
              </ul>
            </div>
          </section>

          {/* Fees & Payment */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="h-6 w-6 text-[#00C2FF] glow-icon" />
              <h2 className="text-2xl font-bold text-white glow-text">5. Fees & Payment</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Pricing will be set out in your order, proposal, or contract.</li>
                <li>Payments are due as agreed (subscription, retainer, or project-based).</li>
                <li>Late payments may result in suspension of Services until resolved.</li>
              </ul>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Scale className="h-6 w-6 text-[#00C2FF] glow-icon" />
              <h2 className="text-2xl font-bold text-white glow-text">6. Intellectual Property</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>All intellectual property in our Services, software, designs, and content remains the property of Wizzark or our licensors.</li>
                <li>You receive a limited, non-exclusive license to use our Services for your business.</li>
                <li>You may not copy, resell, or redistribute our Services without permission.</li>
              </ul>
            </div>
          </section>

          {/* Data & Privacy */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="h-6 w-6 text-[#00C2FF] glow-icon" />
              <h2 className="text-2xl font-bold text-white glow-text">7. Data & Privacy</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>We process personal data in accordance with our <Link to="/privacy-policy" className="text-[#00C2FF] hover:text-cyan-300 underline transition-colors duration-200">Privacy Policy</Link> and Cookies Policy.</li>
                <li>You are responsible for ensuring any data you provide is lawful and accurate.</li>
                <li>Where applicable, you must inform your own customers about data processing under GDPR.</li>
              </ul>
            </div>
          </section>

          {/* Confidentiality */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="h-6 w-6 text-[#00C2FF] glow-icon" />
              <h2 className="text-2xl font-bold text-white glow-text">8. Confidentiality</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Both parties agree to keep confidential information secure and not disclose it to third parties, except as required by law.
            </p>
          </section>

          {/* Disclaimers & Limitations */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="h-6 w-6 text-[#00C2FF] glow-icon" />
              <h2 className="text-2xl font-bold text-white glow-text">9. Disclaimers & Limitations</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Our Services are provided "as is" and "as available."</li>
                <li>We make reasonable efforts to maintain uptime but cannot guarantee uninterrupted access.</li>
              </ul>
              <p className="mt-4">To the fullest extent permitted by law, we are not liable for:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Loss of profits, revenue, or data</li>
                <li>Indirect, incidental, or consequential damages</li>
              </ul>
              <p className="mt-4">Our total liability is limited to the amount paid by you for the Services in the 12 months prior to the claim.</p>
            </div>
          </section>

          {/* Termination */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="h-6 w-6 text-[#00C2FF] glow-icon" />
              <h2 className="text-2xl font-bold text-white glow-text">10. Termination</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>You may stop using our Services at any time.</li>
                <li>We may suspend or terminate access if you breach these Terms, fail to pay, or misuse our Services.</li>
                <li>Upon termination, any licenses granted end immediately.</li>
              </ul>
            </div>
          </section>

          {/* Governing Law & Jurisdiction */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Scale className="h-6 w-6 text-[#00C2FF] glow-icon" />
              <h2 className="text-2xl font-bold text-white glow-text">11. Governing Law & Jurisdiction</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>These Terms are governed by the laws of England & Wales.</li>
                <li>Any disputes will be subject to the exclusive jurisdiction of the courts of England & Wales.</li>
                <li>If you are an EU consumer, you may also rely on local consumer protection laws.</li>
              </ul>
            </div>
          </section>

          {/* Changes to Terms */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="h-6 w-6 text-[#00C2FF] glow-icon" />
              <h2 className="text-2xl font-bold text-white glow-text">12. Changes to Terms</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              We may update these Terms from time to time. Any material changes will be posted on this page with an updated date. Continued use of our Services after changes means acceptance of the new Terms.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle className="h-6 w-6 text-[#00C2FF] glow-icon" />
              <h2 className="text-2xl font-bold text-white glow-text">13. Contact Us</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>For questions about these Terms, please contact:</p>
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

export default TermsOfServicePage;