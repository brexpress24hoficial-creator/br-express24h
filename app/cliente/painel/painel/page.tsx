import Link from "next/link";
import {
  Car,
  User,
  Clock3,
  Settings,
  PlusCircle,
} from "lucide-react";

export default function PainelCliente() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      {/* Cabeçalho */}
      <header className="bg-black border-b border-zinc-800 px-8 py-6 flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-black text-yellow-400">
            BR EXPRESS 24H
          </h1>

          <p className="text-gray-400">
            Bem-vindo(a)!
          </p>
        </div>

        <Link
          href="/"
          className="bg-yellow-400 text-black px-5 py-3 rounded-xl font-bold"
        >
          Sair
        </Link>

      </header>

      {/* Conteúdo */}
      <div className="max-w-7xl mx-auto py-12 px-6">

        <h2 className="text-4xl font-bold mb-10">
          Painel do Cliente
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <Link
            href="/solicitar"
            className="bg-zinc-900 p-8 rounded-2xl hover:border-yellow-400 border border-zinc-800 transition"
          >
            <PlusCircle className="text-yellow-400 mb-5" size={40} />

            <h3 className="text-2xl font-bold">
              Novo Atendimento
            </h3>

            <p className="text-gray-400 mt-3">
              Solicite ajuda rapidamente.
            </p>
          </Link>

          <Link
            href="#"
            className="bg-zinc-900 p-8 rounded-2xl hover:border-yellow-400 border border-zinc-800 transition"
          >
            <Clock3 className="text-yellow-400 mb-5" size={40} />

            <h3 className="text-2xl font-bold">
              Histórico
            </h3>

            <p className="text-gray-400 mt-3">
              Veja seus atendimentos.
            </p>
          </Link>

          <Link
            href="#"
            className="bg-zinc-900 p-8 rounded-2xl hover:border-yellow-400 border border-zinc-800 transition"
          >
            <Car className="text-yellow-400 mb-5" size={40} />

            <h3 className="text-2xl font-bold">
              Meus Veículos
            </h3>

            <p className="text-gray-400 mt-3">
              Cadastre seus veículos.
            </p>
          </Link>

          <Link
            href="#"
            className="bg-zinc-900 p-8 rounded-2xl hover:border-yellow-400 border border-zinc-800 transition"
          >
            <User className="text-yellow-400 mb-5" size={40} />

            <h3 className="text-2xl font-bold">
              Meu Perfil
            </h3>

            <p className="text-gray-400 mt-3">
              Atualize seus dados.
            </p>
          </Link>

          <Link
            href="#"
            className="bg-zinc-900 p-8 rounded-2xl hover:border-yellow-400 border border-zinc-800 transition"
          >
            <Settings className="text-yellow-400 mb-5" size={40} />

            <h3 className="text-2xl font-bold">
              Configurações
            </h3>

            <p className="text-gray-400 mt-3">
              Preferências da conta.
            </p>
          </Link>

        </div>

      </div>

    </main>
  );
}
