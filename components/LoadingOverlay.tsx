'use client';

export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-white/70 backdrop-blur">
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-white/60 bg-white/80 px-10 py-8 shadow-lg">
        <div className="h-12 w-12 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        <p className="text-sm font-medium text-gray-600">
          Analyzing your style...
        </p>
      </div>
    </div>
  );
}
