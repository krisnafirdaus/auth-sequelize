const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("express-flash");
const { PORT = 3000 } = process.env;

app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: "krisna123",
    resave: false,
    saveUninitialized: false,
  })
);

// const passport = require("./lib/passport");
// app.use(passport.initialize());
// app.use(passport.session());

app.use(flash());

app.set("view engine", "ejs");

const router = require("./router");
app.use(router);
app.listen(PORT, () => {
  console.log(`Server nyala di port ${PORT}`);
});
