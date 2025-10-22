import Image from "next/image";
import { useState } from "react";
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
  const [expandedShape, setExpandedShape] = useState<string | null>(null);

  const toggleShape = (shape: string) => {
    setExpandedShape((current) => (current === shape ? null : shape));
  };

  return (
    <div className="space-y-12">
      <section className="grid gap-8 md:grid-cols-[1.35fr,1fr]">
        <div className="space-y-8 rounded-[28px] border border-white/60 bg-white/80 p-8 shadow-lift backdrop-blur">
          <div className="flex items-center gap-4">
            <FaceShapeIcon />
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-stone">
                Face shape
              </p>
              <h2 className="text-2xl font-semibold text-primary">
                {result.faceShape.label}
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                {result.faceShape.insight}
              </p>
            </div>
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

        <div className="flex flex-col gap-5">
          <div className="rounded-2xl bg-soft/80 p-5 shadow-inner">
            <p className="text-xs uppercase tracking-[0.3em] text-stone">
              Body type
            </p>
            <p className="mt-2 text-sm font-medium text-primary">
              {result.bodyType}
            </p>
          </div>
          <div className="rounded-2xl bg-soft/80 p-5 shadow-inner">
            <p className="text-xs uppercase tracking-[0.3em] text-stone">
              Skin tone
            </p>
            <p className="mt-2 text-sm font-medium text-primary">
              {result.skinTone}
            </p>
          </div>
          <div className="rounded-[24px] border border-white/60 bg-white/80 p-6 shadow-lift">
            <p className="text-xs uppercase tracking-[0.35em] text-stone">
              Your Color Season
            </p>
            <h3 className="mt-3 text-lg font-semibold text-primary">
              {result.colorSeason.season}
            </h3>
            <div className="mt-5 grid grid-cols-5 gap-3">
              {result.colorSeason.swatches.map((swatch) => (
                <div key={swatch.name} className="space-y-2 text-center text-xs">
                  <div
                    className="mx-auto h-16 w-16 rounded-full border border-white/60 shadow-inner"
                    style={{ backgroundColor: swatch.swatch }}
                    aria-hidden="true"
                  />
                  <p className="font-medium text-gray-600">{swatch.name}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-4 rounded-2xl bg-soft/70 p-5 text-sm text-gray-600">
              <div>
                <p className="font-semibold text-primary">Colors to wear</p>
                <ul className="mt-2 list-disc pl-5">
                  {result.colorSeason.wear.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-primary">Colors to avoid</p>
                <ul className="mt-2 list-disc pl-5">
                  {result.colorSeason.avoid.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
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

      <section className="grid gap-8 md:grid-cols-[1.3fr,1fr]">
        <div className="space-y-6 rounded-[28px] border border-white/60 bg-white/80 p-6 shadow-lift backdrop-blur">
          <h3 className="text-lg font-semibold text-primary">Body Type Guide</h3>
          <div className="space-y-4">
            {result.bodyGuide.map((guide) => {
              const isOpen = expandedShape === guide.shape;
              return (
                <button
                  key={guide.shape}
                  type="button"
                  onClick={() => toggleShape(guide.shape)}
                  className={`w-full rounded-2xl border border-white/60 bg-white/90 p-4 text-left shadow-sm transition ${
                    isOpen ? "shadow-lift" : "hover:-translate-y-0.5 hover:shadow-lift"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{guide.icon}</span>
                      <div>
                        <p className="text-sm font-semibold text-primary">{guide.shape}</p>
                        <p className="text-xs text-gray-600">{guide.intro}</p>
                      </div>
                    </div>
                    <span className="text-xl text-primary">{isOpen ? "−" : "+"}</span>
                  </div>
                  {isOpen && (
                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                      {guide.recommendations.map((tip) => (
                        <li key={tip} className="rounded-xl bg-soft/80 px-4 py-3">
                          {tip}
                        </li>
                      ))}
                    </ul>
                  )}
                </button>
              );
            })}
          </div>
        </div>
        <div className="rounded-[28px] border border-white/60 bg-white/80 p-6 shadow-lift backdrop-blur">
          <h3 className="text-lg font-semibold text-primary">Hairstyle & Accessories</h3>
          <div className="mt-4 space-y-4">
            {result.hairstyleAccessories.map((style) => (
              <article
                key={style.title}
                className="flex gap-4 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="relative h-24 w-24 overflow-hidden rounded-xl bg-soft">
                  <Image
                    src={style.imageUrl}
                    alt={style.title}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <div className="flex-1 space-y-3 text-sm text-gray-600">
                  <div>
                    <h4 className="text-sm font-semibold text-primary">{style.title}</h4>
                    <p className="mt-1 text-xs">{style.description}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone">
                      Accessories
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {style.accessories.map((accessory) => (
                        <li
                          key={accessory}
                          className="rounded-full bg-soft px-3 py-1 text-xs font-medium text-primary"
                        >
                          {accessory}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-6 rounded-[28px] border border-white/60 bg-white/80 p-6 shadow-lift backdrop-blur">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-stone">
              Shop the Look
            </p>
            <h3 className="text-lg font-semibold text-primary">
              Curated pieces inspired by your palette
            </h3>
          </div>
          <p className="text-xs text-gray-500">
            Links are illustrative to help you visualize the styling direction.
          </p>
        </div>
        <div className="space-y-8">
          {result.shopTheLook.map((collection) => (
            <div key={collection.title} className="space-y-4">
              <h4 className="text-sm font-semibold text-primary">{collection.title}</h4>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {collection.items.map((item) => (
                  <a
                    key={`${collection.title}-${item.name}`}
                    href={item.href}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-white/60 bg-white/90 shadow-sm transition hover:-translate-y-1 hover:shadow-lift"
                  >
                    <div className="relative h-48 w-full overflow-hidden bg-soft">
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-2 p-4">
                      <p className="text-sm font-semibold text-primary">{item.name}</p>
                      <span className="text-xs font-medium text-gray-500">
                        {item.retailer}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
