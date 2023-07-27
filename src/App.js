import Main from "./components/pages/Home/Main";
import { Routes, Route } from "react-router-dom";

import '@assets/css/ui.css';

function App() {
  return (
    <Routes>
      <Route Component={Main} path="/"></Route>
    </Routes>
  );
}

export default App;
