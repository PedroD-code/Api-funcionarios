const request = require("supertest");
const app = require("../src/app");
const sequelize = require("../src/config/database");

beforeAll(async () => {
    try {
        await sequelize.authenticate();
        console.log("Conectado ao banco!");

        await sequelize.sync({ force: true });
        console.log("Tabela criada!");
    } catch (err) {
        console.error("ERRO COMPLETO:");
        console.error(err);
        throw err;
    }
});

afterAll(async () => {
    await sequelize.close();
});

describe("API de funcionários", () => {
    it("Deve cadastrar um funcionário", async () => {
        const resposta = await request(app)
            .post("/funcionario")
            .send({
                nome: "Maria",
                cargo: "Analista"
            });

        expect(resposta.statusCode).toBe(201);
        expect(resposta.body.nome).toBe("Maria");
        expect(resposta.body.cargo).toBe("Analista");
    });
});