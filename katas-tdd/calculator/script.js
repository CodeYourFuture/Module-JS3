const add = require('./stringCalculator');

Test('should return 0 for an empty string', () => {
    expect(add('')).toBe(0);
})
Test('should return the number itself when a single number is passed', ()=> {
    expect(add('')).toBe(5);
})

test('should return the number of two numbers',() => {
    expect(add('3,6')).toBe(9);
});


function add(numbers){
    if(numbers === ''){
        return 0;
    }

    const nums = numbers.split(',');
    return nums.reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = add;