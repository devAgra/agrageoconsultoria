import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O que é licenciamento ambiental e quando é necessário?",
    answer:
      "O licenciamento ambiental é um procedimento administrativo pelo qual o órgão ambiental autoriza a instalação, ampliação e operação de empreendimentos que utilizam recursos naturais ou que possam causar degradação ambiental. É obrigatório para atividades como mineração, agropecuária de grande porte, loteamentos e indústrias, entre outras.",
  },
  {
    question: "Quais são as etapas do licenciamento ambiental?",
    answer:
      "O licenciamento ambiental é dividido em três etapas principais: Licença Prévia (LP), que avalia a viabilidade ambiental do projeto; Licença de Instalação (LI), que autoriza o início das obras; e Licença de Operação (LO), que permite o funcionamento do empreendimento. Cada etapa requer documentação específica e análise técnica.",
  },
  {
    question: "Qual o prazo médio para obter uma licença ambiental?",
    answer:
      "Os prazos variam conforme a complexidade do projeto e o órgão licenciador. Em média, uma Licença Prévia pode levar de 6 a 12 meses; a Licença de Instalação, de 4 a 8 meses; e a Licença de Operação, de 2 a 6 meses. A AGRAGEO trabalha para otimizar esses prazos com documentação técnica completa e acompanhamento constante.",
  },
  {
    question: "Quais documentos são necessários para iniciar um processo de licenciamento?",
    answer:
      "Os documentos básicos incluem: requerimento junto ao órgão ambiental, certidão de uso do solo, documentos do imóvel (matrícula, CAR), estudos ambientais (EIA/RIMA, RCA, PCA, conforme o caso), ART dos responsáveis técnicos, comprovante de pagamento de taxas e documentação do empreendedor. A AGRAGEO auxilia na identificação e elaboração de toda a documentação necessária.",
  },
  {
    question: "O que é CAR e por que é importante?",
    answer:
      "O Cadastro Ambiental Rural (CAR) é um registro eletrônico obrigatório para todos os imóveis rurais brasileiros. Ele integra as informações ambientais das propriedades, como Áreas de Preservação Permanente, Reserva Legal e remanescentes de vegetação nativa. É pré-requisito para regularização ambiental e acesso a crédito rural.",
  },
  {
    question: "A AGRAGEO atende em quais regiões do Brasil?",
    answer:
      "A AGRAGEO possui sede em Várzea Grande/MT e atende projetos em todo o território nacional. Temos expertise especial nos biomas Cerrado e Pantanal, mas nossa equipe está preparada para atuar em qualquer região do país, com conhecimento das legislações estaduais específicas.",
  },
  {
    question: "Quais serviços de topografia a AGRAGEO oferece?",
    answer:
      "Oferecemos levantamentos topográficos planialtimétricos, georreferenciamento de imóveis rurais conforme normas do INCRA, demarcação de áreas, locação de obras, levantamentos cadastrais, curvas de nível, perfis longitudinais e seções transversais. Utilizamos equipamentos de alta precisão, como estações totais, receptores GNSS RTK e drones para aerofotogrametria.",
  },
  {
    question: "Como funciona o serviço de geoprocessamento?",
    answer:
      "O geoprocessamento envolve a coleta, o processamento e a análise de dados geográficos para tomada de decisão. Elaboramos mapas temáticos, análises espaciais, modelagem de terreno, estudos de uso e ocupação do solo e integramos dados de diferentes fontes. Essas informações são fundamentais para estudos ambientais, planejamento territorial e gestão de propriedades.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-muted/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-sm mb-6">
            <HelpCircle className="w-4 h-4 text-teal-600" />
            <span className="text-sm font-medium text-teal-700">
              Dúvidas Frequentes
            </span>
          </div>
          <h2 className="heading-section mb-4">
            Perguntas{" "}
            <span className="text-gradient-nature">Frequentes</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Tire suas dúvidas sobre licenciamento ambiental, documentação
            técnica e nossos serviços. Não encontrou o que procura? Entre em
            contato conosco.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border/50 rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-medium text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-muted-foreground mb-4">
            Ainda tem dúvidas sobre seu projeto?
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white font-medium rounded-sm hover:bg-teal-700 transition-colors"
          >
            Fale com nossa equipe
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;