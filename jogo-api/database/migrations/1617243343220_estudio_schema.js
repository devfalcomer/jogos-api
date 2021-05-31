'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EstudioSchema extends Schema {
  up () {
    this.create('estudios', (table) => {
      table.increments()
      table.string('nome', 45).notNullable()
      table.date('data_criac').notNullable()
      table.float('valor_mercado').notNullable()
      table.string('motor_grafico').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('estudios')
  }
}

module.exports = EstudioSchema
