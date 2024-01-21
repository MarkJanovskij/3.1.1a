const calculateBonus = require(`./sum`);
describe('my 1Test suit', () => {
it(`Sum of 2 positive >50`,()=>{
    expect(calculateBonus(40,5)).toBe(50);

})

it(`Sum of 2 positive >50`,()=>{
    expect(calculateBonus(25,30)).toBe(50);

})

it(`Sum of 2 positive >50`,()=>{
    expect(calculateBonus(25,25)).toBe(50);

})

it(`Sum of 2 positive >50`,()=>{
    expect(calculateBonus(50,8)).toBe(50);

})

it(`Sum of 2 positive not= 50`,()=>{
    expect(calculateBonus(10,39)) .not.toBe (50);

});
});
