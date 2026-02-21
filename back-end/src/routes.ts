import { Router } from "express";
import { auth, login, register, logout } from "./controller/user-controller.js";
import { authMiddleware } from "./middlewares/auth-middleware.js";

export const router = Router();

router.post("/login", login);
router.post("/register", register);
router.get("/me", authMiddleware, auth);
router.post("/logout", authMiddleware, logout);
