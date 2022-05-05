import { HomePage } from "../Pages/HomePage/HomePage";
import Pokedex from "../Pages/Pokedex/PokedexPage";
import PokemonsDetails from "../Pages/PokemonsDetails/PokemonsDetailsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Components/Header/Header";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<div><Header/>   <HomePage /></div>}/> 
        <Route path="/pokedex" element={<div><Header/> <Pokedex /></div>} />
        <Route path="/pokedetails/:pokemon" element={<div><Header/><PokemonsDetails /></div>} />
        <Route path="*" element={<div>Pagina não encontrada </div>} />
      </Routes>
    </BrowserRouter>
  );
};
