import Link from "next/link";
import {
  Truck,
  Wrench,
  CircleDashed,
  BatteryCharging,
  KeyRound,
  Zap,
  Fuel,
  Car,
} from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Guincho",
    description: "Atendimento 24 horas para remoção de veículos.",
  },
  {
    icon: Wrench,
    title: "Oficina Mecânica",
    description: "Reparos automotivos com parceiros credenciados.",
  },
  {
    icon: CircleDashed,
    title: "Borracharia",
    description: "Troca e reparo de pneus.",
  },
  {
    icon: BatteryCharging,
    title: "Bateria",
    description: "Troca e recarga de baterias.",
  },
  {
    icon: KeyRound,
    title: "Chaveiro",
    description: "Abertura de veículos e cópia de chaves.",
  },
  {
    icon: Zap,
    title: "Auto Elétrica",
    description: "Diagnóstico e manutenção elétrica.",
  },
  {
    icon: Fuel,
    title: "Pane Seca",
    description: "Entrega de combustível no local.",
  },
  {
    icon: Car,
    title: "Auto Socorro",
    description: "Assistência para emergências automotivas.",
  },
];

export default function Services() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-4">
          Nossos Serviços
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Escolha o atendimento que você precisa.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-yellow-400 hover:-translate-y-2 transition-all"
              >
                <Icon size={45} className="text-yellow-400 mb-6" />

                <h3 className="text-2xl text-white font-bold">
                  {service.title}
                </h3>

                <p className="text-gray-400 mt-4">
                  {service.description}
                </p>

                <Link
                  href="/solicitar"
                  className="mt-8 block text-center bg-yellow-400 text-black py-3 rounded-xl font-bold hover:bg-yellow-300 transition"
                >
                  Solicitar
                </Link>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}