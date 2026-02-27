import { Cloud, Activity, Users, Workflow } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';


const About = () => {
  const strengths = [
    {
      icon: Workflow,
      title: 'Automation',
      description: 'Eliminating repetitive work with CI/CD pipelines and scripts to make delivery consistent and fast.'
    },
    {
      icon: Cloud,
      title: 'Infrastructure as Code',
      description: 'Provisioning and managing infrastructure through version-controlled code for repeatable environments.'
    },
    {
      icon: Activity,
      title: 'Observability',
      description: 'Implementing monitoring, logging, dashboards, and alerting to detect issues early and reduce downtime.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working across dev and ops to align releases, troubleshoot incidents, and improve processes.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16 scroll-animate animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6 md:mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Text Content */}
          <div className="space-y-6 scroll-animate animate-slide-in-left">
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                 Junior DevOps Engineer
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I’m Abhishek Bhandari, a Junior DevOps Engineer building practical experience in cloud infrastructure, CI/CD, and automation for modern web applications.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I work with Docker, Kubernetes basics, GitHub Actions, and Terraform to create repeatable environments and smoother release workflows. I hold an AWS Solutions Architect certification and enjoy turning manual operations into simple, documented automation.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I’m currently focused on strengthening Linux, networking, monitoring, and incident-response skills while contributing to reliable delivery and continuous improvement across teams.
              </p>
            </div>
          </div>

          {/* Strengths Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {strengths.map((strength, index) => (
              <Card
                key={strength.title}
                className="card-glass card-hover scroll-animate animate-scale-in transition-smooth"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-5 md:p-6 text-center">
                  <div className="mb-3 md:mb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      <strength.icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{strength.title}</h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {strength.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
