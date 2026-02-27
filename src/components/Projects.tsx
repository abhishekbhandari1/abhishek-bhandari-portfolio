import { Award, Cloud, Server, Building2, Globe, Boxes, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Project = {
  title: string;
  client: string;
  description: string;
  achievements: string[];
  tech: string[];
  icon: any;
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "CI/CD Pipeline Starter",
      client: "Personal Project",
      description: "Built reusable CI/CD workflows for a containerized app with automated tests, image builds, and controlled deployment stages.",
      achievements: ["Reduced deployment steps from 10+ manual actions to one pipeline run"],
      tech: ["GitHub Actions", "Docker", "AWS", "CI/CD"],
      icon: Cloud
    },
    {
      title: "Terraform AWS Lab",
      client: "Hands-on Lab",
      description: "Provisioned modular AWS infrastructure with Terraform, including networking, compute, and storage for repeatable environments.",
      achievements: ["Created reusable modules and environment variables for dev/stage parity", "Improved provisioning consistency across environments"],
      tech: ["AWS", "Terraform", "GitHub Actions", "EC2", "S3"],
      icon: Boxes
    },
    {
      title: "Kubernetes Deployment Demo",
      client: "Learning Project",
      description: "Deployed a microservice application on Kubernetes with rolling updates, health checks, and ingress routing.",
      achievements: ["Documented deployment and rollback procedures for team use"],
      tech: ["Kubernetes", "Docker", "Nginx Ingress"],
      icon: Server
    },
    {
      title: "Monitoring Stack Setup",
      client: "Operations Practice",
      description: "Implemented Prometheus and Grafana dashboards for infrastructure and application metrics with alert thresholds.",
      achievements: ["Enabled faster issue detection during deployment validation"],
      tech: ["Prometheus", "Grafana", "Alertmanager", "Linux"],
      icon: Globe
    },
    {
      title: "DevSecOps Baseline",
      client: "Practice Implementation",
      description: "Integrated SAST and dependency checks into pipelines, plus basic secret scanning before deployments.",
      achievements: ["Prevented high-risk dependencies from reaching release branches"],
      tech: ["GitHub Actions", "Trivy", "Gitleaks"],
      icon: Building2
    },
    {
      title: "Linux Ops Automation",
      client: "Internal Utility",
      description: "Wrote Bash/Python scripts for backup rotation, log cleanup, and system health checks.",
      achievements: ["Saved regular manual maintenance time each week"],
      tech: ["Linux", "Bash", "Python", "Cron"],
      icon: Cloud
    },
    {
      title: "Static App Delivery",
      client: "Client Website",
      description: "Configured automated build and deployment for a static frontend with cache-friendly delivery.",
      achievements: ["Cut publish turnaround time for content updates"],
      tech: ["Vite", "CloudFront", "S3", "GitHub Actions"],
      icon: Building2
    },
    {
      title: "Incident Runbook Project",
      client: "Team Practice",
      description: "Prepared incident response runbooks and post-incident templates for common operational failures.",
      achievements: ["Improved consistency of issue triage and handover"],
      tech: ["Runbooks", "On-call", "Postmortem"],
      icon: TrendingUp
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16 scroll-animate animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Project <span className="text-gradient">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6 md:mb-8"></div>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Practical DevOps projects focused on automation, reliability, and cloud-native operations
          </p>
        </div>

        {/* Selected Projects */}
        <div>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 md:mb-8 flex items-center">
            <Award className="w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-3 text-primary flex-shrink-0" />
            Featured Projects
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card
                  key={project.title}
                  className="card-glass card-hover scroll-animate animate-scale-in transition-smooth group relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary-glow/0 group-hover:from-primary/5 group-hover:to-primary-glow/10 transition-all duration-500 pointer-events-none" />
                  
                  <CardContent className="p-5 md:p-6 relative z-10">
                    {/* Icon and Title */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base md:text-lg font-bold mb-1 group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h4>
                        <Badge variant="secondary" className="text-xs">
                          {project.client}
                        </Badge>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="text-xs bg-primary/5 border-primary/20 hover:bg-primary/10 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* Achievements */}
                    {project.achievements.length > 0 && (
                      <div className="pt-4 border-t border-border/50">
                        <div className="space-y-2">
                          {project.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                              <span className="text-xs text-muted-foreground leading-relaxed">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
