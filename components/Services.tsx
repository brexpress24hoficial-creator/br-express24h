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
    description: "Troca e reparo de pneus no local.",
  },
  {
    icon: BatteryCharging,
    title: "Bateria",
    description: "Troca e recarga de baterias.",
  },
  {
    icon: KeyRound,
    title: "Chaveiro",
    description: "Abertura de veículos e cópias de chaves.",
  },
  {
    icon: Zap,
    title: "Auto Elétrica",
    description: "Diagnóstico e reparos elétricos.",
  },
  {
    icon: Fuel,
    title: "Pane Seca",
    description: "Entrega de combustível com segurança.",
  },
  {
    icon: Car,
    title: "Auto Socorro",
    description: "Assistência rápida para diversas emergências.",
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
                className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <Icon size={42} className="text-yellow-400 mb-6" />

                <h3 className="text-xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="text-gray-400 mt-3">
                  {service.description}
                </p>

          
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}