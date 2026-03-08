export type Tool = {
  name: string;
  url: string;
  tagline: string;
  bestFor: string;
  whenToChoose: string;
  strengths: string[];
  limitations: string[];
  category: "builder" | "model";
};

export const buildingTools: Tool[] = [
  {
    name: "Lovable",
    url: "https://lovable.dev",
    tagline: "AI-powered full-stack web app builder",
    bestFor: "PMs who want to build and ship complete web apps without writing code",
    whenToChoose: "You need a production-ready web app with backend, auth, and database — fast",
    strengths: [
      "Full-stack apps from natural language prompts",
      "Built-in backend (database, auth, storage)",
      "Live preview with real-time collaboration",
      "Deploys instantly to production",
    ],
    limitations: [
      "Web apps only (no mobile native)",
      "React/Vite stack — not customizable framework",
    ],
    category: "builder",
  },
  {
    name: "Claude Code",
    url: "https://docs.anthropic.com/en/docs/claude-code",
    tagline: "AI agent that works directly with your files and terminal",
    bestFor: "PMs who want AI integrated into their actual file-based workflow",
    whenToChoose: "You want to process research, write PRDs, analyze data, and review work — all from the terminal",
    strengths: [
      "Works directly with your local files",
      "Run multiple instances in parallel",
      "Persistent context across sessions",
      "Can analyze screenshots and mockups",
    ],
    limitations: [
      "Requires terminal/CLI comfort",
      "Anthropic API costs for heavy usage",
    ],
    category: "builder",
  },
  {
    name: "Cursor",
    url: "https://cursor.sh",
    tagline: "AI-first code editor built on VS Code",
    bestFor: "PMs learning to code or collaborating closely with engineers",
    whenToChoose: "You want to prototype, read codebases, or write scripts alongside your engineering team",
    strengths: [
      "Familiar VS Code interface",
      "Inline AI suggestions and chat",
      "Multi-file context awareness",
      "Works with any language/framework",
    ],
    limitations: [
      "Primarily a coding tool — steeper learning curve for non-engineers",
      "Subscription required for full features",
    ],
    category: "builder",
  },
  {
    name: "Bolt",
    url: "https://bolt.new",
    tagline: "AI-powered web development in the browser",
    bestFor: "Quick prototypes and MVPs without local setup",
    whenToChoose: "You need to spin up a working prototype in minutes to test an idea or share with stakeholders",
    strengths: [
      "Zero setup — runs entirely in browser",
      "Fast iteration on frontend ideas",
      "Easy sharing via URL",
      "Multiple framework support",
    ],
    limitations: [
      "Less robust for complex backend logic",
      "Limited deployment options compared to full platforms",
    ],
    category: "builder",
  },
  {
    name: "Bubble",
    url: "https://bubble.io",
    tagline: "Visual no-code platform for web applications",
    bestFor: "Complex business logic apps where you want full visual control",
    whenToChoose: "You need a sophisticated app with custom workflows but prefer visual building over prompting",
    strengths: [
      "Powerful visual workflow builder",
      "Large plugin ecosystem",
      "Mature platform with enterprise features",
      "Good for marketplace and SaaS apps",
    ],
    limitations: [
      "Steeper learning curve than AI-first tools",
      "Vendor lock-in on hosting",
    ],
    category: "builder",
  },
  {
    name: "Base44",
    url: "https://base44.com",
    tagline: "AI-powered app builder for business tools",
    bestFor: "Internal tools and business applications",
    whenToChoose: "You need to build internal dashboards, CRUD apps, or business workflows quickly",
    strengths: [
      "Fast for internal/business tools",
      "AI-assisted app generation",
      "Database and API integrations",
      "Good for operational apps",
    ],
    limitations: [
      "More focused on business apps than consumer products",
      "Newer platform with growing ecosystem",
    ],
    category: "builder",
  },
  {
    name: "Replit",
    url: "https://replit.com",
    tagline: "Browser-based IDE with AI coding assistant",
    bestFor: "Learning to code, quick scripts, and collaborative development",
    whenToChoose: "You want to experiment with code, deploy small projects, or collaborate with engineers in real-time",
    strengths: [
      "Instant development environment",
      "AI assistant built in",
      "Easy deployment and sharing",
      "Supports many languages",
    ],
    limitations: [
      "Performance limits on free tier",
      "Less suited for large production apps",
    ],
    category: "builder",
  },
  {
    name: "v0 by Vercel",
    url: "https://v0.dev",
    tagline: "AI-powered UI component generator",
    bestFor: "Generating polished UI components and design systems",
    whenToChoose: "You need beautiful React components or want to prototype a specific UI pattern quickly",
    strengths: [
      "Excellent UI/component quality",
      "Generates production-ready React code",
      "Great for design exploration",
      "Integrates with Vercel ecosystem",
    ],
    limitations: [
      "UI-focused — not full-stack",
      "Best for Next.js/React projects",
    ],
    category: "builder",
  },
];

