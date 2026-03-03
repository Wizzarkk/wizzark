import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-[9999] bg-black border-b border-gray-800 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <Link to="/">
              <img 
                src="/ChatGPT Image Oct 12, 2025, 02_35_32 PM.png" 
                alt="Wizzark Logo" 
                className="h-10 w-10"
              />
            </Link>
            <span className="text-2xl font-bold text-[#00C2FF] glow-text-blue">
              Wizzark
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {location.pathname === '/' ? (
              <>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  Services
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  Home
                </Link>
                <button className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
                  Services
                </button>
              </>
            )}
            
            {/* CTA Button */}
            <button 
              onClick={() => scrollToSection('lead-magnet')}
              className="bg-[#00C2FF] hover:bg-[#00A8E6] text-black px-4 lg:px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-[#00C2FF]/50 transform hover:scale-105 transition-all duration-200 glow-button text-sm lg:text-base whitespace-nowrap"
            >
              Get Solution
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-white flex-shrink-0"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              {location.pathname === '/' ? (
                <>
                  <button 
                    onClick={() => scrollToSection('hero')}
                    className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-left"
                  >
                    Home
                  </button>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-left"
                  >
                    Services
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    to="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-left"
                  >
                    Home
                  </Link>
                  <button className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-left">
                    Services
                  </button>
                </>
              )}
              
              <div className="pt-4 border-t border-gray-800">
                <button 
                  onClick={() => scrollToSection('lead-magnet')}
                  className="w-full bg-[#00C2FF] hover:bg-[#00A8E6] text-black px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-[#00C2FF]/50 transition-all duration-200"
                >
                  Get Solution
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;