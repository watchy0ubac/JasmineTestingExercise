describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = "Alice";
  });

  it("should add a new server to allServers on submitServerInfo()", function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers["server" + serverId].serverName).toEqual("Alice");
  });

  it("Should not add a new server is the input is blank", function () {
    serverNameInput.value = "";
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  });

  it("should update server table when using the updateServerTable() function", function () {
    submitServerInfo();
    updateServerTable();

    let serverTableTds = document.querySelectorAll("#serverTable tbody tr td");

    expect(serverTableTds.length).toEqual(3);
    expect(serverTableTds[0].innerText).toEqual("Alice");
    expect(serverTableTds[1].innerText).toEqual("$0.00");
    expect(serverTableTds[2].innerText).toEqual("X");
  });

  afterEach(function () {
    // teardown logic
    allServers = {};
    updateServerTable();
  });
});
