describe("Payment test with setup and tear down", function () {
  beforeEach(function () {
    billAmtInput.value = 5;
    tipAmtInput.value = 1;
  });

  it("testing adding a new payment to allPayments using submitPaymentInfo()", function () {
    submitPaymentInfo();
    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments["payment1"].billAmt).toEqual("5");
    expect(allPayments["payment1"].tipAmt).toEqual("1");
    expect(allPayments["payment1"].tipPercent).toEqual(20);
  });

  it("shouldnt add a new payment on submitPaymentInfo() if the input is empty", function () {
    billAmtInput.value = "";
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(0);
  });

  it("should update payment on #paymentTable using appendPaymentTable()", function () {
    let curPayment = createCurPayment();
    allPayments["payment1"] = curPayment;

    appendPaymentTable(curPayment);

    let curTdList = document.querySelectorAll("#paymentTable tbody tr td");

    expect(curTdList.length).toEqual(4);
    expect(curTdList[0].innerText).toEqual("$5");
    expect(curTdList[1].innerText).toEqual("$1");
    expect(curTdList[2].innerText).toEqual("20%");
    expect(curTdList[3].innerText).toEqual("X");
  });

  it("should create a new payment on createCurPayment()", function () {
    let expectedPayment = {
      billAmt: "5",
      tipAmt: "1",
      tipPercent: 20,
    };
    console.log(createCurPayment());
    console.log(expectedPayment);
    expect(createCurPayment()).toEqual(expectedPayment);
  });

  it("should NOT create a payment with an empty input on createCutPayment()", function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    let curPayment = createCurPayment();

    expect(curPayment).toEqual(undefined);
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
