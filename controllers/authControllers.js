const { User } = require("../models");
const passport = require("../lib/passport");

function format(user) {
  const { id, username } = user;
  return {
    id,
    username,
    accessToken: user.generateToken(),
  };
}

module.exports = {
  register: (req, res, next) => {
    User.register(req.body)
      .then(() => {
        res.redirect("/login");
      })
      .catch((err) => next(err));
  },
  // login: passport.authenticate("local", {
  //   successRedirect: "/whoami",
  //   failureRedirect: "/login",
  //   failureFlash: true,
  // }),
  login: (req, res) => {
    User.authenticate(req.body).then((user) => {
      res.json(format(user));
    });
  },

  whoami: (req, res) => {
    const currentUser = req.user;
    res.json(currentUser);
  },
};
