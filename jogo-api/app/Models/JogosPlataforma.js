'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class JogosPlataforma extends Model {
    static getCamposJogosPlataforma() {
        return [
            'jogo_id',
            'plataforma_id'
        ]
    }
}

module.exports = JogosPlataforma
