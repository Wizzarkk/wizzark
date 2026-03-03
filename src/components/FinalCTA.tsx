import { ArrowRight, Zap } from 'lucide-react';

const FinalCTA = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 sm:py-20 bg-black w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#00C2FF]/10 to-white/5 rounded-3xl p-8 md:p-12 border border-[#00C2FF]/20 glow-card">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 glow-text">
              Stop Losing Leads.
              <span className="block text-[#00C2FF] glow-text-blue">
                Start Scaling with Wizzark AI.
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Every day you wait is another day your competitors are capturing the leads you're missing. Don't let another opportunity slip away.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-[#00C2FF] mb-2 glow-text-blue">Free</div>
                <div className="text-gray-400 text-sm">Strategy Session</div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-white mb-2 glow-text">24hrs</div>
                <div className="text-gray-400 text-sm">Setup Time</div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-[#00C2FF] mb-2 glow-text-blue">300%</div>
                <div className="text-gray-400 text-sm">ROI Guarantee</div>
              </div>
            </div>
            
            <button 
              onClick={() => scrollToSection('lead-magnet')}
              className="bg-[#00C2FF] hover:bg-[#00A8E6] text-black px-8 py-4 rounded-full font-semibold text-xl flex items-center justify-center space-x-2 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-[#00C2FF]/50 glow-button mx-auto"
            >
              <span>Book Your Free Demo Now</span>
              <ArrowRight className="h-6 w-6" />
            </button>
            
            <p className="text-sm text-gray-500 mt-4">
              No credit card required • Free consultation • GDPR compliant
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
