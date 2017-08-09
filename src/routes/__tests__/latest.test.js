/* eslint global-require: 0, no-throw-literal: 0 */

beforeEach(() => {
  jest.resetModules();
  jest.mock('micro', () => ({
    send: (res, code, content) => ({ res, code, content }),
  }));
  jest.mock('../../utils/redirect', () => (res, statusCode, url) => ({
    res,
    statusCode,
    url,
  }));
});

it('should return latest without name', async () => {
  jest.doMock('../../utils/API', () => ({
    getLatestRelease: (owner, repo) => ({
      owner,
      repo,
    }),
  }));
  jest.doMock('../../utils/getAssets', () => () => ['1', '2', '3']);

  const latest = require('../latest');

  expect(
    await latest({ params: { owner: 'owner', repo: 'repo' } }),
  ).toMatchSnapshot();
});

it('should return latest with name', async () => {
  jest.doMock('../../utils/API', () => ({
    getLatestRelease: (owner, repo) => ({
      owner,
      repo,
    }),
  }));
  jest.doMock('../../utils/getAssets', () => () => ['1', '2', '3']);

  const latest = require('../latest');

  expect(
    await latest({ params: { owner: 'owner', repo: 'repo', name: '2' } }),
  ).toMatchSnapshot();
});

it('should return latest with 404', async () => {
  jest.doMock('../../utils/API', () => ({
    getLatestRelease: (owner, repo) => ({
      owner,
      repo,
    }),
  }));
  jest.doMock('../../utils/getAssets', () => () => []);

  const latest = require('../latest');

  expect(
    await latest({ params: { owner: 'owner', repo: 'repo', name: '2' } }),
  ).toMatchSnapshot();
});

it('should return latest with error', async () => {
  jest.doMock('../../utils/API', () => ({
    getLatestRelease: () => {
      throw new Error('error');
    },
  }));
  jest.doMock('../../utils/getAssets', () => () => []);

  const latest = require('../latest');

  expect(
    await latest({ params: { owner: 'owner', repo: 'repo' } }),
  ).toMatchSnapshot();
});
