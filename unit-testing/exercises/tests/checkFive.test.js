const checkFive = require("../checkFive.js");

describe("checkFive", function () {
    test("Takes a number less than five returns a string 'number is less than 5.'", function () {
    //code here...
    let result = checkFive(1);
    expect(result).toEqual("1 is less than 5.");
    });

    test("Takes a number greater than five returns a string 'number is greater than 5.'", function () {
    let result = checkFive(6);
    expect(result).toEqual("6 is greater than 5.");
    });

    test("Takes the number five returns a string 'number is equal to 5.'", function () {
    let result = checkFive(5);
    expect(result).toEqual("5 is equal to 5.");
    });
});

