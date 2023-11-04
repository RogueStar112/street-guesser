const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
const axios = require('axios');


app.get("/", (request, response) => response.json("Root route for translation"))

const MAP_API_KEY = process.env.VITE_API_KEY;

app.get("/locate", async (request, response) => {

  const searchQuery = request.query.location

  let URL = `https://eu1.locationiq.com/v1/search?key=${MAP_API_KEY}&q=${searchQuery}format=json`


})

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));