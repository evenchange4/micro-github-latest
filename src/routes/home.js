const { send } = require('micro');

const home = (req, res) =>
  send(
    res,
    200,
    `
    Please try

    /:owner/:repo/:name/latest
    /:owner/:repo/latest
`,
  );

module.exports = home;
