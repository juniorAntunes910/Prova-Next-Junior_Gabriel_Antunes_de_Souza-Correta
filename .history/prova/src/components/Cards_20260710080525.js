import Image from "next/image";
export default async function Cards() {
  try {
    const res = await fetch(
      "https://dynamic-events-api.onrender.com/api/eventos"
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
            <div class="p-5">
              <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-emerald-700">
                Destaque
              </span>
              <h3 class="mt-4 text-xl font-bold leading-tight text-weg-dark">
                Formação em Acionamentos WEG CFW
              </h3>
              <p class="mt-3 text-sm leading-6 text-slate-600">
                Curso completo de 40h sobre a linha de inversores de frequência
                CFW: parametrização, programação ladder, comunicação industrial
                e manutenção preventiva.
              </p>

              <div class="mt-4 flex flex-wrap gap-2 text-xs font-bold text-slate-600">
                <span class="rounded-full bg-slate-100 px-3 py-1">
                  R$ 1.890,00
                </span>
                <span class="rounded-full bg-slate-100 px-3 py-1">
                  13/04/2026 às 08:00
                </span>
                <span class="rounded-full bg-slate-100 px-3 py-1">
                  24 vagas
                </span>
              </div>

              <p class="mt-4 text-sm text-slate-500">
                Centro de Treinamento WEG, Jaraguá do Sul, SC
              </p>
              <a
                href="./curso.html"
                class="mt-5 inline-flex text-sm font-extrabold text-weg-blue hover:text-weg-dark"
              >
                Ver detalhes
              </a>
            </div>
          </article>
        ))}
      </>
    );
  } catch (error) {
    console.log(error);
  }
}
