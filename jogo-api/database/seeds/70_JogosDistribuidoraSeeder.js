'use strict'

/*
|--------------------------------------------------------------------------
| JogosDistribuidoraSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const JogosDistribuidora = use('App/models/JogosDistribuidora')

class JogosDistribuidoraSeeder {
  async run() {
    await JogosDistribuidora.createMany([
      { distribuidora_id: 1, jogo_id: 1 },
      { distribuidora_id: 2, jogo_id: 2 },
      { distribuidora_id: 3, jogo_id: 3 }
    ])
  }
}

module.exports = JogosDistribuidoraSeeder
