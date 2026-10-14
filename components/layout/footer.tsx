import Link from "next/link";
import { Code2, Globe, ExternalLink, AtSign } from "lucide-react";

const footerLinks = {
  Programs: [
    { href: "/programs/backend", label: "Backend Development" },
    { href: "/programs/frontend", label: "Frontend Development" },
    { href: "/programs/fullstack", label: "Full Stack Development" },
  ],
  Platform: [
    { href: "/how-it-works", label: "How It Works" },
    { href: "/mentors", label: "Meet the Mentors" },
    { href: "/verify-certificate", label: "Verify Certificate" },
    { href: "/apply", label: "Apply Now" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQ" },
  ],
  Legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
  ],
};

const socialLinks = [
  { href: "https://twitter.com/compileup", label: "Twitter / X", icon: AtSign },
  { href: "https://github.com/compileup", label: "GitHub", icon: Globe },
  { href: "https://linkedin.com/company/compileup", label: "LinkedIn", icon: ExternalLink },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-700 bg-surface-900" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Top: brand + links */}
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2.5 font-display font-bold text-white"
              aria-label="CompileUp home"
            >
              <div className="flex size-8 items-center justify-center rounded-lg bg-orange">
                <Code2 className="size-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-lg">
                Compile<span className="text-orange">Up</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-muted">
              The software engineering apprenticeship where aspiring developers learn by building real software.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-8 items-center justify-center rounded-lg border border-surface-700 text-text-muted transition-colors hover:border-orange/40 hover:text-orange"
                >
                  <Icon className="size-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-text-subtle">
                {group}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-text-muted transition-colors hover:text-white"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-surface-700 pt-8 sm:flex-row">
          <p className="text-sm text-text-subtle">
            © {currentYear} CompileUp. All rights reserved.
          </p>
          <p className="text-sm text-text-subtle">
            Learn by Building.{" "}
            <span className="text-orange">Grow by Contributing.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
