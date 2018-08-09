var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it can add', function(){
    calculator.add(5);
    assert.equal(calculator.runningTotal, 5);
  })

  it('it can subtract', function(){
    calculator.subtract(2);
    assert.equal(calculator.runningTotal, -2);
  })


  it('it can multiply', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(calculator.runningTotal, 15);
  })

  it('it can divide', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3);
  })

  it('it can click numbers', function(){
    calculator.numberClick(8);
    calculator.numberClick(5);
    const actual = calculator.runningTotal;
    assert.equal(actual, 85)
  })


  it('it can click operators', function(){
    calculator.operatorClick('+');
    const actual = calculator.previousOperator;
    assert.equal(actual, '+')
  })

  it('it can click multiple operators', function(){
      calculator.numberClick(4);
      calculator.operatorClick('+');
      calculator.numberClick(1);
      calculator.operatorClick('*');
      calculator.numberClick(5);
      calculator.operatorClick('=');
      const actual = calculator.runningTotal;
    assert.equal(actual, 25)
  })

  it('it can clear the running total without affecting the calculation', function() {
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.operatorClick('=');
    const actual = calculator.runningTotal;
    assert.equal(actual, 3);
  });



});
