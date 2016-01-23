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

  /**
   * Return the name of the database table or collection
   */
  getTableName () {
    const config = this.constructor.config() || { }
    return config.tableName || this.constructor.name.toLowerCase()
  }

  get log () {
    return this.app.log
  }

  get __ () {
    return this.app.packs.core.i18n.t
  }
}
