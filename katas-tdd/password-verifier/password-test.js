let verify = require("./password");

test("verify a password", function (){
    let pass = "password";;

    let expected = "Password rejected";

    let output = verify(pass);

    expected(output).toEqual(expected);
})

test("verify an ampty password", function (){
    let pass = null;

    let expected = "Password rejected";

    let output = verify(pass);

    expected(output).toEqual(expected);
});

test("At least 1 UpperCase", function (){
    let pass = "password1"

    let expected = "Password rejected";

    let output = verify(pass);

    expected(output).toEqual(expected);
});

test("password with number", function (){
    let pass = "Password";

    let expected = "Password rejected";

    let output = verify(pass);

    expected(output).toEqual(expected);
});