import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { SkillProvider } from "./context/SkillContext";
import SkillTree from "./components/SkillTree";

const App: React.FC = () => {
  return (
    <SkillProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <SkillTree />
        </header>
      </div>
    </SkillProvider>
  );
};

export default App;
