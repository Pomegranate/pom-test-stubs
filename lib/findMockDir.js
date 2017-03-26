/**
 * @file findMockDir
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project pom-test-stubs
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';
const path = require('path')
/**
 *
 * @module findMockDir
 */

module.exports = function(baseDir, mockDir){
  return path.join(baseDir, mockDir)
}