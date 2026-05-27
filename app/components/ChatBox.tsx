"use client";

import { useState, useRef, useEffect } from "react";

export default function ChatBox({ debateContext }: { debateContext: string }) {
    const [messages, setMessages] = useState<{ role: "user" | "ai"; text: string }[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const endOfMessagesRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to latest message
    useEffect(() => {
        endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || loading) return;

        const userMessage = input.trim();
        setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
        setInput("");
        setLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    system: `You are an intelligent debate assistant. Below is the current debate the user just generated. Answer their questions or debate them further based on this context:\n\n${debateContext}`,
                    prompt: userMessage,
                }),
            });

            const data = await response.json();

            if (data.text) {
                setMessages((prev) => [...prev, { role: "ai", text: data.text }]);
            } else {
                setMessages((prev) => [...prev, { role: "ai", text: "Sorry, I couldn't respond right now." }]);
            }
        } catch (error) {
            console.error("Chat error:", error);
            setMessages((prev) => [...prev, { role: "ai", text: "An error occurred." }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full h-[calc(100vh-16rem)] min-h-[500px] animate-fade-in-up">
            <div className="glass-panel border-cyan-500/30 overflow-hidden flex flex-col h-full">

                {/* Chat Header */}
                <div className="p-4 bg-cyan-500/10 border-b border-cyan-500/20 flex items-center gap-3">
                    <div className="p-2 bg-cyan-500/20 text-cyan-400 rounded-full">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gradient-accent from-cyan-400 to-blue-400">Discuss this Debate</h3>
                </div>

                {/* Message Area */}
                <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
                    {messages.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-slate-400 opacity-70">
                            <svg className="w-12 h-12 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <p>Ask a question or share your own thoughts on the debate!</p>
                        </div>
                    ) : (
                        messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                                <div
                                    className={`max-w-[85%] sm:max-w-[75%] p-4 rounded-2xl ${msg.role === "user"
                                        ? "bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-tr-none shadow-lg shadow-purple-500/20"
                                        : "bg-slate-800/80 border border-slate-700 text-slate-200 rounded-tl-none"
                                        }`}
                                >
                                    <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                                </div>
                            </div>
                        ))
                    )}

                    {loading && (
                        <div className="flex justify-start">
                            <div className="bg-slate-800/80 border border-slate-700 p-4 rounded-2xl rounded-tl-none flex items-center gap-2">
                                <div className="typing-dot"></div>
                                <div className="typing-dot"></div>
                                <div className="typing-dot"></div>
                            </div>
                        </div>
                    )}
                    <div ref={endOfMessagesRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 bg-slate-900/50 border-t border-slate-800">
                    <form onSubmit={sendMessage} className="flex gap-2">
                        <input
                            type="text"
                            className="glass-input flex-1 px-4 py-3 rounded-xl text-slate-200 placeholder:text-slate-500"
                            placeholder="Type your message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            disabled={loading}
                        />
                        <button
                            type="submit"
                            disabled={loading || !input.trim()}
                            className="px-6 py-3 rounded-xl font-bold text-white bg-cyan-600 hover:bg-cyan-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
}
