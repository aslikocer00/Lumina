'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/app", label: "App" },
  { href: "/upload", label: "Upload Photo" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#about", label: "About" }
];

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/upload" || href === "/app") {
      return pathname === href;
    }
    return pathname === "/" && href !== "/upload";
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          StyleAI
        </Link>
        <button
          type="button"
          aria-label="Toggle navigation"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sand bg-white text-primary transition hover:border-primary/40 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="sr-only">Menu</span>
          <span className="block h-0.5 w-5 bg-primary" />
        </button>
        <div className="hidden items-center gap-6 text-sm font-medium text-gray-600 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition-colors ${
                isActive(href) ? "text-primary" : "hover:text-primary/60"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/upload"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lift transition hover:bg-primary/90"
          >
            Get Started
          </Link>
        </div>
      </nav>
      {isOpen && (
        <div className="mx-5 mb-4 rounded-3xl border border-sand bg-white/90 p-4 shadow-lift md:hidden">
          <nav className="flex flex-col gap-3 text-sm font-medium text-gray-600">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`rounded-2xl px-4 py-3 transition ${
                  isActive(href)
                    ? "bg-soft text-primary"
                    : "hover:bg-soft/70 hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/upload"
              className="rounded-2xl bg-primary px-4 py-3 text-center font-semibold text-white shadow-lift transition hover:bg-primary/90"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
