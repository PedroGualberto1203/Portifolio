import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import type { ContactItem } from '@/lib/portfolio-data';

interface ContactSectionProps {
  contact: ContactItem[];
}

const iconMap = {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  MessageCircle
};

export default function ContactSection({ contact }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Erro",
        description: "Por favor, insira um email válido.",
        variant: "destructive"
      });
      return;
    }

    // Success message
    toast({
      title: "Sucesso",
      description: "Mensagem enviada com sucesso! Entrarei em contato em breve.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="portfolio-section">
      <div className="portfolio-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4">Vamos Conversar?</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Entre em contato comigo através dos canais abaixo
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-semibold mb-8 text-text-primary">Informações de Contato</h3>
            <div className="space-y-6">
              {contact.map((item) => {
                const IconComponent = iconMap[item.icon as keyof typeof iconMap];
                
                return (
                  <div key={item.id} className="contact-item">
                    <div className="contact-icon">
                      {IconComponent && <IconComponent size={20} />}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-text-muted mb-1">{item.label}</div>
                      <div className="text-text-primary font-medium">
                        {item.link ? (
                          <a 
                            href={item.link} 
                            target={item.type === 'email' || item.type === 'phone' ? '_self' : '_blank'}
                            rel={item.type === 'email' || item.type === 'phone' ? '' : 'noopener noreferrer'}
                            className="hover:text-primary-color transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          item.value
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-semibold mb-8 text-text-primary">Envie uma Mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                  Nome *
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  className="w-full glass-card border-border-color text-text-primary placeholder:text-text-muted focus:border-primary-color"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full glass-card border-border-color text-text-primary placeholder:text-text-muted focus:border-primary-color"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
                  Assunto *
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Assunto da mensagem"
                  className="w-full glass-card border-border-color text-text-primary placeholder:text-text-muted focus:border-primary-color"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                  Mensagem *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Escreva sua mensagem aqui..."
                  rows={5}
                  className="w-full glass-card border-border-color text-text-primary placeholder:text-text-muted focus:border-primary-color resize-none"
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full btn-gradient text-white py-3 text-lg flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
