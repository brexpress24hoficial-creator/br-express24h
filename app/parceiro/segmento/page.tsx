import Link from "next/link";

const segmentos = [
  {
    emoji: "🚗",
    nome: "Oficina Mecânica",
    descricao: "Reparos, manutenção e revisões."
  },
  {
    emoji: "🛞",
    nome: "Borracharia",
    descricao: "Troca, reparo e venda de pneus."
  },
  {
    emoji: "🚚",
    nome: "Guincho",
    descricao: "Reboque de veículos leves e pesados."
  },
  {
    emoji: "🔋",
    nome: "Baterias",
    descricao: "Venda e troca de baterias."
  },
  {
    emoji: "🔑",
    nome: "Chaveiro",
    descricao: "Chaves automotivas e abertura."
  },
  {
    emoji: "⛽",
    nome: "Pane Seca",
    descricao: "Entrega de combustível."
  },
  {
    emoji: "🛠",
    nome: "Auto Elétrica",
    descricao: "Serviços elétricos automotivos."
  },
  {
    emoji: "🚐",
    nome: "Reboque Pesado",
    descricao: "Caminhões, ônibus e máquinas."
  }
];

export default function SegmentoPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center">

          <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold">
            BR EXPRESS 24H
          </span>

          <h1 className="text-5xl font-bold mt-8">
            Qual é o seu segmento?
          </h1>

          <p className="text-zinc-400 mt-5 text-xl">
            Escolha o tipo de serviço que sua empresa oferece.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {segmentos.map((item) => (

            <div
              key={item.nome}
              className="bg-[#171717] rounded-3xl p-8 border border-zinc-800 hover:border-yellow-400 hover:-translate-y-2 transition duration-300"
            >

              <div className="text-6xl">
                {item.emoji}
              </div>

              <h2 className="text-2xl font-bold mt-6">
                {item.nome}
              </h2>

              <p className="text-zinc-400 mt-4 min-h-[60px]">
                {item.descricao}
              </p>

              <Link
  href={`/parceiro/planos?segmento=${encodeURIComponent(item.nome)}`}
  className="mt-8 inline-block w-full text-center bg-yellow-400 text-black py-3 rounded-xl font-bold hover:bg-yellow-300 transition"
>
  Escolher Plano
</Link>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}