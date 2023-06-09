let verify = require("./password-verifier");

test("password too short", function () {
  let password = "ABCD";
  let output = verify(password);
  expect(output).toEqual("Password rejected");
});

test("password is null", function () {
  let password = null;
  let output = verify(password);
  expect(output).toEqual("Password rejected");
});

test("password at least 1 uppercase char", function () {
  let password = "abcdefgh";
  let output = verify(password);
  expect(output).toEqual("Password rejected");
});

test("password at least 1 number", function () {
  let password = "aaaaBBBB";
  let output = verify(password);
  expect(output).toEqual("Password rejected");
});
