import { NextResponse } from 'next/server';
import { type Locale, getSystemPrompt } from '@/lib/translations';

export async function POST(req: Request) {
  if (!process.env.OPENROUTER_API_KEY) {
    return NextResponse.json({ error: 'API key is missing in environment.' }, { status: 500 });
  }

  try {
    const { action, input, lang } = await req.json();
    const locale: Locale = lang === "tr" ? "tr" : "en";
    const prompt = `Action: ${action}\nInput: ${input}`;
    
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'http://localhost:3000',
        'X-Title': 'AI SLOPS',
      },
      body: JSON.stringify({
        model: process.env.NEXT_PUBLIC_OPENROUTER_MODEL || 'nvidia/nemotron-3-nano-30b-a3b:free',
        messages: [
          {
            role: 'system',
            content: getSystemPrompt(locale),
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
      return NextResponse.json({ error: 'AI broke, sorry, could not process', details: errorText }, { status: 500 });
    }

    const data = await response.json();
    return NextResponse.json({ result: data.choices[0].message.content });
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json({ error: 'Something went wrong, confused, try again' }, { status: 500 });
  }
}
