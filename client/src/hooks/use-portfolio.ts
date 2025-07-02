import { useState, useEffect } from 'react';
import { portfolioData } from '@/lib/portfolio-data';

export function usePortfolio() {
  const [currentSection, setCurrentSection] = useState('home');
  const [activeFilter, setActiveFilter] = useState('all');

  const navigateToSection = (sectionId: string) => {
    setCurrentSection(sectionId);
    
    // Scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredProjects = portfolioData.projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'certifications', 'experience', 'contact'];
      const currentPos = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (currentPos >= offsetTop && currentPos < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    currentSection,
    activeFilter,
    setActiveFilter,
    navigateToSection,
    filteredProjects,
    data: portfolioData
  };
}
