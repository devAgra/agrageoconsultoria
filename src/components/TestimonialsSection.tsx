import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "João Carlos Mendes",
      role: "Produtor Rural",
      location: "Sorriso, MT",
      content: "A AGRAGEO realizou todo o processo de regularização ambiental da minha propriedade. Profissionais competentes e muito atenciosos. Recomendo!",
    },
    {
      name: "Maria Fernanda Silva",
      role: "Empresária",
      location: "Cuiabá, MT",
      content: "Excelente trabalho na regularização do poço artesiano da nossa empresa. Processo rápido e sem complicações. Equipe muito profissional.",
    },
    {
      name: "Roberto Almeida",
      role: "Engenheiro Civil",
      location: "Rondonópolis, MT",
      content: "Contratamos a AGRAGEO para levantamento topográfico de um loteamento. Trabalho impecável, com precisão e dentro do prazo acordado.",
    },
  ];

  return (
    <section id="depoimentos" className="section-padding bg-card">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-secondary tracking-widest uppercase mb-4">
            Depoimentos
          </span>
          <h2 className="heading-section text-foreground mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            A satisfação de nossos clientes é o reflexo do nosso compromisso com a qualidade e excelência em cada projeto.
          </p>
          <div className="w-20 h-1 bg-secondary mx-auto mt-6" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-background p-8 shadow-card border border-border hover:border-secondary/30 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-secondary flex items-center justify-center">
                  <Quote className="w-4 h-4 text-secondary-foreground" />
                </div>
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mt-4 mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role} • {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;