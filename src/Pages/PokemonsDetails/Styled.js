import styled from "styled-components"

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  font-family: 'Press Start 2P', cursive;
  color: #1C2B59;
  margin-top: 30px;

  h2 {
    font-size: 20px;
    margin-bottom: 30px;
  }

  p {
    font-size: 14px;
  }
`

export const PokeImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 220px;
  height: 430px;
`
export const PokeImg = styled.img`
  width: 220px;
  height: 200px;
  background-color: #FFE081;
`

export const Coluna1Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 430px;
  background-color: #FFE081;
  padding: 0 20px;
`

export const Poderes = styled.div`
  display: flex;
  width: 300px;
  height: 430px;
`

export const Coluna2Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 430px;
`

export const TipoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 54px;
  background-color: #FFE081;
  justify-content: space-evenly;
`

export const AtaquesContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 346px;
  background-color: #FFE081;
  align-items: center;
`