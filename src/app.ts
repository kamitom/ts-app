import express, { Application, Request, Response, NextFunction } from "express";
import { helloAddNumber, helloTest } from "./mocha";

const myLovelyURL: string = "https://youtu.be/zRo2tvQpus8";
const myLovelyURL2: string = "https://youtu.be/MLTRHc5dk6s"; // for Unit Tests!!

const app: Application = express();

const devideUs = (a: number, b: number): number => a / b; 
const takeHello = helloTest("TOMJR")

app.get("/", (req: Request, res: Response) => {
  console.log(devideUs(100, 23));
  console.log(helloAddNumber(9, 8));
  
  res.send(`${takeHello} ,i LOVE these URL 
  for typescript: ${myLovelyURL} 
  for Unit Tests: ${myLovelyURL2}`);
});

app.listen(5001, () => console.log("server running!!"));
