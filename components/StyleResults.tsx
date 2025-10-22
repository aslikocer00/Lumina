import Image from "next/image";
import type { StyleAnalysis } from "@/lib/mockApi";

type StyleResultsProps = {
  result: StyleAnalysis;
};

function FaceShapeIcon() {
  return (
    <svg
      width={56}
      height={56}
      viewBox="0 0 64 64"
      aria-hidden="true"
      className="text-primary"
    >
      <defs>
        <linearGradient id="face" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f3f6ef" />
          <stop offset="100%" stopColor="#dae7d6" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="28" fill="url(#face)" stroke="currentColor" strokeWidth="2" />
      <ellipse cx="32" cy="30" rx="16" ry="22" fill="none" stroke="currentColor" strokeWidth="2" />
      <path
        d="M24 42 q8 8 16 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="26" cy="28" r="2" fill="currentColor" />
      <circle cx="38" cy="28" r="2" fill="currentColor" />
    </svg>
  );
}

export default function StyleResults({ result }: StyleResultsProps) {
  return (
    <div className="grid gap-8 md:grid-cols-[1.3fr,1fr]">
      <section className="space-y-8 rounded-[28px] border border-white/60 bg-white/80 p-8 shadow-lift backdrop-blur">
        <div className="flex items-center gap-4">
          <FaceShapeIcon />
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-stone">
              Face shape
            </p>
            <h2 className="text-2xl font-semibold text-primary">{result.faceShape.label}</h2>
            <p className="mt-2 text-sm text-gray-600">{result.faceShape.insight}</p>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-stone">
            Suggested colors
          </p>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {result.suggestedColors.map((color) => (
              <div
                key={color.name}
                className="rounded-2xl border border-white/60 bg-white/90 p-4 text-center shadow-sm"
              >
                <div
                  className="mx-auto h-16 w-16 rounded-full border border-white/60 shadow-inner"
                  style={{ backgroundColor: color.swatch }}
                  aria-hidden="true"
                />
                <p className="mt-3 text-sm font-semibold text-gray-700">
                  {color.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 rounded-2xl bg-soft/80 p-5 shadow-inner">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-stone">
              Body type
            </p>
            <p className="mt-2 text-sm font-medium text-primary">
              {result.bodyType}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-stone">
              Skin tone
            </p>
            <p className="mt-2 text-sm font-medium text-primary">
              {result.skinTone}
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="rounded-[28px] border border-white/60 bg-white/80 p-6 shadow-lift backdrop-blur">
          <h3 className="text-lg font-semibold text-primary">Clothing cuts</h3>
          <div className="mt-4 space-y-4">
            {result.clothingCuts.map((card) => (
              <article
                key={card.title}
                className="flex gap-4 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="relative h-20 w-20 overflow-hidden rounded-xl bg-soft">
                  <Image
                    src={card.imageUrl}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">{card.title}</h4>
                  <p className="mt-2 text-xs text-gray-600">
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-white/60 bg-white/80 p-6 shadow-lift backdrop-blur">
          <h3 className="text-lg font-semibold text-primary">Hairstyle picks</h3>
          <div className="mt-4 space-y-4">
            {result.hairstyles.map((card) => (
              <article
                key={card.title}
                className="flex gap-4 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="relative h-20 w-20 overflow-hidden rounded-xl bg-soft">
                  <Image
                    src={card.imageUrl}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">{card.title}</h4>
                  <p className="mt-2 text-xs text-gray-600">
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
