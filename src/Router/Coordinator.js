export const goToPokedexPage = (navigate) => {
    navigate ("/Pokedex")
}
export const goToPokeDetais = (navigate, pokemon) => {
    navigate (`/Pokedetails/${pokemon}`)
}
export const goBack = (navigate) => {
    navigate (-1)
}
