import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Scale, Shield, AlertTriangle, CheckCircle } from 'lucide-react';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-16 w-full">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Back to Home Link */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-br from-blue-500 to-cyan-400 text-white p-4 rounded-xl w-fit mx-auto mb-6">
            <Scale className="h-8 w-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            These terms govern your use of Wizzark's AI automation services and website.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: December 15, 2024
          </p>
        </div>

        {/* Content */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700 space-y-8">
          
          {/* Acceptance of Terms */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle className="h-6 w-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">1. Acceptance of Terms</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              By accessing and using Wizzark's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          {/* Services Description */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="h-6 w-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">2. Services Description</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>Wizzark provides AI automation services including:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Lead capture and CRM integration solutions</li>
                <li>Customer support management systems</li>
                <li>AI-powered appointment setting</li>
                <li>Website design and optimization</li>
                <li>Custom AI automation solutions</li>
              </ul>
            </div>
          </section>

          {/* User Responsibilities */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="h-6 w-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">3. User Responsibilities</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>As a user of our services, you agree to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Use our services in compliance with applicable laws</li>
                <li>Not use our services for illegal or unauthorized purposes</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Notify us immediately of any unauthorized use</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </div>
          </section>

          {/* Payment Terms */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="h-6 w-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">4. Payment Terms</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>Payment terms for our services:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Fees are due as specified in your service agreement</li>
                <li>All payments are non-refundable unless otherwise stated</li>
                <li>Late payments may result in service suspension</li>
                <li>Prices may change with 30 days notice</li>
                <li>Taxes are additional where applicable</li>
              </ul>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Scale className="h-6 w-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">5. Intellectual Property</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>Intellectual property rights are protected as follows:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Wizzark retains all rights to our proprietary technology</li>
                <li>You retain ownership of your business data and content</li>
                <li>Custom solutions may include shared intellectual property</li>
                <li>You grant us license to use your data to provide services</li>
                <li>Third-party integrations are subject to their own terms</li>
              </ul>
            </div>
          </section>

          {/* Data and Privacy */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="h-6 w-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">6. Data and Privacy</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>Data handling and privacy terms:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>We process data in accordance with our Privacy Policy</li>
                <li>You are responsible for obtaining necessary consents</li>
                <li>We implement industry-standard security measures</li>
                <li>Data breaches will be reported as required by law</li>
                <li>You may request data deletion subject to legal requirements</li>
              </ul>
            </div>
          </section>

          {/* Service Availability */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle className="h-6 w-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">7. Service Availability</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>Service availability and maintenance:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>We strive for 99.9% uptime but cannot guarantee uninterrupted service</li>
                <li>Scheduled maintenance will be announced in advance</li>
                <li>Emergency maintenance may occur without notice</li>
                <li>Service credits may be available for extended outages</li>
                <li>Third-party service dependencies may affect availability</li>
              </ul>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="h-6 w-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">8. Limitation of Liability</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>Our liability is limited as follows:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Services are provided "as is" without warranties</li>
                <li>We are not liable for indirect or consequential damages</li>
                <li>Total liability is limited to fees paid in the last 12 months</li>
                <li>You agree to indemnify us against third-party claims</li>
                <li>Some jurisdictions may not allow these limitations</li>
              </ul>
            </div>
          </section>

          {/* Termination */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="h-6 w-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">9. Termination</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>Termination conditions:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Either party may terminate with 30 days written notice</li>
                <li>We may terminate immediately for breach of terms</li>
                <li>Upon termination, access to services will be discontinued</li>
                <li>Data export may be available for a limited time</li>
                <li>Outstanding fees remain due after termination</li>
              </ul>
            </div>
          </section>

          {/* Governing Law */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <Scale className="h-6 w-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">10. Governing Law</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              These terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions. Any disputes arising from these terms shall be resolved through binding arbitration or in the courts of [Your Jurisdiction].
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="h-6 w-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">11. Changes to Terms</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after changes constitutes acceptance of the new terms. We will notify you of significant changes via email or service notifications.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle className="h-6 w-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">12. Contact Information</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>For questions about these Terms of Service, contact us:</p>
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <p><strong className="text-white">Email:</strong> legal@wizzark.com</p>
                <p><strong className="text-white">Business Address:</strong> [Your Business Address]</p>
                <p><strong className="text-white">Phone:</strong> [Your Phone Number]</p>
              </div>
            </div>
          </section>

        </div>

        {/* Contact CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-6 sm:p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Questions About Our Terms?</h3>
          <p className="text-lg mb-6 opacity-90">
            Our legal team is here to help clarify any questions
          </p>
          <a 
            href="mailto:legal@wizzark.com"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-block"
          >
            Contact Legal Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;