function verify(password) {
  if (password.length < 8) {
    return `Password rejected`;
  }
  if (password === null) {
    return `Password rejected`;
  }

  /*--------------------------------------------*/

  if (/[a-z]/.test(password)) {
    return `Password rejected`;
  }

  //   another way ///
  //   for (const a of password) {
  //     if (a !== a.toUpperCase()) {
  //       return "Password rejected";
  //     }
  /*--------------------------------------------*/

  if (!/\d/.test(password)) {
    return `Password rejected`;
  }

  //   another way ///
  // for (const a of password) {
  //     if (isNaN(a)) {
  //       return "Password rejected";
  //     }
  /*--------------------------------------------*/

  return `Password Accepted`;
}

describe("Password verifications", () => {
  ////////////////////1////////////
  test("Check if the passeord less than 8 characters", () => {
    expect(verify("1234567")).toBe("Password rejected");
  });
  ////////////////////2////////////
  test("Check if the passeord is null", () => {
    expect(verify("")).toBe("Password rejected");
  });
  ////////////////////3///////////
  test("Check if the passeord does not have at least 1 uppercase letter", () => {
    expect(verify("1223Password")).toBe("Password rejected");
  });
  ////////////////////4///////////
  test("Check if the passeord does not  have at least 1 number", () => {
    expect(verify("password")).toBe("Password rejected");
  });
});
