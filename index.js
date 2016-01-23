foouse strict'

/**
 * Trails Model Class. 
 */
module.exports = class TrailsModel {

  constructor (app) {
    this.app = app
  }

  /**
   * Model configuration
   */
  static config () {

  }

  /**
   * Model schema. The definition of its fields, their types, indexes,
   * foreign keys, etc go here.
   */
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
