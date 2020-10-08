import * as React from "react";
import { Header } from "./components/Header";
import { RouterComp } from "./components/RouterComp";
import "./styles.css";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <RouterComp />
    </div>
  );
};

export default App;
