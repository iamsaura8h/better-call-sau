
import React from 'react';

const About: React.FC = () => {
  const skills = [
    {
      category: 'Languages',
      items: ['JavaScript', 'TypeScript', 'Java', 'Python'],
    },
    {
      category: 'Frontend',
      items: ['React.js', 'Next.js', 'Redux', 'TailwindCSS'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express.js', 'RESTful APIs', 'GraphQL'],
    },
    {
      category: 'Databases',
      items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Supabase'],
    },
    {
      category: 'Tools',
      items: ['Git', 'Docker', 'VS Code', 'Postman', 'Linux'],
    },
    {
      category: 'Concepts',
      items: ['UI/UX Design', 'Performance Optimization', 'CRUD Operations', 'API Integration'],
    },
  ];

  return (
    <section id="about" className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/2">
            <h2 className="section-title opacity-0 animate-slide-up">About Me</h2>
            <div className="space-y-6 opacity-0 animate-slide-up delay-100">
              <p className="text-lg text-charcoal-dark leading-relaxed">
                I'm a full-stack developer with a passion for building elegant, user-centered digital experiences. My approach combines technical expertise with creative problem-solving to deliver applications that are not only functional but also intuitive and engaging.
              </p>
              <p className="text-lg text-charcoal-dark leading-relaxed">
                With experience in the MERN stack, Next.js, and UI/UX design, I specialize in creating scalable applications, developing robust APIs, and optimizing user experiences. I'm constantly exploring new technologies and methodologies to enhance my skill set and stay at the forefront of web development.
              </p>
              <p className="text-lg text-charcoal-dark leading-relaxed">
                As a Java Lead at CodeHoppers Club, I've had the opportunity to mentor students and share my knowledge through workshops and coding sessions. This experience has not only strengthened my technical abilities but also my communication and leadership skills.
              </p>
              <p className="text-lg text-charcoal-dark leading-relaxed">
                I'm particularly passionate about open source contribution and exploring the intersection of AI/ML with web development to create innovative solutions.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="section-title opacity-0 animate-slide-up delay-200">Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => (
                <div 
                  key={skillGroup.category} 
                  className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-white/50 opacity-0 animate-slide-up"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <h3 className="text-xl font-semibold mb-3 text-charcoal-dark">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span 
                        key={skill} 
                        className="tag"
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
