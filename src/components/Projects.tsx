
import React, { useState } from 'react';
import { Github, ExternalLink, Maximize, X } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  demoUrl: string;
  repoUrl: string;
  achievement?: string;
  image: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'NutriSync',
      description: 'AI-driven meal logging, nutrition scanning, and smart meal planning. Tracks weight and visualizes progress with real-time analytics.',
      tech: ['PERN Stack', 'TailwindCSS', 'Supabase', 'Gemini API'],
      demoUrl: 'https://nutrisync-ai.vercel.app/',
      repoUrl: 'https://github.com/iamsaura8h/NutriSync',
      achievement: '90% faster, eliminating guesswork in fitness tracking',
      image: 'images/nutrisync.png'
    },
    {
      title: 'Student75',
      description: 'A student productivity tool used by 500+ students to track attendance, plan leaves, and upskill with curated resources.',
      tech: ['React.js', 'TypeScript', 'TailwindCSS'],
      demoUrl: 'https://student75-pro.vercel.app/',
      repoUrl: 'https://github.com/iamsaura8h/Student75Pro',
      achievement: 'Enhanced productivity by 50%',
      image:"/images/student75.png"
    }
  ];

  const openProject = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="section-container relative">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-saul-blue/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-saul-red/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title opacity-0 animate-slide-up inline-block relative saul-heading">Featured Projects</h2>
          <p className="section-subtitle text-center mx-auto opacity-0 animate-slide-up delay-100">
            These aren't just projects. They're <span className="text-saul-orange font-semibold">solutions</span> that made an impact.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="rounded-lg overflow-hidden bg-gray-dark border border-white/5 shadow-lg opacity-0 animate-slide-up relative group cursor-pointer"
              style={{ animationDelay: `${200 + index * 100}ms` }}
              onClick={() => openProject(project)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-dark via-transaparent to-transparent"></div>
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-3xl font-display font-bold text-white">
                    {project.title}
                  </h3>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-2 bg-gray-dark/80 backdrop-blur-sm rounded-full">
                    <Maximize size={20} className="text-saul-orange" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tag bg-gray-dark/80 text-gray-light text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-light mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {project.achievement && (
                  <div className="mb-6 p-3 bg-saul-orange/10 rounded-lg border-l-2 border-saul-orange">
                    <p className="text-gray-light font-medium">
                      <span className="text-saul-orange font-bold">Achievement:</span> {project.achievement}
                    </p>
                  </div>
                )}
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-saul-purple via-saul-blue to-saul-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center opacity-0 animate-slide-up delay-400">
          <a 
            href="https://github.com/iamsaura8h?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="button-secondary inline-flex items-center"
          >
            <Github size={18} className="mr-2" />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
      
      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={closeProject}
        >
          <div 
            className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-gray-dark border border-white/10 rounded-lg shadow-2xl animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-72 sm:h-96">
              <img 
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-dark via-transparent to-transparent"></div>
              <button 
                className="absolute top-4 right-4 p-2 bg-gray-dark/80 backdrop-blur-sm rounded-full text-white hover:text-saul-orange transition-colors"
                onClick={closeProject}
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-8">
              <h3 className="text-4xl font-display font-bold text-white mb-4 saul-heading">
                {selectedProject.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 my-6">
                {selectedProject.tech.map((tech) => (
                  <span key={tech} className="tag bg-gray-dark/80 text-white">
                    {tech}
                  </span>
                ))}
              </div>
              
              <p className="text-lg text-gray-light mb-6">
                {selectedProject.description}
              </p>
              
              {selectedProject.achievement && (
                <div className="mb-8 p-4 bg-saul-orange/10 rounded-lg border-l-4 border-saul-orange">
                  <p className="text-lg text-gray-light">
                    <span className="text-saul-orange font-bold">Achievement:</span> {selectedProject.achievement}
                  </p>
                </div>
              )}
              
              <div className="flex flex-wrap gap-4 mt-8">
                <a 
                  href={selectedProject.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="button-primary inline-flex items-center"
                >
                  <ExternalLink size={18} className="mr-2" />
                  <span>Live Demo</span>
                </a>
                <a 
                  href={selectedProject.repoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="button-secondary inline-flex items-center"
                >
                  <Github size={18} className="mr-2" />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
