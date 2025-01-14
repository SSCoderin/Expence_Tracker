const express = require("express");
const { register, login, user } = require("../controllers/auth");
const { expense , viewdata } = require("../controllers/data");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/user", user);
router.post("/expence", expense);
router.get("/data", viewdata);

module.exports = router;