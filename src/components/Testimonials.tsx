import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Wizzark transformed our business overnight. We went from manually handling 20 leads per day to automatically processing 200+ with their AI system. Our conversion rate increased by 340% in just 3 months.",
      author: "Sarah Mitchell",
      title: "CEO",
      company: "TechCorp Solutions",
      rating: 5,
      results: "340% increase in conversions"
    },
    {
      quote: "The AI appointment setting feature alone saved us 25 hours per week. Our team can finally focus on closing deals instead of playing phone tag with prospects. ROI was immediate.",
      author: "Michael Chen",
      title: "Sales Director",
      company: "InnovateLab",
      rating: 5,
      results: "25 hours saved weekly"
    },
    {
      quote: "We were losing 60% of after-hours inquiries before Wizzark. Now we capture every single lead, 24/7. The AI assistant handles initial qualification better than our junior staff ever did.",
      author: "Emily Rodriguez",
      title: "Marketing Manager",
      company: "GrowthCo",
      rating: 5,
      results: "100% lead capture rate"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 sm:py-20 bg-black w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 glow-text">
            What Our Clients Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Real results from real businesses that chose to automate with AI
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#00C2FF]/10 to-white/5 rounded-3xl p-8 md:p-12 border border-[#00C2FF]/20 glow-card">
            <div className="relative">
              <Quote className="h-12 w-12 text-[#00C2FF]/30 absolute -top-4 -left-4" />
              
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl sm:text-2xl text-white leading-relaxed mb-6 glow-text">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                
                <div className="bg-[#00C2FF]/20 rounded-lg p-4 mb-6 inline-block">
                  <div className="text-[#00C2FF] font-bold text-lg glow-text-blue">
                    {testimonials[currentTestimonial].results}
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="font-bold text-xl text-white glow-text">
                  {testimonials[currentTestimonial].author}
                </div>
                <div className="text-[#00C2FF] font-medium glow-text-blue">
                  {testimonials[currentTestimonial].title}
                </div>
                <div className="text-gray-400">
                  {testimonials[currentTestimonial].company}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-[#00C2FF]/20 border border-[#00C2FF]/30 text-[#00C2FF] hover:bg-[#00C2FF]/30 transition-all duration-300 glow-button"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-[#00C2FF] glow-dot'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-[#00C2FF]/20 border border-[#00C2FF]/30 text-[#00C2FF] hover:bg-[#00C2FF]/30 transition-all duration-300 glow-button"
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;