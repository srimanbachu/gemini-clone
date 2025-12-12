import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apikey:"AIzaSyDhV3iZYE9NxrFVQn6PZZ5vSKTmttrd_o8", 
});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

main();
