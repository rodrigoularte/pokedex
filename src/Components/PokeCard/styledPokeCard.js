import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 250px;
  background-color: #ffe081;
  border-radius: 8px;
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
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const TakeButton = styled.button`
  display: flex;
  width: 95px;
  height: 25px;
  background-color: #fcc51d;
  color: #1c2b59;
  border: none;
  border-radius: 5px;
  justify-content: space-evenly;
  align-items: center;
  font-family: "Press Start 2P", cursive;
  font-size: 8px;

  :hover {
    cursor: pointer;
    background-color: #1c2b59;
    color: white;
  }
`;

export const DetailsButton = styled.button`
  display: flex;
  width: 95px;
  height: 25px;
  background-color: #fcc51d;
  color: #1c2b59;
  border: none;
  border-radius: 5px;
  justify-content: space-evenly;
  align-items: center;
  font-family: "Press Start 2P", cursive;
  font-size: 8px;

  :hover {
    cursor: pointer;
    background-color: #1c2b59;
    color: white;
  }
`;

export const RemoveButton = styled.button`
  display: flex;
  width: 95px;
  height: 25px;
  background-color: #fcc51d;
  color: #ff0000;
  border: none;
  border-radius: 5px;
  justify-content: space-evenly;
  align-items: center;
  font-family: "Press Start 2P", cursive;
  font-size: 8px;

  :hover {
    cursor: pointer;
    background-color: #ff0000;
    color: white;
  }
`;

export const PokebolaImg = styled.img`
  width: 20px;
`;

export const PokeName = styled.h1`
  font-size: 1.2em;
  color: #30a7d7;
`;
