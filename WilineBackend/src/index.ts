import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import { nekafUnkcija } from "./models/user";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.get("/home", nekafUnkcija);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
