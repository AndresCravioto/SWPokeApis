const axios = require("axios").default;
// function to get the data from the API
let getPokemon = async () => {
    let response = await axios(`https://pokeapi.co/api/v2/pokemon/pikachu`);
    return response;
};
//controller function
module.exports = async (req, res) => {
    let responsePokemon = await getPokemon();
    res.send(responsePokemon.data);
};