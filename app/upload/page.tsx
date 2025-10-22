'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import UploadForm from "@/components/UploadForm";
import LoadingOverlay from "@/components/LoadingOverlay";
import { analyzeStyle } from "@/lib/mockApi";

export default function UploadPage() {
  const [preview, setPreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  const handleFileChange = (file: File | null) => {
    if (preview) {
      URL.revokeObjectURL(preview);
    }
    if (!file) {
      setPreview(null);
      return;
    }
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
  };

  const handleSubmit = async (file: File | null) => {
    if (!file) return;
    setIsLoading(true);
    setProgress(0);

    let current = 0;
    const interval = window.setInterval(() => {
      current = Math.min(current + Math.random() * 18, 92);
      setProgress(Math.round(current));
    }, 350);

    try {
      const result = await analyzeStyle(file);
      setProgress(100);
      localStorage.setItem("styleai:last-result", JSON.stringify(result));
      router.push("/results");
    } finally {
      window.clearInterval(interval);
      setIsLoading(false);
      setTimeout(() => setProgress(0), 600);
    }
  };

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-10">
      <section className="rounded-[32px] border border-white/60 bg-white/80 p-8 text-center shadow-lift backdrop-blur md:p-12">
        <p className="text-xs uppercase tracking-[0.4em] text-stone">
          Start your consultation
        </p>
        <h1 className="mt-4 text-3xl font-semibold md:text-4xl">
          Upload a photo for a tailored style profile
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-600 md:text-base">
          Use a single, well-lit image. Our private AI will analyze your unique features
          to prepare a moodboard of colors, cuts, and hairstyles unique to you.
        </p>
        <div className="mt-10">
          <UploadForm
            previewUrl={preview}
            onFilePreview={handleFileChange}
            onSubmit={handleSubmit}
            disabled={isLoading}
          />
        </div>
        <p className="mt-6 text-xs text-gray-500">
          Images are processed securely and never stored after your session.
        </p>
      </section>
      {isLoading && <LoadingOverlay progress={progress} />}
    </div>
  );
}
