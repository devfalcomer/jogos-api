'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PerifericoSchema extends Schema {
  up () {
    this.create('perifericos', (table) => {
      table.increments()
      table.string('nome', 45)
      table.string('marca', 45)
      table.float('preco')
      table.timestamps()
    })
  }

  down () {
    this.drop('perifericos')
  }
}

module.exports = PerifericoSchema
