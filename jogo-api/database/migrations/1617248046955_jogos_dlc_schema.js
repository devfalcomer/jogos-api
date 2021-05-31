'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class JogosDlcSchema extends Schema {
  up() {
    this.create('jogos_dlcs', (table) => {
      table.increments()
      table.integer('jogo_id').references('id').inTable('jogos').unsigned().notNullable()
      table.integer('dlc_id').references('id').inTable('dlcs').unsigned()
      table.timestamps()
    })
  }

  down() {
    this.drop('jogos_dlcs')
  }
}

module.exports = JogosDlcSchema
