const assert = require('assert');

function verify(password) {
if (password === null || password.length < 8 || !/\d/.test(password)) {
    return 'Password rejected';
}

return 'Password accepted';
}

describe('Password Verification', () => {
it('should reject passwords less than 8 characters', () => {
    const result = verify('pass');
    assert.strictEqual(result, 'Password rejected');
});

it('should reject null passwords', () => {
    const result = verify(null);
    assert.strictEqual(result, 'Password rejected');
});

it('should reject passwords without at least 1 number', () => {
    const result = verify('password');
    assert.strictEqual(result, 'Password rejected');
});


});


