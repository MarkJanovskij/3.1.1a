const { calculateBonus } = require("./sum2.js");

describe("Группируем тесты одной функции calculateBonus", () => {
  // начало функции describe

  it("функция должна вернуть реультат меньше 50", () => {
    //первый тест внутри describe
    expect(calculateBonus(20, 20)).toBe(40);
  });

  it("функция должна вернуть реультат 50", () => {
    //второй тест внутри describe
    expect(calculateBonus(25, 35)).toBe(450);
  });
}); // вот эти две скобки от верхней функции describe
