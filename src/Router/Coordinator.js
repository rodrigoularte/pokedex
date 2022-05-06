export const goToHome = (navigate) => {
    navigate ("/")
}

export const goToPokedexPage = (navigate) => {
    navigate ("/Pokedex")
}

export const goToPokeDetails = (navigate, pokemon) => {
    navigate (`/Pokedetails/${pokemon}`)
}

export const goBack = (navigate) => {
    navigate (-1)
}
