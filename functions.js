const calculate = (a, b, c) => {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Bitte gib für die ersten beiden Variablen jeweils eine Zahl ein.";
  }
  switch (c) {
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    case "/":
      return a / b;
      break;
    case "*":
      return a * b;
      break;
    default:
      return "Bitte gib für die dritte Variable einen Rechenoperator ein.";
  }
};

module.exports = { calculate };
