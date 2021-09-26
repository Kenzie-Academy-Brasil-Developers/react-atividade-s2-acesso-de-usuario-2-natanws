import "./styles.css";
import { Link } from "react-router-dom";

export const Home = ({ members }) => {
  return (
    <div className="homeContainer">
      <h2>Membros:</h2>

      {members.map((member, index) =>
        member.type === "pj" ? (
          <Link key={index} to={`/company/${member.id}`}>
            {member.name}
          </Link>
        ) : (
          <Link key={index} to={`/member/${member.id}`}>
            {member.name}
          </Link>
        )
      )}
      <Link className="cadastro" to="/cadastro">
        Clique aqui para cadastrar novo membro
      </Link>
    </div>
  );
};