export const aiModels: Tool[] = [
  {
    name: "GPT-4o (OpenAI)",
    url: "https://openai.com",
    tagline: "OpenAI's flagship multimodal model",
    bestFor: "General-purpose reasoning, writing, and analysis",
    whenToChoose: "You need a reliable all-rounder for writing, analysis, brainstorming, or image understanding",
    strengths: [
      "Strong across all tasks",
      "Multimodal (text, image, audio)",
      "Massive ecosystem and integrations",
      "Good at following complex instructions",
    ],
    limitations: [
      "Can be verbose",
      "Knowledge cutoff applies",
    ],
    category: "model",
  },
  {
    name: "o3 / o4-mini (OpenAI)",
    url: "https://openai.com",
    tagline: "OpenAI's reasoning-focused models",
    bestFor: "Complex problem-solving, math, coding, and multi-step analysis",
    whenToChoose: "You have a hard problem that requires step-by-step reasoning or deep analysis",
    strengths: [
      "Superior reasoning and logic",
      "Excellent at math and coding",
      "Better at complex, multi-step tasks",
      "o4-mini offers great cost/performance ratio",
    ],
    limitations: [
      "Slower than standard models",
      "Overkill for simple tasks",
    ],
    category: "model",
  },
  {
    name: "Claude 4 Sonnet (Anthropic)",
    url: "https://anthropic.com",
    tagline: "Anthropic's balanced intelligence model",
    bestFor: "Long-form writing, nuanced analysis, and careful reasoning",
    whenToChoose: "You need thoughtful, well-structured output — especially for PRDs, strategy docs, or research synthesis",
    strengths: [
      "Excellent long-form writing quality",
      "200K context window",
      "Strong at following nuanced instructions",
      "Good at saying 'I don't know'",
    ],
    limitations: [
      "Smaller plugin/integration ecosystem than OpenAI",
      "Can be overly cautious",
    ],
    category: "model",
  },
  {
    name: "Claude 4 Opus (Anthropic)",
    url: "https://anthropic.com",
    tagline: "Anthropic's most capable model",
    bestFor: "Complex analysis, research, and high-stakes writing",
    whenToChoose: "You need the highest quality output and are willing to pay more / wait longer",
    strengths: [
      "Top-tier reasoning and analysis",
      "Exceptional writing quality",
      "Best at handling ambiguity",
      "Great for executive-level content",
    ],
    limitations: [
      "Higher cost per token",
      "Slower response times",
    ],
    category: "model",
  },
  {
    name: "Gemini 2.5 Flash (Google)",
    url: "https://deepmind.google/technologies/gemini/",
    tagline: "Google's fast, efficient multimodal model",
    bestFor: "Speed-sensitive tasks, large context processing, and multimodal work",
    whenToChoose: "You need fast responses, want to process very long documents, or work with mixed media (text + images + video)",
    strengths: [
      "Very fast inference",
      "1M+ token context window",
      "Native multimodal (text, image, video, audio)",
      "Cost-effective for high-volume tasks",
    ],
    limitations: [
      "Writing style less polished than Claude",
      "Google ecosystem integration focus",
    ],
    category: "model",
  },
  {
    name: "Gemini 2.5 Pro (Google)",
    url: "https://deepmind.google/technologies/gemini/",
    tagline: "Google's most capable model",
    bestFor: "Complex reasoning with massive context and multimodal inputs",
    whenToChoose: "You have huge documents, codebases, or mixed media that need deep analysis",
    strengths: [
      "Strongest reasoning in Gemini family",
      "Handles enormous context well",
      "Excellent at code understanding",
      "Strong multimodal reasoning",
    ],
    limitations: [
      "Slower than Flash",
      "Higher cost",
    ],
    category: "model",
  },
  {
    name: "Grok (xAI)",
    url: "https://x.ai",
    tagline: "xAI's model with real-time information access",
    bestFor: "Current events analysis and unfiltered perspectives",
    whenToChoose: "You want real-time information or a model with fewer content guardrails",
    strengths: [
      "Real-time information access",
      "Less filtered responses",
      "Strong reasoning capabilities",
      "Integrated with X (Twitter) data",
    ],
    limitations: [
      "Smaller ecosystem",
      "Less established for enterprise use",
    ],
    category: "model",
  },
  {
    name: "Llama 4 (Meta)",
    url: "https://llama.meta.com",
    tagline: "Meta's open-source model family",
    bestFor: "Self-hosted AI, custom fine-tuning, and privacy-sensitive use cases",
    whenToChoose: "You need to run AI on your own infrastructure or want full control over the model",
    strengths: [
      "Open source — full transparency",
      "Can run locally or self-host",
      "Fine-tunable for specific domains",
      "No vendor lock-in",
    ],
    limitations: [
      "Requires technical setup to self-host",
      "Smaller models less capable than top commercial ones",
    ],
    category: "model",
  },
];
