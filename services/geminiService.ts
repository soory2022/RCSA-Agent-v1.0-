
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const analyzeRiskDocument = async (text: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Perform an RCSA analysis on the following document section: "${text}". 
      Return a structured JSON risk assessment based on a 6x6 matrix.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            description: { type: Type.STRING },
            type: { type: Type.STRING },
            likelihood: { type: Type.NUMBER, description: "1-6 scale" },
            impact: { type: Type.NUMBER, description: "1-6 scale" },
            department: { type: Type.STRING },
            mitigation_strategy: { type: Type.STRING }
          },
          required: ["title", "description", "likelihood", "impact", "type", "department"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    throw error;
  }
};
