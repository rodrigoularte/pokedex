import React from 'react';
import {HomeContainer} from "../HomePage/Styled"
import { useNavigate } from "react-router-dom"



export const HomePage = () => {

    
    
   
        return (
            <HomeContainer>
                <h1>Pokedex Home</h1>
            </HomeContainer>
        );
    };


export default HomePage



    

/*const navigate = useNavigate()
    
 const goToPokedexPage = (navigate) => {
    navigate("/Pokedex")
    }*/
   