"use strict";
const loggermiddleware = require("../src/middleware/logger");

describe("logger test", () => {
  let consoleSpy;
  let res = {};
  let req = {};
  let next = jest.fn();
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });
  test("is there console?", async () => {
    loggermiddleware(req,res,next);
    expect(consoleSpy).toHaveBeenCalled();
  });
  test("is there next?", async () => {
    loggermiddleware(req,res,next);
    expect(next).toHaveBeenCalled();
  });
});
