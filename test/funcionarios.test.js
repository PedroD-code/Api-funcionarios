const request = require("supertest");
const app = require("../src/app");
const sequelize = require("../src/config/database");

beforeAll(async () => {
    await sequelize.sync({ force: true });
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