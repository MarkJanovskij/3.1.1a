const calculateBonus = require(`./sum`);
// describe('my 1Test suit', () => {
// it(`Sum of 2 positive >50`,()=>{
//     expect(calculateBonus(40,5)).toBe(50);

// })

// it(`Sum of 2 positive >50`,()=>{
//     expect(calculateBonus(25,30)).toBe(50);

// })

// it(`Sum of 2 positive >50`,()=>{
//     expect(calculateBonus(25,25)).toBe(50);

// })

// it(`Sum of 2 positive >50`,()=>{
//     expect(calculateBonus(50,8)).toBe(50);

// })

// it(`Sum of 2 positive not= 50`,()=>{
//     expect(calculateBonus(10,39)) .not.toBe (50);

// });
// });

describe("Группируем тесты одной функции calculateBonus", () => { // начало функции describe

    it("функция должна вернуть реультат меньше 50", () => { //первый тест внутри describe 
      expect(calculateBonus(20, 20)).toBe(40)
    })
  
    it("функция должна вернуть реультат 50", () => { //второй тест внутри describe
      expect(calculateBonus(25, 35)).toBe(450)
    })
  
  }) // вот эти две скобки от верхней функции describe
