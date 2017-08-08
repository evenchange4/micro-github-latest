const R = require('ramda');

const getAssets = R.pipe(
  R.path(['data', 'assets']),
  R.pluck(['browser_download_url']),
);

module.exports = getAssets;
