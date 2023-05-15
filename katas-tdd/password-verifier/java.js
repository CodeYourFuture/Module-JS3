function verify(password){
if (password.length < 8) {
  return "Password rejected";
}else if(!password){
  return "Password rejected";
    } else if (!/[0-9]/.test(password)) {
    return "Password rejected";
  } else if (!/[A-Z]/.test(password)) {
    return "Password rejected";}
return "Password accepted";
}

verify("ythjhlhj");








//test
test("password is less than 8 characters", () => {
  let password = "1234567";
  expect(verify(password)).toEqual("Password rejected");
});


 test("password is null", () => {
  let password = "";
  expect(verify(password)).toEqual("Password rejected");
 });

 test("the password does not have at least 1 uppercase letter", () => {
   let password = "1234e56y";
   expect(verify(password)).toEqual("Password rejected");
 });

 test("the password does not have at least 1 number", () => {
   let password = "frtghjkn";
   expect(verify(password)).toEqual("Password rejected");
 });