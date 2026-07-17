import Link from "next/link";
import Footer from "@/components/Footer";

const servicos = [
  {
    emoji: "🚛",
    titulo: "Guincho",
    descricao: "Remoção de veículos 24 horas."
  },
  {
    emoji: "🛞",
    titulo: "Borracharia",
    descricao: "Troca e reparo de pneus."
  },
  {
    emoji: "🔧",
    titulo: "Mecânica",
    descricao: "Socorro mecânico emergencial."
  },
  {
    emoji: "🔋",
    titulo: "Auto Elétrica",
    descricao: "Bateria, partida auxiliar e pane elétrica."
  },
  {
    emoji: "🔑",
    titulo: "Chaveiro",
    descricao: "Abertura e cópia de chaves automotivas."
  }
];

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}

      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold">
                Atendimento 24 Horas
              </span>

              <h1 className="text-6xl font-extrabold mt-8 leading-tight">

                Precisou de
                <span className="text-yellow-400"> Socorro Automotivo?</span>

              </h1>

              <p className="mt-8 text-xl text-gray-300">

                A BR Express 24H conecta você ao parceiro mais próximo
                para atendimento rápido, seguro e confiável.

              </p>

              <div className="flex flex-wrap gap-4 mt-10">

                <Link
                  href="/solicitar"
                  className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-xl transition"
                >
                  Solicitar Atendimento
                </Link>

                <Link
                  href="/parceiro"
                  className="border border-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-xl transition"
                >
                  Seja Parceiro
                </Link>

              </div>

            </div>

            <div className="flex justify-center">

              {/* Depois vamos colocar sua arte aqui */}

              <div className="w-full h-[450px] rounded-3xl border-2 border-dashed border-yellow-400 flex items-center justify-center text-center text-zinc-500">

                SUA ARTE AQUI

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SERVIÇOS */}

      <section className="py-20 bg-zinc-950">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">

            Nossos Serviços

          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">

            {servicos.map((item) => (

              <div
                key={item.titulo}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-yellow-400 transition"
              >

                <div className="text-5xl">
                  {item.emoji}
                </div>

                <h3 className="text-2xl font-bold mt-5">

                  {item.titulo}

                </h3>

                <p className="text-gray-400 mt-4">

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

          <h2 className="text-5xl font-bold text-center mb-16">

            Como Funciona

          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="text-center">

              <div className="text-6xl mb-5">📍</div>

              <h3 className="text-2xl font-bold">

                Solicite

              </h3>

              <p className="text-gray-400 mt-4">

                Informe sua localização e o problema.

              </p>

            </div>

            <div className="text-center">

              <div className="text-6xl mb-5">🚀</div>

              <h3 className="text-2xl font-bold">

                Encontramos

              </h3>

              <p className="text-gray-400 mt-4">

                Localizamos o parceiro mais próximo.

              </p>

            </div>

            <div className="text-center">

              <div className="text-6xl mb-5">✅</div>

              <h3 className="text-2xl font-bold">

                Atendimento

              </h3>

              <p className="text-gray-400 mt-4">

                O profissional vai até você rapidamente.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-yellow-400 py-20">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-5xl font-extrabold text-black">

            Precisa de ajuda agora?

          </h2>

          <p className="text-black text-xl mt-6">

            Solicite atendimento em poucos segundos.

          </p>

          <Link
            href="/solicitar"
            className="inline-block mt-10 bg-black text-yellow-400 px-10 py-5 rounded-xl font-bold hover:bg-zinc-900 transition"
          >
            Solicitar Atendimento
          </Link>

        </div>

      </section>

      <Footer />

    </main>
  );
}