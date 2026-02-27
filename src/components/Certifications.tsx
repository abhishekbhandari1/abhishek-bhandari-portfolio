import { Award, Calendar, ExternalLink, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Certification = {
  name: string;
  issuer: string;
  issued: string;
  expires: string;
  credentialId: string;
  code: string;
  credentialUrl?: string;
};

const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services (AWS)",
    issued: "Feb 2026",
    expires: "Feb 2029",
    credentialId: "d9989bb880ef4920bd7152275055fc96",
    code: "SAA-CO3",
  },
  {
    name: "AWS Certified Cloud Practitioner (CLF-C02)",
    issuer: "Amazon Web Services (AWS)",
    issued: "Feb 2, 2026",
    expires: "Feb 2, 2029",
    credentialId: "6f51ab49-4729-4328-a494-30b13e1d83d7",
    code: "CLF-C02",
    credentialUrl: "https://www.credly.com/earner/earned/badge/6f51ab49-4729-4328-a494-30b13e1d83d7",
  },
  {
    name: "LFS101: Introduction to Linux",
    issuer: "The Linux Foundation",
    issued: "Feb 19, 2026",
    expires: "Does not expire",
    credentialId: "81572abd-ef72-491d-b6ed-888429668861",
    code: "LFS101",
    credentialUrl: "https://www.credly.com/earner/earned/badge/81572abd-ef72-491d-b6ed-888429668861",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16 scroll-animate animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Professional <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6 md:mb-8"></div>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Verified certifications focused on cloud, architecture, and Linux fundamentals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={cert.name}
              className="card-glass card-hover scroll-animate animate-scale-in transition-smooth h-full flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-5 md:p-6 pb-3 md:pb-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <Badge variant="default" className="inline-flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Verified
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="p-5 md:p-6 pt-0 flex-1 flex flex-col gap-4">
                <div>
                  <h3 className="text-base md:text-lg font-bold leading-snug mb-2">{cert.name}</h3>
                  <p className="text-sm md:text-base text-muted-foreground">{cert.issuer}</p>
                  <Badge variant="secondary" className="mt-3">{cert.code}</Badge>
                </div>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span>Issued: {cert.issued}</span>
                  </div>
                  <div>
                    <span className="font-medium">Expires:</span> {cert.expires}
                  </div>
                  <div className="break-all">
                    <span className="font-medium">Credential ID:</span> {cert.credentialId}
                  </div>
                </div>

                {cert.credentialUrl ? (
                  <Button asChild variant="outline" className="w-full btn-outline mt-auto">
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                      View Credential
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                ) : (
                  <Button variant="outline" className="w-full btn-outline mt-auto" disabled>
                    Credential Link Not Added
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
