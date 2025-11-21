import { Router } from "express";
import { getAllUsers, getUser } from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get("/", authMiddleware, getAllUsers);

userRouter.get("/:id", authMiddleware, getUser);

userRouter.post("/", (req, res) => res.send({ message: "POST a user" }));

userRouter.put("/:id", (req, res) => res.send({ message: "PUT a user" }));

userRouter.delete("/:id", (req, res) => res.send({ message: "DELETE a user" }));

export default userRouter;
