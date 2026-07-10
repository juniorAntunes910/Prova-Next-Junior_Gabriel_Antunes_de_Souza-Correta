export default function Hero() {
  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-blue-900">
            Plataforma de cursos técnicos
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-blue-900 md:text-6xl">
            Aprendizagem para quem transforma tecnologia em indústria
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
            A WEG Academy reúne cursos e formações voltados para automação,
            acionamentos, eficiência energética, eletricidade industrial e
            soluções aplicadas ao mundo do trabalho.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#cursos"
              className="rounded-full bg-weg-blue px-5 py-3 text-sm font-bold bg-blue-700 text-white hover:bg-blue-900"
            >
              Explorar cursos
            </a>
            <a
              href="./sobre.html"
              className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-weg-dark hover:bg-slate-50"
            >
              Conhecer a WEG
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
