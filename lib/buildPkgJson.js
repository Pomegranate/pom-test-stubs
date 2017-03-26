/**
 * @file buildPkgJson
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project pom-test-stubs
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';

/**
 *
 * @module buildPkgJson
 */

module.exports = function(deps){
  let pkgJKson = {
    dependencies: {}
  }
  deps.forEach((v,k) => {
    pkgJKson.dependencies[v] = '0.0.0'
  })
  return pkgJKson
}