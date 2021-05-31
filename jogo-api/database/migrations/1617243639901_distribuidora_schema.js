'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DistribuidoraSchema extends Schema {
  up() {
    this.create('distribuidoras', (table) => {
      table.increments()
      table.string('nome', 45).notNullable()
      table.date('date_de_criac').notNullable()
      table.float('valor_mercado').notNullable()
      table.string('estudio').notNullable()
      table.integer('estudio_id').references('id').inTable('estudios').unsigned().notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('distribuidoras')
  }
}

module.exports = DistribuidoraSchema
