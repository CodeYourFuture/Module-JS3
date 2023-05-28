
function verify(...password) {
    return password === null?'Password rejected':
        password.length >= 8 ? 'Password accepted':
        (!/[A-Z]/.test(password) && !/\d/.test(password))?'Password rejected':'Password accepted'

  }


  test('return password must be 8 or more', () => {
    expect(verify('120%nkjgf')).toBe('Password accepted');
  });
  test('return password is null',()=>{
    expect(verify(null)).toBe('Password rejected');
  })
  test('return password have at least 1 uppercase letter', () => {
    expect(verify('120%nTTkjf')).toBe('Password accepted');
  });
  test('return password must have numbers',()=>{
    expect(verify('kljklkihguigfyuf')).toBe('Password rejected');
  })

// function verify(password) {
//     if (password.length >= 8 ){
//         return 'Password accepted';
//     // }else{
//     //    return 'Password rejected';
//     // }
//     }else if(password === null){
//        return 'Password rejected';
//     }
// }

//   test('return password must be 8 or more', () => {
//     expect(verify('120%nkjgf')).toBe('Password accepted');
//   });

//   test('return password is null', () => {
//     expect(verify(null)).toBe('Password rejected');
//   });













