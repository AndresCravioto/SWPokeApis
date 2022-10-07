const axios = require("axios").default;
// function to get the data from the API
let getSwapi = async () => {
    let response = await axios(`https://swapi.dev/api/people/1/`);
    return response;
};
//controller function
module.exports = async (req, res) => {
    let responseSwapi = await getSwapi();
    res.send(responseSwapi.data);
};