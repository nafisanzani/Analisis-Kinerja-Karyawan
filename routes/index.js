const express = require("express");
const router = express.Router();

const controller = require("../controllers/employeeController");

router.get("/", controller.home);
router.post("/analisis", controller.analisis);

module.exports = router;
