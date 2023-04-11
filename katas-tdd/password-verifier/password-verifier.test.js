
const verify = require("./password-verifier");

test("it should return 'Password accepted'", () => {
  const password = "mY_$4f3-p4$$w0rD";
  const expected = 'Password accepted';
  const received = verify(password);

  expect(received).toEqual(expected);
});

test("it should return 'Password rejected' if password is less than 8 characters", () => {
  const password = "mY_$4f3";
  const expected = 'Password rejected';
  const received = verify(password);

  expect(received).toEqual(expected);
});

test("it should return 'Password rejected' if password is null", () => {
  const password = null;
  const expected = 'Password rejected';
  const received = verify(password);

  expect(received).toEqual(expected);
});

test("it should return 'Password rejected' if password does not contain at least 1 uppercase letter", () => {
  const password = "my_$4f3-p4$$w0rd";
  const expected = 'Password rejected';
  const received = verify(password);

  expect(received).toEqual(expected);
});

test("it should return 'Password rejected' if password does not contain at least 1 number", () => {
  const password = "mY_$AfE-pA$$wOrD";
  const expected = 'Password rejected';
  const received = verify(password);

  expect(received).toEqual(expected);
});