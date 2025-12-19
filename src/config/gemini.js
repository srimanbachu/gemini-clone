// src/config/gemini.js
import { GoogleGenerativeAI } from "@google/generative-ai";

// FIX: Only the actual key should be inside the quotes
const genAI = new GoogleGenerativeAI("AIzaSyD5UbSO01ZYZst8BH3entaJyHbkrqrCcGI");
  
async function runChat(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // This line prints the response to the console
    console.log(text);
    
    return text;
  } catch (err) {
    // This will now catch actual errors like network issues
    console.error("Gemini error:", err);
    return null;
  }
}

export default runChat;