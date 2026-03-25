const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

let users = [];

const register = async (req, res) => {

  try {

    const { name, email, password } = req.body;

    const hashed = await bcrypt.hash(password, 10);

    const user = {
      id: users.length + 1,
      name,
      email,
      password_hash: hashed
    };

    users.push(user);

    const token = jwt.sign(
      { id: user.id },
      "mysecretkey123",
      { expiresIn: "1h" }
    );

    res.json({
      token,
      user
    });

  } catch (err) {

    res.status(500).json({
      message: "Register error"
    });

  }

};

const login = async (req, res) => {

  try {

    const { email, password } = req.body;

    const user =
      users.find(u => u.email === email);

    if (!user)
      return res.status(400).json({
        message: "User not found"
      });

    const valid =
      await bcrypt.compare(
        password,
        user.password_hash
      );

    if (!valid)
      return res.status(400).json({
        message: "Wrong password"
      });

    const token = jwt.sign(
      { id: user.id },
      "mysecretkey123",
      { expiresIn: "1h" }
    );

    res.json({
      token,
      user
    });

  } catch (err) {

    res.status(500).json({
      message: "Login error"
    });

  }

};

module.exports = {
  register,
  login
};