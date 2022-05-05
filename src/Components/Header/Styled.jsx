import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 0 10px;
  background-color: #fcc51d;
  margin-bottom: 1rem;
`;
export const LogoPokeDev = styled.img`
  width: 160px;
  /* cursor: pointer;
    &:hover{
        transition: all 600ms;
        transform: scale(1.1);
    }
    &:active {
    position:relative;
    top:1px;
} */
`;

export const Titulo = styled.h2`
  display: flex;
  justify-content: center;
  font-family: 'Press Start 2P', cursive;
  margin: auto;
  color: #1C2B59;
`;

export const PokedexButton = styled.button`
  display: flex;
  width: 200px;
  height: 30px;
  background-color: #1C2B59;
  color: white;
  border: none;
  border-radius: 5px;
  justify-content: space-evenly;
  align-items: center;
  font-family: 'Press Start 2P', cursive;
  font-size: 10px;
  gap: 10px;

  :hover {
    cursor: pointer;
    background-color: #00144a;
  }
`;

export const HomeButton = styled.button`
  display: flex;
  width: 200px;
  height: 30px;
  background-color: #1C2B59;
  color: white;
  border: none;
  border-radius: 5px;
  justify-content: space-evenly;
  align-items: center;
  font-family: 'Press Start 2P', cursive;
  font-size: 10px;
  gap: 10px;

  :hover {
    cursor: pointer;
    background-color: #00144a;
  }
`;

export const RemovePokemonButton = styled.button`
  display: flex;
  width: 220px;
  height: 30px;
  background-color: #ff0000;
  color: white;
  border: none;
  border-radius: 5px;
  justify-content: space-evenly;
  align-items: center;
  font-family: 'Press Start 2P', cursive;
  font-size: 10px;
  gap: 10px;
  margin-left: 30px;

  :hover {
    cursor: pointer;
    background-color: #e80000;
  }
`;

export const ReturnButton = styled.button`
  background-color: #1c2b59;
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  :hover {
    background-color: orangered;
    border: none;
  }
  :active {
    box-shadow: none;
  }
  font-family: SultanNahiaW20;
  font-size: 1.2em;
  margin-left: 10px;
  margin-right: 10px;
`;

export const PokedexImg = styled.img`
  width: 20px;
`;

export const LogoPokeball = styled.img`
  width: 45px;
  cursor: pointer;
  &:hover {
    transition: all 600ms;
    transform: scale(1.1);
  }
`;
