import Link from "next/link";

export default function ParceirosCTA() {
  return (
    <section className="bg-yellow-400 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <span className="bg-black text-yellow-400 px-4 py-2 rounded-full font-bold">
              ÁREA DE PARCEIROS
            </span>

            <h2 className="text-5xl font-extrabold text-black mt-8">
              Faça parte da maior rede de socorro automotivo.
            </h2>

            <p className="text-black/80 mt-6 text-xl">
              Cadastre sua empresa, escolha o plano ideal e receba
              solicitações de clientes diretamente pela plataforma
              BR Express 24H.
            </p>

          </div>

          <div className="flex flex-col gap-5">

            <Link
              href="/parceiro"
              className="bg-black text-yellow-400 text-center py-5 rounded-2xl font-bold text-xl hover:scale-105 transition"
            >
              Conhecer Planos
            </Link>

            <Link
              href="/parceiro/cadastro"
              className="border-2 border-black text-center py-5 rounded-2xl font-bold text-black hover:bg-black hover:text-yellow-400 transition"
            >
              Cadastrar Empresa
            </Link>

            <Link
              href="/parceiro/login"
              className="border-2 border-black text-center py-5 rounded-2xl font-bold text-black hover:bg-black hover:text-yellow-400 transition"
            >
              Entrar na Área do Parceiro
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}