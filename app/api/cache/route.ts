import { NextResponse } from "next/server";
import { debateCache } from "@/lib/debateEngine";

export async function GET() {
    try {
        // Return only the keys (topics) so the frontend can list them
        const topics = Array.from(debateCache.keys());
        return NextResponse.json({ topics });
    } catch (error: any) {
        console.error("Cache API Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    try {
        const { topic } = await req.json();

        if (!topic) {
            return NextResponse.json({ error: "Topic is required to delete" }, { status: 400 });
        }

        const normalizedTopic = topic.trim().toLowerCase();

        if (debateCache.has(normalizedTopic)) {
            debateCache.delete(normalizedTopic);
            return NextResponse.json({ success: true, message: `Deleted ${topic}` });
        } else {
            return NextResponse.json({ error: "Topic not found in cache" }, { status: 404 });
        }
    } catch (error: any) {
        console.error("Cache Delete API Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
