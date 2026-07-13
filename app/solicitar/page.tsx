"use client";

import { useState } from "react";

const servicos = [
  "🚛 Guincho",
  "🔧 Oficina Mecânica",
  "🛞 Borracharia",
  "🔋 Bateria",
  "⚡ Auto Elétrica",
  "🔑 Chaveiro",
  "⛽ Pane Seca",
  "🚗 Auto Socorro",
];

export default function Solicitar() {
  const [servico, setServico] = useState("");

  return (
    <main className="min-h-screen bg-zinc-950 text-white py-20 px-6">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-black text-yellow-400 text-center">
          Solicitar Atendimento
        </h1>

        <p className="text-center text-gray-400 mt-5">
          Preencha as informações abaixo para encontrarmos o parceiro ideal para você.
        </p>

        <div className="bg-zinc-900 mt-12 rounded-2xl p-8 border border-zinc-800">

          <label className="block mb-2 font-bold">
            Serviço
          </label>

          <select
            className="w-full p-4 rounded-xl bg-zinc-800 mb-6"
            value={servico}
            onChange={(e) => setServico(e.target.value)}
          >
            <option value="">Selecione um serviço</option>

            {servicos.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <label className="block mb-2 font-bold">
            Cidade
          </label>

          <input
            className="w-full p-4 rounded-xl bg-zinc-800 mb-6"
            placeholder="Ex.: Carpina"
          />

          <label className="block mb-2 font-bold">
            Bairro
          </label>

          <input
            className="w-full p-4 rounded-xl bg-zinc-800 mb-6"
            placeholder="Seu bairro"
          />

          <label className="block mb-2 font-bold">
            Endereço
          </label>

          <input
            className="w-full p-4 rounded-xl bg-zinc-800 mb-6"
            placeholder="Rua, número..."
          />

          <label className="block mb-2 font-bold">
            Descreva o problema
          </label>

          <textarea
            className="w-full p-4 rounded-xl bg-zinc-800 h-40"
            placeholder="Ex.: Meu carro parou e não liga..."
          />

          <button
            className="w-full mt-8 bg-yellow-400 text-black font-bold py-4 rounded-xl hover:bg-yellow-300 transition"
          >
            🚨 ENVIAR SOLICITAÇÃO
          </button>

        </div>

      </div>

    </main>
  );
}