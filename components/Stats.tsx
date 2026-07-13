export default function Stats() {
  return (
    <section className="bg-yellow-400 py-14">

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-8">

        <div>
          <h2 className="text-5xl font-black">24h</h2>
          <p>Atendimento</p>
        </div>

        <div>
          <h2 className="text-5xl font-black">100+</h2>
          <p>Parceiros</p>
        </div>

        <div>
          <h2 className="text-5xl font-black">20+</h2>
          <p>Cidades</p>
        </div>

        <div>
          <h2 className="text-5xl font-black">1000+</h2>
          <p>Atendimentos</p>
        </div>

      </div>

    </section>
  );
}