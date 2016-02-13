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
  const SubFoo = class SubFoo extends Foo {
    static config () {
      return {
        tableName: 'subfoo'
      }
    }
  }
  const SubBar = class SubBar extends Bar { }

  describe('#constructor', () => {
    it('.app should be accessible but not enumerable', () => {
      let foo = new Foo(1)
      let keys = Object.keys(foo)

      assert.equal(foo.app, 1)
      assert.equal(keys.indexOf('app'), -1)
    })

  })

  describe('#getModelName', () => {
    it('should return correct model name', () => {
      const foo = new Foo()
      assert(foo.getModelName(), 'foo')
    })
  })

  describe('#getTableName', () => {
    it('should return tableName set in config', () => {
      const foo = new Foo()
      assert.equal(foo.getTableName(), 'foo')
    })
    it('should return tableName named after className if no tableName set', () => {
      const bar = new Bar()
      assert.equal(bar.getTableName(), 'bar')
    })
    it('should return tableName named after className of subclass', () => {
      const subbar = new SubBar()
      assert.equal(subbar.getTableName(), 'subbar')
    })
    it('should return tableName set in config of subclass', () => {
      const subfoo = new SubFoo()
      assert.equal(subfoo.getTableName(), 'subfoo')
    })
  })
})

