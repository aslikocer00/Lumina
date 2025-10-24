"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Face Shape Mapping",
    description:
      "Capture subtle angles with computer vision so you can shop eyewear, necklines, and haircuts with confidence.",
    image: "/marketing/face-mapping.svg"
  },
  {
    title: "Body Blueprint",
    description:
      "Balanced proportions meet curated silhouettes. Know exactly which fits, rises, and drapes were made for you.",
    image: "/marketing/body-blueprint.svg"
  },
  {
    title: "Color Season Harmony",
    description:
      "Upload once, unlock a wardrobe palette. We decode undertones to surface flattering hues for every occasion.",
    image: "/marketing/color-harmony.svg"
  }
];

const steps = [
  {
    title: "Upload a photo",
    description:
      "High-resolution analysis keeps your data secure with on-device processing and encrypted storage."
  },
  {
    title: "Receive your style DNA",
    description:
      "In seconds, view your face shape, body type, and color season with actionable insights."
  },
  {
    title: "Shop with confidence",
    description:
      "Get personalized outfit formulas, color capsules, and hairstyling prompts tailored to your lifestyle."
  }
];

const testimonials = [
  {
    quote:
      "Lumina took the guesswork out of shopping. The color palette alone transformed my closet.",
    name: "Ava Torres",
    role: "Creative Director"
  },
  {
    quote:
      "The AI body blueprint helped me find silhouettes that finally feel made for me.",
    name: "Jordan Blake",
    role: "Product Manager"
  },
  {
    quote:
      "It feels like having a personal stylist in my pocket—minus the awkward fitting room chats.",
    name: "Maya Chen",
    role: "Interior Designer"
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function AppMarketingPage() {
  return (
    <main className="relative overflow-hidden">
      <GradientBackground />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <EarlyAccess />
      <Footer />
    </main>
  );
}

function GradientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute left-1/2 top-[8rem] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-white/60 via-blush/50 to-midnight/10 blur-3xl" />
      <div className="absolute right-0 top-0 h-[20rem] w-[20rem] rounded-full bg-gradient-to-tr from-champagne/80 to-white/50 blur-3xl" />
    </div>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:grid md:grid-cols-[3fr,2fr] md:items-center md:gap-16 lg:pt-28">
      <div className="space-y-8">
        <motion.div {...fadeInUp}>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/70 px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-graphite/70 backdrop-blur">
            In Beta
          </div>
        </motion.div>
        <motion.h1
          className="text-4xl font-semibold leading-tight tracking-tight text-midnight md:text-5xl lg:text-6xl"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.05 }}
        >
          Your AI personal stylist for timeless, effortless looks.
        </motion.h1>
        <motion.p
          className="text-base text-graphite/70 md:text-lg"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
        >
          Lumina analyzes your face shape, body blueprint, and color season to deliver wardrobe edits, curated shopping
          picks, and hair inspiration personalized to your biometric profile.
        </motion.p>
        <motion.div
          className="flex flex-col gap-3 sm:flex-row"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.15 }}
        >
          <Link
            href="#early-access"
            className="flex items-center justify-center rounded-full bg-midnight px-8 py-3 text-sm font-medium uppercase tracking-wide text-pearl shadow-glow transition hover:bg-graphite"
          >
            Join the waitlist
          </Link>
          <Link
            href="#how-it-works"
            className="flex items-center justify-center rounded-full border border-midnight/15 px-8 py-3 text-sm font-medium uppercase tracking-wide text-midnight transition hover:border-midnight/30 hover:bg-white/70"
          >
            See how it works
          </Link>
        </motion.div>
        <motion.div
          className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.3em] text-graphite/50"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
        >
          <span>Face Shape</span>
          <span>Body Type</span>
          <span>Color Season</span>
          <span>Curated Looks</span>
        </motion.div>
      </div>
      <motion.div
        className="mt-16 md:mt-0"
        {...fadeInUp}
        transition={{ ...fadeInUp.transition, delay: 0.25 }}
      >
        <div className="relative h-[20rem] overflow-hidden rounded-[2rem] border border-white/40 bg-gradient-to-br from-midnight via-graphite to-midnight shadow-2xl shadow-midnight/30 md:h-[28rem]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_60%),radial-gradient(circle_at_70%_30%,rgba(244,231,231,0.2),transparent_55%)]" />
          <Image
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
            alt="AI styling dashboard preview"
            fill
            className="object-cover object-center opacity-80"
            priority
          />
          <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/30 bg-white/20 p-4 backdrop-blur">
            <p className="text-sm font-medium tracking-wide text-white/90">Style DNA ready in 28 seconds</p>
            <p className="mt-1 text-xs text-white/60">Face shape: Heart · Body: Soft Natural · Season: Soft Summer</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Features() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20" id="features">
      <motion.div className="max-w-2xl" {...fadeInUp}>
        <h2 className="section-title">Precision styling from every angle</h2>
        <p className="section-subtitle">
          Our proprietary models read bone structure, posture, and pigmentation to deliver refined guidance worthy of a
          private atelier.
        </p>
      </motion.div>
      <div className="mt-16 grid gap-10 md:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className="group relative rounded-3xl border border-white/60 bg-white/75 p-8 backdrop-blur-lg transition hover:-translate-y-2 hover:shadow-glow"
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
          >
            <div className="relative h-40 overflow-hidden rounded-2xl bg-gradient-to-br from-pearl to-champagne">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover object-center opacity-80 transition duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-midnight">{feature.title}</h3>
            <p className="mt-3 text-sm text-graphite/70">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20" id="how-it-works">
      <div className="grid gap-16 md:grid-cols-[2fr,3fr] md:items-center">
        <motion.div
          className="relative h-[22rem] overflow-hidden rounded-[2.5rem] border border-white/60 bg-gradient-to-br from-white/80 to-blush/60 p-10 backdrop-blur"
          {...fadeInUp}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(11,13,23,0.08),transparent_55%),radial-gradient(circle_at_85%_20%,rgba(244,231,231,0.35),transparent_60%)]" />
          <div className="relative z-10 flex h-full flex-col justify-between text-midnight">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-graphite/60">Smart scan</p>
              <h3 className="mt-4 text-3xl font-semibold leading-snug">
                Modern computer vision meets luxury styling intelligence.
              </h3>
            </div>
            <ul className="space-y-3 text-sm text-graphite/70">
              <li className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-midnight text-xs font-medium tracking-wider text-pearl">
                  01
                </span>
                Pixel-perfect measurements captured in milliseconds.
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-midnight text-xs font-medium tracking-wider text-pearl">
                  02
                </span>
                Private, secure styling vault for your biometric profile.
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-midnight text-xs font-medium tracking-wider text-pearl">
                  03
                </span>
                Personalized lookbooks refreshed with each style goal.
              </li>
            </ul>
          </div>
        </motion.div>
        <motion.div className="space-y-10" {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.1 }}>
          <h2 className="section-title">How it works</h2>
          <ol className="space-y-8">
            {steps.map((step, index) => (
              <li key={step.title} className="relative pl-12">
                <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-midnight/20 bg-white text-sm font-medium text-midnight">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold text-midnight">{step.title}</h3>
                <p className="mt-2 text-sm text-graphite/70">{step.description}</p>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20" id="testimonials">
      <motion.div className="max-w-2xl" {...fadeInUp}>
        <h2 className="section-title">Loved by early adopters</h2>
        <p className="section-subtitle">
          Stylists, founders, and creatives rely on Lumina for everyday wardrobe decisions and marquee events.
        </p>
      </motion.div>
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.blockquote
            key={testimonial.name}
            className="flex h-full flex-col justify-between rounded-3xl border border-white/50 bg-white/80 p-8 text-sm text-graphite/80 backdrop-blur"
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
          >
            <p className="text-base leading-relaxed text-graphite/90">“{testimonial.quote}”</p>
            <footer className="mt-6 text-xs uppercase tracking-[0.25em] text-graphite/60">
              {testimonial.name}
              <span className="block text-[0.7rem] tracking-[0.3em] text-graphite/40">{testimonial.role}</span>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}

function EarlyAccess() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24" id="early-access">
      <motion.div
        className="overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/80 p-12 text-center shadow-glow backdrop-blur-lg"
        {...fadeInUp}
      >
        <p className="text-xs uppercase tracking-[0.4em] text-graphite/50">Exclusive beta</p>
        <h2 className="mt-6 text-3xl font-semibold text-midnight md:text-4xl">
          Be the first to experience couture-level AI styling.
        </h2>
        <p className="mt-4 text-sm text-graphite/70 md:text-base">
          Join the early access list for curated onboarding, personalized color decks, and concierge support.
        </p>
        <form className="mx-auto mt-8 flex max-w-xl flex-col gap-4 sm:flex-row">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            aria-label="Email"
            className="w-full rounded-full border border-midnight/10 bg-white/90 px-6 py-3 text-sm text-graphite placeholder:text-graphite/40 focus:border-midnight/40 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full bg-midnight px-8 py-3 text-sm font-medium uppercase tracking-wide text-pearl transition hover:bg-graphite"
          >
            Request invite
          </button>
        </form>
        <p className="mt-4 text-xs text-graphite/50">
          We respect your privacy. Cancel anytime.
        </p>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/60 bg-white/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 text-sm text-graphite/60 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-graphite/70">Lumina</p>
          <p className="mt-2 text-xs text-graphite/50">© {new Date().getFullYear()} Lumina Labs. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <SocialLink href="https://www.instagram.com" label="Instagram" />
          <SocialLink href="https://www.pinterest.com" label="Pinterest" />
          <SocialLink href="https://www.tiktok.com" label="TikTok" />
          <SocialLink href="mailto:hello@luminastyle.ai" label="Email" />
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-xs uppercase tracking-[0.3em] text-graphite/70 transition hover:text-midnight"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      {label}
    </Link>
  );
}
