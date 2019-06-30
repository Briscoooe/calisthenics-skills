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

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App__header">
        <Icon src={MapIcon} title="header map icon." containerWidth={250} />
        <h1>Skill Tree Demo</h1>
      </header>
      <section className="App__body">
        <SkillProvider>
          <SkillTree
            title="Horizontal Pull Back"
            data={horizontalPullBackData}
          />
        </SkillProvider>
        <SkillProvider>
          <SkillTree
            title="Horizontal Pull Front"
            data={horizontalPullFrontData}
          />
        </SkillProvider>
        <SkillProvider>
          <SkillTree title="Legs Pull" data={legPullData} />
        </SkillProvider>
      </section>
    </div>
  );
};

export default App;
