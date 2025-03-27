
import React from 'react';
import { Mail, Smartphone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-container">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title text-center opacity-0 animate-slide-up">Get In Touch</h2>
        <p className="section-subtitle text-center mx-auto opacity-0 animate-slide-up delay-100">
          Need legal representation for your next project? Better Call Sau.
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="opacity-0 animate-slide-up delay-200">
            <div className="glass rounded-xl p-8 shadow-sm h-full">
              <h3 className="text-2xl font-bold text-saul-navy mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-saul-yellow/30 flex items-center justify-center">
                    <Mail size={20} className="text-saul-navy" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-saul-blue">Email</h4>
                    <a 
                      href="mailto:saurabh10.pro@gmail.com" 
                      className="text-saul-navy hover:text-saul-red transition-colors"
                    >
                      saurabh10.pro@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-saul-yellow/30 flex items-center justify-center">
                    <Smartphone size={20} className="text-saul-navy" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-saul-blue">Phone</h4>
                    <a 
                      href="tel:+919912083170" 
                      className="text-saul-navy hover:text-saul-red transition-colors"
                    >
                      +91 99120 83170
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-saul-yellow/30 flex items-center justify-center">
                    <MapPin size={20} className="text-saul-navy" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-saul-blue">Location</h4>
                    <p className="text-saul-navy">Hyderabad, India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-medium text-saul-navy mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/iamsaura8h" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="h-12 w-12 rounded-full bg-saul-navy flex items-center justify-center text-white hover:bg-saul-red transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/saurabh-kumar-sk1107" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="h-12 w-12 rounded-full bg-saul-navy flex items-center justify-center text-white hover:bg-saul-red transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="opacity-0 animate-slide-up delay-300">
            <div className="glass rounded-xl p-8 shadow-sm h-full">
              <h3 className="text-2xl font-bold text-saul-navy mb-6">Send Me a Message</h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-saul-navy">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Your name" 
                    className="w-full px-4 py-3 rounded-lg border border-saul-sand focus:outline-none focus:ring-2 focus:ring-saul-yellow bg-white/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-saul-navy">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Your email" 
                    className="w-full px-4 py-3 rounded-lg border border-saul-sand focus:outline-none focus:ring-2 focus:ring-saul-yellow bg-white/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium text-saul-navy">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    placeholder="Your message" 
                    className="w-full px-4 py-3 rounded-lg border border-saul-sand focus:outline-none focus:ring-2 focus:ring-saul-yellow bg-white/50"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="button-primary w-full flex items-center justify-center"
                >
                  <span className="mr-2">Better Call Sau</span> →
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
