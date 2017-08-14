const R = require('ramda');

const redirect = (res, statusCode, url, githubMeta = {}) => {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Location', url);

  R.forEachObjIndexed((value, key) => {
    res.setHeader(key, value);
  })(githubMeta);
  return res.end(`Redirecting to ${url}`);
};

module.exports = redirect;
