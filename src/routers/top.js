const express = require("express");
const router = express.Router();

const topController = require("../app/controller/TopController");

router.get("/create", topController.create);
router.post("/store", topController.store);
router.get("/:slug", topController.slug);
router.post("/handleform", topController.handleform);
router.get("/:id/edit", topController.edit);
router.put("/:id", topController.update);
router.delete("/:id", topController.delete);
router.delete("/:id/force", topController.destroy);
router.patch("/:id/restore", topController.restore);
router.get("/", topController.top);

module.exports = router;