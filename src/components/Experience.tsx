
import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-container relative">
      {/* Background elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-saul-purple/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-saul-orange/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title opacity-0 animate-slide-up inline-block relative saul-heading">Experience</h2>
          <p className="section-subtitle text-center mx-auto opacity-0 animate-slide-up delay-100">
            <span className="text-saul-orange font-semibold">Results-driven</span> professional experience that speaks for itself.
          </p>
        </div>
        
        {/* Marquee effect for dramatic flair */}
        <div className="w-full overflow-hidden my-8">
          <div className="marquee">
            <div className="marquee-content">
              {Array(10).fill(0).map((_, i) => (
                <div key={i} className="mx-4 text-saul-orange/20 text-5xl font-display font-bold">DELIVERING RESULTS</div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 opacity-0 animate-slide-up delay-200 relative">
          <div className="absolute -left-3 top-10 bottom-10 w-1 bg-saul-orange"></div>
          
          <div className="relative p-8 bg-gray-dark rounded-lg shadow-lg border-l-4 border-saul-orange transition-all duration-300 hover:shadow-saul-orange/20 hover:shadow-xl ml-6">
            <div className="absolute -left-10 top-10 w-6 h-6 rounded-full bg-saul-orange flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-white"></div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div className="flex items-center">
                <Briefcase className="mr-2 text-saul-orange" size={24} />
                <h3 className="text-3xl font-bold text-white">Full-Stack Developer</h3>
              </div>
              <div className="mt-2 md:mt-0 flex items-center text-lg font-medium text-gray">
                <Calendar className="mr-2 text-saul-gold" size={18} />
                <span>Dec 2024 – Apr 2025</span>
              </div>
            </div>
            
            <div className="flex items-center mb-6">
              <MapPin className="mr-2 text-saul-red" size={18} />
              <div className="text-xl font-medium text-gray">
                Skoolsaver, Hyderabad
              </div>
            </div>
            
            <ul className="space-y-6 mt-8">
              <li className="flex items-start group">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-saul-orange/20 flex items-center justify-center mt-1 group-hover:bg-saul-orange/40 transition-colors duration-300">
                  <CheckCircle2 className="text-saul-orange" size={18} />
                </div>
                <div className="ml-4">
                  <p className="text-xl text-white group-hover:text-saul-orange transition-colors duration-300">
                    Designed and developed a <span className="text-saul-gold font-semibold">dynamic vendor management module</span> with a custom UI reducing task completion time by 30%, enabling vendors to create, edit, and manage jobs, discounts, and sales insights.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start group">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-saul-blue/20 flex items-center justify-center mt-1 group-hover:bg-saul-blue/40 transition-colors duration-300">
                  <CheckCircle2 className="text-saul-blue" size={18} />
                </div>
                <div className="ml-4">
                  <p className="text-xl text-white group-hover:text-saul-blue transition-colors duration-300">
                    Engineered and optimized <span className="text-saul-blue font-semibold">high-performance APIs</span>, integrating PostgreSQL for seamless data handling and exceptional performance.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start group">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-saul-purple/20 flex items-center justify-center mt-1 group-hover:bg-saul-purple/40 transition-colors duration-300">
                  <CheckCircle2 className="text-saul-purple" size={18} />
                </div>
                <div className="ml-4">
                  <p className="text-xl text-white group-hover:text-saul-purple transition-colors duration-300">
                    Built an <span className="text-saul-purple font-semibold">interactive dashboard</span> displaying real-time earnings, sales trends, and key business metrics for data-driven decision making.
                  </p>
                </div>
              </li>
            </ul>
            
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="tag bg-gray-dark/80 text-white border-l-2 border-saul-orange">React.js</span>
              <span className="tag bg-gray-dark/80 text-white border-l-2 border-saul-blue">Node.js</span>
              <span className="tag bg-gray-dark/80 text-white border-l-2 border-saul-purple">PostgreSQL</span>
              <span className="tag bg-gray-dark/80 text-white border-l-2 border-saul-gold">Express.js</span>
              <span className="tag bg-gray-dark/80 text-white border-l-2 border-saul-red">TailwindCSS</span>
              <span className="tag bg-gray-dark/80 text-white border-l-2 border-saul-green">UI/UX</span>
              <span className="tag bg-gray-dark/80 text-white border-l-2 border-saul-blue">API Development</span>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center opacity-0 animate-slide-up delay-400">
          <a 
            href="#contact" 
            className="inline-flex items-center text-white hover:text-saul-orange transition-colors group"
          >
            <span className="font-medium text-xl relative">
              Need a developer who gets results?
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-saul-orange transition-all group-hover:w-full"></span>
            </span>
            <svg 
              className="ml-2 w-5 h-5 text-saul-orange group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
