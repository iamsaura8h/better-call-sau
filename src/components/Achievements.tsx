
import React from 'react';
import { Trophy, Users, Code, Award } from 'lucide-react';
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

const Achievements: React.FC = () => {
  const achievements = [
    {
      category: 'Open Source',
      items: [
        {
          title: 'GirlScript Summer of Code 2024',
          description: 'Contributed 9 PRs across 10+ repositories. Ranked 1951/5000+.',
          link: 'https://boulder-indigo-963.notion.site/List-of-GsSoC-24-PRs-14f3ef1331f680288335d1c5f9c12d41',
          linkText: 'View PRs',
          icon: <Code size={24} className="text-saul-navy" />,
          image: '/images/placeholder-opensource.jpg' // Will be replaced manually later
        },
        {
          title: 'Hacktoberfest 2024',
          description: 'Contributed 7+ PRs on MERN projects, enhancing functionality and performance.',
          link: 'https://gist.github.com/iamsaura8h/e49674935881d8d283b85953c6faf404',
          linkText: 'GitHub Gist',
          icon: <Code size={24} className="text-saul-navy" />,
          image: '/images/placeholder-opensource-2.jpg' // Will be replaced manually later
        }
      ]
    },
    {
      category: 'Leadership',
      items: [
        {
          title: 'Java Lead, CodeHoppers Club',
          description: 'Led workshops and mentored 500+ students through comprehensive DSA sessions.',
          period: '2023-Present',
          icon: <Users size={24} className="text-saul-navy" />,
          image: '/images/placeholder-leadership.jpg' // Will be replaced manually later
        },
        {
          title: 'Event Volunteer, Google DSC',
          description: 'Facilitated 2 Google Study Jams with 320+ attendees, showcasing organizational skills.',
          period: '2023',
          icon: <Users size={24} className="text-saul-navy" />,
          image: '/images/placeholder-leadership-2.jpg' // Will be replaced manually later
        }
      ]
    },
    {
      category: 'Competitions',
      items: [
        {
          title: '1st Place, MARIT Hackathon',
          description: 'Built a full-stack shopping app under tight deadline pressure.',
          period: '2025',
          icon: <Trophy size={24} className="text-saul-navy" />,
          image: '/images/placeholder-competition.jpg' // Will be replaced manually later
        },
        {
          title: '2nd Place, Convergence',
          description: 'College DSA competition showcasing problem-solving skills.',
          period: '2024',
          icon: <Trophy size={24} className="text-saul-navy" />,
          image: '/images/placeholder-competition-2.jpg' // Will be replaced manually later
        },
        {
          title: 'Top 6, Megathon IIIT-H',
          description: 'Developed an AI hiring tool leveraging Twitter data analytics.',
          period: '2023',
          icon: <Trophy size={24} className="text-saul-navy" />,
          image: '/images/placeholder-competition-3.jpg' // Will be replaced manually later
        },
        {
          title: '1st Place, Fusion Fiesta',
          description: 'Won DSA competition with innovative algorithmic solutions.',
          period: '2023',
          icon: <Trophy size={24} className="text-saul-navy" />,
          image: '/images/placeholder-competition-4.jpg' // Will be replaced manually later
        }
      ]
    }
  ];

  return (
    <section id="achievements" className="section-container bg-saul-sand/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center opacity-0 animate-slide-up">Achievements & Leadership</h2>
        <p className="section-subtitle text-center mx-auto opacity-0 animate-slide-up delay-100">
          "When you're in the game, you need a lawyer who plays to win." - Better Call Sau
        </p>
        
        <div className="mt-16 space-y-16">
          {achievements.map((category, catIndex) => (
            <div key={category.category} className="opacity-0 animate-slide-up" style={{ animationDelay: `${200 + catIndex * 100}ms` }}>
              <h3 className="text-2xl font-bold text-saul-navy mb-8 flex items-center">
                <Award size={24} className="mr-2 text-saul-red" />
                {category.category}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card 
                    key={item.title}
                    className="glass rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 overflow-hidden border-none"
                  >
                    <div className="h-48 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-saul-navy/50 z-10"></div>
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      {item.period && (
                        <span className="absolute top-4 right-4 z-20 text-sm font-medium bg-saul-yellow/90 px-2 py-1 rounded-full text-saul-navy">
                          {item.period}
                        </span>
                      )}
                    </div>

                    <CardHeader className="pb-2">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 p-2 bg-saul-sand/60 rounded-full mt-1">
                          {item.icon}
                        </div>
                        <CardTitle className="ml-4 text-xl font-semibold text-saul-navy">{item.title}</CardTitle>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-saul-blue">{item.description}</p>
                    </CardContent>
                    
                    {item.link && (
                      <CardFooter className="pt-0">
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-saul-red hover:text-saul-navy font-medium transition-colors"
                        >
                          {item.linkText} →
                        </a>
                      </CardFooter>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-8 glass rounded-xl shadow-sm opacity-0 animate-slide-up delay-500">
          <h3 className="text-2xl font-bold text-saul-navy mb-4">Education</h3>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h4 className="text-xl font-semibold text-saul-navy">St. Martin's Engineering College</h4>
              <p className="text-saul-blue">B.Tech in Information Technology</p>
            </div>
            <div className="mt-2 md:mt-0 flex items-center space-x-4">
              <span className="text-sm font-medium bg-saul-yellow/30 px-3 py-1 rounded-full text-saul-navy">
                Expected 2025
              </span>
              <span className="text-sm font-medium bg-saul-yellow/30 px-3 py-1 rounded-full text-saul-navy">
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
