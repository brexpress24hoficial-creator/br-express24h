"use client";

import Link from "next/link";

export default function LoginParceiroPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-[#171717] rounded-3xl border border-zinc-800 p-10">

        <div className="text-center">

          <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold">
            BR EXPRESS 24H
          </span>

          <h1 className="text-4xl font-bold mt-8">
            Área do Parceiro
          </h1>

          <p className="text-zinc-400 mt-4">
            Faça login para acessar seu painel.
          </p>

        </div>

        <div className="mt-10 space-y-5">

          <input
            type="text"
            placeholder="E-mail ou WhatsApp"
            className="w-full bg-[#0B0B0B] border border-zinc-700 rounded-xl p-4"
          />

          <input
            type="password"
            placeholder="Senha"
            className="w-full bg-[#0B0B0B] border border-zinc-700 rounded-xl p-4"
          />

        </div>

        <div className="flex justify-between items-center mt-5 text-sm">

          <label className="flex items-center gap-2">

            <input type="checkbox"/>

            Lembrar de mim

          </label>

          <Link
            href="#"
            className="text-yellow-400 hover:underline"
          >
            Esqueci minha senha
          </Link>

        </div>

        <button
          onClick={() => window.location.href="/parceiro/dashboard"}
          className="w-full mt-8 bg-yellow-400 text-black py-4 rounded-xl font-bold hover:scale-105 duration-300"
        >
          Entrar
        </button>

        <div className="text-center mt-8">

          <p className="text-zinc-400">
            Ainda não é parceiro?
          </p>

          <Link
            href="/parceiro"
            className="text-yellow-400 font-bold hover:underline"
          >
            Quero ser Parceiro
          </Link>

        </div>

      </div>

    </main>
  );
}