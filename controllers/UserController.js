const User = require("../models/user");
const bcrypt = require("bcrypt");

const GET_SIGNUP = (req, res) => {
  // console.log(md5("hello@123BYEBYE"))
  res.render("signup");
};

const POST_SIGNUP = (req, res) => {
  console.log("post handling");
  const userName = req.body.username;
  const userEmail = req.body.useremail;
  const password = req.body.password;

  bcrypt.hash(password, 12, function (err, hash) {
    const user = new User({
      username: userName,
      email: userEmail,
      password: hash,
    });

    user
      .save()
      .then((createdUser) => {
        console.log(createdUser);
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

const GET_LOGIN = (req, res) => {
  res.render("login");
};
const POST_LOGIN = (req, res) => {
  const userEmail = req.body.useremail;
  const password = req.body.password;

  User.find({ email: userEmail })
    .then((foundUser) => {
      if (foundUser.length > 0) {
        bcrypt.compare(
          password,
          foundUser[0].password,
          function (error, result) {
            if (error) {
              console.error(error);
            } else {
              if (result == true) {
                res.send("Logged in successfully");
              } else {
                res.send("incorrect password");
              }
            }
          }
        );
      } else {
        res.send("No User Found");
      }
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/login");
    });
};

module.exports = {
  GET_SIGNUP,
  POST_SIGNUP,
  GET_LOGIN,
  POST_LOGIN,
};
