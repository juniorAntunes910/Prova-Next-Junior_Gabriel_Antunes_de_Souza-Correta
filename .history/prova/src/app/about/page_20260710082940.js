import Image from "next/image";
export default function about(){
    return(
         <main>
    <section class="border-b border-slate-200 bg-slate-50">
      <div class="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-[1.25fr_0.75fr] md:items-center">
        <div>
          <p class="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-weg-blue">Página institucional estática</p>
          <h1 class="text-4xl font-extrabold tracking-tight text-weg-dark md:text-6xl">Sobre a WEG</h1>
          <p class="mt-5 max-w-2xl text-base leading-7 text-slate-600">
            A WEG é uma empresa global de tecnologia que desenvolve soluções para motores elétricos,
            automação, energia, tintas industriais e sistemas aplicados a diferentes setores produtivos.
          </p>
        </div>
        <div class="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <Image src="/placeholder" alt="Ambiente industrial com operador trabalhando em máquina" class="h-72 w-full object-cover">
        </div>
      </div>
    </section>

    <section class="mx-auto grid max-w-6xl gap-5 px-4 py-14 md:grid-cols-2">
      <article class="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 class="text-2xl font-bold tracking-tight text-weg-dark">Tecnologia aplicada à indústria</h2>
        <p class="mt-4 text-sm leading-6 text-slate-600">
          A WEG atua no desenvolvimento de soluções que contribuem para produtividade,
          eficiência energética, automação e modernização de processos industriais.
        </p>
        <p class="mt-3 text-sm leading-6 text-slate-600">
          Suas áreas de atuação conectam engenharia, inovação, fabricação e serviços técnicos,
          criando um ambiente em que conhecimento e prática caminham juntos.
        </p>
      </article>

      <article class="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 class="text-2xl font-bold tracking-tight text-weg-dark">Formação e desenvolvimento</h2>
        <p class="mt-4 text-sm leading-6 text-slate-600">
          A WEG Academy representa uma vitrine de aprendizagem voltada à qualificação técnica,
          ao aperfeiçoamento profissional e à atualização de pessoas que atuam ou desejam atuar
          em áreas relacionadas à tecnologia industrial.
        </p>
        <p class="mt-3 text-sm leading-6 text-slate-600">
          Na avaliação, esta página deverá ser convertida em uma rota estática da aplicação Next.js.
        </p>
      </article>
    </section>
  </main>
    );
}