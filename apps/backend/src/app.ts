import "dotenv/config";

import express, { Request, Response } from "express";

import authRouter from "./routes/authRouter";
import userRouter from "./routes/userRouter";

const app = express();
const port = process.env.PORT || 3001;

// 미들웨어 설정
app.use(express.json());

// 기본 라우트
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello from Express in Monorepo!" });
});

app.use("/users", userRouter);
app.use("/auth", authRouter);

// 서버 실행
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
