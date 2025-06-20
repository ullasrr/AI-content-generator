import {
  GoogleGenAI,
} from '@google/genai';


export async function POST(req:Request){
    const {prompt} = await req.json();

    if(!prompt){
        return new Response(JSON.stringify({error:'Prompt is required'}),{
            status:400,
        });
    }
    const model = 'gemini-2.5-flash';

    const config = {
    thinkingConfig: {
      thinkingBudget: -1,
    },
    responseMimeType: 'text/plain',
  };



    const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY!,
    })

    const contents=[
        {
            role:'user',
            parts: [{text:prompt}],
        }    
    ];

    const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

    let finalText = '';
  for await (const chunk of response) {
    finalText += chunk.text;
  }

    return new Response(JSON.stringify({ text: finalText }), {
    headers: { 'Content-Type': 'application/json' },
  });
}


