'use client';

type LoadingOverlayProps = {
  progress: number;
};

export default function LoadingOverlay({ progress }: LoadingOverlayProps) {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-white/80 backdrop-blur-sm transition-opacity">
      <div className="w-full max-w-sm rounded-[28px] border border-white/60 bg-white/90 p-8 shadow-lift">
        <div className="flex flex-col gap-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone">
            Analyzing
          </p>
          <p className="text-base text-gray-600">
            Curating your personalized style insights...
          </p>
          <div className="relative h-2 w-full overflow-hidden rounded-full bg-soft">
            <div
              className="h-full rounded-full bg-accent transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
              aria-hidden="true"
            />
          </div>
          <span className="text-xs font-medium text-gray-500">
            {Math.min(progress, 100)}%
          </span>
          <div className="mx-auto h-12 w-12 animate-pulse rounded-full border border-accent/40 bg-accent/20" />
        </div>
      </div>
    </div>
  );
}
