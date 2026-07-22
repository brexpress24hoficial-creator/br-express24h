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



          {/* ETAPA 1 */}

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




          {/* ETAPA 2 */}

          {etapa === 2 && (

            <div>

              <h2 className="text-2xl font-bold mb-8">
                Endereço da Empresa
              </h2>


              <div className="space-y-5">


                <input
                  placeholder="CEP"
                  className="w-full bg-[#0B0B0B] border border-zinc-700 rounded-xl p-4"
                />


                <div className="grid md:grid-cols-2 gap-5">


                  <input
                    placeholder="Estado"
                    className="w-full bg-[#0B0B0B] border border-zinc-700 rounded-xl p-4"
                  />


                  <input
                    placeholder="Cidade"
                    className="w-full bg-[#0B0B0B] border border-zinc-700 rounded-xl p-4"
                  />


                </div>


                <input
                  placeholder="Bairro"
                  className="w-full bg-[#0B0B0B] border border-zinc-700 rounded-xl p-4"
                />


                <input
                  placeholder="Rua"
                  className="w-full bg-[#0B0B0B] border border-zinc-700 rounded-xl p-4"
                />


                <div className="grid md:grid-cols-2 gap-5">


                  <input
                    placeholder="Número"
                    className="w-full bg-[#0B0B0B] border border-zinc-700 rounded-xl p-4"
                  />


                  <input
                    placeholder="Complemento"
                    className="w-full bg-[#0B0B0B] border border-zinc-700 rounded-xl p-4"
                  />


                </div>


                <input
                  placeholder="Ponto de Referência"
                  className="w-full bg-[#0B0B0B] border border-zinc-700 rounded-xl p-4"
                />


              </div>


            </div>

          )}


{/* ETAPA 3 */}

{etapa === 3 && (

<div>

<h2 className="text-2xl font-bold mb-8">
Serviços Oferecidos
</h2>


<p className="text-zinc-400 mb-8">
Selecione os serviços que sua empresa realiza.
</p>



<div className="grid md:grid-cols-2 gap-5">


<label className="bg-[#0B0B0B] border border-zinc-700 rounded-xl p-5 cursor-pointer hover:border-yellow-400">

<input 
type="checkbox"
className="mr-3"
/>

🚗 Motor e Mecânica Geral

</label>



<label className="bg-[#0B0B0B] border border-zinc-700 rounded-xl p-5 cursor-pointer hover:border-yellow-400">

<input 
type="checkbox"
className="mr-3"
/>

🛞 Pneus e Borracharia

</label>



<label className="bg-[#0B0B0B] border border-zinc-700 rounded-xl p-5 cursor-pointer hover:border-yellow-400">

<input 
type="checkbox"
className="mr-3"
/>

🔋 Bateria e Recarga

</label>



<label className="bg-[#0B0B0B] border border-zinc-700 rounded-xl p-5 cursor-pointer hover:border-yellow-400">

<input 
type="checkbox"
className="mr-3"
/>

🔌 Auto Elétrica

</label>



<label className="bg-[#0B0B0B] border border-zinc-700 rounded-xl p-5 cursor-pointer hover:border-yellow-400">

<input 
type="checkbox"
className="mr-3"
/>

🚚 Guincho e Reboque

</label>



<label className="bg-[#0B0B0B] border border-zinc-700 rounded-xl p-5 cursor-pointer hover:border-yellow-400">

<input 
type="checkbox"
className="mr-3"
/>

🔑 Chaveiro Automotivo

</label>



<label className="bg-[#0B0B0B] border border-zinc-700 rounded-xl p-5 cursor-pointer hover:border-yellow-400">

<input 
type="checkbox"
className="mr-3"
/>

⛽ Pane Seca

</label>



<label className="bg-[#0B0B0B] border border-zinc-700 rounded-xl p-5 cursor-pointer hover:border-yellow-400">

<input 
type="checkbox"
className="mr-3"
/>

🧰 Outros Serviços

</label>



</div>



<div className="mt-10">


<h3 className="font-bold text-xl mb-5">
Atendimento
</h3>



<div className="space-y-4">


<label className="block bg-[#0B0B0B] p-4 rounded-xl border border-zinc-700">

<input type="radio" name="horario" className="mr-3"/>

Atendimento Comercial

</label>



<label className="block bg-[#0B0B0B] p-4 rounded-xl border border-zinc-700">

<input type="radio" name="horario" className="mr-3"/>

Atendimento 24 horas

</label>


</div>


</div>


</div>

)}

{/* ETAPA 4 */}

{etapa === 4 && (

<div>

<h2 className="text-2xl font-bold mb-8">
Fotos e Documentos
</h2>


<p className="text-zinc-400 mb-8">
Envie imagens para apresentar sua empresa aos clientes.
</p>



<div className="space-y-6">


{/* LOGO */}

<div>

<label className="block mb-2 font-bold">
Logo da Empresa
</label>

<input
type="file"
accept="image/*"
className="w-full bg-[#0B0B0B] border border-zinc-700 rounded-xl p-4"
/>

</div>




{/* FACHADA */}

<div>

<label className="block mb-2 font-bold">
Foto da Fachada
</label>

<input
type="file"
accept="image/*"
className="w-full bg-[#0B0B0B] border border-zinc-700 rounded-xl p-4"
/>

</div>





{/* INTERNA */}

<div>

<label className="block mb-2 font-bold">
Foto Interna da Empresa
</label>

<input
type="file"
accept="image/*"
className="w-full bg-[#0B0B0B] border border-zinc-700 rounded-xl p-4"
/>

</div>





{/* VEICULO */}

<div>

<label className="block mb-2 font-bold">
Foto do Veículo de Atendimento
</label>

<input
type="file"
accept="image/*"
className="w-full bg-[#0B0B0B] border border-zinc-700 rounded-xl p-4"
/>

</div>





{/* DOCUMENTO */}

<div>

<label className="block mb-2 font-bold">
Documento da Empresa (opcional)
</label>

<input
type="file"
accept=".pdf,image/*"
className="w-full bg-[#0B0B0B] border border-zinc-700 rounded-xl p-4"
/>

</div>



</div>




<div className="mt-10 bg-[#0B0B0B] border border-zinc-800 rounded-xl p-5">


<h3 className="font-bold mb-3">
Importante:
</h3>


<p className="text-zinc-400">
As imagens serão analisadas pela equipe BR EXPRESS 24H
antes da aprovação do parceiro.
</p>


</div>



</div>

)}


