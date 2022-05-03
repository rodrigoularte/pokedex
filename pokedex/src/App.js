import React from 'react';
import CardPokemons from './Components/Cards/CardPokemons';
import HomePage from './Pages/HomePage/HomePage';
import Pokedex from './Pages/Pokedex/PokedexPage';
import PokemonsDetails from './Pages/PokemonsDetails/PokemonsDetailsPage';



function App() {


  return (

    <div>
      <CardPokemons />
      <HomePage />
      <Pokedex />
      <PokemonsDetails />
    </div>

  );
}

export default App;

