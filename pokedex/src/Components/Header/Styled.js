import styled from "styled-components";


export const HeaderContainer = styled.header `
display: flex;
align-items: center;
justify-content: space-between;
height: 70px;
padding: 0 10px;
background-color: #FCC51D;
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

export const LogoPokeball = styled.img`
    width: 45px;
    cursor: pointer;
    &:hover{
        transition: all 600ms;
        transform: scale(1.1);
    }
`