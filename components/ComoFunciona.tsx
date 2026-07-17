export default function ComoFunciona() {
  return (
    <section
      id="comofunciona"
      className="py-24 bg-zinc-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-extrabold">
            Como <span className="text-yellow-400">Funciona</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Em poucos passos você encontra a ajuda que precisa.
          </p>

        </div>

        <div className="grid lg:grid-cols-4 gap-8">

          <div className="bg-black rounded-3xl p-8 border border-zinc-800">

            <div className="text-5xl mb-6">1️⃣</div>

            <h3 className="text-2xl font-bold mb-4">
              Solicite
            </h3>

            <p className="text-gray-400">
              Informe sua localização e escolha o serviço desejado.
            </p>

          </div>

          <div className="bg-black rounded-3xl p-8 border border-zinc-800">

            <div className="text-5xl mb-6">2️⃣</div>

            <h3 className="text-2xl font-bold mb-4">
              Localizamos
            </h3>

            <p className="text-gray-400">
              A plataforma encontra o parceiro mais próximo de você.
            </p>

          </div>

          <div className="bg-black rounded-3xl p-8 border border-zinc-800">

            <div className="text-5xl mb-6">3️⃣</div>

            <h3 className="text-2xl font-bold mb-4">
              Atendimento
            </h3>

            <p className="text-gray-400">
              O parceiro aceita o chamado e segue até você.
            </p>

          </div>

          <div className="bg-black rounded-3xl p-8 border border-zinc-800">

            <div className="text-5xl mb-6">4️⃣</div>

            <h3 className="text-2xl font-bold mb-4">
              Problema Resolvido
            </h3>

            <p className="text-gray-400">
              Atendimento rápido, seguro e com parceiros cadastrados.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}