/* eslint global-require: 0, no-throw-literal: 0 */

beforeEach(() => {
  jest.resetModules();
  jest.mock('micro', () => ({
    send: (res, code, content) => ({ res, code, content }),
  }));
});

it('should return limit', async () => {
  jest.doMock('../../utils/API', () => ({
    getRateLimit: () => ({}),
  }));

  const limit = require('../limit');

  expect(await limit()).toMatchSnapshot();
});

it('should return limit with error', async () => {
  jest.doMock('../../utils/API', () => ({
    getRateLimit: () => {
      throw new Error('error');
    },
  }));

  const limit = require('../limit');

  expect(await limit()).toMatchSnapshot();
});
