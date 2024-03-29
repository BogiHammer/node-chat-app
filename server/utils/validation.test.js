const expect = require('expect');

const { isRealString } = require('./validation');

describe('isRealString', () => {
  it('Should reject non-string values', () => {
    var res = isRealString(98);
    expect(res).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var res = isRealString('     ');
    expect(res).toBe(false);
  });

  it('should allow string with non-space chars', () => {
    var res = isRealString('user');
    expect(res).toBe(true);
  });
});

