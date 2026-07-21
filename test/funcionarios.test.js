const request = require("supertest");
const app = require("../src/app");
const sequelize = require("../src/config/database");



afterAll(async()=>{

    await sequelize.close();

});

describe("API Funcionarios",()=>{

    it("Deve cadastrar funcionario", async()=>{

        const resposta = await request(app)
        .post("/funcionarios")
        .send({
            nome:"Maria",
            cargo:"Analista"
        });

        expect(resposta.statusCode).toBe(201);

    });
    

});