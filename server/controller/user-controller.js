import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../schema/user-schema.js";

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser)
      return res
        .status(404)
        .json({ message: "User deosn't exist in database" });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credintials" });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "test",
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went Wrong" });
  }
};

export const signUp = async (req, res) => {
  const { email, password, firstName, lastName, createdDate } =
    req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res
        .status(404)
        .json({ message: "User already exists in database" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
      createdDate,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, "test", {
      expiresIn: "1h",
    });

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went Wrong" });
    console.log(error);
  }
};
