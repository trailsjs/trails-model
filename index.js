'use strict'

/**
 * Trails Model Class. 
 */
module.exports = class TrailsModel {
  constructor (app) {
    this.app = app
  }

  static config () {

  }

  static schema () {

  }

  get log () {
    return this.app.log
  }

  get __ () {
    return this.app.packs.core.i18n.t
  }
}
