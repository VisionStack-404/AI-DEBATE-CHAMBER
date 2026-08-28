1) Suggested improvement
- Clarify and unify the environment-variable instructions in README.md to remove conflicting guidance about OpenRouter vs Groq, show a small example .env.local template, and add a short note about not committing secrets. This is a small, practical change that prevents confusion when setting up the project locally.

2) File to update
- README.md

3) Exact content to add/change

Replace the existing "Configure Environment Variables" / duplicated prerequisites blocks (the parts that mention "Create a .env.local file ..." and the later "Configure Environment Variables" that references NEXT_PUBLIC_GROQ_API_KEY) with the single unified block below.

Insert this unified "Environment variables" section within your "Installation & Setup" / "Quick Start" area (i.e., replace the two conflicting instructions that reference OpenRouter and Groq keys):

---
### Configure Environment Variables

Create a `.env.local` file in the project root and add the API keys you need. This project can be configured to use either OpenRouter or Groq (or both), so include the relevant keys for the gateway(s) you plan to use.

Example `.env.local` (replace the placeholders with your actual keys):
```
# If using OpenRouter:
OPENROUTER_API_KEY=your_openrouter_api_key_here

# If using Groq (client-side usage may require NEXT_PUBLIC_ prefix):
NEXT_PUBLIC_GROQ_API_KEY=your_groq_api_key_here

# Optional: add any other flags used by your local setup
# NEXT_PUBLIC_API_ENV=development
```

Notes:
- Do NOT commit `.env.local` to version control. Add it to `.gitignore` (if not already ignored).
- If you change the `.env.local` file while the dev server is running, restart the server to pick up new values.
- Use the key(s) corresponding to the LLM gateway configured in your code (OpenRouter vs Groq). If you add support for both, the app will choose the configured gateway at runtime according to your environment and config.

---

This small edit removes duplicated/conflicting setup steps and gives future contributors a single, clear instruction for local secrets.