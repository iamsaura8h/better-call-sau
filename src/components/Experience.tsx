
import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-container bg-sage-light/20">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title text-center opacity-0 animate-slide-up">Experience</h2>
        <p className="section-subtitle text-center mx-auto opacity-0 animate-slide-up delay-100">
          My professional journey in the tech industry.
        </p>
        
        <div className="mt-16 opacity-0 animate-slide-up delay-200">
          <div className="relative p-8 bg-white rounded-2xl shadow-sm border border-white/50 transition-all duration-300 hover:shadow-md">
            <div className="absolute -top-4 left-8 px-4 py-1 bg-sage-dark text-white rounded-full text-sm font-medium">
              Dec 2024 – Apr 2025
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h3 className="text-2xl font-bold text-charcoal-dark">Full-Stack Developer</h3>
              <div className="mt-2 md:mt-0 text-lg font-medium text-charcoal-light">
                Skoolsaver, Hyderabad
              </div>
            </div>
            
            <ul className="space-y-4 mt-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-sage-light/70 flex items-center justify-center mt-1">
                  <div className="h-2 w-2 rounded-full bg-sage-dark"></div>
                </div>
                <p className="ml-4 text-lg text-charcoal-dark">
                  Designed and developed a dynamic vendor management module with a custom UI reducing task completion time by 30%, enabling vendors to create, edit, and manage jobs, discounts, and sales insights.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-sage-light/70 flex items-center justify-center mt-1">
                  <div className="h-2 w-2 rounded-full bg-sage-dark"></div>
                </div>
                <p className="ml-4 text-lg text-charcoal-dark">
                  Engineered and optimized APIs, integrating PostgreSQL for seamless data handling and performance.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-sage-light/70 flex items-center justify-center mt-1">
                  <div className="h-2 w-2 rounded-full bg-sage-dark"></div>
                </div>
                <p className="ml-4 text-lg text-charcoal-dark">
                  Built an interactive dashboard displaying real-time earnings, sales trends, and key business metrics.
                </p>
              </li>
            </ul>
            
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="tag bg-muted text-charcoal-light">React.js</span>
              <span className="tag bg-muted text-charcoal-light">Node.js</span>
              <span className="tag bg-muted text-charcoal-light">PostgreSQL</span>
              <span className="tag bg-muted text-charcoal-light">Express.js</span>
              <span className="tag bg-muted text-charcoal-light">TailwindCSS</span>
              <span className="tag bg-muted text-charcoal-light">UI/UX</span>
              <span className="tag bg-muted text-charcoal-light">API Development</span>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center opacity-0 animate-slide-up delay-300">
          <a 
            href="#contact" 
            className="inline-flex items-center text-charcoal-dark hover:text-sage-dark transition-colors"
          >
            <span className="font-medium">Interested in working together?</span>
            <svg 
              className="ml-2 w-5 h-5" 
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
