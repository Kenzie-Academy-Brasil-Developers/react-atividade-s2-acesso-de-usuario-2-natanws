import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const Company = ({ members }) => {
  const params = useParams();

  const member = members.find((member) => member.id === params.id);

  return (
    <div>
      <h1>Detalhes do membro:</h1>
      <p>Nome: {member.name}</p>
      <p>Status: {member.type.toUpperCase().split("").join(".") + "."}</p>
      <Link to="/">Voltar para a página inicial</Link>
    </div>
  );
};
