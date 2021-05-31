'use strict'

/*
|--------------------------------------------------------------------------
| DlcSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Dlc = use('App/models/Dlc')

class DlcSeeder {
  async run() {
    await Dlc.createMany([
      { nome: 'Forza Horizon 4: FORTUNE ISLAND', preco: 'R$37,00', data_lanca: '09/03/2021' },
      { nome: 'Dead by Daylight - ALL KILL CHAPTER', preco: '14,49', data_lanca: '30/03/2021' },
      { nome: 'Dead by Daylight - SILENT HILL CHAPTER', preco: 'R$8,69', data_lanca: '16/06/2020' }
    ])
  }
}

module.exports = DlcSeeder
