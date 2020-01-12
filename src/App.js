import React from "react";
import "./App.css";
import Packets from "./components/Packets";

function App() {
  return (
    <div className="App">
      <h1 className="title_h1">Ты сегодня покормил кота?</h1>
      <Packets />
    </div>
  );
}

export default App;
