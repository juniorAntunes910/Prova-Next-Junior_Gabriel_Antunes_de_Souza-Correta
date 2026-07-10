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
    destaque: params.get("destaque")
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
    <p>{use</p>
  );
}
