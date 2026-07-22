import Link from "next/link";

export default function ParceiroPage() {
  return (
    <main className="bg-[#0B0B0B] text-white">

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold">
            BR EXPRESS 24H
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold mt-8 leading-tight">
            Seja um Parceiro Oficial
          </h1>

          <p className="text-zinc-300 mt-8 text-xl max-w-3xl mx-auto leading-9">
            Receba novos clientes todos os dias, aumente seu faturamento e faça
            parte da maior rede de socorro automotivo 24 horas do Brasil.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">

            <Link
              href="/parceiro/segmento"
              className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition duration-300"
            >
              Quero ser Parceiro
            </Link>

            <Link
              href="/parceiro/login"
              className="border border-yellow-400 text-yellow-400 px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 hover:text-black transition duration-300"
            >
              Já sou Parceiro
            </Link>

          </div>

        </div>
      </section>

      {/* NÚMEROS */}

      <section className="py-20 bg-[#111111]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-[#1A1A1A] rounded-2xl p-8 text-center border border-zinc-800 hover:border-yellow-400 transition">

              <h2 className="text-5xl font-extrabold text-yellow-400">
                500+
              </h2>

              <p className="text-zinc-400 mt-3">
                Chamados realizados
              </p>

            </div>

            <div className="bg-[#1A1A1A] rounded-2xl p-8 text-center border border-zinc-800 hover:border-yellow-400 transition">

              <h2 className="text-5xl font-extrabold text-yellow-400">
                100+
              </h2>

              <p className="text-zinc-400 mt-3">
                Empresas Parceiras
              </p>

            </div>

            <div className="bg-[#1A1A1A] rounded-2xl p-8 text-center border border-zinc-800 hover:border-yellow-400 transition">

              <h2 className="text-5xl font-extrabold text-yellow-400">
                24H
              </h2>

              <p className="text-zinc-400 mt-3">
                Atendimento
              </p>

            </div>

            <div className="bg-[#1A1A1A] rounded-2xl p-8 text-center border border-zinc-800 hover:border-yellow-400 transition">

              <h2 className="text-5xl font-extrabold text-yellow-400">
                ★★★★★
              </h2>

              <p className="text-zinc-400 mt-3">
                Qualidade e Confiança
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}