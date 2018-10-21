// spec.js
describe("Protractor Demo App", function() {
  it("should have a title", function() {
    browser.get("http://juliemr.github.io/protractor-demo/");

    expect("test").toEqual("Super Calculator");
  });
});
