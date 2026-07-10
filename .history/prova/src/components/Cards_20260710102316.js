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
        minutos: horas[1]
      };
      let eventoFormatado = {
        evento: eventoAtual,
        datAFormatada :dataParaCurso
      }
      eventosComData.push(eventoFormatado)
    });
    console.log(eventosComData);

    return (
      <>
        {eventosComData.map((eventoAtual) => (
          <article
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
            key={eventoAtual.evento.id}
          >
           
          </article>
        ))}
      </>
    );
  } catch (error) {
    console.log(error);
  }
}
