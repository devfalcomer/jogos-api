'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Periferico extends Model {
    static getCamposPeriferico() {
        return [
            'nome',
            'marca',
            'preco',
        ]
    }

    Plataformas() {
        return this.belongsToMany('App/Models/Plataforma').pivotTable('perifericos_plataformas')
    }
}

module.exports = Periferico
