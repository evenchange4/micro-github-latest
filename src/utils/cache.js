/**
 * Cache response in memory.
 * ref: https://developer.github.com/v3/#conditional-requests
 * @author Michael Hsu
 */

const R = require('ramda');
const debug = require('debug')('cache');

let cache = {}; // Remind: It is a singleton.

const store = (owner, repo, response) => {
  const keyLens = R.lensProp(`${owner}/${repo}`);
  cache = R.set(keyLens, response)(cache);

  debug(cache);
};

const get = (owner, repo) => cache[`${owner}/${repo}`] || {};
const getAll = () => cache;

module.exports = {
  store,
  get,
  getAll,
};
