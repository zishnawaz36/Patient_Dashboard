import express from "express";
import { register,login } from "../Controller/userRoute.js";

import { Router } from "express";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);


export default router;
