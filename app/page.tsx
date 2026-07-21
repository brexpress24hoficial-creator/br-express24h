import Link from "next/link";

const servicos = [
  {
    nome: "Guincho",
    emoji: "🚛",
    descricao: "Atendimento 24 horas para remoção de veículos."
  },
  {
    nome: "Borracharia",
    emoji: "🛞",
    descricao: "Troca de pneus, reparos e socorro rápido."
  },
  {
    nome: "Mecânica",
    emoji: "🔧",
    descricao: "Problemas mecânicos em qualquer lugar."
  },
  {
    nome: "Auto Elétrica",
    emoji: "🔋",
    descricao: "Bateria, pane elétrica e partida auxiliar."
  },
  {
    nome: "Chaveiro",
    emoji: "🔑",
    descricao: "Perdeu a chave? Nós resolvemos."
  }
];

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}

      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-black"></div>

        <div className="max-w-7xl mx-auto px-6 py-24 relative">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>

              <span className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold">
                Atendimento 24 Horas
              </span>

              <h1 className="text-5xl lg:text-7xl font-extrabold mt-8 leading-tight">

                Socorro Automotivo
                <br />
                <span className="text-yellow-400">
                  BR Express 24H
                </span>

              </h1>

              <p className="text-gray-300 text-xl mt-8 max-w-xl">

                Precisou de ajuda na estrada?

                Localizamos rapidamente o parceiro mais próximo para atender você com segurança.

              </p>

              <div className="flex gap-5 mt-10">

                <Link
                  href="/solicitar"
                  className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 transition"
                >
                  Solicitar Atendimento
                </Link>

                <Link
  href="/parceiro"
  className="border border-yellow-500 px-8 py-4 rounded-xl hover:bg-yellow-500 hover:text-black transition"
>
  Seja Parceiro
</Link>

              </div>

            </div>

            <div>

              
            
            </div>

          </div>

        </div>

      </section>

      {/* SERVIÇOS */}

      <section className="py-24 bg-[#111]">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">

            Nossos Serviços

          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-14">

            {servicos.map((item) => (

              <div
                key={item.nome}
                className="bg-[#1c1c1c] rounded-2xl p-8 border border-yellow-500/20 hover:border-yellow-500 hover:-translate-y-2 transition"
              >

                <div className="text-5xl">
                  {item.emoji}
                </div>

                <h3 className="font-bold text-xl mt-5">
                  {item.nome}
                </h3>

                <p className="text-gray-400 mt-3">
                  {item.descricao}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* COMO FUNCIONA */}

      <section className="py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">

            Como Funciona

          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="text-center">

              <div className="w-20 h-20 rounded-full bg-yellow-500 text-black mx-auto flex items-center justify-center text-3xl font-bold">
                1
              </div>

              <h3 className="mt-6 font-bold text-2xl">
                Solicite
              </h3>

              <p className="text-gray-400 mt-3">
                Informe sua localização e o problema.
              </p>

            </div>

            <div className="text-center">

              <div className="w-20 h-20 rounded-full bg-yellow-500 text-black mx-auto flex items-center justify-center text-3xl font-bold">
                2
              </div>

              <h3 className="mt-6 font-bold text-2xl">
                Encontramos
              </h3>

              <p className="text-gray-400 mt-3">
                Selecionamos o parceiro mais próximo.
              </p>

            </div>

            <div className="text-center">

              <div className="w-20 h-20 rounded-full bg-yellow-500 text-black mx-auto flex items-center justify-center text-3xl font-bold">
                3
              </div>

              <h3 className="mt-6 font-bold text-2xl">
                Atendimento
              </h3>

              <p className="text-gray-400 mt-3">
                O profissional vai até você rapidamente.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* NÚMEROS */}

      <section className="bg-yellow-500 text-black py-20">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-4 text-center gap-10">

            <div>
              <h2 className="text-5xl font-bold">24H</h2>
              <p>Atendimento</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold">+500</h2>
              <p>Clientes</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold">+100</h2>
              <p>Parceiros</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold">100%</h2>
              <p>Compromisso</p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold">

            Precisando de ajuda agora?

          </h2>

          <p className="text-gray-400 mt-6 text-xl">

            Clique abaixo e solicite atendimento imediatamente.

          </p>

          <Link
            href="/solicitar"
            className="inline-block mt-10 bg-yellow-500 text-black px-12 py-5 rounded-xl font-bold text-xl hover:bg-yellow-400 transition"
          >
            Solicitar Agora
          </Link>

        </div>

      </section>

    </main>
  );
}