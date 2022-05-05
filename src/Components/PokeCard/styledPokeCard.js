import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 250px;
  background-color: #ffe081;
`;

export const CardImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const PokeImage = styled.img`
  width: 150px;
`;

export const CardFooter = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  background-color: #fcc51d;
  justify-content: space-around;
  align-items: center;
`;

export const TakeButton = styled.button`
  background-color: #1c2b59;
  border: none;
  color: white;
  width: 50%;
  height: 50%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 0.5rem;
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

export const DetailsButton = styled.button`
  background-color: #1c2b59;
  border: none;
  color: white;
  width: 50%;
  height: 50%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 0.5rem;
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

export const PokebolaImg = styled.img`
  width: 10px;
`;

export const PokeName = styled.h1`
  font-size: 1.2em;
  color: #30a7d7;
`;
