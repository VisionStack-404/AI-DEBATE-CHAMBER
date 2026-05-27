# ⚖️ The AI Debate Chamber

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react)](https://react.dev/)
[![OpenRouter](https://img.shields.io/badge/OpenRouter-API-blueviolet?style=for-the-badge)](https://openrouter.ai/)

An elegant, real-time debate arena where frontier Large Language Models clash on any user-provided topic, construct persuasive arguments, and synthesize balanced conclusions.

---

## ✨ Features

* **🤖 Multi-Agent AI Orchestration**: Watch specialized, top-tier LLMs collaborate and debate in real-time:
  * **PRO Argument**: Powered by **Llama 3.3 70B** (a highly logical and articulate reasoning model).
  * **CON Argument**: Powered by **Claude 3 Haiku** (a fast, analytical, and highly critical model).
  * **Moderator Synthesis**: Powered by **Gemini 2.5 Flash** (impartial, balanced, and objective).
* **🎨 Premium Glassmorphic Design**: A premium dark-mode interface built with harmonious color gradients, modern typography (Geist), sleek card borders, micro-animations, and a completely responsive layout.
* **⚡ Intelligent Caching & Speed**: Implements in-memory caching to instantly load previously generated debates.
* **💬 Interactive Debate Chatbot**: Engage with a dedicated moderator chatbot to ask follow-up questions, dive deeper into specific points, or critique arguments.

---

## 🛠️ Tech Stack

* **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Webpack compiler)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (modern CSS-first theme system) & Vanilla CSS glassmorphism
* **Logic**: TypeScript & React 19
* **LLM Gateway**: [OpenRouter API](https://openrouter.ai/) for seamless, high-throughput model execution

---

## 🚀 Getting Started

### 📋 Prerequisites

* Node.js (v18.x or higher)
* npm, pnpm, or yarn
* An **OpenRouter API Key** (obtainable from [openrouter.ai](https://openrouter.ai/))

### 💻 Installation & Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/VisionStack-404/AI-DEBATE-CHAMBER.git
   cd AI-DEBATE-CHAMBER
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env.local` file in the root of the project and add your OpenRouter API Key:
   ```env
   OPENROUTER_API_KEY=your_openrouter_api_key_here
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```

5. **Open the Application**:
   Open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 📂 Project Structure

```text
├── app/
│   ├── api/
│   │   ├── cache/       # In-memory debate history API
│   │   ├── chat/        # Interactive moderator chat API
│   │   └── debate/      # Main multi-agent orchestration API
│   ├── components/
│   │   ├── ChatBox.tsx  # Follow-up chatbot component
│   │   └── ...
│   ├── globals.css      # Core styles & Tailwind v4 theme configurations
│   ├── layout.tsx       # Main HTML shell and global fonts
│   └── page.tsx         # Main entry point & state orchestrator
├── lib/
│   └── debateEngine.ts  # LLM API callers, prompts, and caching engine
├── postcss.config.mjs
├── package.json
└── tsconfig.json
```

---

## 🤝 Contributing

Contributions are highly welcome! Please feel free to open issues or submit pull requests to help make this AI Debate Chamber even more feature-rich and engaging.
