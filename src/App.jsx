import React from "react";
import { BrowserRouter } from "react-router-dom";
import Approutes from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <Approutes />
    </BrowserRouter>
  );
}

export default App;
