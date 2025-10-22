'use client';

import { ChangeEvent, FormEvent, useRef, useState } from "react";

type UploadFormProps = {
  onFilePreview: (file: File | null) => void;
  onSubmit: (file: File | null) => Promise<void>;
};

export default function UploadForm({
  onFilePreview,
  onSubmit
}: UploadFormProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    setSelectedFile(file);
    onFilePreview(file);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
      className="flex w-full flex-col gap-4 rounded-3xl border border-dashed border-gray-300 bg-white/60 p-6"
    >
      <p className="text-sm text-gray-500">
        For best results, upload a clear photo with good lighting.
      </p>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
      {selectedFile && (
        <div className="text-sm text-gray-600">
          <p className="font-medium">Selected file</p>
          <p>{selectedFile.name}</p>
        </div>
      )}
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="flex-1 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:bg-gray-400"
          disabled={!selectedFile}
        >
          Analyze my style
        </button>
        <button
          type="button"
          onClick={clearSelection}
          className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-600 transition hover:border-primary hover:text-primary"
        >
          Clear
        </button>
      </div>
    </form>
  );
}
