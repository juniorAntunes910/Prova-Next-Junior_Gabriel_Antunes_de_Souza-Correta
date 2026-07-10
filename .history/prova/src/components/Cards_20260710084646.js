import Image from "next/image";
export default async function Cards() {
  try {
    const res = await fetch(
      "https://dynamic-events-api.onrender.com/api/eventos?categoria=Cursos"
    );
    const eventos = await res.json();
    console.log(eventos);

    return (
      <>
        {eventos.map((evento) => (
          <article
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
            key={evento.id}
          >
            <Image
              src={evento.imagem}
              alt="Imagem placeholder do curso Formação em Acionamentos WEG CFW"
              height={200}
              width={200}
              className="h-44 w-full object-cover"
            ></Image>
            <div className="p-5">
              <span
                className={
                  evento.destaque
                    ? "inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-emerald-700"
                    : "hidden"
                }
              >
                Destaque
              </span>
              <h3 className="mt-4 text-xl font-bold leading-tight text-weg-dark">
                {evento.nome}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {evento.descricao}
              </p>

              <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold text-slate-600">
                <span className="rounded-full bg-slate-100 px-3 py-1">
                  {` R$ ${evento.preco},00`}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1">
                  13/04/2026 às 08:00
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1">
                  {`${evento.vagas_disponiveis} vagas`}
                </span>
              </div>

              <p className="mt-4 text-sm text-slate-500">
                Centro de Treinamento WEG, Jaraguá do Sul, SC
              </p>
              <Link
                href={{
                    pathName: `${evento.id}`,
                    query: {
                        id: evento.id,
                        nome: evento.nome,
                        descricao: evento.descricao,
                        categoria: evento.categoria,
                        preco: evento.preco,
                        data: evento.data,
                        local: evento.local,
                        
                    }
                }}
                className="mt-5 inline-flex text-sm font-extrabold text-weg-blue hover:text-weg-dark"
              >
                Ver detalhes
              </Link>
            </div>
          </article>
        ))}
      </>
    );
  } catch (error) {
    console.log(error);
  }
}
