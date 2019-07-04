import React from "react";
import "./App.css";
import SkillTree from "./components/SkillTree";
import {
  legPullData,
  horizontalPullBackData,
  horizontalPullFrontData,
  verticalPullData,
  verticalPullAndPushData,
  verticalPushDownData
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
        <Icon src={MapIcon} title="header map icon." containerWidth={200} />
        <h1>Skill Tree Demo</h1>
      </header>
      <section className="App__body">
        <SkillTree
          id="hbp"
          title="Horizontal Pull Back"
          data={horizontalPullBackData}
        />
        <SkillTree
          id="hpf"
          title="Horizontal Pull Front"
          data={horizontalPullFrontData}
        />
        <SkillTree id="vp" title="Vertical Pull" data={verticalPullData} />
        <SkillTree
          id="vpp"
          title="Vertical Pull And Push"
          data={verticalPullAndPushData}
        />
        <SkillTree
          id="vpd"
          title="Vertical Push Down"
          data={verticalPushDownData}
        />
        <SkillTree id="lp" title="Legs Pull" data={legPullData} />
      </section>
    </div>
  );
}

export default App;
