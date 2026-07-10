import Hero from "@/components/Hero";
export default function LoadingHome() {
    let cards = [1,2,3];
      return (
    <main>
    <Hero />

    <section className="mx-auto max-w-6xl px-4 py-14" id="cursos">
      <div className="mb-8 max-w-2xl">
        <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.16em] text-blue-900">
          Catálogo
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight text-blue-900">
          Cursos disponíveis
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Os cards abaixo estão estáticos e mockados na base HTML. Na versão em
          Next.js, eles deverão ser renderizados a partir da API/JSON, exibindo
          apenas a categoria <strong>Cursos</strong>.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
      </div>
    </section>

        <h3> </h3>
    </main>
  );
}
