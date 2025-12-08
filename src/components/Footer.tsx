import { Mail, MapPin, Phone, Instagram, Facebook, Twitter, Linkedin, Send } from "lucide-react";
import logoAgrageo from "@/assets/logo-agrageo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
          
          {/* Coluna 1 - Logo Grande */}
          <div className="flex items-center justify-center md:justify-start h-full">
            <img
              src={logoAgrageo}
              alt="AGRAGEO Consultoria"
              className="h-64 w-auto brightness-0 invert"
            />
          </div>

          {/* Coluna 2 - Descrição e Redes Sociais */}
          <div className="space-y-6">
            <p className="text-white/80 text-sm leading-relaxed text-justify">
              Nascemos da necessidade de oferecer <strong>soluções técnicas completas</strong> para gestão territorial, 
              licenciamento ambiental e regularização fundiária em <strong>Mato Grosso</strong> e em <strong>todo o Brasil</strong>.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <a
                href="https://instagram.com/agrageoconsultoria"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/10 hover:bg-teal-600 flex items-center justify-center transition-colors rounded-md"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/agrageoconsultoria"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/10 hover:bg-teal-600 flex items-center justify-center transition-colors rounded-md"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/_Agrageo_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/10 hover:bg-teal-600 flex items-center justify-center transition-colors rounded-md"
                aria-label="Twitter/X"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/agrageoconsultoria"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/10 hover:bg-teal-600 flex items-center justify-center transition-colors rounded-md"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5565981390282"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/10 hover:bg-teal-600 flex items-center justify-center transition-colors rounded-md"
                aria-label="WhatsApp"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="https://t.me/+5565981390282"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/10 hover:bg-teal-600 flex items-center justify-center transition-colors rounded-md"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href="mailto:contato@agrageo.com.br"
                className="w-11 h-11 bg-white/10 hover:bg-teal-600 flex items-center justify-center transition-colors rounded-md"
                aria-label="E-mail"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Coluna 3 - Endereço */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Várzea Grande</h3>
            <div className="space-y-3 text-white/70 text-sm">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-teal-500" />
                <span>
                  Rua Rio Negro, 11 – Jardim Ikaray,<br />
                  Várzea Grande/MT
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-teal-500" />
                <a href="mailto:contato@agrageo.com.br" className="hover:text-teal-400 transition-colors">
                  contato@agrageo.com.br
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-teal-500" />
                <a href="tel:+5565981390282" className="hover:text-teal-400 transition-colors">
                  (65) 98139-0282
                </a>
              </p>
            </div>
          </div>

          {/* Coluna 4 - Horário de Atendimento */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Horário de Atendimento</h3>
            <div className="space-y-2 text-white/70 text-sm">
              <p>Segunda a Sexta: 08h às 18h</p>
              <p>Sábado: 08h às 12h</p>
              <p className="pt-4 text-teal-400 font-medium">
                Atendemos em todo o território nacional
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-sm text-white/50">
            AGRAGEO Consultoria • CNPJ: 47.570.284/0001-15 • © {currentYear} Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;