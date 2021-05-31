'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Estudio extends Model {
    static getCamposEstudio() {
        return [
            'nome',
            'data_criac',
            'valor_mercado',
            'motor_grafico'
        ]
    }

    distribuidoras() {
        return this.hasMany('App/Models/Distribuidora')
    }

    Jogos_estudio() {
        return this.belongsToMany('App/Models/Jogo').pivotTable('jogos_estudios')
    }
}

module.exports = Estudio
