import { useEffect, useState } from 'react';
import { User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HomeSectionProps {
  data: {
    projects: any[];
    certifications: any[];
    experience: any[];
    contact: any[];
  };
}

export default function HomeSection({ data }: HomeSectionProps) {
  const [projectsCount, setProjectsCount] = useState(0);
  const [certificationsCount, setCertificationsCount] = useState(0);
  const [experienceYears, setExperienceYears] = useState(0);

  useEffect(() => {
    // Animate counters
    const animateCounter = (setter: (value: number) => void, target: number) => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, 30);
    };

    animateCounter(setProjectsCount, data.projects.length);
    animateCounter(setCertificationsCount, data.certifications.length);
    animateCounter(setExperienceYears, 3);
  }, [data]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="portfolio-section flex items-center" style={{ background: 'linear-gradient(135deg, var(--background-color) 0%, var(--surface-color) 100%)' }}>
      <div className="portfolio-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="hero-text">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Olá, eu sou{' '}
              <span className="gradient-text">Desenvolvedor</span>
            </h1>
            <p className="text-xl mb-8 text-text-secondary">
              Desenvolvedor apaixonado por tecnologia, sempre em busca de novos desafios e oportunidades para crescer profissionalmente.
            </p>
            
            {/* Stats */}
            <div className="flex gap-8 mb-8">
              <div className="hero-stat">
                <span className="stat-number">{projectsCount}</span>
                <span className="stat-label">Projetos</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">{certificationsCount}</span>
                <span className="stat-label">Certificações</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">{experienceYears}</span>
                <span className="stat-label">Anos de Experiência</span>
              </div>
            </div>
            
            {/* Buttons */}
            <div className="flex gap-4">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="btn-gradient text-white px-8 py-3 text-lg"
              >
                Ver Projetos
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 text-lg border-primary-color text-primary-color hover:bg-primary-color hover:text-white"
              >
                Entre em Contato
              </Button>
            </div>
          </div>
          
          {/* Profile Card */}
          <div className="hero-image flex justify-center lg:justify-end">
            <div className="glass-card p-8 text-center max-w-sm w-full hover:scale-105 transition-transform duration-300">
              <div className="w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center text-6xl text-white btn-gradient">
                <User size={48} />
              </div>
              <div className="flex items-center justify-center gap-2 text-success-color">
                <div className="w-2 h-2 rounded-full bg-success-color pulse-indicator"></div>
                <span>Disponível para trabalho</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
