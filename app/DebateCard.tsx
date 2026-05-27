export default function DebateCard({
    side,
    content,
}: {
    side: "pro" | "con" | "conclusion";
    content: string;
}) {
    const isPro = side === "pro";
    const isCon = side === "con";

    let bgClass = "bg-purple-500/10 border-purple-500/30";
    let glowClass = "bg-purple-500/20";
    let iconClass = "text-purple-400 bg-purple-500/20";
    let titleClass = "from-purple-400 to-indigo-300";
    let title = "Balanced Conclusion";
    let icon = (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
    );

    if (isPro) {
        bgClass = "bg-green-500/10 border-green-500/20";
        glowClass = "bg-green-500/10";
        iconClass = "text-green-400 bg-green-500/20";
        titleClass = "from-green-400 to-emerald-300";
        title = "The Pro Argument";
        icon = (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
        );
    } else if (isCon) {
        bgClass = "bg-pink-500/10 border-pink-500/20";
        glowClass = "bg-pink-500/10";
        iconClass = "text-pink-400 bg-pink-500/20";
        titleClass = "from-pink-400 to-rose-300";
        title = "The Con Argument";
        icon = (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        );
    }

    // Common glass panel classes + specific side classes
    const panelClasses = `glass-panel backdrop-blur-xl border flex flex-col relative overflow-hidden group transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-${isPro ? 'green' : isCon ? 'pink' : 'purple'}-500/20 animate-float ${bgClass}`;

    return (
        <div className={side === "conclusion" ? `${panelClasses} lg:col-span-2 mt-4 sm:p-10 p-6` : `${panelClasses} sm:p-8 p-6 lg:mt-${isCon ? "12" : "0"}`}>
            {/* Decorative Glow */}
            <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl rounded-full -mr-10 -mt-10 transition-transform duration-700 group-hover:scale-150 ${glowClass}`}></div>

            {/* Header */}
            <div className={`flex items-center gap-3 mb-6 ${side === "conclusion" ? "flex-col justify-center text-center mb-8" : ""}`}>
                <div className={`p-2 sm:p-3 rounded-lg shrink-0 ${side === "conclusion" ? "rounded-full p-3 mb-4 animate-glow" : ""} ${iconClass}`}>
                    {icon}
                </div>
                <h2 className={`font-bold bg-clip-text text-transparent bg-gradient-to-r ${titleClass} ${side === "conclusion" ? "text-3xl" : "text-2xl"}`}>
                    {title}
                </h2>
            </div>

            {/* Content */}
            <div className={`prose prose-invert prose-p:leading-relaxed max-w-none text-slate-300 ${side === "conclusion" ? "prose-lg max-w-4xl mx-auto text-center text-slate-200" : ""}`}>
                {/* We use React Markdown or simple splitting here; the engine provides **Bold** headers now, let's parse basic markdown bolding if we want, or just rely on CSS whitespace-pre-line */}
                <p className="whitespace-pre-line">
                    {content.split("**").map((part, i) =>
                        i % 2 === 1 ? <strong key={i} className="text-white font-semibold">{part}</strong> : part
                    )}
                </p>
            </div>

            {/* Bottom Gradient for Conclusion */}
            {side === "conclusion" && (
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
            )}
        </div>
    );
}
