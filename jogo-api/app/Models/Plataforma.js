'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Plataforma extends Model {
    static getCamposPlataforma() {
        return [
            'nome',
            'preco',
            'requisitos',
            'empplats'
        ]
    }

    Periferico() {
        return this.belongsToMany('App/Models/Periferico').pivotTable('perifericos_plataformas')
    }

    JogosPlataformas() {
        return this.belongsToMany('App/Models/Jogo').pivotTable('jogos_plataformas')
    }
}

module.exports = Plataforma
