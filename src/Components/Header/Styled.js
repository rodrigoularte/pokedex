import styled from "styled-components";

export const HeaderContainer = styled.header `
display: flex;
align-items: center;
justify-content: space-between;
height: 70px;
padding: 0 10px;
background-color: #FCC51D;
margin-bottom: 1rem;
`
export const LogoPokeDev = styled.img`
    width: 160px;
    cursor: pointer;
    &:hover{
        transition: all 600ms;
        transform: scale(1.1);
    }
    &:active {
    position:relative;
    top:1px;
}
`

export const Titulo = styled.h1`
display: flex;
justify-content: center;
    font-family: SultanNahiaW20;
    margin: auto;
    color: white;
    
`

export const Botao = styled.button`
     background-color: orangered;
    border:none;
    outline: none;
    color: white;
    box-shadow: 1px 1px 2px black;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px;
    :hover{
        background-color: orangered;
        border: none;
    }
    :active{
        box-shadow: none;
    }
    font-family: SultanNahiaW20;
    font-size: 1.2em;
    margin-left: 10px;
    margin-right: 10px;
`







export const LogoPokeball = styled.img`
    width: 45px;
    cursor: pointer;
    &:hover{
        transition: all 600ms;
        transform: scale(1.1);
    }
`