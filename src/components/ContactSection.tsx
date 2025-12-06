import { useState } from "react";
import { MapPin, Clock, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - will be replaced with Supabase
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato o mais breve possível.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Endereço",
      value: "Rua Rio Negro, 0 – Jardim Ikaray, Várzea Grande/MT",
    },
    {
      icon: Clock,
      label: "Horário",
      value: "Seg–Sex (08h–18h), Sáb (08h–12h)",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "(65) 99999-9999",
      href: "tel:+5565999999999",
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "contato@agrageo.com.br",
      href: "mailto:contato@agrageo.com.br",
    },
  ];

  return (
    <section id="contato" className="section-padding bg-muted">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-secondary tracking-widest uppercase mb-4">
            Contato
          </span>
          <h2 className="heading-section text-foreground mb-6">
            Fale Conosco
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Descreva seu projeto, dúvida ou necessidade técnica. 
            Entraremos em contato o mais breve possível.
          </p>
          <div className="w-20 h-1 bg-secondary mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-lg font-bold text-foreground mb-6">
              Informações de Contato
            </h3>

            {contactInfo.map((item) => (
              <div key={item.label} className="flex gap-4">
                <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="block text-foreground hover:text-secondary transition-colors mt-1"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-foreground mt-1">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Legal Info */}
            <div className="pt-6 mt-6 border-t border-border">
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">CNPJ:</span> 47.570.284/0001-15
                </p>
                <p>
                  <span className="font-semibold text-foreground">Inscrição Estadual:</span> 139559183
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-card p-8 shadow-card border border-border">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Nome *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome completo"
                    className="bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seu@email.com"
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                  Telefone <span className="text-muted-foreground font-normal">(opcional)</span>
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(65) 99999-9999"
                  className="bg-background"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Mensagem *
                </label>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Descreva seu projeto, dúvida ou necessidade técnica..."
                  className="bg-background resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="teal"
                size="lg"
                className="w-full sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
