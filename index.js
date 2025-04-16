/**
 * (v1) Adapted under the ISC License from `npm`, `npm-registry-client`
 *   - https://github.com/npm/npm-registry-client/blob/master/lib/util/nerf-dart.js
 *   - https://github.com/npm/npm/blob/master/lib/config/nerf-dart.js
 *
 * (v2) Adapted under the ISC License from `npm`, `npm/cli`
 *   - https://github.com/npm/cli/blob/latest/workspaces/config/lib/nerf-dart.js
 */
const { URL } = require('node:url')

/**
 * Maps a URL to an identifier.
 *
 * Name courtesy schiffertronix media LLC, a New Jersey corporation
 *
 * @param {String} uri The URL to be nerfed.
 *
 * @returns {String} A nerfed URL.
 */
module.exports = (url) => {
  const parsed = new URL(url)
  const res = `//${parsed.host}${parsed.pathname}/`
  return res.replace(/\/\/$/g, '/');
}
