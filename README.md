# ⚖️ AI Debate Chamber

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

> **Where AI Arguments Clash & Insights Emerge** — A premium real-time arena where frontier AI minds collide 🤖⚔️

## 🚀 Overview

**AI Debate Chamber** is an innovative platform that brings the power of multiple frontier Large Language Models together in structured, dynamic debates. Watch as specialized AI personalities engage in real-time arguments, present compelling counter-points, and synthesize balanced conclusions—all on any topic you choose.

This is more than a chatbot. This is a **cognitive arena** where artificial intelligence meets persuasive reasoning, designed for users who want to explore complex topics from multiple perspectives.

---

## ✨ Core Features

### 🤖 Multi-Agent AI Orchestration
Experience debates powered by cutting-edge LLMs working in tandem:

- **PRO Argument**: Llama 3.3 70B  
  Highly logical, articulate reasoning model that constructs compelling supportive arguments

- **CON Argument**: Claude 3 Haiku  
  Fast, analytical model providing critical, well-reasoned counter-arguments

- **Moderator Synthesis**: Gemini 2.5 Flash  
  Impartial, balanced model that synthesizes insights and identifies common ground

### 🎨 Premium Glassmorphic Design
- Dark-mode interface with harmonious color gradients
- Modern typography (Geist font family)
- Sleek card borders and micro-animations
- Fully responsive layout (mobile, tablet, desktop)
- Accessible UI components

### ⚡ Intelligent Caching & Performance
- In-memory caching layer for instant debate retrieval
- Optimized API calls to reduce latency
- Fast, responsive user interactions

### 💬 Interactive Debate Chatbot
- Engage with a dedicated moderator chatbot
- Ask follow-up questions and dive deeper
- Critique arguments and explore nuance
- Continue conversations seamlessly

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend Framework** | Next.js 16.1, React 19 |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS v4 |
| **API Integration** | OpenRouter, Groq SDKs |
| **LLM Models** | Llama 3.3, Claude 3, Gemini 2.5 |
| **Dev Tools** | ESLint, PostCSS |

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.0 or higher
- **npm** or **yarn** package manager
- API keys from:
  - [OpenRouter](https://openrouter.ai/) (for Llama 3.3 and Gemini 2.5 access)
  - [Groq Cloud](https://console.groq.com) (for Claude 3 access)

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/VisionStack-404/AI-DEBATE-CHAMBER.git
cd AI-DEBATE-CHAMBER
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the project root and add your API keys:

```bash
# Copy the example env file
cp .env.example .env.local
```

Edit `.env.local` with your actual API keys:

```env
# OpenRouter (for Llama 3.3 and Gemini 2.5)
OPENROUTER_API_KEY=your_openrouter_api_key_here

# Groq (for Claude 3 Haiku)
NEXT_PUBLIC_GROQ_API_KEY=your_groq_api_key_here

# Optional: Development flags
NEXT_PUBLIC_API_ENV=development
```

**⚠️ Important Security Notes:**
- Never commit `.env.local` to version control (already in `.gitignore`)
- Restart the dev server after changing environment variables
- Use environment-specific prefixes (`NEXT_PUBLIC_` for client-side, regular for server-side)
- Keep your API keys secure and never share them

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

The application will be available at **http://localhost:3000**

### 5. Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

---

## 🎮 How to Use

1. **Enter a Topic**: Type any subject you'd like the AI models to debate
2. **Watch the Debate**: Three AI personalities argue their positions in real-time
3. **View Synthesis**: See the moderator's balanced analysis and common ground
4. **Follow-up Questions**: Use the chatbot to ask deeper questions
5. **Explore Perspectives**: Challenge arguments and explore nuance

---

## 📁 Project Structure

```
AI-DEBATE-CHAMBER/
├── app/                    # Next.js app directory
│   ├── api/               # API routes for LLM calls
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main debate page
├── components/            # Reusable React components
│   ├── DebateArena/       # Main debate display
│   ├── ChatBot/           # Interactive chatbot
│   └── UI/                # Shared UI elements
├── styles/                # Global CSS and Tailwind config
├── lib/                   # Utility functions and helpers
│   ├── api/              # API client functions
│   └── types/            # TypeScript type definitions
├── public/                # Static assets
├── .env.local             # Environment variables (local only)
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

---

## 🔌 API Integration

### Supported LLM Providers

| Model | Provider | Use Case |
|-------|----------|----------|
| Llama 3.3 70B | OpenRouter | PRO Arguments |
| Claude 3 Haiku | Groq | CON Arguments |
| Gemini 2.5 Flash | OpenRouter | Moderation & Synthesis |

### API Endpoints

- `POST /api/debate` — Generate a complete debate
- `POST /api/followup` — Submit chatbot follow-up questions
- `GET /api/cached` — Retrieve cached debate results

---

## 📊 Available Scripts

```bash
# Development
npm run dev          # Start dev server with hot reload

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint and check code style
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your repository to GitHub
2. Connect to [Vercel](https://vercel.com)
3. Set environment variables in Vercel dashboard
4. Deploy with one click

```bash
vercel --prod
```

### Deploy to Other Platforms

The project works with any Node.js hosting platform:
- Netlify (with serverless functions)
- AWS Amplify
- Railway
- Render
- Self-hosted VPS

---

## 🛡️ Security Best Practices

- ✅ API keys stored in `.env.local` (never in repo)
- ✅ Server-side API calls for sensitive operations
- ✅ Input validation on all user submissions
- ✅ Rate limiting on API endpoints
- ✅ CORS configuration for production

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🎯 Roadmap

- [ ] Support for additional LLM models
- [ ] Debate history and saved conversations
- [ ] User accounts and debate analytics
- [ ] Multi-language support
- [ ] API for third-party integrations
- [ ] Mobile app (React Native)

---

## 🆘 Troubleshooting

### Issue: "API key not found"
**Solution**: Verify `.env.local` exists and contains valid API keys. Restart the dev server.

### Issue: Slow responses
**Solution**: Check your API rate limits on OpenRouter and Groq. Consider using cached results for repeated topics.

### Issue: Build errors with Tailwind
**Solution**: Clear Next.js cache and reinstall dependencies:
```bash
rm -rf .next node_modules
npm install
npm run build
```

---

## 📧 Support & Feedback

Have questions or suggestions? Feel free to:
- Open an [GitHub Issue](https://github.com/VisionStack-404/AI-DEBATE-CHAMBER/issues)
- Reach out via GitHub Discussions
- Check our documentation

---

## 🙌 Acknowledgments

- **Llama 3.3** by Meta
- **Claude 3** by Anthropic
- **Gemini 2.5** by Google
- **Next.js** by Vercel
- **Tailwind CSS** team

---

<div align="center">

**Building the future of AI-powered intelligent discourse** 🚀

[⭐ Star this repo](https://github.com/VisionStack-404/AI-DEBATE-CHAMBER) if you find it useful!

</div>
