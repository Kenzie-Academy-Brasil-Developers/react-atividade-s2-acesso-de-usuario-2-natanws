import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Member } from "./pages/member";
import { Company } from "./pages/company";
import { members } from "./assets/members";
import { Cadastro } from "./pages/cadastro";
import "./assets/reset.css";
import { useState } from "react";

function App() {
  const [memberList, setMemberList] = useState(members);

  return (
    <div className="mainContainer">
      <Switch>
        <Route exact path="/company/:id">
          <Company members={memberList} />
        </Route>
        <Route exact path="/member/:id">
          <Member members={memberList} />
        </Route>
        <Route exact path="/cadastro">
          <Cadastro members={memberList} setMemberList={setMemberList} />
        </Route>
        <Route path="/">
          <Home members={memberList} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
