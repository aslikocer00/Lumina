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
          <stop offset="0%" stopColor="#ffe0ec" />
          <stop offset="100%" stopColor="#e5f0ff" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="28" fill="url(#face)" stroke="#111827" strokeWidth="2"/>
      <ellipse cx="32" cy="30" rx="16" ry="22" fill="none" stroke="#111827" strokeWidth="2" />
      <path d="M24 42 q8 8 16 0" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
      <circle cx="26" cy="28" r="2" fill="#111827" />
      <circle cx="38" cy="28" r="2" fill="#111827" />
    </svg>
  );
}

export default function StyleResults({ result }: StyleResultsProps) {
  return (
    <div className="grid gap-8 md:grid-cols-[1.3fr,1fr]">
      <section className="space-y-8 rounded-3xl border border-white/40 bg-white/75 p-8 backdrop-blur">
        <div className="flex items-center gap-4">
          <FaceShapeIcon />
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Face shape
            </p>
            <h2 className="text-2xl font-semibold">{result.faceShape.label}</h2>
            <p className="mt-2 text-sm text-gray-600">{result.faceShape.insight}</p>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Suggested colors
          </p>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {result.suggestedColors.map((color) => (
              <div
                key={color.name}
                className="rounded-2xl border border-white/50 bg-white/80 p-4 text-center shadow-sm"
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

        <div className="grid gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Body type
            </p>
            <p className="mt-2 text-sm font-medium text-gray-700">
              {result.bodyType}
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Skin tone
            </p>
            <p className="mt-2 text-sm font-medium text-gray-700">
              {result.skinTone}
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="rounded-3xl border border-white/40 bg-white/80 p-6 backdrop-blur">
          <h3 className="text-lg font-semibold">Clothing cuts</h3>
          <div className="mt-4 space-y-4">
            {result.clothingCuts.map((card) => (
              <article
                key={card.title}
                className="flex gap-4 rounded-2xl bg-white/80 p-4 shadow-sm"
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

        <div className="rounded-3xl border border-white/40 bg-white/80 p-6 backdrop-blur">
          <h3 className="text-lg font-semibold">Hairstyle picks</h3>
          <div className="mt-4 space-y-4">
            {result.hairstyles.map((card) => (
              <article
                key={card.title}
                className="flex gap-4 rounded-2xl bg-white/80 p-4 shadow-sm"
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
