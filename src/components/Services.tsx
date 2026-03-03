import { Users, Headphones as HeadphonesIcon, Calendar, Monitor, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Lead Capture & CRM Integration",
      description: "Never miss a lead again. Our AI captures, qualifies, and nurtures prospects 24/7, seamlessly integrating with your existing CRM.",
      features: ["Instant lead qualification", "CRM auto-sync", "Smart follow-ups", "Lead scoring"]
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8" />,
      title: "AI Customer Support",
      description: "Provide instant, accurate support around the clock. Our AI assistants handle common queries and escalate complex issues to your team.",
      features: ["24/7 availability", "Instant responses", "Multi-language support", "Smart escalation"]
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "AI Appointment Setting",
      description: "Let AI handle your scheduling. From initial inquiry to confirmed appointment, our system manages your entire booking process.",
      features: ["Smart scheduling", "Calendar sync", "Automated reminders", "Rescheduling handling"]
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Website Design & Optimization",
      description: "Convert more visitors with AI-optimized websites designed to capture leads and drive conversions at every touchpoint.",
      features: ["Conversion optimization", "Mobile responsive", "A/B testing", "Performance tracking"]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-12 sm:py-16 section-background w-full">
      <div className="animated-bg-element"></div>
      <div className="animated-bg-element"></div>
      <div className="animated-bg-element"></div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 glow-text px-4">
            Our AI-Powered Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Complete automation solutions that work together to transform your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-[#00C2FF]/50 transition-all duration-300 transform hover:scale-105 w-full glow-card h-full flex flex-col"
            >
              <div className="bg-gradient-to-br from-[#00C2FF] to-white text-black p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300 glow-icon">
                {service.icon}
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 glow-text">
                {service.title}
              </h3>
              
              <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed flex-grow">
                {service.description}
              </p>
              
              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#00C2FF] rounded-full glow-dot"></div>
                    <span className="text-sm sm:text-base text-gray-300 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={() => scrollToSection('lead-magnet')}
            className="bg-[#00C2FF] hover:bg-[#00A8E6] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-[#00C2FF]/50 glow-button"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;