// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("should have a property called organization", function(){
    expect(launchcode.organization).toEqual("nonprofit");
  });

  test("should have a property called executiveDirector", function(){
    expect(launchcode.executiveDirector).toEqual("Jeff");
  });

  test("should have a property called percentageCoolEmployees", function(){
    expect(launchcode.percentageCoolEmployees).toEqual(100);
  });

  test("should have a property called programsOffered with 3 programs", function(){
    expect(launchcode.programsOffered[0]).toEqual("Web Development");
    expect(launchcode.programsOffered[1]).toEqual("Data Analysis");
    expect(launchcode.programsOffered[2]).toEqual("Liftoff");
    expect(launchcode.programsOffered.length).toEqual(3);
  });

  test("should have a method called launchOutput return 'Launch!' for numbers divisible by 2", function(){
    expect(launchcode.launchOutput(2)).toEqual("Launch!");
  });

  test("should have a method called launchOutput return 'Code!' for numbers divisible by 3", function(){
    expect(launchcode.launchOutput(3)).toEqual("Code!");
  });

  test("should have a method called launchOutput return 'Rocks!' for numbers divisible by 5", function(){
    expect(launchcode.launchOutput(5)).toEqual("Rocks!");
  });

  test("should have a method called launchOutput return 'LaunchCode!' for numbers divisible by 2 and 3", function(){
    expect(launchcode.launchOutput(6)).toEqual("LaunchCode!");
  });

  test("should have a method called launchOutput return 'Code Rocks!' for numbers divisible by 3 and 5", function(){
    expect(launchcode.launchOutput(15)).toEqual("Code Rocks!");
  });

  test("should have a method called launchOutput return 'Launch Rocks! (CRASH!!!!)' for numbers divisible by 2 and 5", function(){
    expect(launchcode.launchOutput(10)).toEqual("Launch Rocks! (CRASH!!!!)");
  });

  test("should have a method called launchOutput return 'LaunchCode Rocks!' for numbers divisible by 2, 3 and 5", function(){
    expect(launchcode.launchOutput(30)).toEqual("LaunchCode Rocks!");
  });

  test("should have a method called launchOutput return 'Rutabagas! That doesn't work.' for numbers not divisible by 2, 3 and 5", function(){
    expect(launchcode.launchOutput(7)).toEqual("Rutabagas! That doesn't work.");
  });

  
});