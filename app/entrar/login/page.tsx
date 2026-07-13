"use client";

import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [loading, setLoading] = useState(false);

  function entrar(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      alert("Login realizado com sucesso! (Em breve será conectado ao banco de dados)");
      setLoading(false);
    }, 1500);
  }

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6 py-16">
      <form
        onSubmit={entrar}
        className="bg-zinc-900 w-full max-w-md rounded-2xl p-8 border border-zinc-800 shadow-2xl"
      >
        <h1 className="text-4xl font-black text-yellow-400 text-center">
          Entrar
        </h1>

        <p className="text-center text-gray-400 mt-3 mb-8">
          Acesse sua conta da BR EXPRESS 24H
        </p>

        <div className="space-y-5">

          <input
            type="email"
            placeholder="E-mail"
            className="w-full p-4 rounded-xl bg-zinc-800 text-white outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />

          <input
            type="password"
            placeholder="Senha"
            className="w-full p-4 rounded-xl bg-zinc-800 text-white outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-bold py-4 rounded-xl hover:bg-yellow-300 transition"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>

          <Link
            href="/entrar/cadastro"
            className="block text-center text-yellow-400 hover:underline"
          >
            Não possui uma conta? Criar Conta
          </Link>

          <Link
            href="#"
            className="block text-center text-gray-400 hover:text-white"
          >
            Esqueci minha senha
          </Link>

        </div>
      </form>
    </main>
  );
}