"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mocha_1 = require("./mocha");
const myLovelyURL = "https://youtu.be/zRo2tvQpus8";
const myLovelyURL2 = "https://youtu.be/MLTRHc5dk6s"; // for Unit Tests!!
const app = express_1.default();
const devideUs = (a, b) => a / b;
const takeHello = mocha_1.helloTest("TOMJR");
app.get("/", (req, res) => {
    console.log(devideUs(100, 23));
    console.log(mocha_1.helloAddNumber(9, 8));
    res.send(`${takeHello} ,i LOVE these URL 
  for typescript: ${myLovelyURL} 
  for Unit Tests: ${myLovelyURL2}`);
});
app.listen(5001, () => console.log("server running!!"));
