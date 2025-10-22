'use client';

import { useEffect, useState } from "react";
import StyleResults from "@/components/StyleResults";
import type { StyleAnalysis } from "@/lib/mockApi";
import { analyzeStyle } from "@/lib/mockApi";

const DEFAULT_MESSAGE =
  "Upload a photo to see bespoke recommendations tailored to you.";

export default function ResultsPage() {
  const [result, setResult] = useState<StyleAnalysis | null>(null);
  const [message, setMessage] = useState(DEFAULT_MESSAGE);

  useEffect(() => {
    const stored = localStorage.getItem("styleai:last-result");
    if (stored) {
      try {
        const parsed: StyleAnalysis = JSON.parse(stored);
        setResult(parsed);
        setMessage("Here is your personalized StyleAI profile.");
        return;
      } catch (error) {
        console.error("Unable to parse stored result", error);
      }
    }
    // fallback to demo data
    analyzeStyle().then((demo) => {
      setResult(demo);
      setMessage(
        "This is a sample profile. Upload your photo to receive your own recommendations."
      );
    });
  }, []);

  return (
    <div className="mx-auto max-w-4xl space-y-10">
      <div className="rounded-[32px] border border-white/60 bg-white/80 p-8 shadow-lift backdrop-blur md:p-10">
        <p className="text-xs uppercase tracking-[0.35em] text-stone">
          Personalized profile
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-primary md:text-4xl">
          Your StyleAI insights
        </h1>
        <p className="mt-4 text-sm text-gray-600 md:text-base">{message}</p>
      </div>
      {result && <StyleResults result={result} />}
    </div>
  );
}
