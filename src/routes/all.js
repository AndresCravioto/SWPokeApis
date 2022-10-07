const axios = require("axios").default;
// function to get the data from the API
let getAllApis = async (ress) => {
    let request1 = axios(`https://swapi.dev/api/people/1/`);
    let request2 = axios(`https://pokeapi.co/api/v2/pokemon/pikachu`);
    let response = await axios.all([request1, request2])
        .then(axios.spread((...res) => {
            const films = res[0].data.films
            const pokemonName = res[1].data.name
            ress.send(pokemonName + films)
        }));
    return response
};
//controller function
module.exports = async (req, res) => {
    let responseAll = await getAllApis(res);
};