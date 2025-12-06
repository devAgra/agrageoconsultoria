import { 
  FileCheck, 
  Map, 
  Layers, 
  Droplets, 
  Camera,
  ArrowRight
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: FileCheck,
      title: "Licenciamento Ambiental e Geológico",
      description: "Elaboração de RCA, RIMA, estudos de viabilidade e acompanhamento junto a órgãos como SEMA/MT.",
      features: ["RCA e RIMA", "Estudos de Viabilidade", "Acompanhamento SEMA/MT"],
    },
    {
      icon: Map,
      title: "Levantamentos Topográficos e Cartográficos",
      description: "Demarcação, cadastro rural, modelagem do terreno e regularização fundiária.",
      features: ["Demarcação de Áreas", "Cadastro Rural", "Regularização Fundiária"],
    },
    {
      icon: Layers,
      title: "Geoprocessamento e Análise Espacial",
      description: "Mapas temáticos, zoneamento, monitoramento de uso do solo e cruzamento de camadas técnicas.",
      features: ["Mapas Temáticos", "Zoneamento", "Monitoramento de Solo"],
    },
    {
      icon: Droplets,
      title: "Assessoria em Projetos Minerais e Hídricos",
      description: "Prospecção, perfuração de poços e estudos para extração sustentável.",
      features: ["Prospecção Mineral", "Perfuração de Poços", "Extração Sustentável"],
    },
    {
      icon: Camera,
      title: "Fotogrametria e Mapeamento Aéreo",
      description: "Uso de drones como ferramenta integrada para apoio técnico em levantamentos.",
      features: ["Drones Profissionais", "Apoio Técnico", "Mapeamento Preciso"],
    },
  ];

  return (
    <section id="servicos" className="section-padding bg-muted">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-secondary tracking-widest uppercase mb-4">
            Nossos Serviços
          </span>
          <h2 className="heading-section text-foreground mb-6">
            Soluções Técnicas Integradas
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Oferecemos um portfólio completo de serviços técnicos para gestão territorial, 
            licenciamento e estudos ambientais no Mato Grosso.
          </p>
          <div className="w-20 h-1 bg-secondary mx-auto mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card p-8 shadow-card hover:shadow-elevated transition-all duration-300 border border-border hover:border-secondary/30 overflow-hidden"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-secondary/5 -translate-y-1/2 translate-x-1/2 rotate-45 group-hover:bg-secondary/10 transition-colors" />
              
              {/* Icon */}
              <div className="relative w-14 h-14 bg-gradient-teal flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-secondary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-secondary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contato"
                className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-teal-light transition-colors group/link"
              >
                Solicitar orçamento
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
