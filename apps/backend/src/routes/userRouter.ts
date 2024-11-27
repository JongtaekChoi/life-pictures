import { Request, Response, Router } from "express";

import { PrismaClient } from "@prisma/client";

const userRouter = Router();

const prisma = new PrismaClient();

userRouter.get("/", async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

export default userRouter;
