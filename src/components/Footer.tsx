import React from 'react';
import { Github, Linkedin, Mail, Phone, ArrowRight, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-dark text-white py-16 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 w-full h-full -z-10 opacity-5">
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-saul-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute left-0 top-0 w-80 h-80 bg-saul-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdjZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-12 border-b border-white/10">
          <div>
            <a 
              href="#" 
              className="text-white font-display font-bold text-3xl relative group"
              aria-label="Saurabh Kumar"
            >
              <span className="text-white">Saurabh</span>
              <span className="text-saul-orange">K</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-saul-orange transition-all group-hover:w-full"></span>
            </a>
            <p className="mt-6 text-gray-light max-w-md text-lg">
              When you need a full-stack developer who delivers results, not excuses. 
              Specializing in MERN, Next.js, and UI/UX design with a track record of success.
            </p>
            <div className="mt-8 flex space-x-4">
              <a 
                href="https://github.com/iamsaura8h" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray hover:text-saul-orange transition-colors p-2 neo-glass rounded-full"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/saurabh-kumar-sk1107" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray hover:text-saul-orange transition-colors p-2 neo-glass rounded-full"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:saurabh10.pro@gmail.com" 
                className="text-gray hover:text-saul-orange transition-colors p-2 neo-glass rounded-full"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+919912083170" 
                className="text-gray hover:text-saul-orange transition-colors p-2 neo-glass rounded-full"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 relative saul-heading">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#about" className="text-gray hover:text-saul-orange transition-colors flex items-center group">
                    <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>About</span>
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-gray hover:text-saul-orange transition-colors flex items-center group">
                    <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Experience</span>
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray hover:text-saul-orange transition-colors flex items-center group">
                    <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Projects</span>
                  </a>
                </li>
                <li>
                  <a href="#achievements" className="text-gray hover:text-saul-orange transition-colors flex items-center group">
                    <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Achievements</span>
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray hover:text-saul-orange transition-colors flex items-center group">
                    <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 relative saul-heading">Contact</h3>
              <ul className="space-y-4">
                <li className="text-gray flex items-start">
                  <MapPin className="mr-2 text-saul-orange mt-1" size={16} />
                  <span>Hyderabad, India</span>
                </li>
                <li>
                  <a href="mailto:saurabh10.pro@gmail.com" className="text-gray hover:text-saul-orange transition-colors flex items-start">
                    <Mail className="mr-2 mt-1" size={16} />
                    <span>saurabh10.pro@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+919912083170" className="text-gray hover:text-saul-orange transition-colors flex items-start">
                    <Phone className="mr-2 mt-1" size={16} />
                    <span>+91 99120 83170</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 text-center text-gray">
          <p className="relative">
            <span className="bg-saul-orange/20 px-2 py-1 rounded text-saul-orange text-xs mr-2 font-semibold">BETTER CALL SAURABH</span> 
            © {currentYear} Saurabh Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
