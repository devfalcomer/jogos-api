'use strict'

/*
|--------------------------------------------------------------------------
| PerifericoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Periferico = use('App/models/Periferico')

class PerifericoSeeder {
  async run() {
    await Periferico.createMany([
      {
        nome: 'Mouse HyperX Pulsefire Core',
        marca: 'HyperX',
        preco: 'R$200,00'
      },

      {
        nome: 'Razer Deathadder Elite Chroma',
        marca: 'Razer',
        preco: 'R$300,00'
      },

      {
        nome: 'Xbox Wireless Controller Series X|S robot white',
        marca: 'Xbox',
        preco: 'R$431,46'
      }
    ])
  }
}

module.exports = PerifericoSeeder
