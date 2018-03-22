import { Calculator } from './../js/calculator.js';

describe ("Character", function () {
  it("will validate that convertToSeconds will convert a dateTime to seconds", function() {
    //Arrange


    //Act
  

    //Assert
    expect(newCalculator.userDateInSeconds).toEqual(724147200);
    expect(newCalculator.todaysDateInSeconds).toBeGreaterThan(724147200);
  })
});
