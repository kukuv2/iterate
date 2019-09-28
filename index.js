/**
 * @fileOverview
 * @author kukuv
 */

module.export = function(n, fn) {
  for (var i = 0; i < n; i++) {
    fn(i);
  }
};
