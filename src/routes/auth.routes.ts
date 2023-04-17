import { Router } from "express";
import { signUp, login, currentUser } from "../controllers/auth.controller";

const authRouter = Router();

authRouter.post("/signup", (req, res) => signUp(req, res));
authRouter.post("/login", (req, res) => login(req, res));
authRouter.post("/me", (req, res) => currentUser(req, res));

export default authRouter;
