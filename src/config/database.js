const {Sequelize} = require("sequelize")

const dotenv = require("dotenv")

if(process.env.NODE_ENV === "test"){
    dotenv.config({path: ".env.test"});
}else{
    dotenv.config({path: ".env"});
}


console.log("BANCO:", process.env.DB_NAME);
console.log("USUARIO:", process.env.DB_USER);


const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host:process.env.DB_HOST,
        dialect:"mysql",
        logging:false
    }
)

try {
    sequelize.authenticate()
    console.log("Banco conectado com sucesso")
} catch (error) {
    console.log(error)
}

module.exports = sequelize