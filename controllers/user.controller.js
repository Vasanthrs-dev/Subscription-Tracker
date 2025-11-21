import User from "../models/user.model.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find().select("-password");

    if (!users) {
      const error = new Error("There are no users");
      error.statusCode(404);
      throw error;
    }

    res.status(200).json({
      success: true,
      length: users.length,
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(req);
    const user = await User.findById(id).select("-password");

    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};
