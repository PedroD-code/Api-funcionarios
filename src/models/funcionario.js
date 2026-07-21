const { DataTypes } = require("sequelize")
const sequelize = require("../config/database")

const Funcionario = sequelize.define("Funcionario",{

    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    nome:{
        type:DataTypes.STRING,
        allowNull:false
    },
    cargo:{
        type:DataTypes.STRING,
        allowNull:false
    },
    salario:{
        type:DataTypes.DECIMAL(10,2),
        allowNull:false
    }
})
module.exports = Funcionario 