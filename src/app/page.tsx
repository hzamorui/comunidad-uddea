import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-xl w-full bg-slate-800 border border-slate-700 rounded-xl p-8 shadow-2xl">
        <div className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-full mb-4 border border-emerald-500/20">
          U-Lab UDDEA 2026 · Equipo 09
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-3">
          Comunidad Digital UDDEA
        </h1>
        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
          Plataforma profesional para directores deportivos, analistas, scouts y cuerpos técnicos.
        </p>

        <div className="p-4 bg-slate-900/60 rounded-lg border border-slate-700/60 mb-6">
          <div className="flex items-center gap-2 text-sm font-medium text-emerald-400">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Esqueleto base operativo (Issue #13)
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Next.js App Router activo y cliente Supabase listo.
          </p>
        </div>

        <Link
          href="/test"
          className="inline-flex justify-center items-center w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm rounded-lg transition-colors"
        >
          Probar ruta interna (/test) →
        </Link>
      </div>
    </main>
  );
}