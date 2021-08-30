import path from "path";
import express, {Request, Response} from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 9001;

app.use(
  cors({
    origin: '*',
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

app.listen(PORT , () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
})

