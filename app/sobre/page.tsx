import Header from "@/components/Header";

export default function Sobre() {
  return (
    <>
      <Header />

      <main className="bg-black text-white min-h-screen pt-24">

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-yellow-400">
            Conheça a BR Express 24H
          </h1>

          <p className="mt-8 text-xl text-gray-300 max-w-4xl mx-auto">
            A BR Express 24H nasceu para conectar motoristas aos melhores
            parceiros automotivos da região de forma rápida, segura e
            inteligente.
          </p>
        </section>

        {/* Missão */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              Nossa Missão
            </h2>

            <p className="text-gray-300 leading-8">
              Oferecer atendimento automotivo de qualidade 24 horas por dia,
              conectando clientes a oficinas, guinchos, borracharias,
              autoelétricas, chaveiros e outros parceiros credenciados.
            </p>
          </div>
        </section>

        {/* Visão */}
        <section className="max-w-6xl mx-auto px-6 py-8">
          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              Nossa Visão
            </h2>

            <p className="text-gray-300 leading-8">
              Ser a maior plataforma de assistência automotiva do Brasil,
              conectando milhares de clientes e parceiros em um único sistema.
            </p>
          </div>
        </section>

        {/* Valores */}
        <section className="max-w-6xl mx-auto px-6 py-8">
          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">
              Nossos Valores
            </h2>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Transparência</li>
              <li>✅ Agilidade</li>
              <li>✅ Segurança</li>
              <li>✅ Atendimento Humanizado</li>
              <li>✅ Compromisso com nossos parceiros</li>
            </ul>
          </div>
        </section>

        {/* Cobertura */}
        <section className="max-w-6xl mx-auto px-6 py-8">
          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              Onde Atendemos
            </h2>

            <p className="text-gray-300 leading-8">
              A BR Express 24H nasceu em Carpina-PE com um propósito claro: transformar a forma como os serviços automotivos são encontrados no Brasil.

Estamos construindo uma rede inteligente de parceiros preparada para conectar motoristas a soluções automotivas em todos os cantos do país, levando agilidade, segurança e confiança para cada chamado.
            </p>
          </div>
        </section>

      </main>
    </>
  );
}