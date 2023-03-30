require("dotenv").config();
const { SECRET } = process.env;
const { User } = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createToken = (username, id) => {
  return jwt.sign({ username, id }, SECRET, { expiresIn: "2 Days" });
};

module.exports = {
  register: async (req, res) => {
    console.log(req.body);
    try {
      const { username, password } = req.body;
      const foundUser = await User.findOne({ where: { username } });
      if (foundUser) {
        res
          .status(400)
          .send(
            `The username ${username} has already been taken. Please try another one :)`
          );
      } else {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const newUser = await User.create({ username, hashedPass: hash });
        const token = createToken(
          newUser.dataValues.username,
          newUser.dataValues.id
        );
        const exp = Date.now() + 1000 * 60 * 60 * 48;
        res.status(200).send({
          username: newUser.dataValues.username,
          token,
          exp,
        });
      }
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },

  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const foundUser = await User.findOne({ where: { username } });
      if (foundUser) {
        const isAuthenticated = bcrypt.compareSync(
          password,
          foundUser.hashedPass
        );
        if (isAuthenticated) {
          const token = createToken(
            foundUser.dataValues.username,
            foundUser.dataValues.id
          );
          console.log("TOKEN----------", token)
          const exp = Date.now() + 1000 * 60 * 60 * 48;
          res.status(200).send({
            username: foundUser.dataValues.username,
            token,
            exp,
          });
        } else {
          res
            .status(400)
            .send(
              "Unable to log in due to incorrect username or password. Please try again."
            );
        }
      } else {
        res
          .status(400)
          .send(
            "Unable to log in due to incorrect username or password. Please try again."
          );
      }
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
};
