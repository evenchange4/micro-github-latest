const GitHubApi = require('github');
const R = require('ramda');
const pkg = require('../../package.json');
const cache = require('../utils/cache');

const github = new GitHubApi({
  debug: !!process.env.DEBUG,
  protocol: 'https',
  host: 'api.github.com',
  headers: {
    'user-agent': pkg.name,
  },
  Promise,
});

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

if (ACCESS_TOKEN) {
  github.authenticate({
    type: 'token',
    token: ACCESS_TOKEN,
  });
}

const getLatestRelease = (owner, repo) => {
  const cacheResponse = cache.get(owner, repo);
  const lastModified = R.path(['meta', 'last-modified'])(cacheResponse);

  return github.repos
    .getLatestRelease({
      headers: lastModified && { 'If-Modified-Since': lastModified },
      owner,
      repo,
    })
    .then(response => {
      // Hint: Internal 304 cache handler for GitHub Api.
      if (/304/.test(response.meta.status)) return cacheResponse;

      cache.store(owner, repo, response);
      return response;
    });
};

const getRateLimit = () => github.misc.getRateLimit({});

module.exports = {
  getLatestRelease,
  getRateLimit,
};
