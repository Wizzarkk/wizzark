import { Star, Quote } from 'lucide-react';

const Proof = () => {
  const logos = [
    { name: "TechCorp", width: "120px" },
    { name: "InnovateLab", width: "140px" },
    { name: "GrowthCo", width: "110px" },
    { name: "ScaleUp", width: "130px" },
    { name: "FutureFlow", width: "125px" },
    { name: "NextGen", width: "115px" }
  ];

  const testimonials = [
    {
      quote: "Wizzark's AI automation increased our lead conversion by 340% in just 3 months. The ROI is incredible.",
      author: "Sarah Mitchell",
      company: "TechCorp Solutions",
      rating: 5
    },
    {
      quote: "We went from missing 60% of after-hours inquiries to capturing every single lead. Game changer.",
      author: "Michael Chen",
      company: "InnovateLab",
      rating: 5
    },
    {
      quote: "The AI appointment setting alone saved us 25 hours per week. Our team can finally focus on closing deals.",
      author: "Emily Rodriguez",
      company: "GrowthCo",
      rating: 5
    }
  ];

  return (
    <section className="py-12 sm:py-16 section-background w-full">
      <div className="animated-bg-element"></div>
      <div className="animated-bg-element"></div>
      <div className="animated-bg-element"></div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 glow-text px-4">
            Trusted by Businesses
            <span className="block text-[#00C2FF] glow-text-blue">
              Ready to Scale with AI
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Join hundreds of successful companies that have transformed their operations with Wizzark
          </p>
        </div>

        {/* Testimonials */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-700 hover:border-[#00C2FF]/50 transition-all duration-300 glow-card"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="relative mb-4 sm:mb-6">
                <Quote className="h-8 w-8 text-[#00C2FF]/30 absolute -top-2 -left-2" />
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed pl-6">
                  {testimonial.quote}
                </p>
              </div>
              
              <div className="border-t border-gray-700 pt-4">
                <div className="font-semibold text-white text-sm sm:text-base">{testimonial.author}</div>
                <div className="text-[#00C2FF] text-xs sm:text-sm glow-text-blue">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Proof;