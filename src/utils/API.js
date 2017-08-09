const GitHubApi = require('github');

const github = new GitHubApi({
  protocol: 'https',
  host: 'api.github.com',
  Promise,
});

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

if (ACCESS_TOKEN) {
  github.authenticate({
    type: 'token',
    token: ACCESS_TOKEN,
  });
}

const getLatestRelease = (owner, repo) =>
  github.repos.getLatestRelease({ owner, repo });
const getRateLimit = () => github.misc.getRateLimit({});

module.exports = {
  getLatestRelease,
  getRateLimit,
};
