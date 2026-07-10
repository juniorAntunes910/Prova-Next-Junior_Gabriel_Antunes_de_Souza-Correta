import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="mx-auto max-w-6xl px-4 py-14" id="cursos">
        <div class="mb-8 max-w-2xl">
          <p class="mb-2 text-xs font-extrabold uppercase tracking-[0.16em] text-weg-blue">
            Catálogo
          </p>
          <h2 class="text-3xl font-extrabold tracking-tight text-weg-dark">
            Cursos disponíveis
          </h2>
          <p class="mt-3 text-sm leading-6 text-slate-600">
            Os cards abaixo estão estáticos e mockados na base HTML. Na versão
            em Next.js, eles deverão ser renderizados a partir da API/JSON,
            exibindo apenas a categoria <strong>Cursos</strong>.
          </p>
        </div>
      </section>
    </main>
  );
}
