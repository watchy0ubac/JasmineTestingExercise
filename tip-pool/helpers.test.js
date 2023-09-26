describe("Utilities test with setup and tear down", function () {
  beforeEach(function () {
    billAmtInput.value = 5;
    tipAmtInput.value = 1;
    submitPaymentInfo();
  });

  it("should sum the total tip amount of all the payments on subPaymentTotal()", function () {
    expect(sumPaymentTotal("tipAmt")).toEqual(1);
    billAmtInput.value = 100;
    tipAmtInput.value = 20;

    submitPaymentInfo();
    expect(sumPaymentTotal("tipAmt")).toEqual(21);
  });

  it("should sum the total bill amount of all the payments on sumPaymentTotal table", function () {
    expect(sumPaymentTotal("billAmt")).toEqual(5);

    billAmtInput.value = "500";
    tipAmtInput.value = "50";
    submitPaymentInfo();

    expect(sumPaymentTotal("billAmt")).toEqual(505);
  });

  it("should sum the tip percent on sumPaymentTotal()", function () {
    expect(sumPaymentTotal("tipAmt")).toEqual(1);

    billAmtInput.value = "50";
    tipAmtInput.value = "10";
    submitPaymentInfo();
    expect(sumPaymentTotal("tipPercent")).toEqual(40);
  });

  it("should sum tip percent of a single tip on calculateTipPercent()", function () {
    expect(calculateTipPercent(100, 50)).toEqual(50);
    expect(calculateTipPercent(500, 50)).toEqual(10);
  });

  it("should generate new td from value and append to tr on appendTd(tr, value)", function () {
    let newTr = document.createElement("tr");

    appendTd(newTr, "testing");

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual("testing");
  });

  it("should generate delete td and append to the tr on appendDeleteBtn(tr, type)", function () {
    let newTr = document.createElement("tr");

    appendDeleteBtn(newTr);

    expect(newTr.children.length).toEqual(1);
    expect(newTr.lastChild.innerHTML).toEqual("X");
  });

  afterEach(function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    paymentTbody.innerHTML = "";
    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
    serverTbody.innerHTML = "";
    paymentId = 0;
    allPayments = {};
  });
});
