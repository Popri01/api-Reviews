import { PrismaClient } from "@prisma/client";
import {Router} from "express";

const router = Router();
const Prisma = new PrismaClient();

router.get("/users", async (req, res) => {
  const users = await Prisma.user.findMany();
  res.json(users);
});

export default router;