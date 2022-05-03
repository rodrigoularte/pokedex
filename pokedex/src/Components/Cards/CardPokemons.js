import React from "react"
import { CardContainer, CardFooter, CardImage, PokebolaImg, Button1, Button2 } from "./Styled"
import pokebola from "../../Assets/pokeball.png"

function CardPokemons() {

  return (
    <div>
      Card Home:
      <CardContainer>
        <CardImage></CardImage>
        <CardFooter>
          <Button1><PokebolaImg src={pokebola} />Pegar!</Button1>
          <Button1>Detalhes</Button1>
        </CardFooter>
      </CardContainer>

      Card Pokedex
      <CardContainer>
        <CardImage></CardImage>
        <CardFooter>
          <Button2>x Remover</Button2>
          <Button1>Detalhes</Button1>
        </CardFooter>
      </CardContainer>
    </div>
  )
}

export default CardPokemons