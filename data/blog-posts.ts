export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  publishedAt: string;
  author: {
    name: string;
    title: string;
    initials: string;
    gradient: string;
  };
  tags: string[];
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-a-pull-request",
    title: "What Is a Pull Request and Why Should Every Junior Developer Master It?",
    description:
      "Pull requests are the heartbeat of professional software development. This guide explains what they are, how they work, and why mastering them will accelerate your career faster than almost anything else.",
    category: "Engineering Fundamentals",
    readTime: "8 min read",
    publishedAt: "2025-05-15",
    author: {
      name: "Jordan Kim",
      title: "Staff Engineer at GitHub",
      initials: "JK",
      gradient: "from-blue-500 to-violet-500",
    },
    tags: ["Git", "Pull Requests", "Code Review", "Junior Developer"],
    content: `
## What Is a Pull Request?

A pull request (PR) is a mechanism for proposing changes to a codebase. When you make changes on a separate branch and want to merge them into the main branch, you open a pull request. It is, in essence, a formal request for your teammates to review your work before it becomes part of the shared codebase.

The term "pull request" comes from Git: you are asking the maintainers of a project to "pull" your changes into their branch.

## Why Pull Requests Matter

In a professional engineering team, code almost never goes directly into the main branch. Every change — from a two-line bug fix to a multi-week feature — goes through a pull request. This process:

- **Catches bugs before they reach production.** A second pair of eyes almost always finds something the author missed.
- **Spreads knowledge across the team.** Code reviews ensure no single person is the only one who understands a part of the codebase.
- **Maintains code quality standards.** PRs are where style, architecture, and convention questions get addressed.
- **Creates a searchable record.** Every decision, discussion, and change is documented and searchable in the PR history.

## The Anatomy of a Good Pull Request

A well-crafted pull request has:

1. **A clear title** that describes what the change does, not how it does it.
2. **A description** that explains the "why" — what problem this solves, what approach was taken, and anything the reviewer should pay special attention to.
3. **A focused scope.** One PR should do one thing. A PR that touches 20 files across 5 different features is hard to review well.
4. **Tests.** Code without tests is a PR without confidence.
5. **Self-review.** The best PRs are ones the author has already reviewed before requesting a review.

## How to Write a PR Description

A strong PR description template:

\`\`\`
## Summary
Brief description of what this PR does.

## Why
The problem or requirement this addresses.

## Changes
- List the key changes made
- Explain non-obvious decisions

## Testing
How you tested this change.

## Screenshots (if applicable)
Before / after screenshots for UI changes.
\`\`\`

## Giving and Receiving Code Review Feedback

The review part of a pull request is a skill in itself. For reviewers, the goal is to be specific and constructive — not just flag problems, but explain *why* something is a problem and suggest alternatives. For authors, receiving feedback gracefully is crucial. Treat every comment as information, not criticism.

## Why Junior Developers Should Master This

Most junior developers never open a pull request before their first job. They submit applications saying they "know Git" but have never actually collaborated on a shared codebase. The engineers reviewing them in technical interviews can tell immediately.

Mastering pull requests — how to write them, how to review them, how to respond to feedback — is one of the highest-leverage things a junior developer can do. It signals professional readiness in a way that personal projects alone cannot.
    `,
  },
  {
    slug: "how-code-reviews-accelerate-growth",
    title: "How Code Reviews Accelerate Developer Growth Faster Than Tutorials",
    description:
      "One thorough code review from a senior engineer is worth more than ten hours of tutorial watching. Here is why code review is the highest-leverage learning tool available to developers.",
    category: "Career Growth",
    readTime: "6 min read",
    publishedAt: "2025-05-22",
    author: {
      name: "Priya Patel",
      title: "Engineering Manager at Vercel",
      initials: "PP",
      gradient: "from-emerald-500 to-cyan-500",
    },
    tags: ["Code Review", "Learning", "Career Growth", "Mentorship"],
  },
  {
    slug: "real-projects-vs-tutorial-projects",
    title: "Why Real Projects Beat Tutorial Projects Every Time",
    description:
      "Tutorial projects teach you how to write code. Real projects teach you how to be an engineer. The gap between the two is enormous — and most learners never make the crossing.",
    category: "Learning Philosophy",
    readTime: "7 min read",
    publishedAt: "2025-06-01",
    author: {
      name: "Marcus Thompson",
      title: "Senior Engineer at Shopify",
      initials: "MT",
      gradient: "from-rose-500 to-orange",
    },
    tags: ["Real Projects", "Portfolio", "Learning", "Junior Developer"],
  },
  {
    slug: "git-workflows-for-teams",
    title: "Git Workflows Every Developer Should Know Before Their First Job",
    description:
      "Branching strategies, commit conventions, merge vs rebase — the Git skills that separate developers who know the tool from developers who know how teams use the tool.",
    category: "Engineering Fundamentals",
    readTime: "10 min read",
    publishedAt: "2025-06-08",
    author: {
      name: "Alex Rivera",
      title: "Senior Engineer at Stripe",
      initials: "AR",
      gradient: "from-violet-500 to-indigo-500",
    },
    tags: ["Git", "Workflows", "Teams", "Branching"],
  },
  {
    slug: "agile-for-developers",
    title: "Agile for Developers: What Stand-ups, Sprints, and Retrospectives Actually Mean",
    description:
      "Agile is not about meetings. It is a way of shipping software incrementally, adapting to feedback, and working sustainably. Here is what agile looks like on the ground for an individual developer.",
    category: "Professional Practice",
    readTime: "9 min read",
    publishedAt: "2025-06-12",
    author: {
      name: "Elena Rodriguez",
      title: "Principal Engineer at Cloudflare",
      initials: "ER",
      gradient: "from-amber-500 to-orange",
    },
    tags: ["Agile", "Scrum", "Professional Skills", "Team Workflows"],
  },
];
