import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, ExternalLink, Github, Play, Pause } from 'lucide-react';
import type { Project } from '@/lib/portfolio-data';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  if (!project) return null;

  const allMedia = [...project.images, ...project.videos.map(video => ({ type: 'video', src: video }))];
  const currentMedia = allMedia[currentMediaIndex];
  const isCurrentVideo = typeof currentMedia === 'object' && currentMedia.type === 'video';

  const handleVideoToggle = () => {
    const video = document.getElementById('project-video') as HTMLVideoElement;
    if (video) {
      if (isVideoPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % allMedia.length);
    setIsVideoPlaying(false);
  };

  const prevMedia = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + allMedia.length) % allMedia.length);
    setIsVideoPlaying(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-surface-color border-border-color">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-text-primary">{project.title}</DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-text-secondary hover:text-text-primary">
              <X size={20} />
            </Button>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Media Section */}
          <div className="space-y-4">
            {allMedia.length > 0 && (
              <div className="relative bg-background-color rounded-lg overflow-hidden">
                {isCurrentVideo ? (
                  <div className="relative">
                    <video
                      id="project-video"
                      className="w-full h-64 object-cover"
                      src={currentMedia.src}
                      controls={false}
                      onClick={handleVideoToggle}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleVideoToggle}
                        className="bg-black/50 hover:bg-black/70 text-white rounded-full w-16 h-16"
                      >
                        {isVideoPlaying ? <Pause size={32} /> : <Play size={32} />}
                      </Button>
                    </div>
                  </div>
                ) : (
                  <img
                    src={currentMedia as string}
                    alt={`${project.title} screenshot ${currentMediaIndex + 1}`}
                    className="w-full h-64 object-cover"
                  />
                )}

                {/* Media Navigation */}
                {allMedia.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    <Button size="sm" onClick={prevMedia} variant="outline" className="bg-black/50 text-white border-white/20">
                      ←
                    </Button>
                    <span className="px-3 py-1 bg-black/50 text-white text-sm rounded">
                      {currentMediaIndex + 1} / {allMedia.length}
                    </span>
                    <Button size="sm" onClick={nextMedia} variant="outline" className="bg-black/50 text-white border-white/20">
                      →
                    </Button>
                  </div>
                )}
              </div>
            )}

            {/* Media Thumbnails */}
            {allMedia.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {allMedia.map((media, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentMediaIndex(index)}
                    className={`flex-shrink-0 w-20 h-16 rounded overflow-hidden border-2 ${
                      index === currentMediaIndex ? 'border-primary-color' : 'border-transparent'
                    }`}
                  >
                    {typeof media === 'object' && media.type === 'video' ? (
                      <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                        <Play size={16} className="text-white" />
                      </div>
                    ) : (
                      <img
                        src={media as string}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            {/* Category Badge */}
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-primary-color/20 text-primary-color">
                {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
              </Badge>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-2 text-text-primary">Descrição</h3>
              <p className="text-text-secondary leading-relaxed">{project.fullDescription}</p>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-text-primary">Tecnologias</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="outline" className="border-primary-color/30 text-text-secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-text-primary">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <Badge key={index} className="bg-accent-color/20 text-accent-color">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              {project.demoLink && project.demoLink !== '#' && (
                <Button asChild className="btn-gradient text-white">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="mr-2" />
                    Ver Demo
                  </a>
                </Button>
              )}
              {project.githubLink && project.githubLink !== '#' && (
                <Button variant="outline" asChild className="border-primary-color text-primary-color hover:bg-primary-color hover:text-white">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Código
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}