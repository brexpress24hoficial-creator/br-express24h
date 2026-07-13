import {
  ShieldCheck,
  Clock3,
  MapPinned,
  Users,
} from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Parceiros Verificados",
    description:
      "Todos os parceiros passam por análise antes de fazer parte da BR Express.",
  },
  {
    icon: Clock3,
    title: "Atendimento 24 Horas",
    description:
      "Solicite ajuda a qualquer hora do dia ou da noite.",
  },
  {
    icon: MapPinned,
    title: "Cobertura Regional",
    description:
      "Começando por Pernambuco e expandindo para todo o Brasil.",
  },
  {
    icon: Users,
    title: "Central Inteligente",
    description:
      "Seu chamado é enviado automaticamente aos parceiros disponíveis.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-zinc-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-yellow-400">
          Por que escolher a BR EXPRESS?
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-16">
          Tecnologia, rapidez e segurança para quem precisa de ajuda na estrada.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-yellow-400 transition"
              >
                <Icon
                  size={48}
                  className="text-yellow-400 mb-6"
                />

                <h3 className="text-white text-xl font-bold">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-4">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}