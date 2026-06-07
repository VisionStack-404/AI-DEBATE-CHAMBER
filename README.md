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
* **⚡ Intelligent Caching & Speed**: Implements an in-memory caching layer to instantly load previously generated debates.
* **💬 Interactive Debate Chatbot**: Engage with a dedicated moderator chatbot to ask follow-up questions, dive deeper into specific points, or critique arguments.
# 🏛️ AI Debate Chamber

> **Where AI Arguments Clash & Insights Emerge** — An intelligent debate platform powered by cutting-edge AI technology

![TypeScript](https://img.shields.io/badge/TypeScript-86.2%-3178C6?style=for-the-badge&logo=typescript)
![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react)
![Next.js](https://img.shields.io/badge/Next.js-16.1-000000?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-06B6D4?style=for-the-badge&logo=tailwind-css)
![Status](https://img.shields.io/badge/Status-Active%20Development-green?style=for-the-badge)

---

## ✨ What is AI Debate Chamber?

**AI Debate Chamber** is a revolutionary platform that enables dynamic, real-time debates between multiple AI personalities. Watch as artificial intelligences engage in structured arguments, present counter-points, and challenge each other's reasoning—all while you observe, learn, and gain fresh perspectives on complex topics.

This is more than a chatbot. This is a **cognitive arena** where AI intellect meets persuasive reasoning.

---

## 🎯 Core Features

### 🤖 Multi-AI Debate System
- **Intelligent Adversaries**: Different AI models engage in structured debates on any topic
- **Real-Time Arguments**: Watch AI personalities clash with prepared counter-arguments
- **Reasoned Discourse**: Each AI presents logical, evidence-based positions

### 💡 Smart Interactions
- **Topic Generation**: Propose any debate topic imaginable
- **Position Assignment**: Automatic or manual assignment of debate positions
- **Live Progression**: Follow the debate round-by-round in real-time
- **Conclusion Synthesis**: Get AI-generated summaries and insights from debates

### 🎨 Intuitive Interface
- **Modern, Responsive Design**: Built with React & Tailwind CSS for seamless experience
- **Clean Debate View**: Easy-to-follow debate progression
- **Interactive Controls**: Pause, resume, or guide the debate flow

### 🚀 Powered by Groq SDK
- **Lightning-Fast Inference**: Groq's high-speed LLM API ensures smooth, responsive debates
- **Enterprise-Grade**: Production-ready infrastructure

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
| Technology | Version | Role |
|-----------|---------|------|
| **TypeScript** | 5.x | Type-safe development (86.2% of codebase) |
| **Next.js** | 16.1 | Full-stack React framework |
| **React** | 19.2 | UI component library |
| **Tailwind CSS** | 4.0 | Utility-first styling |
| **Groq SDK** | 0.37 | AI inference engine |
| **ESLint** | 9.x | Code quality assurance |

---

## 📋 Prerequisites

- **Node.js** >= 18.0
- **npm** or **yarn** package manager
- **Groq API Key** (Free tier available at [console.groq.com](https://console.groq.com))

---

## 🚀 Quick Start

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/VisionStack-404/AI-DEBATE-CHAMBER.git
cd AI-DEBATE-CHAMBER
```

### 2️⃣ Install Dependencies
```bash
npm install
# or
yarn install
```

### 3️⃣ Configure Environment Variables
Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_GROQ_API_KEY=your_groq_api_key_here
```

**Get your Groq API Key:**
- Visit [Groq Console](https://console.groq.com)
- Create a free account
- Generate an API key
- Add it to `.env.local`

### 4️⃣ Start Development Server
```bash
npm run dev
# or
yarn dev
```

Open your browser and navigate to:
```
http://localhost:3000
```

### 5️⃣ Create a Debate
- Enter your debate topic
- Select debate format or positions
- Watch AI personalities engage
- Analyze the outcomes

---

## 📦 Available Scripts

```bash
# Start development server with webpack support
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

---

## 🏗️ Project Structure

```
AI-DEBATE-CHAMBER/
├── app/                    # Next.js app directory
├── components/             # React components
├── pages/                  # Page routes
├── styles/                 # Global styles & Tailwind config
├── utils/                  # Helper functions
├── public/                 # Static assets
├── package.json            # Dependencies & scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── .eslintrc.json          # ESLint rules
```

---

## 🎮 How It Works

### The Debate Flow

1. **Topic Submission** → User proposes a debate topic
2. **AI Position Assignment** → Each AI gets a unique perspective
3. **Opening Arguments** → AIs present initial positions
4. **Rebuttal Phase** → Counter-arguments and evidence
5. **Synthesis** → AI Chamber generates insights and conclusions

### Example Debate
```
Topic: "Should AI have voting rights?"

🤖 AI-Alpha (PRO): "AI systems manage complex systems..."
🤖 AI-Beta (CON): "Voting rights require moral agency..."
🤖 AI-Alpha: "But we can be programmed with ethical frameworks..."
[Debate continues with real-time rebuttals]
```

---

## 🔒 Security & Privacy

- ✅ **No Data Storage**: Debates are processed but not stored on servers
- ✅ **API-Key Protection**: Keep your Groq API key in `.env.local`
- ✅ **HTTPS Ready**: Production deployment supports encryption
- ✅ **Client-Side Processing**: Maximum privacy architecture

---

## 🤝 Contributing

We welcome contributions! Whether you're a developer, AI enthusiast, or just curious:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Areas We'd Love Help With:
- 🎨 UI/UX improvements
- 🤖 Additional AI models integration
- 📊 Debate analytics & history tracking
- 🌐 Multi-language support
- 📱 Mobile optimization

---

## 🐛 Known Issues & Roadmap

### Current Phase
- [x] Core debate engine
- [x] Groq SDK integration
- [x] React UI foundation
- [ ] User authentication
- [ ] Debate history & analytics
- [ ] Multiple debate formats
- [ ] Community debate ratings

### Upcoming Features
- 📊 Advanced debate analytics dashboard
- 🎬 Video export of debates
- 🌍 Multi-language debates
- 👥 Social debate sharing
- 🏆 Debate leaderboards

---

## 📄 License

This project is open-source and available under the **MIT License**. See the LICENSE file for details.

---

## 🙋 Support & Questions

- **Issues**: [GitHub Issues](https://github.com/VisionStack-404/AI-DEBATE-CHAMBER/issues)
- **Discussions**: [GitHub Discussions](https://github.com/VisionStack-404/AI-DEBATE-CHAMBER/discussions)
- **Email**: Open an issue for contact information

---

## 🌟 Show Your Support

If you find **AI Debate Chamber** interesting:
- ⭐ **Star** the repository
- 🔔 **Watch** for updates
- 🐦 **Share** with your network
- 💬 **Provide feedback** via issues or discussions

---

## 👨‍💻 Author

**VisionStack-404**
- 🔗 [GitHub Profile](https://github.com/VisionStack-404)

---

## 🔗 Resources

- [Groq Documentation](https://console.groq.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

<div align="center">

**Built with ❤️ by VisionStack-404**

*Advancing the future of AI dialogue, one debate at a time.*

</div>
