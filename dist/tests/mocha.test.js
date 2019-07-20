"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const mocha_1 = require("../src/mocha");
describe(`test helloTest`, () => {
    it(`helloTest should return hello white`, () => {
        const resultIs = mocha_1.helloTest("white");
        chai_1.expect(resultIs).to.be.equal("hello white");
    });
    it(`helloTest return type should be string`, () => {
        const resultType = mocha_1.helloTest("lbj");
        chai_1.expect(typeof resultType).to.be.equal(`string`);
    });
});
describe(`helloAddNumber should above 100`, () => {
    it(`above 100`, () => {
        const addNumber = mocha_1.helloAddNumber(100, 100);
        chai_1.expect(addNumber).to.be.equal(200);
        chai_1.expect(addNumber).is.above(100);
    });
});
