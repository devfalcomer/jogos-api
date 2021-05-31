'use strict'

/*
|--------------------------------------------------------------------------
| JogosPlataformaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const JogosPlataforma = use('App/models/JogosPlataforma')

class JogosPlataformaSeeder {
  async run() {
    await JogosPlataforma.createMany([
      { jogo_id: 3, plataforma_id: 1 },
      { jogo_id: 3, plataforma_id: 1 },
      { jogo_id: 4, plataforma_id: 1 }
    ])
  }
}

module.exports = JogosPlataformaSeeder
