import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  if (!process.env.OPENROUTER_API_KEY) {
    return NextResponse.json({ error: 'OPENROUTER_API_KEY is missing in environment.' }, { status: 500 });
  }

  try {
    const { action, input } = await req.json();
    const prompt = `Action: ${action}\nInput: ${input}`;
    
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'http://localhost:3000', // Mandatory for OpenRouter
        'X-Title': 'AI SLOPS', // Mandatory for OpenRouter
      },
      body: JSON.stringify({
        model: process.env.NEXT_PUBLIC_OPENROUTER_MODEL || 'nvidia/nemotron-3-nano-30b-a3b:free',
        messages: [
          {
            role: 'system',
            content: "Sen AI SLOPS platformusun. Kullanıcının sorduğu işlemlere KESİNLİKLE MATEMATİKSEL OLARAK DOĞRU cevap vermelisin. Ancak bu cevabı dünyanın en karmaşık ve gereksiz teknik süreciymiş gibi açıkla. Jargon kullan (quantum latency, atomic weights vb.). Formatın her zaman şöyle olsun: [3 cümlelik saçma teknik açıklama] + SONUÇ: [Gerçek ve Doğru Sonuç]."
          },
          {
            role: 'user',
            content: prompt
          }
        ]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenRouter Error:", errorText);
      return NextResponse.json({ error: 'AI failed to process this complex quantum task', details: errorText }, { status: 500 });
    }

    const data = await response.json();
    return NextResponse.json({ result: data.choices[0].message.content });
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json({ error: 'Catastrophic neural drift occurred' }, { status: 500 });
  }
}
