import Image from "next/image";
import Link from "next/link";
export default async function Cards() {
  const vagaMin = "rounded-full bg-slate-100 px-3 py-1 text-orange-800 ";
  const vagaNormal = "rounded-full bg-slate-100 px-3 py-1";
  try {
    const res = await fetch(
      "https://dynamic-events-api.onrender.com/api/eventos?categoria=Cursos"
    );
    const eventos = await res.json();
    console.log(eventos);
    let eventosComData = [];

    eventos.forEach((eventoAtual) => {
      let dataFormatada = eventoAtual.data.split("-");
      console.log(dataFormatada);
      //(3) ['2026', '04', '13T08:00:00Z'] eu preciso de 13/04/2026 às 08:00
      let dia = dataFormatada[2].split("T");
      console.log(dia); //13,08:00:00Z
      let horas = dia[1].split(":");
      console.log(horas); //08,00,00Z
      const dataParaCurso = {
        ano: dataFormatada[0],
        mes: dataFormatada[1],
        diaSemana: dia[0],
        hora: horas[0],
        minutos: horas[1],
      };
      let eventoFormatado = {
        evento: eventoAtual,
        datAFormatada: dataParaCurso,
      };
      eventosComData.push(eventoFormatado);
    });
    console.log(eventosComData);

    return (
      <>
        {eventosComData.map((eventoAtual) => (
          <article
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
            key={eventoAtual.evento.id}
          >
            <Image
              src={eventoAtual.imagem}
              alt="Imagem placeholder do curso Formação em Acionamentos WEG CFW"
              height={200}
              width={200}
              className="h-44 w-full object-cover"
            ></Image>
          </article>
        ))}
      </>
    );
  } catch (error) {
    console.log(error);
  }
}

/*
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
                  {evento.data}
                </span>
                <span
                  className={
                    evento.vagas_disponiveis < 9 ? vagaMin : vagaNormal
                  }
                >
                  {`${evento.vagas_disponiveis} vagas`}
                </span>
              </div>

              <p className="mt-4 text-sm text-slate-500">{evento.local}</p>
              <Link
                href={{
                  pathname: `/${evento.id}`,
                  query: {
                    id: evento.id,
                    nome: evento.nome,
                    descricao: evento.descricao,
                    categoria: evento.categoria,
                    preco: evento.preco,
                    data: evento.data,
                    local: evento.local,
                    vagas: evento.vagas_disponiveis,
                    destaque: evento.destaque,
                  },
                }}
                className="mt-5 inline-flex text-sm font-extrabold text-blue-800 hover:text-blue-900"
              >
                Ver detalhes
              </Link>
            </div> */
