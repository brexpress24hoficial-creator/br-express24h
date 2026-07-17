import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Empresa */}
          <div>
            <h2 className="text-2xl font-black text-yellow-400">
              BR <span className="text-white">EXPRESS 24H</span>
            </h2>

            <p className="text-zinc-400 mt-4 leading-7">
              Central de Socorro Automotivo 24 horas.
              Conectamos você ao parceiro mais próximo
              com rapidez, segurança e confiança.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="text-white font-bold mb-4">
              Navegação
            </h3>

            <ul className="space-y-3 text-zinc-400">

              <li>
                <Link href="/" className="hover:text-yellow-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/atendimento" className="hover:text-yellow-400 transition">
                  Atendimento
                </Link>
              </li>

              <li>
                <Link href="/parceiro" className="hover:text-yellow-400 transition">
                  Parceiros
                </Link>
              </li>

              <li>
                <Link href="/entrar" className="hover:text-yellow-400 transition">
                  Entrar
                </Link>
              </li>

            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-white font-bold mb-4">
              BR Express 24H
            </h3>

            <ul className="space-y-3 text-zinc-400">

              <li>Atendimento 24 horas</li>

              <li>Pernambuco</li>

              <li>Suporte rápido</li>

              <li>Parceiros credenciados</li>

            </ul>

          </div>

        </div>

        <div className="border-t border-zinc-800 mt-10 pt-6 text-center text-zinc-500">

          © {new Date().getFullYear()} BR Express 24H — Todos os direitos reservados.

        </div>

      </div>
    </footer>
  );
}