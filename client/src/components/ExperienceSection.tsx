import { Code, Laptop, GraduationCap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import type { Experience } from '@/lib/portfolio-data';

interface ExperienceSectionProps {
  experience: Experience[];
}

const iconMap = {
  Code,
  Laptop,
  GraduationCap
};

export default function ExperienceSection({ experience }: ExperienceSectionProps) {
  const titleRef = useScrollAnimation();
  const timelineRef = useScrollAnimation();
  
  return (
    <section id="experience" className="portfolio-section">
      <div className="portfolio-container">
        <div ref={titleRef} className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-semibold mb-4">Experiência Profissional</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Minha trajetória profissional e principais conquistas
          </p>
        </div>
        
        <div ref={timelineRef} className="max-w-4xl mx-auto relative fade-in-up">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary-color hidden lg:block"></div>
          
          <div className="space-y-12">
            {experience.map((exp, index) => {
              const IconComponent = iconMap[exp.icon as keyof typeof iconMap];
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={exp.id} 
                  className="relative"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline icon */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 btn-gradient rounded-full flex items-center justify-center text-white z-10 hidden lg:flex hover-scale">
                    {IconComponent && <IconComponent size={20} />}
                  </div>
                  
                  {/* Content */}
                  <div className={`timeline-content hover-lift ${isEven ? 'lg:w-5/12 lg:mr-auto lg:pr-8' : 'lg:w-5/12 lg:ml-auto lg:pl-8'}`}>
                    {/* Mobile icon */}
                    <div className="w-12 h-12 btn-gradient rounded-full flex items-center justify-center text-white mb-4 lg:hidden hover-scale">
                      {IconComponent && <IconComponent size={20} />}
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2 text-text-primary">{exp.title}</h3>
                    <p className="text-primary-color mb-2 font-medium">{exp.company}</p>
                    <p className="text-sm text-text-muted mb-4">{exp.period}</p>
                    <p className="text-text-secondary">{exp.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
