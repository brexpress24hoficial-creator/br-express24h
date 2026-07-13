"use client";

import { useState } from "react";

export default function Cadastro() {
  const [loading, setLoading] = useState(false);

  function cadastrar(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      alert("Conta criada com sucesso! Em breve você poderá confirmar seu e-mail.");
      setLoading(false);
    }, 1500);
  }

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6 py-16">
      <form
        onSubmit={cadastrar}
        className="bg-zinc-900 w-full max-w-xl rounded-2xl p-8 border border-zinc-800"
      >
        <h1 className="text-4xl font-black text-yellow-400 text-center">
          Criar Conta
        </h1>

        <p className="text-gray-400 text-center mt-3 mb-8">
          Cadastre-se para solicitar atendimentos.
        </p>

        <div className="space-y-5">

          <input
            className="w-full p-4 rounded-xl bg-zinc-800 text-white"
            placeholder="Nome Completo"
          />

          <input
            className="w-full p-4 rounded-xl bg-zinc-800 text-white"
            placeholder="CPF"
          />

          <input
            className="w-full p-4 rounded-xl bg-zinc-800 text-white"
            placeholder="Celular"
          />

          <input
            type="email"
            className="w-full p-4 rounded-xl bg-zinc-800 text-white"
            placeholder="E-mail"
          />

          <input
            type="password"
            className="w-full p-4 rounded-xl bg-zinc-800 text-white"
            placeholder="Senha"
          />

          <input
            type="password"
            className="w-full p-4 rounded-xl bg-zinc-800 text-white"
            placeholder="Confirmar Senha"
          />

          <button
            className="w-full bg-yellow-400 text-black font-bold py-4 rounded-xl hover:bg-yellow-300 transition"
          >
            {loading ? "Criando Conta..." : "Criar Conta"}
          </button>

        </div>
      </form>
    </main>
  );
}