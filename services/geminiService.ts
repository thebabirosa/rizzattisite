
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getDecorConsultation = async (prompt: string) => {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  const systemInstruction = `
    Você é o Consultor Virtual da Rizzatti Móveis e Decorações, uma empresa com 30 anos de tradição em Florianópolis.
    Sua especialidade é marcenaria fina (móveis sob medida), curadoria de móveis soltos e decoração de interiores.
    Você é elegante, prestativo e conhece as tendências do mercado de luxo catarinense.
    Sempre mencione que a Rizzatti tem fabricação própria, montagem especializada e entrega no modelo "chave na mão".
    Tente guiar o usuário para solicitar um orçamento ou visitar o showroom no Norte da Ilha (Rod. João Gualberto Soares, 835).
    Seja breve, mas inspirador.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "Desculpe, não consegui processar sua ideia agora. Que tal nos chamar no WhatsApp?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Houve um erro na minha conexão. Por favor, tente novamente em instantes ou fale com nossa equipe humana!";
  }
};
