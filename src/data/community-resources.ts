export type CommunityResource = {
  id: string;
  title: string;
  description: string;
  url: string;
  author: string;
  authorUrl?: string;
  emoji: string;
  tags: string[];
  featured?: boolean;
};

export type ResourceSection = {
  id: string;
  title: string;
  emoji: string;
  description: string;
  resources: CommunityResource[];
};

export const communitySections: ResourceSection[] = [
  {
    id: "assessments",
    title: "AI Skills Assessments",
    emoji: "🎯",
    description: "Figure out where you stand and what to learn next.",
    resources: [
      {
        id: "ai-skills-assessment",
        title: "AI Skills Assessment for Product Managers",
        description:
          "A comprehensive self-assessment covering AI fundamentals, strategy, hands-on building, data & privacy, product development, economics, and domain-specific learning. Get your proficiency level, gap analysis, and personalized learning path.",
        url: "https://claude.ai/public/artifacts/e0c59649-9cda-46ed-840a-80f7db6e826d",
        author: "Community",
        emoji: "🤔",
        tags: ["assessment", "skills gap", "learning path"],
        featured: true,
      },
    ],
  },
  {
    id: "skill-builders",
    title: "Skill-Building Platforms",
    emoji: "🛠️",
    description: "Interactive tools and platforms to level up your AI product skills.",
    resources: [
      {
        id: "pm-skill-hub",
        title: "PM Skill Hub",
        description:
          "An interactive platform for product managers to practice and build AI-related skills through guided exercises and real-world scenarios.",
        url: "https://pm-skill-hub.replit.app/",
        author: "Community",
        emoji: "💪",
        tags: ["interactive", "practice", "exercises"],
        featured: true,
      },
    ],
  },
  {
    id: "templates",
    title: "Templates & Artifacts",
    emoji: "📋",
    description: "Ready-to-use templates, prompts, and artifacts from the community.",
    resources: [],
  },
  {
    id: "case-studies",
    title: "Case Studies & Writeups",
    emoji: "📝",
    description: "Real-world examples of PMs shipping AI features and products.",
    resources: [],
  },
];
