'use strict'

/*
|--------------------------------------------------------------------------
| PlataformaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Plataforma = use('App/models/Plataforma')

class PlataformaSeeder {
  async run() {
    await Plataforma.createMany([
      {
        nome: 'PC',
        preco: '4000',
        requisitos: 'i7 3770, GTX 1050 Ti, 12GB DE RAM, SSD DE 120GB, HD DE 500 GB, HD DE 1TB E UMA FONTE DE 500WZ',
        empplats: 'Intel'
      },

      {
        nome: 'Console',
        preco: '2900',
        requisitos: 'Xbox Oxe Series X',
        empplats: 'Microsoft'
      },

      {
        nome: 'Mobile',
        preco: '3000',
        requisitos: 'S10+',
        empplats: 'Samsung'
      }
    ])
  }
}

module.exports = PlataformaSeeder
