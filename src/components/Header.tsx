
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, ChevronRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: <Github size={20} />, href: 'https://github.com/iamsaura8h' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/saurabh-kumar-sk1107' },
    { name: 'Email', icon: <Mail size={20} />, href: 'mailto:saurabh10.pro@gmail.com' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-3 glass shadow-lg' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a 
              href="#" 
              className="font-display font-bold text-xl md:text-2xl relative group"
              aria-label="Saurabh Kumar"
            >
              <span className="text-saul-navy">Saurabh</span>
              <span className="text-saul-orange">K</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-saul-orange transition-all group-hover:w-full"></span>
            </a>
            
            {!isMobile ? (
              <nav className="flex items-center space-x-8">
                <ul className="flex space-x-6">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-black hover:text-saul-orange transition-colors duration-200 font-medium relative group"
                      >
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-saul-orange transition-all group-hover:w-full"></span>
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center space-x-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray hover:text-saul-orange transition-colors duration-200"
                      aria-label={link.name}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </nav>
            ) : (
              <button
                onClick={toggleMenu}
                className="text-white p-2 focus:outline-none"
                aria-label="Menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </div>
        </div>
      </header>

      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 z-40 glass pt-24 animate-fade-in">
          <nav className="p-6">
            <ul className="space-y-6">
              {navLinks.map((link, i) => (
                <li key={link.name} style={{ animationDelay: `${i * 50}ms` }} className="animate-slide-right">
                  <a
                    href={link.href}
                    className="block text-2xl font-medium text-white group flex items-center"
                    onClick={toggleMenu}
                  >
                    <ChevronRight className="mr-2 text-saul-orange" size={20} />
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-saul-orange transition-all group-hover:w-full"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-12 flex items-center space-x-6">
              {socialLinks.map((link, i) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-saul-orange p-2 rounded-full neo-glass"
                  style={{ animationDelay: `${(navLinks.length + i) * 50}ms` }}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}

      <div className="h-24"></div>
      
      <section className="relative min-h-[90vh] flex items-center section-container pt-12">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Spotlight animation */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[500px] h-[500px] rounded-full bg-gradient-to-r from-saul-purple/20 via-saul-blue/5 to-saul-red/20 blur-3xl animate-spotlight"></div>
          
          <div className="mb-4 inline-block px-4 py-1 rounded-full bg-saul-orange/20 text-black text-sm font-medium border border-saul-orange/30 backdrop-blur-sm animate-slide-down">
            <span className="mr-2">⚖️</span>Full-Stack Developer | Problem Solver | Java Lead
          </div>
          
          <div className="mb-8 overflow-hidden">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-black animate-slide-up relative inline-block">
              <span className="relative">
                <span className="block animate-slide-up">Better Call</span>
                <span className="block mt-2 text-gradient animate-slide-up delay-200">Saurabh</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-saul-orange via-saul-gold to-saul-red animate-slide-up delay-300"></span>
              </span>
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-gray max-w-2xl mx-auto mb-10 animate-slide-up delay-200">
            A passionate full-stack developer who delivers when others can't. Specializing in MERN, Next.js, and UI/UX design with <span className="text-saul-orange font-semibold">results guaranteed</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up delay-300">
            <a href="#projects" className="button-primary group relative overflow-hidden">
              <span className="relative z-10">View My Work</span>
              <span className="absolute inset-0 bg-saul-red scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300"></span>
            </a>
            <a href="#contact" className="button-secondary group relative overflow-hidden">
              <span className="relative z-10">Get In Touch</span>
              <span className="absolute inset-0 bg-saul-purple scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300"></span>
            </a>
          </div>
          
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" aria-label="Scroll down">
              <div className="w-8 h-12 border-2 border-saul-orange rounded-full flex justify-center">
                <div className="w-1 h-3 bg-saul-orange rounded-full mt-2 animate-pulse"></div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
