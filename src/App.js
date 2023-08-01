import Main from "./components/pages/Home/Main";
import Support from "./components/pages/Support/Support";
import { Routes, Route } from "react-router-dom";

import '@assets/css/ui.css';

function App() {
  return (
    <Routes>
      <Route Component={Main} path="/"></Route>
      <Route Component={Support} path="/support"></Route>
    </Routes>
  );
}

export default App;
