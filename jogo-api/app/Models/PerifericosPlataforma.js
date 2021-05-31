'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PerifericosPlataforma extends Model {
    static getCamposPerifericosPlataforma() {
        return [
            'data_de_criac',
            'valor_mercado',
            'plataforma_id',
            'periferico_id'
        ]
    }
}

module.exports = PerifericosPlataforma
