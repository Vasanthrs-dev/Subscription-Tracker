import { Router } from "express";

const authRouter = Router();

authRouter.post("/sign-up", (req, res) => res.send({ message: "Sign UP" }));

authRouter.post("/sign-in", (req, res) => res.send({ message: "Sign IN" }));

authRouter.post("/sign-out", (req, res) => res.send({ message: "Sign OUT" }));

export default authRouter;
