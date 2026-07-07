const Funcionario = require("../model/funcionario");

exports.cadastrar = async (req, res) => {
    try {
        const funcionario = await Funcionario.create(req.body);
        res.status(201).json(funcionario);
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ erro: erro.message });
    }
};

exports.listar = async (req, res) => {
    try {
        const funcionarios = await Funcionario.findAll();
        res.status(200).json(funcionarios);
    } catch (erro) {
        console.error(erro);
        res.status(500).json({ erro: erro.message });
    }
};