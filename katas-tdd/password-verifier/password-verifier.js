function passwordVerifier(password) {
  if (
    !password ||
    password.length < 8 ||
    !/[A-Z]/.test(password) ||
    !/\d/.test(password)
  ) {
    return "Password rejected";
  } else {
    return "Password accepted";
  }
}
console.log(passwordVerifier("5455434540K"));
// describe("passwordVerifier", () => {
//   it("should return Password rejected if string is empty", () => {
//     expect(passwordVerifier("")).toBe("Password rejected");
//   });

//   it("should return Password rejected if password is less than 8 characters", () => {
//     expect(passwordVerifier("1234567")).toBe("Password rejected");
//     expect(passwordVerifier("123456L")).toBe("Password rejected");
//   });

//   it("should return Password rejected if password doesn't contain at least 1 capital letter", () => {
//     expect(passwordVerifier("1234567p")).toBe("Password rejected");
//   });

//   it("should return Password rejected if password doesn't contain at least 1 number", () => {
//     expect(passwordVerifier("Qwertyui")).toBe("Password rejected");
//   });
// });
