'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Distribuidora extends Model {
    static getCamposDistribuidora() {
        return [
            'nome',
            'date_de_criac',
            'valor_mercado',
            'estudio',
            'estudio_id'
        ]
    }

    estudios() {
        return this.belongsTo('App/Models/Estudio')
    }

    Jogos() {
        return this.belongsToMany('App/Models/Jogo').pivotTable('jogos_distribuidoras')
    }


}

module.exports = Distribuidora
