
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
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
          isScrolled ? 'py-3 glass shadow-sm' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a 
              href="#" 
              className="text-charcoal-dark font-display font-bold text-xl md:text-2xl"
              aria-label="Saurabh Kumar"
            >
              Saurabh<span className="text-sage-dark">.</span>
            </a>
            
            {!isMobile ? (
              <nav className="flex items-center space-x-8">
                <ul className="flex space-x-6">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-charcoal-dark hover:text-sage-dark transition-colors duration-200 font-medium link-hover"
                      >
                        {link.name}
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
                      className="text-charcoal-dark hover:text-sage-dark transition-colors duration-200"
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
                className="text-charcoal-dark p-2 focus:outline-none"
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
                    className="block text-2xl font-medium text-charcoal-dark"
                    onClick={toggleMenu}
                  >
                    {link.name}
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
                  className="text-charcoal-dark hover:text-sage-dark p-2 rounded-full neo-glass"
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
      
      <section className="relative min-h-[80vh] flex items-center section-container pt-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4 inline-block px-4 py-1 rounded-full bg-sage-light/40 text-charcoal-dark text-sm font-medium animate-slide-down">
            Full-Stack Developer | Problem Solver | Java Lead
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-charcoal-dark animate-slide-up">
            <span className="block">Hello, I'm Saurabh</span>
            <span className="block mt-2 text-balance">Building <span className="text-sage-dark">experiences</span> that matter</span>
          </h1>
          <p className="text-lg md:text-xl text-charcoal-light max-w-2xl mx-auto mb-10 animate-slide-up delay-200">
            A passionate full-stack developer specializing in MERN, Next.js, and UI/UX design. 
            I create efficient and elegant solutions to real-world problems.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up delay-300">
            <a href="#projects" className="button-primary">
              View My Work
            </a>
            <a href="#contact" className="button-secondary">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
