import { Eye, Github, Globe, Smartphone, BarChart3, Monitor, Cloud, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import type { Project } from '@/lib/portfolio-data';

interface ProjectsSectionProps {
  projects: Project[];
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const iconMap = {
  Globe,
  Smartphone,
  BarChart3,
  Monitor,
  Cloud,
  User
};

export default function ProjectsSection({ projects, activeFilter, setActiveFilter }: ProjectsSectionProps) {
  const titleRef = useScrollAnimation();
  const filtersRef = useScrollAnimation();
  const gridRef = useScrollAnimation();
  
  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'desktop', label: 'Desktop' },
  ];

  return (
    <section id="projects" className="portfolio-section">
      <div className="portfolio-container">
        <div ref={titleRef} className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-semibold mb-4">Meus Projetos</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Aqui estão alguns dos projetos que desenvolvi recentemente
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div ref={filtersRef} className="flex justify-center gap-4 mb-12 fade-in-up">
          {filters.map(filter => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? 'default' : 'outline'}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 hover-scale ${
                activeFilter === filter.id 
                  ? 'btn-gradient text-white' 
                  : 'border-border-color text-text-secondary hover:text-primary-color hover:border-primary-color'
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-up">
          {projects.map((project, index) => {
            const IconComponent = iconMap[project.icon as keyof typeof iconMap];
            
            return (
              <div 
                key={project.id} 
                className="project-card group hover-lift hover-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 btn-gradient flex items-center justify-center text-white text-6xl float">
                  {IconComponent && <IconComponent size={64} />}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-text-primary">{project.title}</h3>
                  <p className="text-text-secondary mb-4">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 rounded-full text-sm glass-card text-primary-color hover-scale"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 border-primary-color text-primary-color hover:bg-primary-color hover:text-white hover-scale"
                      onClick={() => window.open(project.demoLink, '_blank')}
                    >
                      <Eye size={16} />
                      Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 border-primary-color text-primary-color hover:bg-primary-color hover:text-white hover-scale"
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      <Github size={16} />
                      GitHub
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
