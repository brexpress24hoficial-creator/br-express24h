import Link from "next/link";

export default function Parceiro() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

          <div className="text-center">

            <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold">
              BR EXPRESS 24H
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-extrabold">
              Seja um <span className="text-yellow-400">Parceiro</span>
            </h1>

            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Cadastre sua empresa e receba solicitações de clientes
              automaticamente através da plataforma BR Express 24H.
            </p>

            <div className="mt-10 flex justify-center gap-4 flex-wrap">

              <a
                href="#planos"
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-xl transition"
              >
                Ver Planos
              </a>

              <Link
                href="/parceiro/login"
                className="border border-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-xl transition"
              >
                Entrar na Área do Parceiro
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* BENEFÍCIOS */}

      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Por que fazer parte?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
              <h3 className="text-yellow-400 text-xl font-bold mb-3">
                🚨 Mais Clientes
              </h3>
              <p className="text-gray-400">
                Receba chamados automaticamente da sua região.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
              <h3 className="text-yellow-400 text-xl font-bold mb-3">
                💰 Mais Faturamento
              </h3>
              <p className="text-gray-400">
                Aumente sua renda com novos atendimentos.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
              <h3 className="text-yellow-400 text-xl font-bold mb-3">
                📈 Painel Completo
              </h3>
              <p className="text-gray-400">
                Controle chamados, pagamentos e histórico.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
              <h3 className="text-yellow-400 text-xl font-bold mb-3">
                ⭐ Destaque
              </h3>
              <p className="text-gray-400">
                Ganhe visibilidade para milhares de clientes.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* PLANOS */}

      <section id="planos" className="pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">
            Escolha seu Plano
          </h2>

          <div className="grid lg:grid-cols-3 gap-10">

            {/* Básico */}

            <div className="bg-zinc-900 rounded-3xl p-10 border border-zinc-800">

              <h3 className="text-3xl font-bold mb-4">BÁSICO</h3>

              <p className="text-5xl font-extrabold text-yellow-400 mb-8">
                R$49,90
              </p>

              <ul className="space-y-4 text-gray-300">

                <li>✔ Perfil da empresa</li>

                <li>✔ Recebimento de chamados</li>

                <li>✔ Suporte</li>

                <li>✔ Atualização dos dados</li>

              </ul>

              <Link
                href="/parceiro/cadastro?plano=basico"
                className="mt-10 block text-center bg-yellow-400 text-black font-bold py-4 rounded-xl hover:bg-yellow-300"
              >
                ASSINAR PLANO
              </Link>

            </div>

            {/* Premium */}

            <div className="bg-yellow-400 rounded-3xl p-10 text-black scale-105 shadow-2xl">

              <div className="text-center mb-5">

                <span className="bg-black text-yellow-400 px-4 py-2 rounded-full font-bold">
                  MAIS VENDIDO
                </span>

              </div>

              <h3 className="text-3xl font-bold mb-4">
                PREMIUM
              </h3>

              <p className="text-5xl font-extrabold mb-8">
                R$99,90
              </p>

              <ul className="space-y-4">

                <li>✔ Destaque na plataforma</li>

                <li>✔ Prioridade nos chamados</li>

                <li>✔ Relatórios</li>

                <li>✔ Selo Premium</li>

                <li>✔ Suporte prioritário</li>

              </ul>

              <Link
                href="/parceiro/cadastro?plano=premium"
                className="mt-10 block text-center bg-black text-yellow-400 font-bold py-4 rounded-xl"
              >
                ASSINAR PLANO
              </Link>

            </div>

            {/* Empresa */}

            <div className="bg-zinc-900 rounded-3xl p-10 border border-zinc-800">

              <h3 className="text-3xl font-bold mb-4">
                EMPRESA
              </h3>

              <p className="text-5xl font-extrabold text-yellow-400 mb-8">
                Consulte
              </p>

              <ul className="space-y-4 text-gray-300">

                <li>✔ Várias unidades</li>

                <li>✔ Atendimento personalizado</li>

                <li>✔ Recursos exclusivos</li>

                <li>✔ Suporte dedicado</li>

              </ul>

              <Link
                href="/contato"
                className="mt-10 block text-center border border-yellow-400 py-4 rounded-xl hover:bg-yellow-400 hover:text-black"
              >
                FALE CONOSCO
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}