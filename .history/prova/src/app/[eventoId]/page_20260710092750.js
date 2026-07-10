"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
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

  let dataFormatada = userDetail.data.split("-");
  console.log(dataFormatada)
  //(3) ['2026', '04', '13T08:00:00Z'] eu preciso de 13/04/2026 às 08:00
  let dia = dataFormatada


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
        <Link
          href="/"
          className="text-sm font-extrabold text-blue-900 hover:text-weg-dark"
        >
          ← Voltar para cursos
        </Link>

        <div className="mt-8 grid gap-8 md:grid-cols-[1.35fr_0.65fr]">
          <div>
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-blue-900">
              Curso em destaque
            </p>
            <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-blue-900 md:text-6xl">
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
                {userDetail.data}
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
              <strong>Local:</strong> {userDetail.local}
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              <strong>Identificador:</strong> {userDetail.id}
            </p>
            <p className="mt-5 text-3xl font-extrabold tracking-tight text-weg-dark">
              {`R$ ${userDetail.preco},00`}
            </p>
            <a
              href="#"
              className="mt-6 inline-flex rounded-full bg-blue-800 px-5 py-3 text-sm font-bold text-white hover:bg-blue-900"
            >
              Tenho interesse
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
