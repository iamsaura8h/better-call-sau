
import React from 'react';
import { Mail, Smartphone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-container">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title text-center opacity-0 animate-slide-up">Get In Touch</h2>
        <p className="section-subtitle text-center mx-auto opacity-0 animate-slide-up delay-100">
          Have a project in mind or want to collaborate? I'd love to hear from you.
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="opacity-0 animate-slide-up delay-200">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-white/60 h-full">
              <h3 className="text-2xl font-bold text-charcoal-dark mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-sage-light/70 flex items-center justify-center">
                    <Mail size={20} className="text-sage-dark" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-charcoal-light">Email</h4>
                    <a 
                      href="mailto:saurabh10.pro@gmail.com" 
                      className="text-charcoal-dark hover:text-sage-dark transition-colors"
                    >
                      saurabh10.pro@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-sage-light/70 flex items-center justify-center">
                    <Smartphone size={20} className="text-sage-dark" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-charcoal-light">Phone</h4>
                    <a 
                      href="tel:+919912083170" 
                      className="text-charcoal-dark hover:text-sage-dark transition-colors"
                    >
                      +91 99120 83170
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-sage-light/70 flex items-center justify-center">
                    <MapPin size={20} className="text-sage-dark" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-charcoal-light">Location</h4>
                    <p className="text-charcoal-dark">Hyderabad, India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-medium text-charcoal-dark mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/iamsaura8h" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="h-12 w-12 rounded-full bg-charcoal-dark flex items-center justify-center text-white hover:bg-charcoal-light transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/saurabh-kumar-sk1107" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="h-12 w-12 rounded-full bg-charcoal-dark flex items-center justify-center text-white hover:bg-charcoal-light transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="opacity-0 animate-slide-up delay-300">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-white/60 h-full">
              <h3 className="text-2xl font-bold text-charcoal-dark mb-6">Send Me a Message</h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-charcoal-dark">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Your name" 
                    className="w-full px-4 py-3 rounded-lg border border-stone focus:outline-none focus:ring-2 focus:ring-sage-dark"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-charcoal-dark">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Your email" 
                    className="w-full px-4 py-3 rounded-lg border border-stone focus:outline-none focus:ring-2 focus:ring-sage-dark"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium text-charcoal-dark">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    placeholder="Your message" 
                    className="w-full px-4 py-3 rounded-lg border border-stone focus:outline-none focus:ring-2 focus:ring-sage-dark"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="button-primary w-full"
                >
                  Send Message
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
