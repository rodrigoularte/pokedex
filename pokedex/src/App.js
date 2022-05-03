import React from 'react';
import CardPokemons from './Components/Cards/CardPokemons';
import HomePage from './Pages/HomePage/HomePage';
import Pokedex from './Pages/Pokedex/PokedexPage';
import PokemonsDetails from './Pages/PokemonsDetails/PokemonsDetailsPage';
import Header from './Components/Header/Header';



function App() {


  return (
    
    
    
    <div>
      <Header/>
      <CardPokemons />
      <HomePage />
      <Pokedex />
      <PokemonsDetails />
    </div>
    

  );
}

export default App;

