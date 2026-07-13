import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-black text-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h1 className="text-5xl md:text-7xl font-black text-yellow-400">
            BR EXPRESS 24H
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Atendimento automotivo inteligente.
            Encontre oficinas, guinchos, borracharias,
            chaveiros e muito mais, 24 horas por dia.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

            <Link
              href="/solicitar"
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-xl transition"
            >
              🚨 Solicitar Atendimento
            </Link>

            <Link
              href="/sobre"
              className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-xl transition"
            >
              Conheça a BR Express
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}