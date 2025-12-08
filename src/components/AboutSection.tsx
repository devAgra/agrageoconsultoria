import { MapPin, Award, Target, Shield } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Award,
      title: "Experiência Técnica",
      description: "Formação em geologia, topografia e geoprocessamento.",
    },
    {
      icon: Target,
      title: "Precisão",
      description: "Rigor técnico em todos os levantamentos e estudos.",
    },
    {
      icon: Shield,
      title: "Conformidade Legal",
      description: "Alinhamento com exigências de órgãos como SEMA/MT.",
    },
    {
      icon: MapPin,
      title: "Atuação Nacional",
      description: "Conhecimento profundo dos biomas brasileiros.",
    },
  ];

  return (
    <section id="sobre" className="section-padding bg-background bg-topo-pattern">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-secondary tracking-widest uppercase mb-4">
            Sobre a AGRAGEO
          </span>
          <h2 className="heading-section text-foreground mb-6">
            Técnica, Território e Responsabilidade
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-body text-muted-foreground">
              A <strong className="text-foreground">AGRAGEO Consultoria</strong> nasceu da necessidade de oferecer 
              soluções técnicas especializadas para o território brasileiro, unindo conhecimento em geologia, 
              topografia e geoprocessamento com tecnologia de ponta.
            </p>
            <p className="text-body text-muted-foreground">
              Nossa atuação abrange <strong className="text-foreground">licenciamentos ambientais</strong>, 
              levantamentos de campo, mapeamento territorial e estudos geológicos, sempre com rigor técnico 
              e total conformidade com as exigências legais de órgãos reguladores.
            </p>
            <p className="text-body text-muted-foreground">
              Com sede em <strong className="text-foreground">Várzea Grande (MT)</strong>, 
              atendemos projetos em áreas urbanas, rurais, remotas e ambientalmente sensíveis dos biomas 
              Cerrado e Pantanal, levando precisão e responsabilidade a cada trabalho realizado em todo o Brasil.
            </p>
            <div className="pt-4">
              <p className="text-lg font-semibold text-primary border-l-4 border-secondary pl-4">
                Mais que tecnologia: gestão territorial com base técnica, documental e legal.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 bg-card shadow-card hover:shadow-elevated transition-all duration-300 border border-border hover:border-secondary/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;