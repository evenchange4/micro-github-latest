const R = require('ramda');
const { router, get } = require('microrouter');
const compress = require('micro-compress');
const cors = require('micro-cors');
const latest = require('./routes/latest');
const limit = require('./routes/limit');
const home = require('./routes/home');

const ORIGIN = process.env.ORIGIN;

const enhance = R.compose(
  cors({
    allowMethods: ['GET'],
    allowHeaders: [],
    origin: ORIGIN || '*',
  }),
  compress,
);

module.exports = router(
  get('/:owner/:repo/:name/latest', enhance(latest)),
  get('/:owner/:repo/latest', enhance(latest)),
  get('/rate_limit', enhance(limit)),
  get('*', enhance(home)),
);
