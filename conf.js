exports.config = {
  framework: "jasmine",
  browserstackUser: "zachary108",
  browserstackKey: "qQJGfspsxYCVktpPa6EH",
  seleniumAddress: "http://localhost:4444/wd/hub",
  specs: ["spec.js"],
  multiCapabilities: [
    {
      browserName: "chrome"
    }
  ]
};
