const API = require('../API');

it('should return API getLatestRelease function', () => {
  expect(typeof API.getLatestRelease).toBe('function');
});

it('should return API getRateLimit function', () => {
  expect(typeof API.getRateLimit).toBe('function');
});
