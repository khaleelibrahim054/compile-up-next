"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/programs", label: "Programs", children: [
    { href: "/programs/backend", label: "Backend Development" },
    { href: "/programs/frontend", label: "Frontend Development" },
    { href: "/programs/fullstack", label: "Full Stack Development" },
  ]},
  { href: "/how-it-works", label: "How It Works" },
  { href: "/mentors", label: "Mentors" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

function Logo() {
  return (
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
  );
}

function DropdownMenu({ items }: { items: { href: string; label: string }[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.96 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className="absolute left-0 top-full mt-2 w-56 rounded-xl border border-surface-700 bg-surface-900 p-1.5 shadow-2xl shadow-black/60"
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block rounded-lg px-4 py-2.5 text-sm text-text-muted transition-colors hover:bg-surface-700 hover:text-white"
        >
          {item.label}
        </Link>
      ))}
    </motion.div>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <>
      {/* Announcement banner */}
      <div className="relative z-50 bg-orange px-4 py-2 text-center text-sm font-medium text-white">
        <span className="hidden sm:inline">🎉 Free Founding Cohort — Limited spots available.</span>{" "}
        <Link
          href="/apply"
          className="underline underline-offset-2 transition-opacity hover:opacity-80"
        >
          Apply now before spots run out →
        </Link>
      </div>

      <header
        className={cn(
          "sticky top-0 z-40 transition-all duration-300",
          isScrolled
            ? "border-b border-surface-700/60 bg-surface-950/90 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.href)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                      pathname.startsWith(link.href)
                        ? "text-white"
                        : "text-text-muted hover:text-white"
                    )}
                    aria-expanded={openDropdown === link.href}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "size-3.5 transition-transform",
                        openDropdown === link.href && "rotate-180"
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {openDropdown === link.href && (
                      <DropdownMenu items={link.children} />
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                    pathname === link.href || pathname.startsWith(link.href + "/")
                      ? "text-white"
                      : "text-text-muted hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/verify-certificate"
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-text-muted transition-colors hover:text-white"
            >
              Verify Certificate
            </Link>
            <Link
              href="/apply"
              className="rounded-lg bg-orange px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-orange-dim glow-orange-sm"
            >
              Apply Free →
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="flex size-9 items-center justify-center rounded-lg border border-surface-700 text-text-muted transition-colors hover:text-white lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-surface-700 bg-surface-900 lg:hidden"
            >
              <nav className="flex flex-col gap-1 p-4" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors",
                        pathname === link.href || pathname.startsWith(link.href + "/")
                          ? "text-white"
                          : "text-text-muted hover:text-white"
                      )}
                    >
                      {link.label}
                    </Link>
                    {link.children?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg py-2 pl-8 pr-4 text-sm text-text-subtle transition-colors hover:text-white"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ))}
                <div className="mt-4 flex flex-col gap-2 border-t border-surface-700 pt-4">
                  <Link
                    href="/verify-certificate"
                    className="block rounded-lg px-4 py-2.5 text-center text-sm font-medium text-text-muted transition-colors hover:text-white"
                  >
                    Verify Certificate
                  </Link>
                  <Link
                    href="/apply"
                    className="block rounded-xl bg-orange px-4 py-3 text-center text-sm font-semibold text-white transition-all hover:bg-orange-dim"
                  >
                    Apply for Free →
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
