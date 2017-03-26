/**
 * @file mockPlugin
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project pom-test-stubs
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';

/**
 *
 * @module mockPlugin
 */

module.exports = function(name, parent){
  return {
    metadata: {
      name: name,
      layer: 'core',
      type: 'service',
      param: name
    },
    plugin: {
      load: function(injector, loaded){
        loaded(null, {parent: parent || 'None'});
      },
      start: function(done){
        done(null)
      },
      stop: function(done){
        done(null)
      }
    }
  }
}