'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class JogosDistribuidoraSchema extends Schema {
  up() {
    this.create('jogos_distribuidoras', (table) => {
      table.increments()
      table.integer('distribuidora_id').references('id').inTable('distribuidoras').unsigned().notNullable()
      table.integer('jogo_id').references('id').inTable('jogos').unsigned().notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('jogos_distribuidoras')
  }
}

module.exports = JogosDistribuidoraSchema
