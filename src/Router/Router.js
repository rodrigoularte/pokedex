import { HomePage } from "../Pages/HomePage/HomePage";
import Pokedex from "../Pages/Pokedex/PokedexPage";
import PokemonsDetails from "../Pages/PokemonsDetails/PokemonsDetailsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokedetails" element={<PokemonsDetails />} />
        <Route path="*" element={<div>Pagina não encontrada </div>} />
      </Routes>
    </BrowserRouter>
  );
};
