import Header from "@/components/Header";
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
  { icon: Truck, title: "Guincho" },
  { icon: Wrench, title: "Oficina Mecânica" },
  { icon: CircleDashed, title: "Borracharia" },
  { icon: BatteryCharging, title: "Bateria" },
  { icon: KeyRound, title: "Chaveiro" },
  { icon: Zap, title: "Auto Elétrica" },
  { icon: Fuel, title: "Pane Seca" },
  { icon: Car, title: "Auto Socorro" },
];

export default function Atendimento() {
  return (
    <>
      <Header />

      <main className="bg-black text-white min-h-screen pt-24">

        <section className="max-w-7xl mx-auto px-6 py-16">

          <h1 className="text-5xl font-black text-yellow-400 text-center">
            Atendimento BR EXPRESS 24H
          </h1>

          <p className="text-center text-gray-400 mt-6 max-w-2xl mx-auto">
            Escolha o serviço desejado. Após enviar sua solicitação,
            nossa central localizará os parceiros disponíveis mais próximos.
          </p>

        </section>

        <section className="max-w-7xl mx-auto px-6 pb-20">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-yellow-400 transition-all hover:-translate-y-2"
                >
                  <Icon size={42} className="text-yellow-400 mb-6" />

                  <h2 className="text-2xl font-bold">
                    {service.title}
                  </h2>

                  <button className="mt-8 w-full bg-yellow-400 text-black py-3 rounded-xl font-bold hover:bg-yellow-300 transition">
                    Solicitar
                  </button>

                </div>
              );
            })}

          </div>

        </section>

      </main>
    </>
  );
}