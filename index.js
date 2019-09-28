/**
 * @fileOverview
 * @author kukuv
 */

module.exports = function(n, fn) {
  for (var i = 0; i < n; i++) {
    fn(i);
  }
};
