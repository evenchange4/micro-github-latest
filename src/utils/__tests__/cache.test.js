const cache = require('../cache');

it('should return cache store function', () => {
  expect(typeof cache.store).toBe('function');
});

it('should return cache get function', () => {
  expect(typeof cache.get).toBe('function');
});

it('should return correct store', () => {
  cache.store('evenchange4', 'micro-github-latest', { status: 302 });
  expect(cache.getAll()).toMatchSnapshot();

  cache.store('evenchange4', 'micro-medium-api', { status: 200 });
  expect(cache.getAll()).toMatchSnapshot();

  cache.store('evenchange4', 'micro-medium-api', { status: 201 });
  expect(cache.getAll()).toMatchSnapshot();
});
