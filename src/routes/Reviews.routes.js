import { PrismaClient } from "@prisma/client";
import {Router} from "express";

const router = Router();
const Prisma = new PrismaClient();

router.get("/reviews", async (req, res) => {
  const Reviews = await Prisma.review.findMany();
  res.json(Reviews);
});

router.post("/reviews/:id", async (req, res) => {
  const {id} = req.params
  const {likes,dislikes} = req.body
  const post = await Prisma.review.update({
    where:{id:String(id)},
    data:{likes:Number(likes),dislikes:Number(dislikes)}
  })
  
  res.json(post);
});

router.post("/reviews", async (req, res) => {
  
  const {content,productId,userId} = req.body
  const post = await Prisma.review.create({
    data:{content:String(content),productId:String(productId),userId:String(userId)}
  })
  
  res.json(post);
});


export default router;
