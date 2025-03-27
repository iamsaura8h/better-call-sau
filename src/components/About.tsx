
import React from 'react';
import { Code, Briefcase, Server, Database, Wrench, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      category: 'Languages',
      icon: <Code className="text-saul-red" size={24} />,
      items: ['JavaScript', 'TypeScript', 'Java', 'Python'],
    },
    {
      category: 'Frontend',
      icon: <Briefcase className="text-saul-yellow" size={24} />,
      items: ['React.js', 'Next.js', 'Redux', 'TailwindCSS'],
    },
    {
      category: 'Backend',
      icon: <Server className="text-saul-blue" size={24} />,
      items: ['Node.js', 'Express.js', 'RESTful APIs', 'GraphQL'],
    },
    {
      category: 'Databases',
      icon: <Database className="text-saul-navy" size={24} />,
      items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Supabase'],
    },
    {
      category: 'Tools',
      icon: <Wrench className="text-saul-rust" size={24} />,
      items: ['Git', 'Docker', 'VS Code', 'Postman', 'Linux'],
    },
    {
      category: 'Concepts',
      icon: <Lightbulb className="text-saul-gold" size={24} />,
      items: ['UI/UX Design', 'Performance Optimization', 'CRUD Operations', 'API Integration'],
    },
  ];

  return (
    <section id="about" className="section-container relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-saul-red/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-saul-navy/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/2">
            <div className="mb-8 relative">
              <h2 className="section-title opacity-0 animate-slide-up saul-heading">About Me</h2>
            </div>
            
            <div className="space-y-6 opacity-0 animate-slide-up delay-100">
              <div className="relative overflow-hidden saul-card">
                <p className="text-lg text-saul-charcoal leading-relaxed">
                  Need a developer who delivers? <span className="text-saul-red font-semibold">Better Call Sau</span>. I specialize in full-stack development with a knack for both elegant frontends and reliable backends.
                </p>
                <div className="absolute -right-10 -bottom-10 w-24 h-24 bg-saul-red/10 rounded-full blur-2xl"></div>
              </div>
              
              <div className="saul-card">
                <p className="text-lg text-saul-charcoal leading-relaxed">
                  With expertise in the MERN stack, Next.js, and UI/UX design, I create applications that are both functional and <span className="text-saul-red font-semibold">visually striking</span>. I'm the developer who knows the law of good code.
                </p>
              </div>
              
              <div className="saul-card">
                <p className="text-lg text-saul-charcoal leading-relaxed">
                  As a Java Lead at CodeHoppers Club, I've guided hundreds of students through the complexities of programming. This experience has sharpened both my technical skills and my ability to <span className="text-saul-red font-semibold">explain complex concepts</span> in simple terms.
                </p>
              </div>
              
              <div className="saul-card">
                <p className="text-lg text-saul-charcoal leading-relaxed">
                  When it comes to development, I don't just meet expectations—I <span className="text-saul-red font-semibold">exceed</span> them. My interest in open source and AI/ML keeps me at the cutting edge of technology, ensuring your project gets the attention it deserves.
                </p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="mb-8 relative">
              <h2 className="section-title opacity-0 animate-slide-up delay-200 saul-heading">Skills</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => (
                <div 
                  key={skillGroup.category} 
                  className="glass rounded-lg p-6 border-l-4 shadow-lg opacity-0 animate-slide-up relative overflow-hidden group card-hover"
                  style={{ 
                    animationDelay: `${300 + index * 100}ms`, 
                    borderColor: index % 6 === 0 ? '#E63946' : index % 6 === 1 ? '#FFD700' : index % 6 === 2 ? '#457B9D' : index % 6 === 3 ? '#1D3557' : index % 6 === 4 ? '#C45D3B' : '#F2C14E' 
                  }}
                >
                  <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-gradient-radial from-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="flex items-center mb-4">
                    <div className="mr-3">
                      {skillGroup.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-saul-navy">
                      {skillGroup.category}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span 
                        key={skill} 
                        className="tag"
                        style={{ 
                          borderColor: index % 6 === 0 ? '#E63946' : index % 6 === 1 ? '#FFD700' : index % 6 === 2 ? '#457B9D' : index % 6 === 3 ? '#1D3557' : index % 6 === 4 ? '#C45D3B' : '#F2C14E' 
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
