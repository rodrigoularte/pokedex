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

export const Titulo = styled.h1`
  display: flex;
  justify-content: center;
  font-family: SultanNahiaW20;
  margin: auto;
  color: white;
`;

export const PokedexButton = styled.button`
  background-color: #1c2b59;
  border: none;
  color: white;
  padding: 7px;
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

export const HomeButton = styled.button`
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

export const RemovePokemonButton = styled.button`
  background-color: #FF0000;
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

export const Icon = styled.img`
  width: 2rem;
`;

export const LogoPokeball = styled.img`
  width: 45px;
  cursor: pointer;
  &:hover {
    transition: all 600ms;
    transform: scale(1.1);
  }
`;
