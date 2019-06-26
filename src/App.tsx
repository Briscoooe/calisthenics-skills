import React from "react";
import "./App.css";
import { SkillProvider } from "./context/SkillContext";
import SkillTree from "./components/SkillTree";
import { MapIcon } from "./icons";
import Icon from "./components/ui/Icon";
import skillTreeData from "./data/skillTreeData";
import { TreeProvider } from "./context/TreeContext";

const App: React.FC = () => {
  return (
    <SkillProvider>
      <div className="App">
        <header className="App-header">
          <Icon src={MapIcon} title="header map icon." containerWidth={250} />
          <h1>Skill Tree Demo</h1>
          <TreeProvider>
            <SkillTree title="Horizontal Pull Front" data={skillTreeData} />
          </TreeProvider>
        </header>
      </div>
    </SkillProvider>
  );
};

export default App;
