import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Count } from "./Components/Count";
import { MyButton } from "./Components/MyButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Count></Count>
        {/* <MyButton></MyButton> */}
      </header>
    </div>
  );
}

export default App;
