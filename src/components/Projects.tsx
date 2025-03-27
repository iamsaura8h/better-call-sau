
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  demoUrl: string;
  repoUrl: string;
  achievement?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'NutriSync',
      description: 'AI-driven meal logging, nutrition scanning, and smart meal planning. Tracks weight and visualizes progress with real-time analytics.',
      tech: ['PERN Stack', 'TailwindCSS', 'Supabase', 'Gemini API'],
      demoUrl: 'https://nutrisync-ai.vercel.app/',
      repoUrl: 'https://github.com/iamsaura8h/NutriSync',
      achievement: '90% faster, eliminating guesswork in fitness tracking'
    },
    {
      title: 'Student75',
      description: 'A student productivity tool used by 500+ students to track attendance, plan leaves, and upskill with curated resources.',
      tech: ['React.js', 'TypeScript', 'TailwindCSS'],
      demoUrl: 'https://student75-pro.vercel.app/',
      repoUrl: 'https://github.com/iamsaura8h/Student75Pro',
      achievement: 'Enhanced efficiency by 50%'
    }
  ];

  return (
    <section id="projects" className="section-container">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center opacity-0 animate-slide-up">Featured Projects</h2>
        <p className="section-subtitle text-center mx-auto opacity-0 animate-slide-up delay-100">
          Highlighting some of my recent work and contributions.
        </p>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="rounded-xl overflow-hidden neo-glass card-hover opacity-0 animate-slide-up"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <div className="relative h-52 bg-gradient-to-br from-sage/40 to-sage-dark/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-charcoal-dark px-6 py-3 bg-white/70 backdrop-blur-sm rounded-lg">
                    {project.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tag bg-stone-light/70 text-charcoal-dark text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-charcoal-dark mb-4">
                  {project.description}
                </p>
                
                {project.achievement && (
                  <div className="mb-6 p-3 bg-sage-light/30 rounded-lg">
                    <p className="text-charcoal-dark font-medium">
                      <span className="font-bold">Achievement:</span> {project.achievement}
                    </p>
                  </div>
                )}
                
                <div className="flex justify-between items-center mt-6">
                  <div className="flex space-x-4">
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-charcoal-dark hover:text-sage-dark transition-colors"
                      aria-label={`View ${project.title} demo`}
                    >
                      <ExternalLink size={18} />
                      <span className="ml-2 font-medium">Live Demo</span>
                    </a>
                    <a 
                      href={project.repoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-charcoal-dark hover:text-sage-dark transition-colors"
                      aria-label={`View ${project.title} repository`}
                    >
                      <Github size={18} />
                      <span className="ml-2 font-medium">Repository</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center opacity-0 animate-slide-up delay-400">
          <a 
            href="https://github.com/iamsaura8h" 
            target="_blank" 
            rel="noopener noreferrer"
            className="button-secondary inline-flex items-center"
          >
            <Github size={18} className="mr-2" />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
