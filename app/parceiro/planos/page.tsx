import Link from "next/link";

export default async function PlanosPage({
  searchParams,
}: {
  searchParams: Promise<{ segmento?: string }>;
}) {
  const { segmento } = await searchParams;

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center">

          <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold">
            BR EXPRESS 24H
          </span>

          <h1 className="text-5xl font-bold mt-8">
            Escolha seu Plano
          </h1>

          <p className="text-zinc-400 mt-4 text-xl">
            Segmento selecionado:
          </p>

          <h2 className="text-yellow-400 text-3xl font-bold mt-2">
            {segmento || "Não informado"}
          </h2>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {/* Plano Básico */}
          <div className="bg-[#171717] rounded-3xl p-8 border border-zinc-800">
            <h2 className="text-3xl font-bold">Plano Básico</h2>

            <h3 className="text-yellow-400 text-5xl font-bold mt-6">
              R$183
            </h3>

            <p className="text-zinc-400 mt-2">por mês</p>

            <ul className="mt-8 space-y-3 text-zinc-300">
              <li>✔ Perfil na plataforma</li>
              <li>✔ Divulgação digital</li>
              <li>✔ Certificado Digital</li>
              <li>✔ Banner Oficial</li>
              <li>✔ Selo Parceiro</li>
            </ul>

            <Link
              href={`/parceiro/cadastro?plano=basico&segmento=${encodeURIComponent(segmento || "")}`}
              className="mt-10 block text-center bg-yellow-400 text-black py-3 rounded-xl font-bold"
            >
              Escolher Plano
            </Link>
          </div>

          {/* Plano Profissional */}
          <div className="bg-yellow-400 rounded-3xl p-8 text-black scale-105 shadow-2xl">
            <div className="bg-black text-yellow-400 inline-block px-3 py-1 rounded-full text-sm font-bold">
              MAIS ESCOLHIDO
            </div>

            <h2 className="text-3xl font-bold mt-4">
              Plano Profissional
            </h2>

            <h3 className="text-5xl font-bold mt-6">
              R$369
            </h3>

            <p className="mt-2">por mês</p>

            <ul className="mt-8 space-y-3">
              <li>✔ Tudo do Básico</li>
              <li>✔ Destaque nas buscas</li>
              <li>✔ Certificado físico</li>
              <li>✔ Adesivo Oficial</li>
              <li>✔ Campanhas promocionais</li>
            </ul>

            <Link
              href={`/parceiro/cadastro?plano=profissional&segmento=${encodeURIComponent(segmento || "")}`}
              className="mt-10 block text-center bg-black text-white py-3 rounded-xl font-bold"
            >
              Escolher Plano
            </Link>
          </div>

          {/* Plano Ouro */}
          <div className="bg-[#171717] rounded-3xl p-8 border border-yellow-400">
            <h2 className="text-3xl font-bold">Plano Ouro</h2>

            <h3 className="text-yellow-400 text-5xl font-bold mt-6">
              R$997
            </h3>

            <p className="text-zinc-400 mt-2">por mês</p>

            <ul className="mt-8 space-y-3 text-zinc-300">
              <li>✔ Tudo do Profissional</li>
              <li>✔ Projeto Visual</li>
              <li>✔ Uniforme</li>
              <li>✔ Bandeira Oficial</li>
              <li>✔ Destaque Premium</li>
            </ul>

            <Link
              href={`/parceiro/cadastro?plano=ouro&segmento=${encodeURIComponent(segmento || "")}`}
              className="mt-10 block text-center bg-yellow-400 text-black py-3 rounded-xl font-bold"
            >
              Escolher Plano
            </Link>
          </div>

        </div>

      </div>

    </main>
  );
}