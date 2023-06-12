import type { FC } from "react";
import "./App.css";

import Agents from "../Agents/Agents";

const App: FC = () => {
  return (
    <div className="app">
      <Agents />
    </div>
  );
};

export default App;
