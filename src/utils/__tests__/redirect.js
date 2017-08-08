const redirect = require('../redirect');

it('should return redirect function', () => {
  expect(typeof redirect).toBe('function');
});
