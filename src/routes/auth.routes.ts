import { Router } from "express";
import { signUp, login } from "../controllers/auth.controller";

const authRouter = Router();

authRouter.post("/signup", (req, res) => signUp(req, res));
authRouter.post("/login", (req, res) => login(req, res));

export default authRouter;
