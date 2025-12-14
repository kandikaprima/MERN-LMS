import jwt from "jsonwebtoken";
import userModel from "../models/user-model.js";

export const verifyToken = async (req, res, next) => {
  const secretKey = process.env.SECRET_KEY_JWT ?? "";

  if (req?.headers?.authorization?.split(" ")[0] === "JWT") {
    const decode = jwt.verify(
      req?.headers?.authorization?.split(" ")[1],
      secretKey
    );
    const user = await userModel.findById(
      decode.data.id,
      "_id name email role"
    );

    if (!user) {
      return res.status(400).json({
        message: "Token Expired",
      });
    }

    req.user = {
      _id: user._id.toString(),
      name: user.name,
      email: user.email,
      role: user.role,
    };

    next();
  } else {
    return res.status(400).json({
      message: "Unauthorization",
    });
  }
};
