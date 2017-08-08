const getAssets = require('../getAssets');
const data = require('./data.json');

it('should return getAssets list', () => {
  expect(getAssets(data)).toMatchSnapshot();
});
