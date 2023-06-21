const [ stringLength, verseString, calculate, capitalize] = require ('./tasksfunctions')

// task one

describe('stringLength', () => {
    test('the string length is correct', () => {
        expect(stringLength('Sadaf')).toBe(5)
    })

    test('the string is more than 1 and less than 10', () => {
        expect(stringLength('Hisadaf')).toBe(7)
    });
    })

    // second task
    describe('verseString', () => {
        test('the string verse is correct', () => {
            expect(verseString('sadaf')).toBe('fadas')
        });
    })

    //third task
    describe('calculate', () => {
        const calculator = new calculate(); // Instantiate an object of the calculate class
      
        test('the sum of two numbers', () => {
          expect(calculator.add(4, 2)).toBe(6);
        });
      
        test('the subtraction of two numbers', () => {
          expect(calculator.subtract(4, 2)).toBe(2);
        });
      
        test('the division of two numbers', () => {
          expect(calculator.divide(4, 2)).toBe(2);
        });
      
        test('the multiplication of two numbers', () => {
          expect(calculator.multiply(4, 2)).toBe(8);
        });
      });

      // task four
      describe('capitalize', () => {
        test('capitalizes the first letter of a string', () => {
          expect(capitalize('sadaf')).toBe('Sadaf');
        });
      });
      
      