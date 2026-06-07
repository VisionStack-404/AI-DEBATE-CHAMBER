
async function callOpenRouter(
  model: string,
  system: string,
  prompt: string,
  temperature: number
) {
  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model,
          temperature,
          max_tokens: 400,
          messages: [
            { role: "system", content: system },
            { role: "user", content: prompt },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || "";
  } catch (error) {
    console.error(`OpenRouter Error (${model}):`, error);
    return `Error generating response for model ${model}.`;
  }
}


export const debateCache = new Map<string, { pro: string; con: string; summary: string }>();

export async function runDebate(topic: string) {

  const normalizedTopic = topic.trim().toLowerCase();
  if (debateCache.has(normalizedTopic)) {
    console.log(`[Cache Hit] Returning cached debate for: "${topic}"`);
    return debateCache.get(normalizedTopic)!;
  }

  const PRO_MODEL = "meta-llama/llama-3.3-70b-instruct";
  const CON_MODEL = "anthropic/claude-3-haiku";
  const MOD_MODEL = "google/gemini-2.5-flash";

  const proSystem = `
You are an expert debater who strongly and persuasively SUPPORTS the user's topic. Your goal is to construct a compelling, logically sound, and highly persuasive argument in favor.

Adhere strictly to this exact format:

**Main Position:**
(2 concise lines stating your core thesis)

**3 Key Points:**
1. (Strong supportive argument with rationale)
2. (Logical evidence or real-world impact)
3. (Positive outcome or benefit)

Maintain a confident, analytical, and professional tone. Ensure your total response is strictly under 120 words.
`;

  const conSystem = `
You are an expert debater who strongly and persuasively OPPOSES the user's topic. Your goal is to systematically dismantle the premise, highlighting significant flaws, risks, or superior alternatives.

Adhere strictly to this exact format:

**Main Opposition:**
(2 concise lines stating your core counter-thesis)

**3 Key Risks:**
1. (Primary vulnerability, flaw, or risk)
2. (Logical counter-argument or missing context)
3. (Negative impact or superior alternative)

Maintain a skeptical, analytical, and professional tone. Ensure your total response is strictly under 120 words.
`;

  const moderatorSystem = `
You are an impartial, highly analytical debate moderator. Your role is to fairly synthesize the arguments from both the PRO and CON sides, highlighting the most compelling points of each without bias, and drawing a thoughtful, nuanced conclusion.

Adhere strictly to this exact format:

**PRO's Strongest Point:**
(2 concise lines summarizing the best PRO argument)

**CON's Strongest Point:**
(2 concise lines summarizing the best CON argument)

**Balanced Conclusion:**
(2-3 lines delivering a final, synthesized verdict or nuanced takeaway)

Maintain a neutral, objective, and authoritative tone. Ensure your total response is strictly under 120 words.
`;

  
  const [pro, con] = await Promise.all([
    callOpenRouter(PRO_MODEL, proSystem, topic, 0.5),
    callOpenRouter(CON_MODEL, conSystem, topic, 0.7),
  ]);

  // 🔥 Moderator evaluates both
  const summary = await callOpenRouter(
    MOD_MODEL,
    moderatorSystem,
    `Topic: ${topic}\n\nPRO:\n${pro}\n\nCON:\n${con}\n`,
    0.3
  );

  const finalResult = {
    pro,
    con,
    summary,
  };

  // Save to cache before returning
  console.log(`[Cache Miss] Generating and caching debate for: "${topic}"`);
  debateCache.set(normalizedTopic, finalResult);

  return finalResult;
}
