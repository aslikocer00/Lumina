'use client';

import Image from "next/image";
import { ChangeEvent, DragEvent, FormEvent, useRef, useState } from "react";

type UploadFormProps = {
  previewUrl: string | null;
  onFilePreview: (file: File | null) => void;
  onSubmit: (file: File | null) => Promise<void>;
  disabled?: boolean;
};

export default function UploadForm({
  previewUrl,
  onFilePreview,
  onSubmit,
  disabled = false
}: UploadFormProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    setSelectedFile(file);
    onFilePreview(file);
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (!disabled) {
      setIsDragging(true);
    }
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    if (disabled) return;

    const file = event.dataTransfer.files?.[0] ?? null;
    if (file) {
      setSelectedFile(file);
      onFilePreview(file);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (disabled) return;
    await onSubmit(selectedFile);
  };

  const clearSelection = () => {
    setSelectedFile(null);
    onFilePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-xl flex-col gap-6"
    >
      <label
        htmlFor="upload-input"
        className="flex cursor-pointer flex-col gap-3 text-sm text-gray-500"
      >
        <span className="font-medium text-primary">Drop or select your image</span>
        <input
          id="upload-input"
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="hidden"
          disabled={disabled}
        />
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`relative flex min-h-[320px] flex-col items-center justify-center overflow-hidden rounded-[28px] border border-dashed border-primary/20 bg-soft/70 p-6 text-center transition ${
            isDragging ? "border-primary bg-soft" : "hover:border-primary/40"
          } ${disabled ? "cursor-not-allowed opacity-70" : "cursor-pointer"}`}
        >
          {previewUrl ? (
            <>
              <Image
                src={previewUrl}
                alt="Uploaded preview"
                fill
                className="pointer-events-none object-cover"
                sizes="(min-width: 768px) 480px, 100vw"
              />
              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-end rounded-[28px] bg-gradient-to-t from-primary/50 via-primary/10 to-transparent p-6 text-white">
                <p className="text-sm font-medium">Tap or drop to replace photo</p>
              </div>
            </>
          ) : (
            <div className="space-y-3">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
                <span className="text-xl text-primary">＋</span>
              </div>
              <p className="text-base font-semibold text-primary">
                Drag & drop your photo here
              </p>
              <p>
                or <span className="underline">browse files</span> from your device
              </p>
              <p className="text-xs text-gray-500">
                Accepts PNG, JPG up to 10MB
              </p>
            </div>
          )}
        </div>
      </label>
      {selectedFile && (
        <div className="rounded-2xl bg-soft/70 px-5 py-4 text-left text-sm text-gray-600">
          <p className="font-medium text-primary">Selected file</p>
          <p className="truncate">{selectedFile.name}</p>
        </div>
      )}
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="flex-1 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lift transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:bg-stone"
          disabled={!selectedFile || disabled}
        >
          Analyze my style
        </button>
        <button
          type="button"
          onClick={clearSelection}
          className="rounded-full border border-primary/20 px-6 py-3 text-sm font-semibold text-primary transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
          disabled={disabled}
        >
          Clear
        </button>
      </div>
    </form>
  );
}
