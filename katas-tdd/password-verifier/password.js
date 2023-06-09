function verify(pass) {
    if (!pass) {
      return "Password rejected";
    } else if (pass.length < 8) {
       return "Password rejected";
    } else if (!/[A-Z]/.test(pass)) {
       return "Password rejected";
    } else if (!/\d/.test(password)) {
       return "Password rejected";
    }
       return "Password accepted";
  }

module.exports = verify;