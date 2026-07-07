const express = require("express")

const router = express.Router()

const controller = require("../controller/funcionariocontroller");

router.get("/funcionario",controller.listar)
router.post("/funcionario",controller.cadastrar)

module.exports = router