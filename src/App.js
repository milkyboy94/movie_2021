import React from "react";
import { HashRouter, Route } from "react-router-dom";
import home from "./routes/home";
import about from "./routes/about";

function App() {
  return (
    <HashRouter>
      <Route path="/" component={home} />
      <Route path="/about" component={about} />
    </HashRouter>
  );
}

export default App;
