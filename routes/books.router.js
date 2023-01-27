const express = require("express");
const controller = require("../controllers/books.controller");
const router = express.Router();
const authenticate = require("../middlewares/authenticate.middleware");

router.get(
  "/",
  authenticate.isAuthenticated,
  authenticate.isUser,
  controller.getAll
);
router.post("/", controller.addOne);
router.delete(
  "/",
  authenticate.isAuthenticated,
  authenticate.isUser,
  authenticate.isAdmin,
  controller.deleteAll
);

router.get("/:id", controller.getOne);
router.put("/:id", controller.updateOne);
router.delete("/:id", controller.deleteOne);

module.exports = router;
