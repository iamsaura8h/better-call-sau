
import React from 'react';
import { Trophy, Users, Code, Award } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      category: 'Open Source',
      items: [
        {
          title: 'GirlScript Summer of Code 2024',
          description: 'Contributed 9 PRs across 10+ repositories (MERN, Next.js, Streamlit). Ranked 1951/5000+.',
          link: 'https://boulder-indigo-963.notion.site/List-of-GsSoC-24-PRs-14f3ef1331f680288335d1c5f9c12d41',
          linkText: 'View PRs',
          icon: <Code size={24} className="text-sage-dark" />
        },
        {
          title: 'Hacktoberfest 2024',
          description: 'Completed 7+ PRs on MERN projects, improving functionality and performance.',
          link: 'https://gist.github.com/iamsaura8h/e49674935881d8d283b85953c6faf404',
          linkText: 'GitHub Gist',
          icon: <Code size={24} className="text-sage-dark" />
        }
      ]
    },
    {
      category: 'Leadership',
      items: [
        {
          title: 'Java Lead, CodeHoppers Club',
          description: 'Led workshops, mentored 500+ students, conducted quizzes, and hosted 30+ DSA sessions.',
          period: '2023-Present',
          icon: <Users size={24} className="text-sage-dark" />
        },
        {
          title: 'Event Volunteer, Google Developer Students Club',
          description: 'Facilitated 2 Google Study Jams (320+ attendees), showcasing teamwork and organization.',
          period: '2023',
          icon: <Users size={24} className="text-sage-dark" />
        }
      ]
    },
    {
      category: 'Competitions',
      items: [
        {
          title: '1st Place, MARIT Hackathon',
          description: 'Built a Shopping fullstack app within 3 hours.',
          period: '2025',
          icon: <Trophy size={24} className="text-sage-dark" />
        },
        {
          title: '2nd Place, Convergence',
          description: 'College DSA competition organized by CSM department.',
          period: '2024',
          icon: <Trophy size={24} className="text-sage-dark" />
        },
        {
          title: 'Top 6, Megathon IIIT-H',
          description: 'Built an AI hiring tool using Twitter data.',
          period: '2023',
          icon: <Trophy size={24} className="text-sage-dark" />
        },
        {
          title: '1st Place, Fusion Fiesta',
          description: 'Won DSA competition Organized by CSE department.',
          period: '2023',
          icon: <Trophy size={24} className="text-sage-dark" />
        }
      ]
    }
  ];

  return (
    <section id="achievements" className="section-container bg-sage-light/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center opacity-0 animate-slide-up">Achievements & Leadership</h2>
        <p className="section-subtitle text-center mx-auto opacity-0 animate-slide-up delay-100">
          Showcasing my recognition, contributions, and leadership roles.
        </p>
        
        <div className="mt-16 space-y-16">
          {achievements.map((category, catIndex) => (
            <div key={category.category} className="opacity-0 animate-slide-up" style={{ animationDelay: `${200 + catIndex * 100}ms` }}>
              <h3 className="text-2xl font-bold text-charcoal-dark mb-8 flex items-center">
                <Award size={24} className="mr-2 text-sage-dark" />
                {category.category}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={item.title}
                    className="bg-white rounded-xl p-6 shadow-sm border border-white/60 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        {item.icon}
                      </div>
                      <div className="ml-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xl font-semibold text-charcoal-dark">{item.title}</h4>
                          {item.period && (
                            <span className="text-sm font-medium bg-sage-light/50 px-2 py-1 rounded-full text-charcoal-dark">
                              {item.period}
                            </span>
                          )}
                        </div>
                        <p className="mt-2 text-charcoal-light">{item.description}</p>
                        {item.link && (
                          <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mt-4 inline-block text-sage-dark hover:text-charcoal-dark font-medium transition-colors"
                          >
                            {item.linkText} →
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-8 bg-white rounded-xl shadow-sm border border-white/60 opacity-0 animate-slide-up delay-500">
          <h3 className="text-2xl font-bold text-charcoal-dark mb-4">Education</h3>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h4 className="text-xl font-semibold text-charcoal-dark">St. Martin's Engineering College</h4>
              <p className="text-charcoal-light">B.Tech in Information Technology</p>
            </div>
            <div className="mt-2 md:mt-0 flex items-center space-x-4">
              <span className="text-sm font-medium bg-sage-light/50 px-3 py-1 rounded-full text-charcoal-dark">
                Expected 2025
              </span>
              <span className="text-sm font-medium bg-sage-light/50 px-3 py-1 rounded-full text-charcoal-dark">
                CGPA: 7.80
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
