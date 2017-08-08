const GitHubApi = require('github');

const github = new GitHubApi({
  protocol: 'https',
  host: 'api.github.com',
});

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

if (ACCESS_TOKEN) {
  github.authenticate({
    type: 'token',
    token: ACCESS_TOKEN,
  });
}

const getRepo = (owner, repo) =>
  new Promise((resolve, reject) => {
    github.repos.getLatestRelease({ owner, repo }, (err, res) => {
      if (err) return reject(err);
      return resolve(res);
    });
  });

module.exports = {
  getRepo,
};
