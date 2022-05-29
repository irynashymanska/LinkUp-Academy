class  Calculator {
    constructor(a, b) {
      this.a = a;
      this.b = b;
    }

    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        return a / b;
    }

  }

  var calculator = new Calculator()

calculator.multiply(10, 5);
calculator.divide(10, 5);
console.log("\n 7. Simple OOP Calculator: ");
console.log("Add: " + calculator.add(10, 5));
console.log("Subtract: "+ calculator.subtract(10, 5));
console.log("Multiply: " + calculator.multiply(10, 5));
console.log("Divide: "+ calculator.divide(10, 5));

