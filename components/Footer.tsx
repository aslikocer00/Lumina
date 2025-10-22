export default function Footer() {
  return (
    <footer className="border-t border-white/40 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} StyleAI. Crafted with thoughtful AI.</p>
        <div className="flex gap-4">
          <a
            href="mailto:hello@styleai.app"
            className="transition hover:text-primary/80"
          >
            Contact
          </a>
          <a href="#" className="transition hover:text-primary/80">
            Privacy
          </a>
          <a href="#" className="transition hover:text-primary/80">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
