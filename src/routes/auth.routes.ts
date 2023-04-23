import { Router } from "express";
import { register, login, currentUser } from "../controllers/auth.controller";

const authRouter = Router();

authRouter.post("/auth/register", (req, res) => register(req, res));
authRouter.post("/auth/login", (req, res) => login(req, res));
authRouter.get("/auth/me", (req, res) => currentUser(req, res));

export default authRouter;
