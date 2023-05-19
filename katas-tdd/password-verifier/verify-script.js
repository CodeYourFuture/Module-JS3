function verify(password){
    if (!/\d/.test(password) || !password || password.length < 8){
        return "Password rejected"
    }

    for (i=0; i<password.length; i++){
        if(password[i] === password[i].toUpperCase() ){
            return "Password accepted"
        } else {
            return "Password rejected"
        }
    }

}

//tests
test("if password legth less then 8 characters", () => {
  expect(verify("short")).toEqual("Password rejected");
});

test("if password equal to null", () => {
  expect(verify(null)).toEqual("Password rejected");
});

test("If the password does not have at least 1 uppercase letter", () => {
  expect(verify("LoNger5PSW")).toEqual("Password accepted");
});

test("If the password does not have at least 1 number", () => {
  expect(verify("LoNge5rPSW")).toEqual("Password accepted");
});


