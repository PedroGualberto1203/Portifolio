import Navigation from './Navigation';
import HomeSection from './HomeSection';
import ProjectsSection from './ProjectsSection';
import CertificationsSection from './CertificationsSection';
import ExperienceSection from './ExperienceSection';
import ContactSection from './ContactSection';
import { usePortfolio } from '@/hooks/use-portfolio';

export default function Portfolio() {
  const portfolio = usePortfolio();

  return (
    <div className="min-h-screen">
      <Navigation 
        currentSection={portfolio.currentSection}
        navigateToSection={portfolio.navigateToSection}
      />
      
      <main className="pt-20">
        <HomeSection data={portfolio.data} />
        <ProjectsSection 
          projects={portfolio.filteredProjects}
          activeFilter={portfolio.activeFilter}
          setActiveFilter={portfolio.setActiveFilter}
        />
        <CertificationsSection certifications={portfolio.data.certifications} />
        <ExperienceSection experience={portfolio.data.experience} />
        <ContactSection contact={portfolio.data.contact} />
      </main>
      
      <footer className="border-t py-8" style={{ borderColor: 'var(--border-color)', background: 'var(--surface-color)' }}>
        <div className="portfolio-container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-secondary">&copy; 2025 Meu Portfólio. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#home" className="text-text-secondary hover:text-primary-color transition-colors">Início</a>
              <a href="#projects" className="text-text-secondary hover:text-primary-color transition-colors">Projetos</a>
              <a href="#contact" className="text-text-secondary hover:text-primary-color transition-colors">Contato</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
