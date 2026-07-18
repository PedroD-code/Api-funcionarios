const express = require("express");
const cors = require("cors");
const routes = require("./routes/funcionarioRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

module.exports = app;
app.use(cors({
    origin: "http://localhost:3001"
}));