const { send } = require('micro');
const API = require('../utils/API');

const limit = async (req, res) => {
  try {
    const response = await API.getRateLimit();
    return send(res, 200, response);
  } catch (error) {
    return send(res, 404, error);
  }
};

module.exports = limit;
