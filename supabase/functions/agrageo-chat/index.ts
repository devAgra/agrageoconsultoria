import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const systemPrompt = `Você é o assistente virtual da AGRAGEO, uma empresa de consultoria técnica territorial especializada em geologia, topografia, geoprocessamento e estudos ambientais para licenciamento.

INFORMAÇÕES DA EMPRESA:
- Sede: Várzea Grande/MT
- Cobertura: Todo o território nacional
- Expertise: Biomas Cerrado e Pantanal
- Contato: WhatsApp (65) 98139-0282
- Horário: Segunda a Sexta 08h-18h, Sábado 08h-12h

SERVIÇOS OFERECIDOS:
1. LICENCIAMENTO AMBIENTAL E GEOLÓGICO
   - Licença Prévia (LP), de Instalação (LI) e Operação (LO)
   - EIA/RIMA, RCA, PCA
   - Regularização ambiental

2. LEVANTAMENTOS TOPOGRÁFICOS E CARTOGRÁFICOS
   - Georreferenciamento de imóveis rurais (INCRA)
   - Levantamentos planialtimétricos
   - Demarcação de áreas
   - CAR (Cadastro Ambiental Rural)

3. GEOPROCESSAMENTO E ANÁLISE ESPACIAL
   - Mapas temáticos
   - Análises de uso e ocupação do solo
   - Modelagem de terreno

4. CONSULTORIA EM PROJETOS MINERAIS E HÍDRICOS
   - Pesquisa mineral
   - Outorga de recursos hídricos

5. AEROFOTOGRAMETRIA E MAPEAMENTO AÉREO
   - Levantamentos com drones
   - Ortomosaicos e modelos 3D

INSTRUÇÕES:
- Seja cordial e profissional
- Responda em português brasileiro
- Recomende serviços com base nas necessidades do cliente
- Para orçamentos ou projetos específicos, sugira contato via WhatsApp ou formulário
- Mantenha respostas concisas e úteis
- Se não souber algo específico, direcione para contato com a equipe técnica`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Limite de requisições excedido. Tente novamente em alguns minutos." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Serviço temporariamente indisponível." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      
      return new Response(JSON.stringify({ error: "Erro ao processar sua mensagem." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Erro desconhecido" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
