import React from 'react';
import {} from "./styled"



export const Pokedex = () => {
   
    const navigate = useNavigate()
    
    const goToPokeDetais = (navigate) => {
        navigate("/Pokedetails")
    }
        return (
            <listContainer>
                <h1>Pokedex</h1>
            </listContainer>
        );
    };


export default Pokedex