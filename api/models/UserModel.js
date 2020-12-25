const _ = require("lodash");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const API_JWT_SECRET = process.env.API_JWT_SECRET;

module.exports = (db) => {
  const signUp = (req, res) => {
    const user = req.body;

    bcrypt.hash(user.password, saltRounds).then(function (hashPassword) {
      db.users
        .findOne({ email: user.email })
        .then((existingUser) => {
          if (existingUser) {
            return res.status(400).send("L'utilisateur existe déjà");
          }
          return db.users.insert({
            ...user,
            password: hashPassword,
          });
        })
        .then((createdUser) => {
          const token = jwt.sign(
            _.omit(createdUser, "password"),
            API_JWT_SECRET
          );
          return res.send({
            user: createdUser,
            token: token,
          });
        });
    });
  };

  const login = (req, res) => {
    const user = req.body;
    db.users.findOne({ email: user.email }).then((existingUser) => {
      if (!existingUser) {
        return res.status(404).send("Cet email n'existe pas");
      }
      return bcrypt
        .compare(user.password, existingUser.password)
        .then((passwordIsValid) => {
          if (!passwordIsValid) {
            return res.status(401).send("Mot de passe faux");
          }
          const token = jwt.sign(
            _.omit(existingUser, "password"),
            API_JWT_SECRET
          );
          return res.send({
            user: _.omit(existingUser, "password"),
            token,
          });
        });
    });
  };

  // const verify = (req, res) => {
  //   const token = req.header("Authorization");
  //   console.log(`token:`, token);
  //   jwt.verify(token, API_JWT_SECRET, function (err, decoded) {
  //     console.log(`err:`, err);
  //     console.log(`decoded:`, decoded);
  //   });
  // };

  return { signUp, login };
};
