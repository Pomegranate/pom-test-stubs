/**
 * @file mockFrameworkInjector
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project pom-test-stubs
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

'use strict';

const Injector = require('magnum-di')
const frmwkUtils = require('pom-framework-utils')
const _ = frmwkUtils.lodash
const path = require('path')
/**
 *
 * @module mockFrameworkInjector
 */

module.exports = function(verbose, opts, parentDir) {

  let builtOpts = {
    prefix: opts.prefix || 'pomegranate',
    additionalPrefix: opts.additionalPrefix || [],
    logger: console,
    parentDirectory: parentDir,
    applicationDirectory: path.join(parentDir,'./application'),
    pluginDirectory: (_.isBoolean(opts.pluginDirectory) && !opts.pluginDirectory) ? false : path.join(parentDir,'./plugins'),
    pluginSettingsDirectory: path.join(parentDir, './pluginSettings')
  };

  let injector = new Injector()
  let EventEmitter = require('events').EventEmitter;
  let FrameworkEvents = new EventEmitter()

  let FrameworkOptions = frmwkUtils.frameworkOptionParser(builtOpts, frmwkUtils.frameworkErrors)
  let currentPrefixes = frmwkUtils.prefixGenerator(builtOpts.prefix, builtOpts.additionalPrefix)

  injector.service('Prefixes', currentPrefixes)
  injector.service('PrefixSelector', frmwkUtils.prefixSelector(currentPrefixes))
  injector.service('Options', FrameworkOptions)
  injector.service('NameGenerator', frmwkUtils.nameGenerator);
  injector.service('FrameworkErrors', frmwkUtils.frameworkErrors)
  injector.service('FrameworkEvents', FrameworkEvents)
  injector.service('Output', frmwkUtils.frameworkMessages);
  injector.service('LoggerBuilder', frmwkUtils.loggerFactory);
  injector.service('Logger', mockConsole(verbose))
  injector.service('FrameworkLogger', mockConsole(verbose))
  injector.service('SystemLogger', mockConsole(verbose))

  return injector
}

function mockConsole(verbose){

  if(verbose) return console

  return {
    log: function(){},
    error: function(){},
    info: function(){},
    warn: function(){},
  }
}