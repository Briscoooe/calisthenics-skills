import React from "react";
import "./App.css";
import { SkillProvider } from "./context/SkillContext";
import SkillTree from "./components/SkillTree";
import { MapIcon } from "./icons";
import Icon from "./components/ui/Icon";

const App: React.FC = () => {
  return (
    <SkillProvider>
      <div className="App">
        <header className="App-header">
          <Icon src={MapIcon} title="header map icon." containerWidth={250} />
          <h1>Skill Tree Demo</h1>
          <SkillTree />
        </header>
      </div>
    </SkillProvider>
  );
};

export default App;
