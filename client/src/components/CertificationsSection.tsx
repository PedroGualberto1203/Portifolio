import { Cloud, Code, Server, FileCode, Package, GitBranch, Database, Palette } from 'lucide-react';
import type { Certification } from '@/lib/portfolio-data';

interface CertificationsSectionProps {
  certifications: Certification[];
}

const iconMap = {
  Cloud,
  Code,
  Server,
  FileCode,
  Package,
  GitBranch,
  Database,
  Palette
};

export default function CertificationsSection({ certifications }: CertificationsSectionProps) {
  return (
    <section id="certifications" className="portfolio-section">
      <div className="portfolio-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4">Certificações</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Certificações e cursos que comprovam meu conhecimento técnico
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert) => {
            const IconComponent = iconMap[cert.icon as keyof typeof iconMap];
            
            return (
              <div key={cert.id} className="certification-card group">
                <div className="w-16 h-16 rounded-lg btn-gradient flex items-center justify-center text-white text-2xl mb-4">
                  {IconComponent && <IconComponent size={24} />}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-text-primary">{cert.title}</h3>
                <p className="text-text-secondary mb-2">{cert.issuer}</p>
                <p className="text-sm text-text-muted">{cert.date}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
