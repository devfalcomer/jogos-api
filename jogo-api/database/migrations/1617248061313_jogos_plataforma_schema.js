'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class JogosPlataformaSchema extends Schema {
  up() {
    this.create('jogos_plataformas', (table) => {
      table.increments()
      table.integer('jogo_id').references('id').inTable('jogos').unsigned().notNullable()
      table.integer('plataforma_id').references('id').inTable('plataformas').unsigned().notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('jogos_plataformas')
  }
}

module.exports = JogosPlataformaSchema
