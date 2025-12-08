import { MapPin, Folder } from "lucide-react";

// Placeholder projects - will be replaced with Supabase data
const projects = [
  {
    id: 1,
    category: "ESTUDOS AMBIENTAIS",
    title: "Licenciamento para Sistema de Irrigação",
    location: "Sorriso – MT",
    challenge: "Área com nascentes e APP demandando estudo detalhado.",
    solution: "Elaboração de RCA com mapeamento completo das Áreas de Preservação Permanente.",
  },
  {
    id: 2,
    category: "MAPEAMENTO TOPOGRÁFICO",
    title: "Regularização Fundiária Rural",
    location: "Tangará da Serra – MT",
    challenge: "Propriedade com limites indefinidos e sobreposição cadastral.",
    solution: "Levantamento geodésico e retificação junto ao INCRA.",
  },
  {
    id: 3,
    category: "GESTÃO TERRITORIAL",
    title: "Zoneamento Agrícola Municipal",
    location: "Nova Mutum – MT",
    challenge: "Necessidade de ordenamento do uso do solo para expansão urbana.",
    solution: "Mapeamento multitemporal e proposta de zoneamento.",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-secondary tracking-widest uppercase mb-4">
            Portfólio
          </span>
          <h2 className="heading-section text-foreground mb-6">
            Projetos Realizados
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos no território brasileiro.
          </p>
          <div className="w-20 h-1 bg-secondary mx-auto mt-6" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-card border border-border hover:border-secondary/30 shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden"
            >
              {/* Category Header */}
              <div className="bg-gradient-navy px-6 py-4">
                <div className="flex items-center gap-2 text-secondary text-xs font-bold tracking-widest">
                  <Folder className="w-4 h-4" />
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4 text-secondary" />
                  {project.location}
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                      Desafio
                    </span>
                    <p className="text-sm text-muted-foreground mt-1">
                      {project.challenge}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                      Solução
                    </span>
                    <p className="text-sm text-muted-foreground mt-1">
                      {project.solution}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Note about more projects */}
        <p className="text-center text-muted-foreground mt-12 text-sm">
          Entre em contato para conhecer mais projetos e casos de sucesso.
        </p>
      </div>
    </section>
  );
};

export default PortfolioSection;