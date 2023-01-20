const express = require("express");
const controller = require("../controllers/books.controller");
const router = express.Router();

router.get("/", controller.getAll);
router.post("/", controller.addOne);
router.delete("/", controller.deleteAll);

router.get("/:id", controller.getOne);
router.put("/:id", controller.updateOne);
router.delete("/:id", controller.deleteOne);

module.exports = router;
