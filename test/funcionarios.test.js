const request = require("supertest");

const app = require("../src/app");

describe("API de funcionários", () => {
    it("Deve cadastrar um funcionário", async () => {
        const resposta = await request(app)
            .post("/funcionarios")
            .send({
                nome: "Maria",
                cargo: "Analista"
            });

        expect(resposta.statusCode).toBe(201);
        expect(resposta.body.nome).toBe("Maria");
        expect(resposta.body.cargo).toBe("Analista");
    });
});