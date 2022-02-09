const router = require("express").Router();
const auth = require("./controllers/authControllers");
const restrict = require("./middlewares/restrict");

router.get("/", restrict, (req, res) => res.render("index"));
router.get("/whoami", restrict, auth.whoami);
router.get("/login", (req, res) => res.render("login"));

router.get("/register", (req, res) => res.render("register"));
router.post("/register", auth.register);
router.post("/login", auth.login);

module.exports = router;
