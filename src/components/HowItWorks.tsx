import { Calendar, Settings, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: <Calendar className="h-8 w-8" />,
      title: "Schedule Call",
      description: "Book a free 30-minute strategy session where we analyze your current processes and identify automation opportunities."
    },
    {
      number: "02",
      icon: <Settings className="h-8 w-8" />,
      title: "Setup",
      description: "Our team implements your custom AI automation system, integrating seamlessly with your existing tools and workflows."
    },
    {
      number: "03",
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Scale",
      description: "Watch your business grow as AI handles lead capture, appointments, and support while you focus on strategic decisions."
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="how-it-works" className="py-12 sm:py-16 section-background w-full">
      <div className="animated-bg-element"></div>
      <div className="animated-bg-element"></div>
      <div className="animated-bg-element"></div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 glow-text px-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Get started with AI automation in just three simple steps
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#00C2FF] to-transparent transform translate-x-4 z-0"></div>
              )}
              
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-[#00C2FF]/50 transition-all duration-300 text-center glow-card z-10">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#00C2FF] text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm glow-icon">
                  {step.number}
                </div>
                
                <div className="bg-gradient-to-br from-[#00C2FF] to-white text-black p-4 rounded-xl w-fit mx-auto mb-6 mt-4 glow-icon">
                  {step.icon}
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 glow-text">
                  {step.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed px-2">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative text-center">
          <button 
            onClick={() => scrollToSection('lead-magnet')}
            className="bg-[#00C2FF] hover:bg-[#00A8E6] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-[#00C2FF]/50 glow-button mb-8 sm:mb-0"
          >
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;