import { useState } from 'react';
import { Home, Code, Award, Briefcase, Mail, Menu, X } from 'lucide-react';

interface NavigationProps {
  currentSection: string;
  navigateToSection: (section: string) => void;
}

export default function Navigation({ currentSection, navigateToSection }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Início', icon: Home },
    { id: 'projects', label: 'Projetos', icon: Code },
    { id: 'certifications', label: 'Certificações', icon: Award },
    { id: 'experience', label: 'Experiência', icon: Briefcase },
    { id: 'contact', label: 'Contato', icon: Mail },
  ];

  const handleNavClick = (sectionId: string) => {
    navigateToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="nav-fixed">
      <div className="portfolio-container">
        <div className="flex justify-between items-center py-4">
          <div className="nav-brand">
            <h2 className="text-xl font-semibold gradient-text">Meu Portfólio</h2>
          </div>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8">
            {navItems.map(({ id, label, icon: Icon }) => (
              <li key={id}>
                <button
                  onClick={() => handleNavClick(id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    currentSection === id 
                      ? 'text-primary-color glass-card' 
                      : 'text-text-secondary hover:text-primary-color hover:glass-card'
                  }`}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-text-primary"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
            <ul className="flex flex-col gap-2">
              {navItems.map(({ id, label, icon: Icon }) => (
                <li key={id}>
                  <button
                    onClick={() => handleNavClick(id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      currentSection === id 
                        ? 'text-primary-color glass-card' 
                        : 'text-text-secondary hover:text-primary-color hover:glass-card'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
