import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { system, prompt } = await req.json();

        if (!prompt) {
            return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
        }

        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "anthropic/claude-3-haiku", // Fast model for the debate
                temperature: 0.7,
                max_tokens: 500,
                messages: [
                    ...(system ? [{ role: "system", content: system }] : []),
                    { role: "user", content: prompt },
                ],
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("OpenRouter Error:", errorText);
            return NextResponse.json(
                { error: "Failed to generate response" },
                { status: 500 }
            );
        }

        const data = await response.json();
        return NextResponse.json({
            text: data.choices?.[0]?.message?.content || "",
        });
    } catch (error: any) {
        console.error("Chat API Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
