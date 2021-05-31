'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class JogosEstudioSchema extends Schema {
  up() {
    this.create('jogos_estudios', (table) => {
      table.increments()
      table.integer('jogo_id').references('id').inTable('jogos').unsigned().notNullable()
      table.integer('estudio_id').references('id').inTable('estudios').unsigned().notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('jogos_estudios')
  }
}

module.exports = JogosEstudioSchema
