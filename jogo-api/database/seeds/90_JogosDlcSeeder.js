'use strict'

/*
|--------------------------------------------------------------------------
| JogosDlcSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const JogosDlc = use('App/models/JogosDlc')

class JogosDlcSeeder {
  async run() {
    await JogosDlc.createMany([
      { jogo_id: 3, dlc_id: 1 },
      { jogo_id: 4, dlc_id: 2 },
      { jogo_id: 4, dlc_id: 3 }
    ])
  }
}

module.exports = JogosDlcSeeder
