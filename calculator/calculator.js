window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = 10000;
  document.getElementById("loan-years").value = 5;
  document.getElementById("loan-rate").value = 1;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  if (
    document.getElementById("loan-amount").value === "" ||
    document.getElementById("loan-rate").value === "" ||
    document.getElementById("loan-years").value === ""
  ) {
    setupIntialValues();
    window.alert("Please make sure all boxes have a value in them!");
  } else {
    updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
  }
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const initAmount = values.amount;
  const initYears = values.years;
  let initRate = values.rate;
  if (values.rate >= 1) {
    initRate = initRate * 0.01;
  } else {
  }

  const monthlyPayment =
    (initAmount * (initRate / 12)) /
    (1 - (1 + initRate / 12) ** -(initYears * 12));
  return Math.round(monthlyPayment * 100) / 100;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerHTML = monthly;
}
