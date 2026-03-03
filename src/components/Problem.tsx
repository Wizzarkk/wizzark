import { AlertTriangle, TrendingDown, Clock } from 'lucide-react';

const Problem = () => {
  return (
    <section className="py-12 sm:py-16 section-background w-full">
      <div className="animated-bg-element"></div>
      <div className="animated-bg-element"></div>
      <div className="animated-bg-element"></div>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 glow-text px-4">
            Losing Leads? Missing Appointments?
            <span className="block text-[#00C2FF] glow-text-blue">
              Overwhelmed by Support?
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Every minute you're not responding to leads, your competitors are. Every missed call is lost revenue. Every support ticket that waits is a frustrated customer.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center p-4 sm:p-6">
            <div className="bg-red-500/20 p-4 rounded-full w-fit mx-auto mb-4">
              <TrendingDown className="h-8 w-8 text-red-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Lost Revenue</h3>
            <p className="text-sm sm:text-base text-gray-400 px-2">
              Studies show businesses lose 27% of potential customers due to slow response times
            </p>
          </div>

          <div className="text-center p-4 sm:p-6">
            <div className="bg-yellow-500/20 p-4 rounded-full w-fit mx-auto mb-4">
              <Clock className="h-8 w-8 text-yellow-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Wasted Time</h3>
            <p className="text-sm sm:text-base text-gray-400 px-2">
              Your team spends 60% of their time on repetitive tasks instead of growing your business
            </p>
          </div>

          <div className="text-center p-4 sm:p-6">
            <div className="bg-red-500/20 p-4 rounded-full w-fit mx-auto mb-4">
              <AlertTriangle className="h-8 w-8 text-red-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Missed Opportunities</h3>
            <p className="text-sm sm:text-base text-gray-400 px-2">
              After-hours inquiries go unanswered, costing you thousands in potential sales
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Problem;