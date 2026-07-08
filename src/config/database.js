const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 3306,
        dialect: "mysql",
        logging: console.log
    }
);

sequelize.authenticate()
    .then(() => console.log("Conectado ao MySQL"))
    .catch(err => console.error("Erro na conexão:", err));

module.exports = sequelize;