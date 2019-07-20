import { expect } from "chai";
import { helloTest, helloAddNumber } from "../src/mocha";

describe(`test helloTest`, () => {
  it(`helloTest should return hello white`, () => {
    const resultIs = helloTest("white");

    expect(resultIs).to.be.equal("hello white");
  });

  it(`helloTest return type should be string`, () => {
    const resultType = helloTest("lbj");

    expect(typeof resultType).to.be.equal(`string`);
  });
});

describe(`helloAddNumber should above 100`, () => {
  it(`above 100`, () => {
    const addNumber: number = helloAddNumber(100, 100);

    expect(addNumber).to.be.equal(200);
    expect(addNumber).is.above(100);
  });
});
