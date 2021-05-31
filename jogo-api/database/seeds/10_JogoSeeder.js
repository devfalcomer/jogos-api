'use strict'

/*
|--------------------------------------------------------------------------
| JogoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Jogo = use('App/models/Jogo')

class JogoSeeder {
  async run() {
    await Jogo.createMany([
      {
        nome: 'CS:GO',
        data_de_criac: '19/06/1999',
        lancamento: '21/04/2012',
        genero: 'FPS',
        preco: 'GRATIS',
        plataforma: 'PC',
        linguagem: 'português',
        modos_de_jogo: 'Multiplayer',
        distribuidora: 'Valve',
        estudio: 'Hidden Path Entertainment'
      },

      {
        nome: 'GEARS OF WAR',
        data_de_criac: '07/11/2006',
        lancamento: '01/12/2006',
        genero: 'Tiro em terceira pessoa',
        preco: 'R$100,00',
        plataforma: 'Console',
        linguagem: 'português',
        modos_de_jogo: 'Single Player / Multiplayer / Cooperativo / Multiplayer Cooperativo',
        distribuidora: 'Xbox Game Studios',
        estudio: 'Microsoft'
      },

      {
        nome: 'Forza Horizon 4',
        data_de_criac: '07/11/2006',
        lancamento: '02/10/2018',
        genero: 'Todos os tipos',
        preco: 'R$250,00',
        plataforma: 'Console / PC',
        linguagem: 'português',
        modos_de_jogo: 'Single Player / Multiplayer',
        distribuidora: 'Microsoft Studios',
        estudio: 'Playground Games'
      },

      {
        nome: 'Dead by Daylight',
        data_de_criac: '14/06/2014',
        lancamento: '14/06/2016',
        genero: 'Horror de Sobrevivência',
        preco: 'R$60,00',
        plataforma: 'Console / PC / SmartPhone ',
        linguagem: 'português',
        modos_de_jogo: 'Multiplayer',
        distribuidora: 'Microsoft Studios',
        estudio: 'Behavior Interactive'
      }
    ])
  }
}

module.exports = JogoSeeder
