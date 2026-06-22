import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#060604] text-white font-mono flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold tracking-tight">
          404<span className="text-[#d4a017]">.</span>
        </h1>
        <p className="text-sm text-white/50">Page not found</p>
        <Link
          href="/"
          className="inline-block text-xs uppercase tracking-[0.15em] text-[#d4a017] hover:text-white transition-colors mt-4"
        >
          ← Back
        </Link>
      </div>
    </div>
  );
}