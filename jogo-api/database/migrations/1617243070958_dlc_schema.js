'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DlcSchema extends Schema {
  up () {
    this.create('dlcs', (table) => {
      table.increments()
      table.string('nome', 45).notNullable()
      table.float('preco').notNullable()
      table.date('data_lanca').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('dlcs')
  }
}

module.exports = DlcSchema
