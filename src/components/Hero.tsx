import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/photo.jpg';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV.pdf';
    link.download = 'Abhishek_Bhandari_CV.pdf';
    link.click();
  };

  return (
    <section id="home" className="pt-20 pb-12 md:py-20 lg:py-24 min-h-[100svh] flex items-center bg-gradient-to-br from-background to-secondary/20 relative overflow-hidden">
      <ParticleBackground />
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-5 md:gap-8 items-center">
          {/* Content */}
          <div className="space-y-6 scroll-animate animate-slide-in-left is-visible order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="text-gradient">Abhishek Bhandari</span>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium">
                Junior DevOps Engineer
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl">
                Junior DevOps Engineer focused on CI/CD, cloud fundamentals, and infrastructure automation. I build reliable deployment workflows, improve observability, and help teams ship software faster with confidence.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                onClick={downloadCV}
                className="btn-hero w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold transition-spring hover:scale-105"
              >
                <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Download CV
              </Button>
              <Button
                variant="outline"
                className="btn-outline w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold transition-spring hover:scale-105"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 sm:space-x-6 pt-2 sm:pt-4">
              <a
                href="https://github.com/abhishekbhandari1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-spring hover:scale-125 transform hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/abhishekbhandari3/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-spring hover:scale-125 transform hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="mailto:workwithabhishek3@gmail.com"
                className="text-muted-foreground hover:text-primary transition-spring hover:scale-125 transform hover:-translate-y-1"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="relative scroll-animate animate-slide-in-right is-visible order-1 lg:order-2 mt-2 md:mt-0">
            <div className="relative mx-auto w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-full blur-3xl animate-float"></div>

              {/* Photo Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-[var(--shadow-glow)]">
                <img
                  src={profilePhoto}
                  alt="Abhishek Bhandari"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 sm:w-16 sm:h-16 bg-primary-glow/10 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
