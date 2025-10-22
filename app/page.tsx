import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl space-y-16">
      <Hero />
      <section className="grid gap-10 md:grid-cols-3">
        <div className="rounded-3xl border border-white/30 bg-white/60 p-6 shadow-sm backdrop-blur">
          <h3 className="text-xl font-semibold">Hyper-personalized insights</h3>
          <p className="mt-2 text-sm text-gray-600">
            StyleAI blends facial mapping with body proportion analysis to
            deliver recommendations tailored to you.
          </p>
        </div>
        <div className="rounded-3xl border border-white/30 bg-white/60 p-6 shadow-sm backdrop-blur">
          <h3 className="text-xl font-semibold">Smart color matching</h3>
          <p className="mt-2 text-sm text-gray-600">
            Discover palettes that amplify your natural tones with effortless
            swatches and styling tips.
          </p>
        </div>
        <div className="rounded-3xl border border-white/30 bg-white/60 p-6 shadow-sm backdrop-blur">
          <h3 className="text-xl font-semibold">Ready for any occasion</h3>
          <p className="mt-2 text-sm text-gray-600">
            Head-to-toe outfit and hair guidance so you can feel confident from
            nine-to-five to nights out.
          </p>
        </div>
      </section>
    </div>
  );
}
