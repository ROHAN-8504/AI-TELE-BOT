 const { GoogleGenAI }=require("@google/genai");

const ai = new GoogleGenAI({apiKey:process.env.APIKEY});
async function airesponse(){
    
    const interaction = await ai.interactions.create({
      model: "gemini-3.8-flash",
      input: "Explain how CHEMISTRY works in a few words",
    });
    console.log(interaction.output_text);
}
airesponse();