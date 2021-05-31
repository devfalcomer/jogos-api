'use strict'

/*
|--------------------------------------------------------------------------
| PerifericosPlataformaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const PerifericosPlataforma = use('App/models/PerifericosPlataforma')

class PerifericosPlataformaSeeder {
  async run() {
    await PerifericosPlataforma.createMany([
      { data_de_criac: '24/08/1996', valor_mercado: '24 bilhôes', plataforma_id: '', periferico_id: '' },
      { data_de_criac: '2005', valor_mercado: '103 milhôes', plataforma_id: '', periferico_id: '' },
      { data_de_criac: '04/04/1975', valor_mercado: '204 bilhôes', plataforma_id: '', periferico_id: '' }
    ])
  }
}

module.exports = PerifericosPlataformaSeeder
