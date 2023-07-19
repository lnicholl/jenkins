class Calculator2 {
  constructor() {}
  add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
      return "error - you can't use strings";
    } else {
      return a + b;
    }
  }
  mult(a, b) {
    if (typeof a === "string" || typeof b === "string") {
      return "error - you can't use strings";
    } else {
      return a * b;
    }
  }

  div(a, b) {
    if (typeof a === "string" || typeof b === "string") {
      return "error - you can't use strings";
    } else if (b === 0) {
      return "error - you can't divide by 0";
    } else {
      return a / b;
    }
  }
  sub(a, b) {
    if (typeof a === "string" || typeof b === "string") {
      return "error - you can't use strings";
    } else {
      return a - b;
    }
  }
}

module.exports = Calculator2;
