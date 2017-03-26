/**
 * @file PlatformSetup
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project pom-test-stubs
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';
const mockery = require('mockery');
const path = require('path')
const _ = require('pom-framework-utils').lodash
/**
 *
 * @module PlatformSetup
 */

module.exports = function(parentDir, pkgJson){

  mockery.enable({
    useCleanCache: true,
    warnOnUnregistered: false
  });

  _.mapValues(pkgJson.dependencies, (version, prop) => {
    mockery.registerSubstitute(prop, path.join(parentDir,'./n_modules/', prop));
  })

  return {
    reset: function(){
      mockery.deregisterAll()
    }
  }
}