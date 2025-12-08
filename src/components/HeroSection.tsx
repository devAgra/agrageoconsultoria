import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCerrado from "@/assets/hero-cerrado.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroCerrado}
          alt="Paisagem do Cerrado mato-grossense"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero-overlay" />
        {/* Geometric grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center text-primary-foreground pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-foreground/10 backdrop-blur-sm border border-secondary-foreground/20 mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="w-2 h-2 bg-secondary rounded-full" />
            <span className="text-sm font-medium">Geologia • Topografia • Meio Ambiente</span>
          </div>

          {/* Headline */}
          <h1 
            className="heading-display mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Soluções Técnicas para o Território
            <span className="block mt-2 text-gradient-nature">do Campo ao Licenciamento</span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-4 leading-relaxed opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            Geologia, topografia, geoprocessamento e estudos ambientais com precisão, 
            tecnologia e conhecimento do bioma mato-grossense.
          </p>
          <p 
            className="text-lg md:text-xl font-bold text-primary-foreground max-w-3xl mx-auto mb-10 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            Atendemos em todo o território nacional.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.7s" }}
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#contato">Fale conosco sobre seu projeto</a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#servicos">Conheça nossos serviços</a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          <a 
            href="#sobre" 
            className="flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          >
            <span className="text-xs tracking-widest uppercase">Saiba Mais</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;