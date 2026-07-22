"use client";

import { useState } from "react";

export default function CadastroParceiroPage() {

  const [etapa, setEtapa] = useState(1);


  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">

      <div className="max-w-4xl mx-auto px-6 py-16">


        {/* CABEÇALHO */}

        <div className="text-center">

          <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold">
            BR EXPRESS 24H
          </span>


          <h1 className="text-4xl md:text-5xl font-bold mt-8">
            Cadastro de Parceiro
          </h1>


          <p className="text-zinc-400 mt-4">
            Complete seus dados para fazer parte da nossa rede.
          </p>


        </div>



        {/* PROGRESSO */}

        <div className="mt-12">


          <div className="flex justify-between text-sm text-zinc-400 mb-3">

            <span>
              Etapa {etapa} de 6
            </span>

            <span>
              {Math.round((etapa / 6) * 100)}%
            </span>

          </div>



          <div className="w-full bg-zinc-800 rounded-full h-3">

            <div
              className="bg-yellow-400 h-3 rounded-full transition-all"
              style={{
                width:`${(etapa / 6) * 100}%`
              }}
            />

          </div>


        </div>



        {/* CARD DO FORMULÁRIO */}


        <div className="bg-[#171717] rounded-3xl p-8 mt-12 border border-zinc-800">


          {etapa === 1 && (

            <div>

              <h2 className="text-2xl font-bold mb-8">
                Dados da Empresa
              </h2>


              <div className="space-y-5">


                <input
                  placeholder="Nome da Empresa"
                  className="w-full bg-[#0B0B0B] border border-zinc-700 rounded-xl p-4"
                />


                <input
                  placeholder="Nome do Responsável"
                  className="w-full bg-[#0B0B0B] border border-zinc-700 rounded-xl p-4"
                />


                <input
                  placeholder="CPF"
                  className="w-full bg-[#0B0B0B] border border-zinc-700 rounded-xl p-4"
                />


                <input
                  placeholder="CNPJ (opcional)"
                  className="w-full bg-[#0B0B0B] border border-zinc-700 rounded-xl p-4"
                />


                <input
                  placeholder="WhatsApp"
                  className="w-full bg-[#0B0B0B] border border-zinc-700 rounded-xl p-4"
                />


                <input
                  placeholder="E-mail"
                  className="w-full bg-[#0B0B0B] border border-zinc-700 rounded-xl p-4"
                />


                <input
                  type="password"
                  placeholder="Criar Senha"
                  className="w-full bg-[#0B0B0B] border border-zinc-700 rounded-xl p-4"
                />


              </div>


            </div>

          )}




          {/* BOTÕES */}

          <div className="flex justify-end mt-10">


            <button
              onClick={() => setEtapa(etapa + 1)}
              className="bg-yellow-400 text-black px-8 py-3 rounded-xl font-bold"
            >

              Continuar →

            </button>


          </div>



        </div>


      </div>


    </main>
  );
}