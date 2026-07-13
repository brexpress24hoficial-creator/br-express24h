import Link from "next/link";

export default function Entrar() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-zinc-900 p-8 rounded-2xl shadow-2xl border border-zinc-800">

        <h1 className="text-4xl font-black text-yellow-400 text-center">
          BR EXPRESS 24H
        </h1>

        <p className="text-center text-gray-400 mt-3">
          Escolha como deseja acessar
        </p>

        <div className="mt-10 space-y-4">

          <Link
            href="/entrar/login"
            className="block w-full bg-yellow-400 text-black text-center py-4 rounded-xl font-bold hover:bg-yellow-300 transition"
          >
            Entrar
          </Link>

          <Link
            href="/entrar/cadastro"
            className="block w-full border border-yellow-400 text-yellow-400 text-center py-4 rounded-xl hover:bg-yellow-400 hover:text-black transition"
          >
            Criar Conta
          </Link>

        </div>

      </div>
    </main>
  );
}