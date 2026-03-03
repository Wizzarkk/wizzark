import { Linkedin, Twitter } from 'lucide-react';

const SmallFooter = () => {
  return (
    <footer className="bg-gradient-to-r from-[#00C2FF]/10 to-white/5 border-t border-[#00C2FF]/20 w-full py-4 sm:py-6">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-2 sm:space-y-3">
          <p className="text-gray-400 text-center max-w-2xl text-sm sm:text-base px-4">
            Wizzark transforms businesses with AI automation solutions. We help companies capture more leads, 
            automate appointments, and provide 24/7 customer support.
          </p>
          
          <div className="flex items-center space-x-4 sm:space-x-6">
            <a 
              href="https://linkedin.com/company/wizzark" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00C2FF] transition-colors duration-200"
            >
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a 
              href="https://twitter.com/wizzark" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00C2FF] transition-colors duration-200"
            >
              <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          </div>
          
          <p className="text-gray-500 text-sm">
            © 2025 Wizzark. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SmallFooter;