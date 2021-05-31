'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class JogoSchema extends Schema {
  up () {
    this.create('jogos', (table) => {
      table.increments()
      table.string('nome', 45).notNullable()
      table.date('data_de_criac').notNullable()
      table.date('lancamento').notNullable()
      table.string('genero', 45).notNullable()
      table.float('preco').notNullable()
      table.string('dlc')
      table.string('plataforma', 45).notNullable()
      table.string('legenda', 45)
      table.string('linguagem', 45).notNullable()
      table.string('modos_de_jogo', 45).notNullable()
      table.string('distribuidora', 45).notNullable()
      table.string('estudio', 45).notNullable()
      table.integer('duracao', 45)
      table.timestamps()
    })
  }

  down () {
    this.drop('jogos')
  }
}

module.exports = JogoSchema
