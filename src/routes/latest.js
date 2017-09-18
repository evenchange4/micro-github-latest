const { send } = require('micro');
const R = require('ramda');
const API = require('../utils/API');
const getAssets = require('../utils/getAssets');
const redirect = require('../utils/redirect');

const latest = async (req, res) => {
  const { owner, repo, name } = req.params;
  try {
    const response = await API.getLatestRelease(owner, repo);
    const assets = getAssets(response);

    const regex = new RegExp(name);
    const assetURL = R.find(R.test(regex))(assets) || R.head(assets);

    if (!assetURL) throw new Error('Asset not found.');

    return redirect(res, 302, assetURL, response.meta);
  } catch (error) {
    if (error.code === 403) {
      return redirect(
        res,
        302,
        `https://github.com/${owner}/${repo}/releases/latest`,
      );
    }

    return send(res, 404, error);
  }
};

module.exports = latest;
