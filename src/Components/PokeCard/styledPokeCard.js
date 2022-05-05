import styled from "styled-components"

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 250px;
  background-color: #FFE081;
`

export const CardImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`

export const PokeImage = styled.img`
  width: 150px;
`

export const CardFooter = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  background-color: #FCC51D;
  justify-content: space-around;
  align-items: center;
`

export const Button1 = styled.button`
  display: flex;
  width: 95px;
  height: 25px;
  background-color: #FCC51D;
  color: #1C2B59;
  border: none;
  border-radius: 5px;
  justify-content: space-evenly;
  align-items: center;
  font-family: 'Press Start 2P', cursive;
  font-size: 8px;

  :hover {
    cursor: pointer;
    background-color: #1C2B59;
    color: white;
  }
`

export const PokebolaImg = styled.img`
  width: 20px;
`

export const Button2 = styled.button`
  display: flex;
  width: 95px;
  height: 25px;
  background-color: #FCC51D;
  color: #FF0000;
  border: none;
  border-radius: 5px;
  justify-content: space-evenly;
  align-items: center;
  font-family: 'Press Start 2P', cursive;
  font-size: 8px;

  :hover {
    cursor: pointer;
    background-color: #FF0000;
    color: white;
  }
`
export const PokeName = styled.h1 `
    font-size: 1.2em;
    color: #30a7d7 ;
`