// Externals
require("dotenv").config();

// Modules
const fetch = require("node-fetch");

const fetchData = async (term, params) => {
  try {
    const URL = `https://api.themoviedb.org/3/`;
    const KEY = process.env.KEY;
    const endpoint = `${URL}${term}?api_key=${KEY}${params}&language=en-US`;
    const response = await fetch(endpoint);
    return await response.json();
  } catch (err) {
    next(err);
  }
};

module.exports = fetchData;
