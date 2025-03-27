
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-dark text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-white/10">
          <div>
            <a 
              href="#" 
              className="text-white font-display font-bold text-2xl"
              aria-label="Saurabh Kumar"
            >
              Saurabh<span className="text-sage">.</span>
            </a>
            <p className="mt-4 text-stone-light/80 max-w-md">
              A passionate full-stack developer specializing in MERN, Next.js, and UI/UX design.
              Building digital experiences that are both functional and delightful.
            </p>
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://github.com/iamsaura8h" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/saurabh-kumar-sk1107" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:saurabh10.pro@gmail.com" 
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-white/70 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-white/70 hover:text-white transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-white/70 hover:text-white transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#achievements" className="text-white/70 hover:text-white transition-colors">
                    Achievements
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/70 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-white/70">
                  Hyderabad, India
                </li>
                <li>
                  <a href="mailto:saurabh10.pro@gmail.com" className="text-white/70 hover:text-white transition-colors">
                    saurabh10.pro@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+919912083170" className="text-white/70 hover:text-white transition-colors">
                    +91 99120 83170
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 text-center text-white/60">
          <p>© {currentYear} Saurabh Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
