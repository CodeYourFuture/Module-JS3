function verify(password) {
  if (password === null) {
    return "Password rejected";
  }
  if (password.length < 8) {
    return "Password rejected";
  }
  let countUppers = 0;
  let countNumbers = 0;
  for (i = 0; i < password.length; i++) {
    if (password[i] == password[i].toUpperCase()) {
      countUppers++;
    }
    if (Number.isInteger(password[i])) {
      countNumbers++;
    }
  }
  if (countUppers === 0) {
    return "Password rejected";
  }
  if (countNumbers === 0) {
    return "Password rejected";
  }
  return "Password accepted";
}

module.exports = verify;
