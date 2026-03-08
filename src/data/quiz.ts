export type QuizQuestion = {
  id: number;
  question: string;
  options: { label: string; score: number }[];
};

export type QuizResult = {
  range: [number, number];
  title: string;
  description: string;
  emoji: string;
  recommendations: string[];
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "How often do you use AI tools (ChatGPT, Claude, etc.) in your daily PM work?",
    options: [
      { label: "Never — I haven't started yet", score: 0 },
      { label: "Occasionally — for ad-hoc tasks", score: 1 },
      { label: "Regularly — it's part of my workflow", score: 2 },
      { label: "Constantly — I can't imagine working without it", score: 3 },
    ],
  },
  {
    id: 2,
    question: "Can you explain the difference between an LLM, a fine-tuned model, and RAG to a colleague?",
    options: [
      { label: "No idea what those mean", score: 0 },
      { label: "I've heard the terms but couldn't explain them", score: 1 },
      { label: "I could give a rough explanation", score: 2 },
      { label: "Yes, confidently and with examples", score: 3 },
    ],
  },
  {
    id: 3,
    question: "Has your team shipped (or started building) an AI-powered feature?",
    options: [
      { label: "No, and it's not on our roadmap", score: 0 },
      { label: "We've discussed it but haven't started", score: 1 },
      { label: "We're currently building one", score: 2 },
      { label: "Yes, we've shipped at least one", score: 3 },
    ],
  },
  {
    id: 4,
    question: "How do you evaluate whether AI is the right solution for a product problem?",
    options: [
      { label: "I don't have a framework for that yet", score: 0 },
      { label: "I use intuition and what I've read", score: 1 },
      { label: "I have criteria I consider (cost, accuracy, UX)", score: 2 },
      { label: "I use a structured evaluation framework", score: 3 },
    ],
  },
  {
    id: 5,
    question: "How comfortable are you writing and iterating on prompts for AI features?",
    options: [
      { label: "I've never written a prompt for a product", score: 0 },
      { label: "I've experimented in ChatGPT but not for production", score: 1 },
      { label: "I've written prompts that are used in a product", score: 2 },
      { label: "I optimize prompts as part of my regular workflow", score: 3 },
    ],
  },
  {
    id: 6,
    question: "How well do you understand the data requirements for AI features?",
    options: [
      { label: "I don't think about data in the context of AI", score: 0 },
      { label: "I know data matters but don't know specifics", score: 1 },
      { label: "I can identify data needs and quality requirements", score: 2 },
      { label: "I work closely with data teams on training/eval data", score: 3 },
    ],
  },
];

export const quizResults: QuizResult[] = [
  {
    range: [0, 5],
    title: "AI Curious",
    emoji: "🌱",
    description: "You're at the beginning of your AI journey — and that's a great place to be. The landscape is moving fast, but you don't need to learn everything at once.",
    recommendations: [
      "Start with our 'Start Here' section for foundational reads",
      "Pick one AI tool and use it daily for a week",
      "Read the 'What PMs Actually Need to Know About AI' guide",
    ],
  },
  {
    range: [6, 10],
    title: "AI Aware",
    emoji: "📡",
    description: "You've got the basics down and you're starting to see how AI fits into product work. Time to go from understanding to doing.",
    recommendations: [
      "Try the AI Tools section to find your go-to PM toolkit",
      "Work through a framework for evaluating AI solutions",
      "Listen to practitioner interviews to learn from real examples",
    ],
  },
  {
    range: [11, 14],
    title: "AI Practitioner",
    emoji: "⚡",
    description: "You're actively building with AI and have solid intuition. Focus on sharpening your frameworks and staying ahead of the curve.",
    recommendations: [
      "Dive into the Frameworks & Playbooks for advanced templates",
      "Follow 'What's Actually Changing' to stay ahead of shifts",
      "Consider the Go Deeper section for technical depth",
    ],
  },
  {
    range: [15, 18],
    title: "AI Native",
    emoji: "🚀",
    description: "AI is deeply integrated into how you think about and build products. You're likely ahead of most PMs — now it's about maintaining that edge and sharing what you know.",
    recommendations: [
      "Share your knowledge — consider contributing a case study",
      "Explore the Go Deeper section for cutting-edge resources",
      "Stay current with monthly roundups on emerging patterns",
    ],
  },
];
