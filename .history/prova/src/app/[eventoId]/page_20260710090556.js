"use client";
import { useSearchParams } from "next/navigation";
import { use } from "react";
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
      <div className="mx-auto max-w-6xl px-4 py-12">
        <a
          href="./index.html"
          className="text-sm font-extrabold text-weg-blue hover:text-weg-dark"
        >
          ← Voltar para cursos
        </a>

        <div className="mt-8 grid gap-8 md:grid-cols-[1.35fr_0.65fr]">
          <div>
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-weg-blue">
              Curso em destaque
            </p>
            <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-weg-dark md:text-6xl">
              {userDetail.nome}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              {userDetail.descricao}
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold text-slate-600">
              <span className="rounded-full bg-white px-3 py-1">
                {`Categoria: ${userDetail.categoria}`}
              </span>
              <span className="rounded-full bg-white px-3 py-1">
                13/04/2026 às 08:00
              </span>
              <span className="rounded-full bg-white px-3 py-1">
                { `${userDetail.vagas} vagas disponíveis`}
              </span>
            </div>
          </div>

          <aside className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold text-weg-dark">
              Informações do curso
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              <strong>Local:</strong> Centro de Treinamento WEG, Jaraguá do Sul,
              SC
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              <strong>Identificador:</strong> {use}
            </p>
            <p className="mt-5 text-3xl font-extrabold tracking-tight text-weg-dark">
              R$ 1.890,00
            </p>
            <a
              href="#"
              className="mt-6 inline-flex rounded-full bg-weg-blue px-5 py-3 text-sm font-bold text-white hover:bg-weg-dark"
            >
              Tenho interesse
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