{/* ETAPA 5 */}

{etapa === 5 && (

<div>

<h2 className="text-2xl font-bold mb-8">
Dados Financeiros
</h2>


<p className="text-zinc-400 mb-8">
Informe os dados para futuros pagamentos e repasses.
</p>



<div className="space-y-5">



<select
className="w-full bg-[#0B0B0B] border border-zinc-700 rounded-xl p-4"
>

<option>
Tipo de Chave PIX
</option>

<option>
CPF
</option>

<option>
CNPJ
</option>

<option>
Telefone
</option>

<option>
E-mail
</option>

<option>
Chave Aleatória
</option>


</select>





<input
placeholder="Chave PIX"
className="w-full bg-[#0B0B0B] border border-zinc-700 rounded-xl p-4"
/>





<input
placeholder="Nome do Titular da Conta"
className="w-full bg-[#0B0B0B] border border-zinc-700 rounded-xl p-4"
/>





<input
placeholder="Banco"
className="w-full bg-[#0B0B0B] border border-zinc-700 rounded-xl p-4"
/>





<div className="grid md:grid-cols-2 gap-5">


<input
placeholder="Agência"
className="w-full bg-[#0B0B0B] border border-zinc-700 rounded-xl p-4"
/>



<input
placeholder="Conta"
className="w-full bg-[#0B0B0B] border border-zinc-700 rounded-xl p-4"
/>


</div>





<select
className="w-full bg-[#0B0B0B] border border-zinc-700 rounded-xl p-4"
>

<option>
Tipo de Conta
</option>

<option>
Conta Corrente
</option>

<option>
Conta Poupança
</option>


</select>




</div>




<div className="mt-8 bg-[#111111] rounded-xl p-5 border border-zinc-800">


<h3 className="font-bold mb-2">
Segurança Financeira
</h3>


<p className="text-zinc-400">
Seus dados serão utilizados somente para processos financeiros
da parceria BR EXPRESS 24H.
</p>


</div>



</div>

)}

{/* ETAPA 6 */}

{etapa === 6 && (

<div>

<h2 className="text-2xl font-bold mb-8">
Revisão do Cadastro
</h2>


<p className="text-zinc-400 mb-8">
Confira todas as informações antes de enviar seu cadastro.
</p>



<div className="space-y-5">



<div className="bg-[#0B0B0B] border border-zinc-700 rounded-xl p-5">

<h3 className="font-bold text-yellow-400">
Empresa
</h3>

<p className="text-zinc-300 mt-2">
Nome da empresa cadastrado
</p>

<p className="text-zinc-300">
Responsável cadastrado
</p>

</div>





<div className="bg-[#0B0B0B] border border-zinc-700 rounded-xl p-5">

<h3 className="font-bold text-yellow-400">
Segmento
</h3>

<p className="text-zinc-300 mt-2">
Serviço escolhido pelo parceiro
</p>

</div>





<div className="bg-[#0B0B0B] border border-zinc-700 rounded-xl p-5">

<h3 className="font-bold text-yellow-400">
Plano Contratado
</h3>

<p className="text-zinc-300 mt-2">
Plano selecionado na plataforma
</p>

</div>





<div className="bg-[#0B0B0B] border border-zinc-700 rounded-xl p-5">

<h3 className="font-bold text-yellow-400">
Localização
</h3>

<p className="text-zinc-300 mt-2">
Cidade, bairro e endereço informado
</p>

</div>





<div className="bg-[#0B0B0B] border border-zinc-700 rounded-xl p-5">

<h3 className="font-bold text-yellow-400">
Serviços Oferecidos
</h3>

<p className="text-zinc-300 mt-2">
Serviços selecionados pelo parceiro
</p>

</div>



</div>





<div className="mt-10 space-y-4">


<label className="flex gap-3 items-center text-zinc-300">

<input 
type="checkbox"
/>

Aceito os Termos de Uso da BR EXPRESS 24H

</label>




<label className="flex gap-3 items-center text-zinc-300">

<input 
type="checkbox"
/>

Concordo em receber chamados da plataforma

</label>



<label className="flex gap-3 items-center text-zinc-300">

<input 
type="checkbox"
/>

Autorizo a análise das informações cadastradas

</label>



</div>





<div className="mt-10 bg-yellow-400 text-black rounded-2xl p-6">


<h3 className="font-bold text-xl">
Pronto para fazer parte da rede?
</h3>


<p className="mt-2">
Após enviar, nossa equipe analisará seu cadastro.
</p>


</div>



</div>

)}

          {/* BOTÕES */}

          <div className="flex justify-between mt-10">


            <button

              onClick={() => setEtapa(etapa - 1)}

              disabled={etapa === 1}

              className="border border-zinc-700 px-8 py-3 rounded-xl disabled:opacity-30"
            >

              ← Voltar

            </button>



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