'use strict'

const assert = require('assert')
const Model = require('../')

describe('Trails Model', () => {
  const Foo = class Foo extends Model {
    static config () {
      return {
        tableName: 'foo'
      }
    }
  }
  const Bar = class Bar extends Model { }

  describe('#getTableName', () => {
    it('should return tableName set in config', () => {
      const foo = new Foo()
      assert.equal(foo.getTableName(), 'foo')
    })
    it('should return tableName named after className if no tableName set', () => {
      const bar = new Bar()
      assert.equal(bar.getTableName(), 'bar')
    })
  })
})

