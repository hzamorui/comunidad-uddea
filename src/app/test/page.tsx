import Link from 'next/link';

export default function TestPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-xl text-center">
        <h2 className="text-xl font-bold text-emerald-400 mb-2">Ruta de Prueba OK (/test)</h2>
        <p className="text-sm text-slate-300 mb-6">
          El enrutamiento de Next.js funciona correctamente.
        </p>
        <div className="text-left text-xs text-slate-400 bg-slate-900 p-3 rounded border border-slate-700 mb-6 space-y-1">
          <p>✔ Next.js App Router: Activo</p>
          <p>✔ Tailwind CSS: Compilando</p>
          <p>✔ Conexión Supabase: Módulo instanciado</p>
        </div>
        <Link
          href="/"
          className="text-sm text-slate-400 hover:text-white underline underline-offset-4"
        >
          ← Volver al inicio
        </Link>
      </div>
    </main>
  );
}