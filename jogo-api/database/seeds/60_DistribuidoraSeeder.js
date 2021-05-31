'use strict'

/*
|--------------------------------------------------------------------------
| DistribuidoraSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Distribuidora = use('App/models/Distribuidora')

class DistribuidoraSeeder {
  async run() {
    await Distribuidora.createMany([
      { nome: 'Valve', date_de_criac: '24/08/1996', valor_mercado: '24 bilhôes', estudio: 'Hidden Path Entertainment', estudio_id: '1' },
      { nome: 'The Coalition', date_de_criac: '06/02/2010', valor_mercado: '20 bilhões', estudio: 'Microsoft Studios', estudio_id: '3' },
      { nome: 'Microsoft Studios', date_de_criac: '04/04/1975', valor_mercado: '204 bilhôes', estudio: 'Microsoft Studios', estudio_id: '3' }
    ])
  }
}

module.exports = DistribuidoraSeeder
