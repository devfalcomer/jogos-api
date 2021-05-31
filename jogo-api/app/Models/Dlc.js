'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Dlc extends Model {
    static getCamposDlc() {
        return [
            'nome',
            'preco',
            'data_lanca'
        ]
    }

    Jogos_dlc() {
        return this.belongsToMany('App/models/Jogo').pivotTable('jogos_dlcs')
    }
}

module.exports = Dlc
