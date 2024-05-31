const {
  firstName,
  verifyStockAvailability,
  calculateTotalPrice,
} = require("../utils/validations");

describe("firstname", () => {
  it("deve retornar o primeiro nome quando tem mais de dois nomes", () => {
    const name = "Brenda Cristina D Moura";
    const result = firstName(name);
    expect(result).toBe("Brenda");
  });

  it("deve retornar o primeiro nome quando tem espaço em branco no começo", () => {
    const name = "  Brenda Cristina D Moura";
    const result = firstName(name);
    expect(result).toBe("Brenda");
  });

  it("deve retornar o primeiro nome quando tem espaço em branco no final", () => {
    const name = "Brenda Cristina D Moura    ";
    const result = firstName(name);
    expect(result).toBe("Brenda");
  });

  it("deve retornar o primeiro nome quando tem espaço em branco no começo e no final", () => {
    const name = "  Brenda Cristina D Moura    ";
    const result = firstName(name);
    expect(result).toBe("Brenda");
  });

  it("deve retornar o primeiro nome, caso tenha espaços", () => {
    const name = "Brenda Moura";
    const result = firstName(name);
    expect(result).toBe("Brenda");
  });

  it("deve retornar o nome completo, caso não tenha espaços", () => {
    const name = "Brenda";
    const result = firstName(name);
    expect(result).toBe("Brenda");
  });
});

describe("verifyStockAvailability", () => {
  it("deve retornar true se tiver estoque suficiente", () => {
    const productType = "laptop";
    const qty = 3;
    const result = verifyStockAvailability(productType, qty);
    expect(result).toBe(true);
  });

  it("deve retornar false se o produto não existir no estoque", () => {
    const productType = "televisão";
    const qty = 15;
    const result = verifyStockAvailability(productType, qty);
    expect(result).toBe(false);
  });

  it("deve retornar false se o estoque não for o suficiente", () => {
    const productType = "laptop";
    const qty = 20;
    const result = verifyStockAvailability(productType, qty);
    expect(result).toBe(false);
  });
});

describe("calculateTotalPrice", () => {
  it("deve retornar o valor total do carrinho corretamente", () => {
    const products = [
      { name: "Escova", price: 10, quantity: 2 },
      { name: "Feijão", price: 15, quantity: 2 },
      { name: "Arroz", price: 20, quantity: 1 },
    ];
    const result = calculateTotalPrice(products);
    expect(result).toBe(70);
  });

  it("deve retornar 0, se não tiver produtos no carrinho", () => {
    const products = [];
    const result = calculateTotalPrice(products);
    expect(result).toBe(0);
  });
});
