import React from 'react';
import { Calendar, User, ArrowRight, Brain, Zap, TrendingUp, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const articles = [
    {
      id: 1,
      title: "The Future of AI in Business Automation",
      excerpt: "Discover how artificial intelligence is revolutionizing business operations and what it means for your company's future growth.",
      author: "Sarah Mitchell",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "AI Trends",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      icon: <Brain className="h-5 w-5" />
    },
    {
      id: 2,
      title: "How AI Assistants Are Transforming Customer Service",
      excerpt: "Learn about the latest advancements in AI assistant technology and how they're improving customer satisfaction rates by 300%.",
      author: "Michael Chen",
      date: "December 12, 2024",
      readTime: "7 min read",
      category: "Customer Service",
      image: "https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      icon: <Zap className="h-5 w-5" />
    },
    {
      id: 3,
      title: "Maximizing ROI with Intelligent Lead Scoring",
      excerpt: "Explore how AI-powered lead scoring systems can help you identify high-value prospects and increase conversion rates.",
      author: "Emily Rodriguez",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "Lead Generation",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      id: 4,
      title: "AI-Powered Workflow Automation: A Complete Guide",
      excerpt: "Step-by-step guide to implementing AI workflow automation in your business to save time and reduce operational costs.",
      author: "David Park",
      date: "December 8, 2024",
      readTime: "8 min read",
      category: "Automation",
      image: "https://images.pexels.com/photos/8849407/pexels-photo-8849407.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      icon: <Brain className="h-5 w-5" />
    },
    {
      id: 5,
      title: "The Psychology Behind AI-Human Interactions",
      excerpt: "Understanding how customers perceive and interact with AI systems to create more effective automated solutions.",
      author: "Lisa Thompson",
      date: "December 5, 2024",
      readTime: "4 min read",
      category: "AI Psychology",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      icon: <Zap className="h-5 w-5" />
    },
    {
      id: 6,
      title: "Measuring Success: AI Analytics and KPIs",
      excerpt: "Learn which metrics matter most when evaluating the performance of your AI automation systems and how to track them.",
      author: "James Wilson",
      date: "December 3, 2024",
      readTime: "6 min read",
      category: "Analytics",
      image: "https://images.pexels.com/photos/7688047/pexels-photo-7688047.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      id: 7,
      title: "Building Trust in AI: Transparency and Ethics",
      excerpt: "Explore the importance of ethical AI development and how transparency builds customer trust in automated systems.",
      author: "Dr. Amanda Foster",
      date: "December 1, 2024",
      readTime: "9 min read",
      category: "AI Ethics",
      image: "https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      icon: <Brain className="h-5 w-5" />
    },
    {
      id: 8,
      title: "Voice AI: The Next Frontier in Customer Interaction",
      excerpt: "Discover how voice-enabled AI is changing the way businesses interact with customers and improve accessibility.",
      author: "Robert Kim",
      date: "November 28, 2024",
      readTime: "6 min read",
      category: "Voice AI",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      icon: <Zap className="h-5 w-5" />
    },
    {
      id: 9,
      title: "AI in Small Business: Getting Started Guide",
      excerpt: "A practical guide for small businesses looking to implement AI solutions without breaking the bank.",
      author: "Maria Gonzalez",
      date: "November 25, 2024",
      readTime: "7 min read",
      category: "Small Business",
      image: "https://images.pexels.com/photos/8849407/pexels-photo-8849407.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      icon: <TrendingUp className="h-5 w-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-16 w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Back to Home Link */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 px-2">
            AI Insights & Resources
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Stay ahead of the curve with the latest insights, trends, and best practices in AI automation
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img 
                  src={articles[0].image} 
                  alt={articles[0].title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                  {articles[0].icon}
                  <span>Featured</span>
                </div>
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {articles[0].title}
                </h2>
                <p className="text-base sm:text-lg text-gray-400 mb-6 leading-relaxed">
                  {articles[0].excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{articles[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{articles[0].date}</span>
                    </div>
                  </div>
                  <span className="text-cyan-400 font-medium">{articles[0].readTime}</span>
                </div>
                <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium transition-all duration-300 text-base">
                  <span>Read Full Article</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {articles.slice(1).map((article) => (
            <article 
              key={article.id}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 w-full"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                  {article.icon}
                  <span>{article.category}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {article.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-400 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <span className="text-cyan-400 font-medium">{article.readTime}</span>
                </div>

                <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-2 transition-all duration-300 text-sm sm:text-base">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-6 sm:p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Stay Updated with AI Trends
          </h3>
          <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto px-4">
            Get the latest AI insights and automation tips delivered to your inbox weekly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;