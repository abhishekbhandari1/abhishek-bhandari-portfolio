import { useEffect, useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar } from 'lucide-react';

interface TimelineItem {
  title: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  color: string;
}

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const timelineData: TimelineItem[] = [
    {
      title: 'Junior DevOps Engineer',
      company: 'Nepa Works',
      period: 'May 2026 – Present',
      location: 'Nepal',
      color: 'hsl(174, 100%, 29%)', // Primary teal
      highlights: [
        'Optimized CI/CD for faster deployments',
        'Managed containerized apps with Docker and Kubernetes',
        'Automated release workflows',
        'Improved reliability and uptime'
      ]
    },
    {
      title: 'DevOps Intern',
      company: 'Nepa Works',
      period: 'Feb 2026 – May 2026',
      location: 'Nepal',
      color: 'hsl(174, 63%, 40%)', // Primary glow
      highlights: [
        'Automated build and deployment checks using GitHub Actions',
        'Provisioned cloud resources with Terraform modules',
        'Supported Linux server patching and environment setup',
        'Documented runbooks for common operational tasks'
      ]
    },
    {
      title: 'Cloud Apprentice',
      company: 'Adex International',
      period: 'Dec 2025 – Feb 2026',
      location: 'Nepal',
      color: 'hsl(174, 63%, 50%)', // Lighter teal
      highlights: [
        'Learned core cloud architecture concepts',
        'Worked with VPC, IAM, EC2, and S3',
        'Supported secure and scalable cloud setups',
        'Prepared basic solution architecture documentation'
      ]
    },
    {
      title: 'Frontend Developer (Freelance)',
      company: 'Freelance Web Development Projects',
      period: '2024 – 2025',
      location: 'Nepal',
      color: 'hsl(174, 50%, 60%)', // Even lighter teal
      highlights: [
        'Built React.js interfaces and collaborated with backend teams',
        'Gained practical understanding of release and deployment lifecycle',
        'Improved performance and accessibility in production features',
        'Transitioned toward DevOps-focused responsibilities'
      ]
    }
  ];

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set(prev).add(index));
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (observer && itemRefs.current[index]) {
          observer.disconnect();
        }
      });
    };
  }, []);

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16 scroll-animate animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Career <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6 md:mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-glow to-primary/20 md:transform md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {timelineData.map((item, index) => {
              const isVisible = visibleItems.has(index);
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  ref={el => itemRefs.current[index] = el}
                  className={`relative flex items-center ${
                    isLeft ? 'md:justify-end' : 'md:justify-start'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div 
                    className={`absolute left-4 sm:left-6 md:left-1/2 w-3.5 h-3.5 md:w-4 md:h-4 rounded-full border-2 md:border-4 border-background md:transform md:-translate-x-1/2 z-10 transition-all duration-500 ${
                      isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
                    }`}
                    style={{ backgroundColor: item.color }}
                  >
                    <div 
                      className="absolute inset-0 rounded-full animate-ping"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>

                  {/* Timeline Content */}
                  <div className={`w-full md:w-5/12 ml-10 sm:ml-14 md:ml-0 ${
                    isLeft ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <Card
                      className={`card-glass card-hover transition-all duration-700 ${
                        isVisible 
                          ? 'opacity-100 translate-x-0 translate-y-0' 
                          : `opacity-0 ${isLeft ? 'md:-translate-x-8' : 'md:translate-x-8'} translate-y-8`
                      }`}
                      style={{ 
                        transitionDelay: `${index * 150}ms`,
                        borderLeft: `4px solid ${item.color}`
                      }}
                    >
                      <CardContent className="p-4 sm:p-5 md:p-6">
                        {/* Header */}
                        <div className="mb-4">
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <div className="flex items-center gap-3">
                              <div 
                                className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-background border-2"
                                style={{ borderColor: item.color }}
                              >
                                <Briefcase className="w-5 h-5 md:w-6 md:h-6" style={{ color: item.color, strokeWidth: 2.5 }} />
                              </div>
                              <div>
                                <h3 className="text-lg md:text-xl font-bold" style={{ color: item.color }}>
                                  {item.title}
                                </h3>
                                <p className="text-sm md:text-base font-semibold text-foreground">
                                  {item.company}
                                </p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                              <span>{item.period}</span>
                            </div>
                            <Badge variant="secondary" className="text-xs">
                              {item.location}
                            </Badge>
                          </div>
                        </div>

                        {/* Highlights */}
                        <div className="space-y-2">
                          {item.highlights.map((highlight, hIndex) => (
                            <div
                              key={hIndex}
                              className={`flex items-start gap-2 text-sm md:text-base text-muted-foreground transition-all duration-500`}
                              style={{ 
                                transitionDelay: `${(index * 150) + (hIndex * 100)}ms`,
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateX(0)' : 'translateX(-10px)'
                              }}
                            >
                              <div 
                                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                style={{ backgroundColor: item.color }}
                              />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Timeline End Marker */}
          <div className="relative flex items-center justify-center mt-12">
            <div className="absolute left-4 sm:left-6 md:left-1/2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-primary to-primary-glow border-2 md:border-4 border-background md:transform md:-translate-x-1/2 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-background" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
