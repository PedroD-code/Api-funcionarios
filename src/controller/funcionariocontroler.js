const Funcionario = require("../model/funcionario");

exports.cadastrar = async (req, res) => {
    const funcionario = await Funcionario.create(req.body);
    res.status(201).json(funcionario);
};

exports.listar = async (req, res) => {
    const funcionarios = await Funcionario.findAll();
    res.status(200).json(funcionarios);
};