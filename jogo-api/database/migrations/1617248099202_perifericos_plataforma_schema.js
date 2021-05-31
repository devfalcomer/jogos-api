'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PerifericosPlataformaSchema extends Schema {
  up() {
    this.create('perifericos_plataformas', (table) => {
      table.increments()
      table.date('data_de_criac').notNullable()
      table.float('valor_mercado').notNullable()
      table.integer('plataforma_id').references('id').inTable('plataformas').unsigned().notNullable()
      table.integer('periferico_id').references('id').inTable('perifericos').unsigned().notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('perifericos_plataformas')
  }
}

module.exports = PerifericosPlataformaSchema
