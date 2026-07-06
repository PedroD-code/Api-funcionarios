const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const Funcionario = sequelize.define("Funcionario", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cargo: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Funcionario;