import Link from "next/link";

export default function Hero() {
  return (
    <section className="overflow-hidden rounded-3xl border border-white/40 bg-white/70 p-10 shadow-sm backdrop-blur md:p-16">
      <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
        Introducing StyleAI
      </p>
      <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
        Personal styling that understands{" "}
        <span className="rounded-full bg-accent/10 px-3 py-1">you</span>.
      </h1>
      <p className="mt-6 max-w-xl text-base text-gray-600 md:text-lg">
        Upload a single photo and let our AI decode your features, complexion,
        and proportions to curate outfits, color palettes, and hairstyles that
        feel inherently yours.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/upload"
          className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
        >
          Try It Now
        </Link>
        <Link
          href="/results"
          className="rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
        >
          View Sample Results
        </Link>
      </div>
    </section>
  );
}
