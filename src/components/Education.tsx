import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      degree: "Bachelor in Information Management (BIM)",
      institution: "Nepal Commerce Campus, Tribhuvan University",
      location: "Nepal",
      years: "2022 – 2026",
      description:
        "Bachelor in Information Management graduate with a strong foundation in information systems, business management, and technology. Skilled in data analysis, software development, and strategic decision-making, with a passion for leveraging digital solutions to drive innovation and efficiency.",
    },
    {
      degree: "Higher Secondary Education (+2)",
      institution: "St. Xavier's College, Jawalakhel",
      location: "Nepal",
      years: "2018 – 2020",
      description:
        "Successfully completed higher secondary education in Business Management, developing a strong foundation in accounting, economics, and organizational principles.",
    },
  ];

  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16 scroll-animate animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Education <span className="text-gradient">& Learning</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6 md:mb-8"></div>
        </div>

        <div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {education.map((edu, index) => (
            <Card
              key={edu.degree}
              className="card-glass card-hover scroll-animate animate-scale-in transition-smooth"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3 md:pb-4 p-5 md:p-6">
                <div className="mb-3 md:mb-4">
                  <h4 className="text-lg md:text-xl font-bold text-primary">
                    {edu.degree}
                  </h4>
                </div>

                <div className="space-y-2">
                  <p className="text-base md:text-lg font-medium">{edu.institution}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-sm md:text-base text-muted-foreground gap-1">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 flex-shrink-0" />
                      {edu.years}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2 flex-shrink-0" />
                      {edu.location}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-5 md:p-6 pt-0">
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{edu.description}</p>
              </CardContent>
            </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
