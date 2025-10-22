'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import UploadForm from "@/components/UploadForm";
import LoadingOverlay from "@/components/LoadingOverlay";
import { analyzeStyle } from "@/lib/mockApi";

export default function UploadPage() {
  const [preview, setPreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
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

    try {
      const result = await analyzeStyle(file);
      localStorage.setItem("styleai:last-result", JSON.stringify(result));
      router.push("/results");
    } finally {
      setIsLoading(false);
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
    <div className="mx-auto flex max-w-4xl flex-col gap-10">
      <section className="rounded-3xl border border-white/40 bg-white/70 p-8 backdrop-blur">
        <h1 className="text-3xl font-semibold">Upload your photo</h1>
        <p className="mt-3 text-sm text-gray-600">
          We&apos;ll analyze face geometry, body proportions, and complexion to
          surface your most flattering looks.
        </p>
        <div className="mt-6 flex flex-col gap-8 md:flex-row">
          <UploadForm onFilePreview={handleFileChange} onSubmit={handleSubmit} />
          <div className="relative flex h-64 w-full items-center justify-center overflow-hidden rounded-3xl bg-soft md:w-1/2">
            {preview ? (
              <Image
                src={preview}
                alt="Uploaded preview"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 90vw"
              />
            ) : (
              <p className="text-sm text-gray-500">
                Your photo preview appears here.
              </p>
            )}
          </div>
        </div>
      </section>
      {isLoading && <LoadingOverlay />}
    </div>
  );
}
