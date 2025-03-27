
import React from 'react';
import { Code, PenTool, Server, Database, Wrench, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      category: 'Languages',
      icon: <Code className="text-saul-orange" size={24} />,
      items: ['JavaScript', 'TypeScript', 'Java', 'Python'],
    },
    {
      category: 'Frontend',
      icon: <PenTool className="text-saul-gold" size={24} />,
      items: ['React.js', 'Next.js', 'Redux', 'TailwindCSS'],
    },
    {
      category: 'Backend',
      icon: <Server className="text-saul-blue" size={24} />,
      items: ['Node.js', 'Express.js', 'RESTful APIs', 'GraphQL'],
    },
    {
      category: 'Databases',
      icon: <Database className="text-saul-purple" size={24} />,
      items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Supabase'],
    },
    {
      category: 'Tools',
      icon: <Wrench className="text-saul-red" size={24} />,
      items: ['Git', 'Docker', 'VS Code', 'Postman', 'Linux'],
    },
    {
      category: 'Concepts',
      icon: <Lightbulb className="text-saul-green" size={24} />,
      items: ['UI/UX Design', 'Performance Optimization', 'CRUD Operations', 'API Integration'],
    },
  ];

  return (
    <section id="about" className="section-container relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-saul-orange/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-saul-purple/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/2">
            <div className="mb-8 relative">
              <h2 className="section-title opacity-0 animate-slide-up saul-heading">About Me</h2>
            </div>
            
            <div className="space-y-6 opacity-0 animate-slide-up delay-100">
              <div className="relative overflow-hidden saul-card">
                <p className="text-lg text-gray-light leading-relaxed">
                  I'm not just another developer. I'm the developer you <span className="text-saul-orange font-semibold">call</span> when you need results. My expertise in full-stack development means I can handle everything from elegant frontends to robust backends.
                </p>
                <div className="absolute -right-10 -bottom-10 w-24 h-24 bg-saul-orange/20 rounded-full blur-2xl"></div>
              </div>
              
              <div className="saul-card">
                <p className="text-lg text-gray-light leading-relaxed">
                  With experience in the MERN stack, Next.js, and UI/UX design, I create applications that don't just work—they <span className="text-saul-orange font-semibold">impress</span>. My solutions are scalable, responsive, and built with the future in mind.
                </p>
              </div>
              
              <div className="saul-card">
                <p className="text-lg text-gray-light leading-relaxed">
                  As a Java Lead at CodeHoppers Club, I've mentored hundreds of students, transforming complex concepts into accessible knowledge. This experience has sharpened both my technical skills and my ability to <span className="text-saul-orange font-semibold">communicate effectively</span>.
                </p>
              </div>
              
              <div className="saul-card">
                <p className="text-lg text-gray-light leading-relaxed">
                  When it comes to problem-solving, I don't just fix issues—I <span className="text-saul-orange font-semibold">prevent</span> them. My passion for open source and exploring AI/ML integration keeps me at the cutting edge of development trends.
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
                  className="bg-gray-dark rounded-lg p-6 border-l-4 border-saul-orange shadow-lg opacity-0 animate-slide-up relative overflow-hidden group card-hover"
                  style={{ animationDelay: `${300 + index * 100}ms`, borderColor: index % 6 === 0 ? '#E63946' : index % 6 === 1 ? '#F2C14E' : index % 6 === 2 ? '#457B9D' : index % 6 === 3 ? '#8B5CF6' : index % 6 === 4 ? '#F97316' : '#10B981' }}
                >
                  <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-gradient-radial from-white/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="flex items-center mb-4">
                    <div className="mr-3">
                      {skillGroup.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {skillGroup.category}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span 
                        key={skill} 
                        className="tag"
                        style={{ borderColor: index % 6 === 0 ? '#E63946' : index % 6 === 1 ? '#F2C14E' : index % 6 === 2 ? '#457B9D' : index % 6 === 3 ? '#8B5CF6' : index % 6 === 4 ? '#F97316' : '#10B981' }}
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
