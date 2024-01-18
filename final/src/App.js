import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "./Components/Pages/Acceuill/Acceuill";
import Cours from "./Components/Pages/Cours/Cours";
import Popop from "./Components/Layout/Popop";
import AppContext from "./Components/Context/AppContext";
import Home from "./Components/Pages/Home/Home";
import MenuMusic from "./Components/Exo/MenuMusic";
import Formulaire from "./Components/Exo/Formulaire";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acceuil" element={<Acceuil />} />
        <Route path="/cours" element={<Cours />} />
        <Route path="/popup" element={<Popop />} />
        <Route path="/context" element={<AppContext />} />
        <Route path="/menu-music" element={<MenuMusic />} />
        <Route path="/formulaire" element={<Formulaire />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
