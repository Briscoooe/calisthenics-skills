import React from "react";
import "./App.css";
import { SkillProvider } from "./context/SkillContext";
import SkillTree from "./components/SkillTree";
import {
  legPullData,
  horizontalPullBackData,
  horizontalPullFrontData
} from "./data/skillTreeData";
import Icon from "./components/ui/Icon";
import { MapIcon } from "./icons";
import NavBar from "./components/ui/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar>
        <li>
          <a href="https://github.com/andrico1234">Github</a>
        </li>
        <li>
          <a href="https://www.buymeacoffee.com/1tsB7E9fL">Coffee</a>
        </li>
        <li>
          <a href="https://andri.co">Website</a>
        </li>
        <li>
          <a href="https://www.instagram.com/andricokaroulla/">Instagram</a>
        </li>
      </NavBar>
      <header className="App__header">
        <Icon src={MapIcon} title="header map icon." containerWidth={250} />
        <h1>Skill Tree Demo</h1>
      </header>
      <section className="App__body">
        <SkillProvider contextId="hpb" storage={localStorage}>
          <SkillTree
            title="Horizontal Pull Back"
            data={horizontalPullBackData}
          />
        </SkillProvider>
        <SkillProvider contextId="hpf" storage={localStorage}>
          <SkillTree
            title="Horizontal Pull Front"
            data={horizontalPullFrontData}
          />
        </SkillProvider>
        <SkillProvider contextId="lp" storage={localStorage}>
          <SkillTree title="Legs Pull" data={legPullData} />
        </SkillProvider>
      </section>
    </div>
  );
}

export default App;
