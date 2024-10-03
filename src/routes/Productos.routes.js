import { PrismaClient } from "@prisma/client";
import {Router} from "express";

const router = Router();
const Prisma = new PrismaClient();

router.get("/productos", async (req, res) => {
  const productos = await Prisma.product.findMany();
  res.json(productos);
});



export default router;
