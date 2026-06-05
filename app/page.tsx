"use client";

import { useState, useRef, useEffect } from "react";
import DebateCard from "./DebateCard";
import ChatBox from "./components/ChatBox";

export default function Home() {
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [recentTopics, setRecentTopics] = useState<string[]>([]);
  const resultsRef = useRef<HTMLDivElement>(null);

 
  const loadRecentTopics = async () => {
    try {
      const res = await fetch("/api/cache");
      const data = await res.json();
      if (data.topics) {
        setRecentTopics(data.topics);
      }
    } catch (e) {
      console.error("Failed to fetch topics:", e);
    }
  };

  const deleteRecentTopic = async (topicToRemove: string) => {
    try {
 
      if (topic === topicToRemove && result) {
        setResult(null);
        setTopic("");
      }

      await fetch("/api/cache", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: topicToRemove }),
      });

   
      loadRecentTopics();
    } catch (e) {
      console.error("Failed to delete topic:", e);
    }
  };

  useEffect(() => {
    loadRecentTopics();
  }, []);

  const generateDebate = async (e?: React.FormEvent, specificTopic?: string) => {
    if (e) e.preventDefault();
    const query = specificTopic || topic;
    if (!query.trim()) return;

    setTopic(query); // update input
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/debate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: query }),
      });

      const data = await res.json();
      setResult(data);
      // Reload topics to show the newly cached one
      loadRecentTopics();
    } catch (error) {
      console.error("Error generating debate:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (result && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [result]);

  return (
    <main className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* Left Column: Main Debate Area */}
        <div className="lg:col-span-8 flex flex-col items-center w-full space-y-8">

          {/* Header Section */}
          <div className="w-full flex flex-col items-center justify-center space-y-4 animate-fade-in-up">
            <div className="inline-flex items-center justify-center p-3 sm:p-4 rounded-full bg-white/5 border border-white/10 mb-2 animate-glow">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-center tracking-tight text-balance">
              The <span className="text-gradient">AI Debate</span> Chamber
            </h1>
            <p className="text-slate-400 text-lg max-w-xl text-center">
              Enter a topic and watch artificial intelligence construct compelling arguments from both sides before reaching a balanced conclusion.
            </p>
          </div>

          {/* Input Section */}
          <div className="w-full w-full max-w-3xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <form onSubmit={generateDebate} className="glass-panel p-2 flex flex-col sm:flex-row gap-2">
              <input
                className="glass-input flex-1 px-6 py-4 rounded-xl text-lg placeholder:text-slate-500"
                placeholder="e.g., Should humanity colonize Mars?"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !topic.trim()}
                className="glass-button px-8 py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-2 sm:w-auto w-full group"
              >
                {loading ? (
                  <>
                    <div className="loader-spinner"></div>
                    <span>Analyzing</span>
                  </>
                ) : (
                  <>
                    <span>Generate</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="w-full flex flex-col items-center justify-center animate-fade-in-up space-y-6 py-12">
              <div className="flex gap-2 mb-4">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
              </div>
              <p className="text-purple-400 font-medium text-lg tracking-wide uppercase">AI is structuring arguments...</p>
            </div>
          )}

          {/* Results Section */}
          {result && !loading && (
            <div ref={resultsRef} className="w-full animate-fade-in-up flex flex-col gap-6" style={{ animationDelay: "0.2s" }}>
              <DebateCard side="pro" content={result.pro} />
              <DebateCard side="con" content={result.con} />
              <DebateCard side="conclusion" content={result.summary} />
            </div>
          )}

        </div>

        {/* Right Column: Sidebar (Recent & Chat) */}
        <div className="lg:col-span-4 w-full flex flex-col gap-6 sticky top-8">

          {/* Recent / Suggested Topics */}
          {(!result || !loading) && (
            <div className="glass-panel p-6 w-full animate-fade-in-up border-slate-700/50">
              <h3 className="text-lg font-bold text-slate-200 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {recentTopics.length > 0 ? "Recent Debates" : "Suggested Topics"}
              </h3>

              <div className="flex flex-col gap-2">
                {recentTopics.length > 0 ? (
                  recentTopics.map((item) => (
                    <div key={item} className="flex items-center gap-2 group">
                      <button
                        onClick={() => generateDebate(undefined, item)}
                        className="flex-1 text-left px-4 py-3 rounded-xl text-sm font-medium bg-white/5 border border-white/5 hover:bg-white/10 hover:border-indigo-500/30 transition-all text-slate-300 hover:text-white truncate"
                        title={item}
                      >
                        {item}
                      </button>
                      <button
                        onClick={() => deleteRecentTopic(item)}
                        className="p-3 rounded-xl bg-white/5 border border-white/5 text-slate-400 hover:bg-red-500/20 hover:text-red-400 hover:border-red-500/30 transition-all opacity-0 group-hover:opacity-100"
                        title={`Delete ${item}`}
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))
                ) : (
                  ["Are remote workers more productive?", "Should AI replace programmers?", "Is space exploration worth the cost?"].map((item) => (
                    <button
                      key={item}
                      onClick={() => generateDebate(undefined, item)}
                      className="text-left px-4 py-3 rounded-xl text-sm font-medium bg-white/5 border border-white/5 hover:bg-white/10 hover:border-indigo-500/30 transition-all text-slate-300 hover:text-white truncate"
                      title={item}
                    >
                      {item}
                    </button>
                  ))
                )}
              </div>
            </div>
          )}

          {/* Interactive Chatbot */}
          {result && !loading && (
            <ChatBox debateContext={`PRO Argument:\n${result.pro}\n\nCON Argument:\n${result.con}\n\nCONCLUSION:\n${result.summary}`} />
          )}

        </div>
      </div>
    </main>
  );
}
