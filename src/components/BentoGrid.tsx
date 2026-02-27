import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  CloudCog, 
  GitBranch, 
  Shield, 
  Rocket, 
  Award,
  TrendingUp 
} from 'lucide-react';

const BentoGrid = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16 scroll-animate animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            How I Add <span className="text-gradient">Value</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6 md:mb-8"></div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 md:auto-rows-fr">
          {/* Large Card - Cloud Foundation */}
          <Card className="md:col-span-2 card-glass card-hover scroll-animate animate-scale-in dark:bg-gradient-to-br dark:from-primary/10 dark:to-primary-glow/10 border-border dark:border-primary/30">
            <CardContent className="p-6 md:p-8 h-full flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-secondary dark:bg-primary/20 flex items-center justify-center">
                  <CloudCog className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <Badge className="bg-secondary dark:bg-primary/20 text-primary border-border dark:border-primary/40">
                  Core Focus
                </Badge>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Cloud & Platform Fundamentals
              </h3>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed flex-grow">
                Hands-on with AWS services, Linux administration, and container-based workflows. 
                I build secure, repeatable environments and keep deployments simple, observable, 
                and easy for teams to operate.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="secondary" className="text-xs">AWS Foundations</Badge>
                <Badge variant="secondary" className="text-xs">Reliable Delivery</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Tall Card - CI/CD */}
          <Card className="lg:row-span-2 card-glass card-hover scroll-animate animate-scale-in dark:bg-gradient-to-br dark:from-primary/5 dark:to-primary-glow/5 border-border dark:border-primary/25" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-6 md:p-8 h-full flex flex-col">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-secondary dark:bg-primary/15 flex items-center justify-center mb-4">
                <GitBranch className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                CI/CD Automation
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">
                Built CI/CD pipelines for practice and real projects using GitHub Actions and GitLab CI. 
                Focused on automated testing, consistent builds, and safe release workflows.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-secondary dark:bg-primary/5 border border-border dark:border-primary/20">
                  <span className="text-sm font-medium">Pipeline Setup</span>
                  <span className="text-primary font-bold">12+ Workflows</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-secondary dark:bg-primary/5 border border-border dark:border-primary/20">
                  <span className="text-sm font-medium">Build Stability</span>
                  <span className="text-primary font-bold">95% Success</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-secondary dark:bg-primary/5 border border-border dark:border-primary/20">
                  <span className="text-sm font-medium">Deployment Model</span>
                  <span className="text-primary font-bold">Automated</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Medium Card - Security */}
          <Card className="card-glass card-hover scroll-animate animate-scale-in dark:bg-gradient-to-br dark:from-primary/8 dark:to-primary-glow/8 border-border dark:border-primary/30" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-5 md:p-8 h-full flex flex-col">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-secondary dark:bg-primary/20 flex items-center justify-center mb-2 md:mb-3">
                <Shield className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">
                DevSecOps
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Security-first mindset with secrets handling, dependency scanning, and 
                least-privilege access in CI and cloud environments.
              </p>
            </CardContent>
          </Card>

          {/* Medium Card - Performance */}
          <Card className="card-glass card-hover scroll-animate animate-scale-in dark:bg-gradient-to-br dark:from-primary/6 dark:to-primary-glow/6 border-border dark:border-primary/30" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-5 md:p-8 h-full flex flex-col">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-secondary dark:bg-primary/20 flex items-center justify-center mb-2 md:mb-3">
                <Rocket className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">
                Monitoring & Reliability
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Created dashboards and alerts with Prometheus and Grafana to improve 
                visibility and support faster troubleshooting.
              </p>
            </CardContent>
          </Card>

          {/* Wide Card - Achievements */}
          <Card className="md:col-span-2 card-glass card-hover scroll-animate animate-scale-in dark:bg-gradient-to-br dark:from-primary/7 dark:to-primary-glow/7 border-border dark:border-primary/30" style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-secondary dark:bg-primary/20 flex items-center justify-center">
                  <Award className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold">
                  Junior-Level Impact
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3 rounded-lg bg-secondary dark:bg-primary/10 border border-border dark:border-primary/20">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">12+</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Projects/Labs</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-secondary dark:bg-primary/10 border border-border dark:border-primary/20">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">95%</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Pipeline Success</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-secondary dark:bg-primary/10 border border-border dark:border-primary/20">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">60%</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Manual Work Reduced</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-secondary dark:bg-primary/10 border border-border dark:border-primary/20">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">1+</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Years Learning</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tall Card - Leadership */}
          <Card className="card-glass card-hover scroll-animate animate-scale-in dark:bg-gradient-to-br dark:from-primary/5 dark:to-primary-glow/5 border-border dark:border-primary/25" style={{ animationDelay: '0.5s' }}>
            <CardContent className="p-6 md:p-8 h-full flex flex-col">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-secondary dark:bg-primary/20 flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                Growth Mindset
              </h3>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                Consistently learning through hands-on labs, documentation, and collaboration with
                senior engineers to improve delivery quality and operational confidence.
              </p>
              <Badge variant="secondary" className="mt-4 self-start">
                Junior DevOps Engineer
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
