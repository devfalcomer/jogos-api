'use strict'

/*
|--------------------------------------------------------------------------
| JogosEstudioSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const JogosEstudio = use('App/models/JogosEstudio')

class JogosEstudioSeeder {
  async run() {
    await JogosEstudio.createMany([
      { jogo_id: 4, estudio_id: 3 },
      { jogo_id: 3, estudio_id: 3 },
      { jogo_id: 1, estudio_id: 1 }
    ])
  }
}

module.exports = JogosEstudioSeeder
