import { sub, add, mult, div } from '../calculations.js';

const test = QUnit.test;

test('sub function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -1;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = sub(2, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('add function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 5;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = add(2, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('mult function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 6;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = mult(2, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('div function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 2;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = div(6, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});