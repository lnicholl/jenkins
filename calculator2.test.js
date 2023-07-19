const chai = require("chai");
const assert = require("chai").assert;
const expect = chai.expect;
const Calculator2 = require("./calculator2");

describe("calculator tests", function () {
  it("calculator returns the right value for add", function () {
    const calc = new Calculator2();
    const result = calc.add(10, 22);
    expect(result).to.be.equal(32);
  });

  it("calculator returns the right value for division", function () {
    const calc = new Calculator2();
    const result = calc.div(10, 2);
    expect(result).to.be.equal(5);
  });

  it("calculator returns error if 0 used", function () {
    const calc = new Calculator2();
    const result = calc.div(10, 0);
    expect(result).to.be.equal("error - you can't divide by 0");
  });

  it("calculator returns the right value for subtraction", function () {
    const calc = new Calculator2();
    const result = calc.sub(10, 7);
    expect(result).to.be.equal(3);
  });

  it("calculator returns error if string used", function () {
    const calc = new Calculator2();
    const result = calc.add(10, "hello");
    expect(result).to.be.equal("error - you can't use strings");
  });


});
