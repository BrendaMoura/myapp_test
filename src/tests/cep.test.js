const { cepInfo } = require("../utils/cep");

describe("cepInfo", () => {
  it("deve retornar as informações do CEP", async () => {
    const result = await cepInfo("69083000");
    expect(result.bairro).toBe("Aleixo");
  });

  it("deve informar que existe um erro", async () => {
    const result = await cepInfo("00000000");
    expect(result).toEqual({ erro: true });
  });
});
