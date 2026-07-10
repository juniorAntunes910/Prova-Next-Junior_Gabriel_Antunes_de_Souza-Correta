import Image from "next/image";
export default function Topbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
        <a
          href="./index.html"
          class="flex items-center gap-3"
          aria-label="Página inicial WEG Academy"
        >
          <Image
            src="./assets/img/logo-weg.png"
            alt="Logo WEG"
            height={32}
            width={32}
            className="h-8 w-auto"
          >
          </Image>
          <span className="text-sm font-bold text-weg-dark">Academy</span>
        </a>

        <nav
          className="flex items-center gap-2 text-sm font-semibold text-slate-600"
          aria-label="Navegação principal"
        >
          <a
            href="./index.html"
            className="rounded-full bg-weg-light px-3 py-2 text-weg-dark"
          >
            Cursos
          </a>
          <a
            href="./sobre.html"
            class="rounded-full px-3 py-2 hover:bg-slate-100"
          >
            Sobre a WEG
          </a>
        </nav>
      </div>
    </header>
  );
}
