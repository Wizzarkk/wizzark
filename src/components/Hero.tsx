import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen bg-black text-white relative overflow-hidden flex items-center w-full">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00C2FF]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#00C2FF]/5 to-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20 sm:pt-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight glow-text">
              The Smarter Way
              <span className="block text-[#00C2FF] glow-text-blue">
                to Scale
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto px-4">
              Wizzark captures leads, books appointments, and supports customers — all powered by AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <button 
                onClick={() => scrollToSection('lead-magnet')}
                className="bg-[#00C2FF] hover:bg-[#00A8E6] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg flex items-center justify-center space-x-2 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-[#00C2FF]/50 glow-button w-full sm:w-auto"
              >
                <span>Book Your Free Demo</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="border border-gray-600 hover:border-[#00C2FF] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg flex items-center justify-center space-x-2 backdrop-blur-sm hover:bg-[#00C2FF]/10 transition-all duration-200 w-full sm:w-auto"
              >
                <Play className="h-5 w-5" />
                <span>See How It Works</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 max-w-sm sm:max-w-md mx-auto px-4">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#00C2FF] mb-1 sm:mb-2 glow-text-blue">300%</div>
                <div className="text-gray-400 text-xs sm:text-sm">More Leads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 glow-text">24/7</div>
                <div className="text-gray-400 text-xs sm:text-sm">AI Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#00C2FF] mb-1 sm:mb-2 glow-text-blue">85%</div>
                <div className="text-gray-400 text-xs sm:text-sm">Time Saved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;