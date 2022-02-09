const router = require("express").Router();
const auth = require("./controllers/authControllers");

router.get("/", (req, res) => res.render("index"));
router.get("/login", (req, res) => res.render("login"));

router.get("/register", (req, res) => res.render("register"));
router.post("/register", auth.register);

module.exports = router;
