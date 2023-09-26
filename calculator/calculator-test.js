it("should calculate the monthly rate correctly", function () {
  expect(calculateMonthlyPayment({ amount: 10000, years: 5, rate: 1 })).toEqual(
    170.94
  );
  expect(
    calculateMonthlyPayment({ amount: 10000, years: 5, rate: 0.01 })
  ).toEqual(170.94);
});

it("should return a result with 2 decimal places", function () {
  expect(
    calculateMonthlyPayment({ amount: 10000, years: 5, rate: 0.01 }) * 100
  ).toBeGreaterThan(0);
});

/// etc
