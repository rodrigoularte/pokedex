import HomePage from '../Pages/Home/Home';
import Pokedex from '../Pages/Pokedex/PokedexPage';
import PokemonsDetails from '../Pages/PokemonsDetails/PokemonsDetailsPage'





export const Router = () => {
    return(
        
        <BrowserRouter> 
        <Routes>
        <Route index element = {<HomePage/>} />
        <Route path="Pokedex" element = {<Pokedex/>} />
        <Route path="Pokedetails" element = {<PokemonsDetails/>} />
        </Routes>
        </BrowserRouter>