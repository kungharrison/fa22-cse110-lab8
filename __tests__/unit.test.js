// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// isPhoneNumber tests
test('isPhoneNumber returns true', () => {
    expect(functions.isPhoneNumber('555-555-5555')).toBe(true);
});
test('isPhoneNumber returns true', () => {
    expect(functions.isPhoneNumber('(555) 555-5555')).toBe(true);
});
test('isPhoneNumber returns false', () => {
    expect(functions.isPhoneNumber('422-392-848')).toBe(false);
});
test('isPhoneNumber returns false', () => {
    expect(functions.isPhoneNumber('912939393933')).toBe(false);
});

// isEmail tests
test('isEmail returns true', () => {
    expect(functions.isEmail('lanejones@gmail.com')).toBe(true);
});
test('isEmail returns true', () => {
    expect(functions.isEmail('ewt38s0@hotmail.com')).toBe(true);
});
test('isEmail returns false', () => {
    expect(functions.isEmail('sdi3j.sdjej2480')).toBe(false);
});
test('isEmail returns false', () => {
    expect(functions.isEmail('Ewt.@..gma...il.com')).toBe(false);
});

// isStrongPassword tests
test('isStrongPassword returns true', () => {
    expect(functions.isStrongPassword('csdueusj')).toBe(true);
});
test('isStrongPassword returns true', () => {
    expect(functions.isStrongPassword('applePassword5')).toBe(true);
});
test('isStrongPassword returns false', () => {
    expect(functions.isStrongPassword('11111111111111111111111')).toBe(false);
});
test('isStrongPassword returns false', () => {
    expect(functions.isStrongPassword('32422')).toBe(false);
});

// isDate tests
test('isDate returns true', () => {
    expect(functions.isDate('1/3/2027')).toBe(true);
});
test('isDate returns true', () => {
    expect(functions.isDate('15/24/3999')).toBe(true);
});
test('isDate returns false', () => {
    expect(functions.isDate('23-38-8288')).toBe(false);
});
test('isDate returns false', () => {
    expect(functions.isDate('24t08u20ug08J)*8')).toBe(false);
});

// isHexColor tests
test('isHexColor returns true', () => {
    expect(functions.isHexColor('fff')).toBe(true);
});
test('isHexColor returns true', () => {
    expect(functions.isHexColor('e2e2e2')).toBe(true);
});
test('isHexColor returns false', () => {
    expect(functions.isHexColor('asdjfwjeiwj')).toBe(false);
});
test('isHexColor returns false', () => {
    expect(functions.isHexColor('993j99999(#*89h')).toBe(false);
});