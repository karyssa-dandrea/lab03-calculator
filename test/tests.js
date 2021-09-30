import { sub } from '../calculations.js';

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
