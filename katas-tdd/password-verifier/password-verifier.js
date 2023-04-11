function verify(password) {
    const rejectedMessage = 'Password rejected';
  
    if (password === null) {
      return rejectedMessage;
    }
  
    if (password.length < 8) {
      return rejectedMessage;
    }
  
    if (!/[A-Z]/.test(password)) {
      return rejectedMessage;
    }
  
    if (!/[0-9]/.test(password)) {
      return rejectedMessage;
    }
  
    return 'Password accepted';
  }
  
  module.exports = verify;