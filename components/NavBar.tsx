'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/upload", label: "Upload" },
  { href: "/results", label: "Results" }
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-white/40 bg-white/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          StyleAI
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition-colors ${
                pathname === href ? "text-primary" : "hover:text-primary/80"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
        <Link
          href="/upload"
          className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-primary/90 md:block"
        >
          Try It Now
        </Link>
      </nav>
    </header>
  );
}
