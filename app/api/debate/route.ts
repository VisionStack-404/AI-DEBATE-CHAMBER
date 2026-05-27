import { runDebate } from "@/lib/debateEngine";

export async function POST(req: Request) {
  const { topic } = await req.json();

  if (!topic) {
    return Response.json({ error: "Topic is required" }, { status: 400 });
  }

  const result = await runDebate(topic);
  return Response.json(result);
}