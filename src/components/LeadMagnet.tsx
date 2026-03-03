import { useState } from 'react';
import { Send, CheckCircle, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const LeadMagnet = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    selectedServices: [] as string[],
    projectInfo: '',
    agreeToTerms: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (!formData.agreeToTerms) {
      alert('Please agree to the Privacy Policy and Terms of Service');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Prepare service data - if multiple services selected, join them
      const serviceData = formData.service === 'multiple-services' 
        ? formData.selectedServices.join(', ')
        : formData.service;

      const { error } = await supabase
        .from('strategy_calls')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company,
            service: serviceData,
            project_info: formData.projectInfo
          }
        ]);

      if (error) {
        throw error;
      }

      // Reset form and show success message
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        selectedServices: [],
        projectInfo: '',
        agreeToTerms: false
      });
      
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Failed to submit your request. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      // Reset selected services when changing service type
      selectedServices: value === 'multiple-services' ? formData.selectedServices : []
    });
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleServiceCheckboxChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(service)
        ? prev.selectedServices.filter(s => s !== service)
        : [...prev.selectedServices, service]
    }));
  };

  const serviceOptions = [
    { value: 'lead-capture-crm', label: 'Lead Capture & CRM Integration' },
    { value: 'ai-customer-support', label: 'AI Customer Support Automation' },
    { value: 'ai-appointment-setting', label: 'AI Appointment Setting' },
    { value: 'website-design-optimization', label: 'Website Design & Optimization' }
  ];

  return (
    <section id="lead-magnet" className="py-12 sm:py-16 section-background w-full">
      <div className="animated-bg-element"></div>
      <div className="animated-bg-element"></div>
      <div className="animated-bg-element"></div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#00C2FF]/10 to-white/5 rounded-3xl p-6 sm:p-8 md:p-12 border border-[#00C2FF]/20 glow-card">
            <div className="text-center mb-6">
              <div className="inline-flex items-center space-x-2 bg-[#00C2FF]/20 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6">
                <Sparkles className="h-5 w-5 text-[#00C2FF]" />
                <span className="text-[#00C2FF] font-medium glow-text-blue text-sm sm:text-base">Free Strategy Session</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 glow-text px-4">
                See What Wizzark Can Do
                <span className="block text-[#00C2FF] glow-text-blue">
                  For Your Business
                </span>
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-2 px-4">
                Get a personalized AI automation strategy tailored to your business. No sales pitch, just actionable insights.
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center">
                <CheckCircle className="h-16 w-16 text-[#00C2FF] mx-auto mb-4 glow-icon" />
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 glow-text">Strategy Call Booked!</h4>
                <p className="text-sm sm:text-base text-gray-400 px-4">We'll contact you within 24 hours to schedule your free consultation.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto px-4">
                {error && (
                  <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-sm text-center">
                    {error}
                  </div>
                )}
                
                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#00C2FF] focus:border-transparent transition-all duration-200 text-white placeholder-gray-400 text-sm sm:text-base cursor-text"
                    style={{
                      cursor: 'text',
                      WebkitUserSelect: 'text',
                      MozUserSelect: 'text',
                      userSelect: 'text',
                      pointerEvents: 'auto',
                      position: 'relative',
                      zIndex: 1
                    }}
                    placeholder="Your Full Name"
                  />
                  
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#00C2FF] focus:border-transparent transition-all duration-200 text-white placeholder-gray-400 text-sm sm:text-base cursor-text"
                    style={{
                      cursor: 'text',
                      WebkitUserSelect: 'text',
                      MozUserSelect: 'text',
                      userSelect: 'text',
                      pointerEvents: 'auto',
                      position: 'relative',
                      zIndex: 1
                    }}
                    placeholder="Your Email Address"
                  />
                  
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#00C2FF] focus:border-transparent transition-all duration-200 text-white placeholder-gray-400 text-sm sm:text-base cursor-text"
                    style={{
                      cursor: 'text',
                      WebkitUserSelect: 'text',
                      MozUserSelect: 'text',
                      userSelect: 'text',
                      pointerEvents: 'auto',
                      position: 'relative',
                      zIndex: 1
                    }}
                    placeholder="Your Company Name"
                  />
                  
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleSelectChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#00C2FF] focus:border-transparent transition-all duration-200 text-white text-sm sm:text-base"
                  >
                    <option value="" disabled className="text-gray-400">Select a service</option>
                    {serviceOptions.map(option => (
                      <option key={option.value} value={option.value} className="text-white bg-gray-900">
                        {option.label}
                      </option>
                    ))}
                    <option value="multiple-services" className="text-white bg-gray-900">Multiple Services</option>
                  </select>
                  
                  {/* Multiple Services Checkboxes */}
                  {formData.service === 'multiple-services' && (
                    <div className="mt-4 p-3 sm:p-4 bg-gray-800/50 border border-gray-600 rounded-lg">
                      <p className="text-white font-medium mb-3 text-sm sm:text-base">Select the services you need:</p>
                      <div className="space-y-2 sm:space-y-3">
                        {serviceOptions.map(option => (
                          <label key={option.value} className="flex items-start space-x-2 sm:space-x-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.selectedServices.includes(option.value)}
                              onChange={() => handleServiceCheckboxChange(option.value)}
                              className="mt-0.5 w-4 h-4 sm:w-5 sm:h-5 text-[#00C2FF] bg-gray-900/50 border-gray-600 rounded focus:ring-[#00C2FF] focus:ring-2 flex-shrink-0 cursor-pointer touch-manipulation"
                            />
                            <span className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
                              {option.label}
                            </span>
                          </label>
                        ))}
                      </div>
                      {formData.selectedServices.length === 0 && (
                        <p className="text-red-400 text-xs sm:text-sm mt-2">Please select at least one service</p>
                      )}
                    </div>
                  )}
                  
                  <textarea
                    name="projectInfo"
                    value={formData.projectInfo}
                    onChange={handleTextareaChange}
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#00C2FF] focus:border-transparent transition-all duration-200 text-white placeholder-gray-400 text-sm sm:text-base resize-vertical cursor-text"
                    style={{ 
                      cursor: 'text',
                      WebkitUserSelect: 'text',
                      MozUserSelect: 'text',
                      userSelect: 'text',
                      WebkitTouchCallout: 'default',
                      touchAction: 'manipulation',
                      pointerEvents: 'auto',
                      position: 'relative',
                      zIndex: 1
                    }}
                    placeholder="Tell us about your project... What challenges are you facing? What are your automation goals? Any specific requirements or timeline?"
                    maxLength={1000}
                  />
                  
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      id="agreeToTerms"
                      required
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      className="mt-0.5 w-4 h-4 sm:w-5 sm:h-5 text-[#00C2FF] bg-gray-900/50 border-gray-600 rounded focus:ring-[#00C2FF] focus:ring-2 flex-shrink-0 cursor-pointer"
                    />
                    <label htmlFor="agreeToTerms" className="text-xs sm:text-sm text-gray-400 leading-relaxed cursor-pointer">
                      By submitting this form, I agree to Wizzark's{' '}
                      <Link 
                        to="/privacy-policy" 
                       onClick={() => window.scrollTo(0, 0)}
                        className="text-[#00C2FF] hover:text-cyan-300 underline transition-colors duration-200 font-medium"
                      >
                        Privacy Policy
                      </Link>
                      {' '}and{' '}
                      <Link 
                        to="/terms-of-service" 
                       onClick={() => window.scrollTo(0, 0)}
                        className="text-[#00C2FF] hover:text-cyan-300 underline transition-colors duration-200 font-medium"
                      >
                        Terms of Service
                      </Link>
                      .
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading || (formData.service === 'multiple-services' && formData.selectedServices.length === 0)}
                  className="w-full bg-[#00C2FF] hover:bg-[#00A8E6] disabled:bg-gray-600 disabled:cursor-not-allowed text-black disabled:text-gray-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg flex items-center justify-center space-x-2 transform hover:scale-105 disabled:hover:scale-100 transition-all duration-200 shadow-xl hover:shadow-[#00C2FF]/50 glow-button"
                >
                  <Send className="h-5 w-5" />
                  <span>{isLoading ? 'Submitting...' : 'Book My Free Strategy Call'}</span>
                </button>
                
                <p className="text-xs text-gray-500 text-center mt-4">
                  No spam. Unsubscribe anytime. Your data is secure and GDPR compliant.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
