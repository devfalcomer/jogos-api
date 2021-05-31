'use strict'

/*
|--------------------------------------------------------------------------
| EstudioSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Estudio = use('App/models/Estudio')

class EstudioSeeder {
  async run() {
    await Estudio.createMany([
      {
        nome: 'Valve',
        data_criac: '21/08/2012',
        valor_mercado: '20 milhões',
        motor_grafico: 'Source Engine'
      },

      {
        nome: 'The Coalition',
        data_criac: '07/11/2006',
        valor_mercado: '1 bilhão',
        motor_grafico: 'Unreal Engine'
      },

      {
        nome: 'Microsoft Studios',
        data_criac: '02/10/2018',
        valor_mercado: '300 bilhôes',
        motor_grafico: 'Unreal Engine'
      }
    ])
  }
}

module.exports = EstudioSeeder
