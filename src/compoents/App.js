import React from "react";
import LottoArray from "./LottoArray";
import { LottoProvider } from "../context/LottoContext";

function App() {
  return (
    <LottoProvider>
      <div className="App">
        <LottoArray />
      </div>
    </LottoProvider>
  );
}

export default App;
