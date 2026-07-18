const express = require("express")

const router = express.Router()

const controller = require("../controller/funcionariocontroller")


router.get("/funcionarios",controller.listar)
router.post("/funcionarios",controller.cadastrar)

module.exports = router