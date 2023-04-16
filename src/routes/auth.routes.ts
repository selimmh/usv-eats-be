import { Router } from "express";
import { signUp, signIn } from "../controllers/auth.controller";

const authRouter = Router();

authRouter.post("/signup", (req, res) => signUp(req, res));
authRouter.post("/signin", (req, res) => signIn(req, res));

export default authRouter;
