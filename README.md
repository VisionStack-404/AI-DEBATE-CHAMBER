# ⚖️ AI Debate Chamber

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Groq](https://img.shields.io/badge/Groq-API-orange?style=for-the-badge)](https://groq.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

> **Where AI Arguments Clash & Insights Emerge** 🚀 A premium real-time arena where frontier AI minds collide. 🤖⚔️

---

## 🎯 Overview

**AI Debate Chamber** is a revolutionary platform that brings the power of multiple frontier Large Language Models together in structured, dynamic debates. Experience how different AI personalities engage in real-time arguments, present compelling counter-points, and synthesize balanced conclusions on any topic imaginable.

This is more than a chatbot—it's a **cognitive arena** where artificial intelligence meets persuasive reasoning, designed for users seeking diverse perspectives on complex topics.

---

## ✨ Core Features

### 🤖 Multi-Agent AI Orchestration
Experience debates powered by cutting-edge LLMs working in harmony:

- **PRO Argument**: **Llama 3.3 70B**  
  Highly logical, articulate reasoning model that constructs compelling supportive arguments

- **CON Argument**: **Claude 3 Haiku**  
  Fast, analytical model providing critical, well-reasoned counter-arguments

- **Moderator Synthesis**: **Gemini 2.5 Flash**  
  Impartial, balanced model that synthesizes insights and identifies common ground

### 🎨 Premium Glassmorphic Design
- Dark-mode interface with harmonious color gradients
- Modern typography with Geist font family
- Sleek card borders and elegant micro-animations
- Fully responsive layout (mobile, tablet, desktop)
- Accessible, user-friendly UI components

### ⚡ Intelligent Caching & Performance
- In-memory caching layer for instant debate retrieval
- Optimized API calls to reduce latency
- Lightning-fast, responsive user interactions
- Seamless real-time debate generation

### 💬 Interactive Debate Chatbot
- Engage with a dedicated moderator chatbot
- Ask follow-up questions and dive deeper into topics
- Critique arguments and explore nuance
- Continue conversations seamlessly with context awareness

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Frontend Framework** | Next.js 16.1, React 19.2 |
| **Language** | TypeScript 5.0 |
| **Styling** | Tailwind CSS v4.0 |
| **API SDKs** | Groq SDK, OpenRouter |
| **LLM Models** | Llama 3.3, Claude 3, Gemini 2.5 |
| **Dev Tools** | ESLint, PostCSS, Webpack |

---

## 📋 Prerequisites

Before you begin, ensure you have:

- **Node.js** v18.0 or higher
- **npm** or **yarn** package manager
- API keys from:
  - [Groq Console](https://console.groq.com) – For Claude 3 Haiku access
  - [OpenRouter](https://openrouter.ai/) – For Llama 3.3 and Gemini 2.5 access
- A modern web browser (Chrome, Firefox, Safari, Edge)

---

## 🚀 Quick Start Guide

### 1. Clone the Repository

```bash
git clone https://github.com/VisionStack-404/AI-DEBATE-CHAMBER.git
cd AI-DEBATE-CHAMBER
```

### 2. Install Dependencies

```bash
npm install
# or if you prefer yarn
yarn install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the project root:

```bash
touch .env.local
```

Add your API keys to `.env.local`:

```env
# OpenRouter API Key (for Llama 3.3 and Gemini 2.5)
OPENROUTER_API_KEY=your_openrouter_api_key_here

# Groq API Key (for Claude 3 Haiku - client-side usage)
NEXT_PUBLIC_GROQ_API_KEY=your_groq_api_key_here

# Optional: Development Environment Flag
NEXT_PUBLIC_API_ENV=development
```

**⚠️ Security Notes:**
- Never commit `.env.local` to version control (already protected by `.gitignore`)
- Always restart the dev server after changing environment variables
- Use `NEXT_PUBLIC_` prefix only for client-side accessible variables
- Keep API keys secure and never share them publicly

### 4. Start the Development Server

```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser to see the application running.

### 5. Build for Production

```bash
# Build the application
npm run build

# Start the production server
npm start
```

---

## 💻 How to Use

1. **Enter a Topic**: Type any subject you'd like the AI models to debate
2. **Watch the Debate Unfold**: Three AI personalities present their arguments in real-time
3. **View Synthesized Insights**: See the moderator's balanced analysis and common ground
4. **Ask Follow-up Questions**: Use the interactive chatbot to explore deeper
5. **Challenge Perspectives**: Dive into nuance and explore different viewpoints

---

## 📁 Project Structure

```
AI-DEBATE-CHAMBER/
├── app/                          # Next.js App Router Directory
│   ├── api/                     # API routes for LLM integration
│   │   ├── debate/              # Main debate generation endpoint
│   │   └── chat/                # Chatbot interaction endpoint
│   ├── layout.tsx               # Root layout wrapper
│   ├── page.tsx                 # Home/main debate page
│   └── globals.css              # Global styles
├── components/                   # Reusable React Components
│   ├── DebateArena/             # Debate display and management
│   ├── ChatBot/                 # Interactive chatbot interface
│   ├── ArgumentCard/            # Individual argument component
│   └── UI/                      # Shared UI elements
├── lib/                         # Utility Functions & Helpers
│   ├── api/                     # API client functions
│   ├── types/                   # TypeScript interfaces
│   └── utils/                   # Helper utilities
├── styles/                      # Global CSS & Tailwind Config
├── public/                      # Static assets (images, fonts)
├── .env.local                   # Environment variables (local only)
├── .env.example                 # Example environment template
├── .gitignore                   # Git ignore rules
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Dependencies and scripts
└── README.md                    # This file
```

---

## 🔌 API Integration Details

### Supported LLM Providers

| Model | Provider | Gateway | Purpose |
|-------|----------|---------|---------|
| **Llama 3.3 70B** | Meta | OpenRouter | PRO Arguments |
| **Claude 3 Haiku** | Anthropic | Groq | CON Arguments |
| **Gemini 2.5 Flash** | Google | OpenRouter | Moderation & Synthesis |

### API Endpoints

#### Generate Debate
```http
POST /api/debate
Content-Type: application/json

{
  "topic": "Should AI be regulated?",
  "language": "en"
}
```

#### Chat Follow-up
```http
POST /api/chat
Content-Type: application/json

{
  "debateId": "debate_123",
  "question": "Can you elaborate on...",
  "conversationHistory": []
}
```

---

## 📊 Available npm Scripts

```bash
# Development
npm run dev              # Start dev server with hot module reloading

# Production
npm run build            # Build optimized production bundle
npm start                # Start production server

# Code Quality
npm run lint             # Run ESLint for code style checking
```

---

## 🌐 Deployment Guide

### Deploy to Vercel (Recommended)

Vercel is optimized for Next.js applications:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or connect your GitHub repository to [Vercel](https://vercel.com) for automatic deployments.

### Deploy to Other Platforms

#### Netlify
- Connect GitHub repo to Netlify
- Set build command: `npm run build`
- Set publish directory: `.next`

#### AWS Amplify
- Push to GitHub/GitLab
- Create Amplify app
- Configure build settings for Next.js

#### Self-Hosted (Docker)
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 🔐 Security & Best Practices

✅ **Environment Variables**
- Store all secrets in `.env.local` (never in code)
- Use `.gitignore` to prevent accidental commits
- Rotate API keys regularly

✅ **API Security**
- Implement rate limiting on API endpoints
- Validate all user inputs server-side
- Use HTTPS in production

✅ **Performance**
- Enable caching headers
- Minify CSS and JavaScript
- Optimize images and assets

✅ **Monitoring**
- Log API errors and failures
- Monitor API rate limits
- Track application performance

---

## 🤝 Contributing

We welcome contributions from the community! Here's how to get involved:

1. **Fork the Repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/AI-DEBATE-CHAMBER.git
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make Your Changes**
   - Write clean, readable code
   - Follow the existing code style
   - Add comments where necessary

4. **Commit Your Changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```

5. **Push to Your Branch**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**
   - Describe your changes in detail
   - Reference any related issues

---

## 🆘 Troubleshooting

### Issue: "API Key Not Found" Error
**Solution:**
- Verify `.env.local` exists in project root
- Check that API keys are valid and not expired
- Restart the dev server: `npm run dev`

### Issue: Slow Debate Generation
**Solution:**
- Check API rate limits on OpenRouter and Groq
- Use cached results for repeated topics
- Ensure stable internet connection

### Issue: Tailwind Styles Not Applying
**Solution:**
- Clear Next.js cache: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Rebuild the project: `npm run build`

### Issue: TypeScript Compilation Errors
**Solution:**
- Update TypeScript: `npm update typescript`
- Check `tsconfig.json` configuration
- Ensure all types are properly imported

### Issue: CORS Errors
**Solution:**
- Verify API endpoints are accessible
- Check Groq and OpenRouter CORS settings
- Use server-side API routes for sensitive calls

---

## 📈 Performance Tips

- **Use Caching**: Enable browser caching for static assets
- **Optimize Images**: Compress and optimize images before deployment
- **Code Splitting**: Next.js automatically optimizes route-based code splitting
- **API Optimization**: Batch API calls and reuse cached results
- **Monitor Metrics**: Use Web Vitals to track performance

---

## 🎯 Roadmap

- [ ] Support for additional LLM models (Llama 4, GPT-4, etc.)
- [ ] Debate history and saved conversations
- [ ] User authentication and accounts
- [ ] Debate analytics and insights dashboard
- [ ] Multi-language support (Spanish, French, Chinese, etc.)
- [ ] Export debates as PDF/Markdown
- [ ] Mobile app (React Native)
- [ ] API for third-party integrations
- [ ] Advanced argument analysis and metrics
- [ ] Live streaming of AI debates

---

## 📞 Support & Community

- **Issues**: [GitHub Issues](https://github.com/VisionStack-404/AI-DEBATE-CHAMBER/issues)
- **Discussions**: [GitHub Discussions](https://github.com/VisionStack-404/AI-DEBATE-CHAMBER/discussions)
- **Email**: Contact via GitHub profile

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Llama 3.3** by Meta AI
- **Claude 3** by Anthropic
- **Gemini 2.5** by Google DeepMind
- **Next.js** by Vercel
- **Tailwind CSS** by Tailwind Labs
- All contributors and users

---

<div align="center">

### 🚀 Building the Future of AI-Powered Intelligent Discourse

**[⭐ Star this repo](https://github.com/VisionStack-404/AI-DEBATE-CHAMBER)** if you find it useful!

Made with ❤️ by [VisionStack-404](https://github.com/VisionStack-404)

</div>
