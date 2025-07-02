import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
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
  const titleRef = useScrollAnimation();
  const infoRef = useScrollAnimation();
  const formRef = useScrollAnimation();

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

    // Create WhatsApp message
    const whatsappMessage = `Olá! Meu nome é ${formData.name}.
    
*Assunto:* ${formData.subject}
*Email:* ${formData.email}
*Mensagem:* ${formData.message}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/5562996635404?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Success message
    toast({
      title: "Sucesso",
      description: "Redirecionando para o WhatsApp...",
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
        <div ref={titleRef} className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-semibold mb-4">Vamos Conversar?</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Entre em contato comigo através dos canais abaixo
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div ref={infoRef} className="glass-card p-8 hover-lift fade-in-left">
            <h3 className="text-2xl font-semibold mb-8 text-text-primary">Informações de Contato</h3>
            <div className="space-y-6">
              {contact.map((item, index) => {
                const IconComponent = iconMap[item.icon as keyof typeof iconMap];
                
                return (
                  <div 
                    key={item.id} 
                    className="contact-item hover-glow"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
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
          <div ref={formRef} className="glass-card p-8 hover-lift fade-in-right">
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
                className="w-full btn-gradient text-white py-3 text-lg flex items-center justify-center gap-2 hover-scale"
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
