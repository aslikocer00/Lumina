import Link from "next/link";

const features = [
  {
    title: "Precision facial mapping",
    description:
      "We capture your unique geometry to understand proportions, contours, and the silhouettes that celebrate them."
  },
  {
    title: "Color chemistry",
    description:
      "Lightweight tone-scanning reveals palettes that harmonize with your skin undertones for radiant pairings."
  },
  {
    title: "Wardrobe intelligence",
    description:
      "StyleAI curates textures, cuts, and finishes that move with you from day to dusk with effortless polish."
  }
];

const steps = [
  {
    title: "Upload a photo",
    description: "Use a clear, well-lit image. Our private pipeline processes it securely."
  },
  {
    title: "AI-driven analysis",
    description: "We evaluate face shape, body proportions, and complexion in seconds."
  },
  {
    title: "Curated insights",
    description: "Receive bespoke recommendations for color palettes, cuts, and hairstyles."
  },
  {
    title: "Confident styling",
    description: "Take the guesswork out of shopping with a lookbook grounded in you."
  }
];

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl space-y-24">
      <section className="overflow-hidden rounded-[32px] border border-white/50 bg-white/80 p-8 shadow-lift md:p-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr,1fr] md:items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-stone">
              Your personal AI stylist
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Bespoke style guidance crafted with{" "}
              <span className="rounded-full bg-accent/30 px-3 py-1">intention</span>.
            </h1>
            <p className="text-base text-gray-600 md:text-lg">
              StyleAI blends intelligent analysis with editorial taste to give you
              confidence in every look. Elevate your wardrobe with color stories,
              silhouettes, and hair concepts tailored to your features.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/upload"
                className="rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-white shadow-lift transition hover:bg-primary/90"
              >
                Upload your photo
              </Link>
              <Link
                href="/#how-it-works"
                className="rounded-full border border-primary/20 px-6 py-3 text-center text-sm font-semibold text-primary transition hover:border-primary hover:bg-white"
              >
                Discover the flow
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-8 -left-8 h-24 w-24 rounded-full bg-accent/40 blur-3xl" />
            <div className="absolute -bottom-10 -right-6 h-28 w-28 rounded-full bg-sand/60 blur-3xl" />
            <div className="relative rounded-3xl border border-white/60 bg-soft/70 p-6 shadow-lift">
              <p className="text-sm uppercase tracking-[0.3em] text-stone">
                Style summary
              </p>
              <div className="mt-4 grid gap-4 text-sm text-gray-600">
                {features.map((feature) => (
                  <div key={feature.title} className="rounded-2xl bg-white/70 p-4 shadow-sm">
                    <h3 className="text-base font-semibold text-primary">{feature.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="space-y-10">
        <div className="space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-stone">How It Works</p>
          <h2 className="text-3xl font-semibold">A guided journey to your signature look</h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600 md:text-base">
            Each step is crafted to respect your privacy while delivering insights you can act on immediately.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex h-full flex-col gap-3 rounded-3xl border border-white/60 bg-white/80 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-stone">
                Step {index + 1}
              </span>
              <h3 className="text-lg font-semibold text-primary">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="rounded-[32px] border border-white/60 bg-white/80 p-8 shadow-lift md:p-16"
      >
        <div className="grid gap-12 md:grid-cols-[1.2fr,1fr] md:items-center">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.4em] text-stone">About StyleAI</p>
            <h2 className="text-3xl font-semibold leading-tight">
              Elevated consultation, reimagined through thoughtful AI.
            </h2>
            <p className="text-sm text-gray-600 md:text-base">
              Our stylists and machine learning experts designed StyleAI to make luxury-level
              guidance accessible. The platform learns your preferences over time, evolving with
              each session to keep recommendations fresh, relevant, and distinctly you.
            </p>
            <Link
              href="/upload"
              className="inline-flex rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-primary transition hover:border-primary hover:bg-white"
            >
              Start your style session
            </Link>
          </div>
          <div className="rounded-3xl border border-white/60 bg-soft/80 p-8 shadow-lift">
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                Private-by-design processing keeps your images secure and ephemeral.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                Recommendations tuned by human stylists to maintain editorial taste.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                Responsive experience across mobile and desktop for on-the-go decisions.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
