'use strict'

/**
 * Trails Model Class. 
 */
module.exports = class TrailsModel {
  constructor (app) {
    this.app = app
  }

  /**
   * Specific model configuration (override config/models.js)
   * @return object config to merge with defaults
   */
  static config () {

  }

  /**
   * Model schema in ORM specific structure (waterline, Bookshelf...)
   * @return object schema
   */
  static schema () {

  }

  /**
   * Model description, can be use for documentation generator like swagger
   * @return object
   */
  static description () {

  }

  get log () {
    return this.app.log
  }

  get __ () {
    return this.app.packs.core.i18n.t
  }
}
