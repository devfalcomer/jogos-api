'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlataformaSchema extends Schema {
  up () {
    this.create('plataformas', (table) => {
      table.increments()
      table.string('nome', 25).notNullable()
      table.float('preco').notNullable()
      table.string('requisitos', 45).notNullable()
      table.string('empplats', 45).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('plataformas')
  }
}

module.exports = PlataformaSchema
