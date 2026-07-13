export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Solicite Atendimento",
      text: "Informe sua localização e escolha o serviço desejado.",
    },
    {
      number: "02",
      title: "Parceiros Recebem",
      text: "Nossa central envia o chamado para os parceiros próximos.",
    },
    {
      number: "03",
      title: "Aceitação",
      text: "O primeiro parceiro disponível aceita o atendimento.",
    },
    {
      number: "04",
      title: "Atendimento",
      text: "Você acompanha o status até a chegada do parceiro.",
    },
  ];

  return (
    <section className="bg-zinc-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-4">
          Como Funciona
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Atendimento simples, rápido e seguro.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-yellow-400 transition"
            >
              <span className="text-5xl font-black text-yellow-400">
                {step.number}
              </span>

              <h3 className="text-xl font-bold text-white mt-6">
                {step.title}
              </h3>

              <p className="text-gray-400 mt-4">
                {step.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}