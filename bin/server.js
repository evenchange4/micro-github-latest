/**
 * This is for pkg binary file.
 *
 * example:
 *
 * $ ./micro-github-latest 3001
 *
 * @author Michael Hsu
 */

const micro = require('micro');
const main = require('../src/index');

const PORT = process.argv[2] || 3000;

console.log(`> [Mirco-github-latest] server is running on port ${PORT}`); // eslint-disable-line

micro(main).listen(PORT);
