"use client";
import { useSearchParams } from "next/navigation";
export default function detail() {
  const params = useSearchParams();
  const userDetail = {
    id: params.get("id"),
    nome: params.get("nome"),
    descricao: params.get("descricao"),
    categoria: params.get("categoria"),
    preco: params.get("preco"),
    data: params.get("data"),
    local: params.get("local"),
    vagas: params.get("vagas"),
    destaque: params.get("destaque"),
  };

  /*
            id: evento.id,
                        nome: evento.nome,
                        descricao: evento.descricao,
                        categoria: evento.categoria,
                        preco: evento.preco,
                        data: evento.data,
                        local: evento.local,
                        vagas: evento.vagas_disponiveis,
                        destaque: evento.destaque
    */
  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <div class="mx-auto max-w-6xl px-4 py-12">
        <a
          href="./index.html"
          class="text-sm font-extrabold text-weg-blue hover:text-weg-dark"
        >
          ← Voltar para cursos
        </a>

        <div class="mt-8 grid gap-8 md:grid-cols-[1.35fr_0.65fr]">
          <div>
            <p class="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-weg-blue">
              Curso em destaque
            </p>
            <h1 class="max-w-3xl text-4xl font-extrabold tracking-tight text-weg-dark md:text-6xl">
              Formação em Acionamentos WEG CFW
            </h1>
            <p class="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              Curso completo de 40h sobre a linha de inversores de frequência
              CFW: parametrização, programação ladder, comunicação industrial e
              manutenção preventiva.
            </p>

            <div class="mt-6 flex flex-wrap gap-2 text-xs font-bold text-slate-600">
              <span class="rounded-full bg-white px-3 py-1">
                Categoria: Cursos
              </span>
              <span class="rounded-full bg-white px-3 py-1">
                13/04/2026 às 08:00
              </span>
              <span class="rounded-full bg-white px-3 py-1">
                24 vagas disponíveis
              </span>
            </div>
          </div>

          <aside class="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 class="text-xl font-bold text-weg-dark">
              Informações do curso
            </h2>
            <p class="mt-4 text-sm leading-6 text-slate-600">
              <strong>Local:</strong> Centro de Treinamento WEG, Jaraguá do Sul,
              SC
            </p>
            <p class="mt-2 text-sm leading-6 text-slate-600">
              <strong>Identificador:</strong> ev_41f8aa5d
            </p>
            <p class="mt-5 text-3xl font-extrabold tracking-tight text-weg-dark">
              R$ 1.890,00
            </p>
            <a
              href="#"
              class="mt-6 inline-flex rounded-full bg-weg-blue px-5 py-3 text-sm font-bold text-white hover:bg-weg-dark"
            >
              Tenho interesse
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
