import React from 'react';
import {HomeContainer} from "./styled"
import { useNavigate } from "react-router-dom"



export const HomePage = () => {
    
    const navigate = useNavigate()
    
    const goToPokedexPage = (navigate) => {
        navigate("/Pokedex")
    }
   
   
        return (
            <HomeContainer>
                <h1>Pokedex</h1>
            </HomeContainer>
        );
    };


export default HomePage
