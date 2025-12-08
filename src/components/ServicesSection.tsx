import { 
  Layers, 
  MapPin, 
  Leaf, 
  Mountain,
  ArrowRight
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Mountain,
      title: "Geologia",
      description: "Mapeamento geológico, prospecção mineral e estudos para extração sustentável.",
      features: ["Mapeamento Geológico", "Prospecção Mineral", "Estudos de Extração", "Regularização de Poços", "Laudos de Estabilidade de Taludes"],
    },
    {
      icon: MapPin,
      title: "Topografia",
      description: "Levantamentos topográficos, demarcação de áreas e mapeamento aéreo com drones profissionais.",
      features: ["Levantamentos de Campo", "Demarcação de Áreas", "Mapeamento com Drones"],
    },
    {
      icon: Leaf,
      title: "Meio Ambiente",
      description: "Elaboração de EIA/RIMA, licenças ambientais e estudos de impacto para regularização.",
      features: ["EIA/RIMA", "Licenças Ambientais", "Estudos de Impacto"],
    },
    {
      icon: Layers,
      title: "Geoprocessamento",
      description: "Análise espacial avançada com QGIS e ArcGIS, elaboração de shapefiles e regularização CAR.",
      features: ["QGIS/ArcGIS", "Shapefiles", "CAR – Cadastro Ambiental Rural"],
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
            licenciamento e estudos ambientais. <strong className="text-foreground">Atuamos em todo o Brasil</strong>, 
            com base operacional em Mato Grosso.
          </p>
          <div className="w-20 h-1 bg-secondary mx-auto mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
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