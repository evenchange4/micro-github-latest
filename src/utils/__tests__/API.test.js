const API = require('../API');

it('should return API getRepo function', () => {
  expect(typeof API.getRepo).toBe('function');
});
