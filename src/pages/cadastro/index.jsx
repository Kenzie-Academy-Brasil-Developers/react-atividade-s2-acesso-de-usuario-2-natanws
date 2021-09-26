import { useState } from "react";
import { useHistory } from "react-router-dom";

export const Cadastro = ({ members, setMemberList }) => {
  const addMember = () => {
    let idNumber = members.length + 1;
    console.log(memberType, memberName);
    setMemberList([
      ...members,
      { id: idNumber, name: memberName, type: memberType },
    ]);
    history.push("/");
  };

  const [memberName, setMemberName] = useState();
  const [memberType, setMemberType] = useState();
  const history = useHistory();
  return (
    <div>
      <form>
        <input
          type="text"
          value={memberName}
          placeholder="Nome do membro"
          onChange={(element) => setMemberName(element.target.value)}
        />
        <input
          list="type"
          placeholder="P.F. ou P.J.?"
          value={memberType}
          onChange={(element) => setMemberType(element.target.value)}
        />
        <button type="submit" onClick={() => addMember()}>
          Cadastrar membro
        </button>
      </form>

      <datalist id="type">
        <option>pf</option>
        <option>pj</option>
      </datalist>
    </div>
  );
};
