'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class JogosDistribuidora extends Model {
    static getCamposJogosDistribuidora() {
        return [
            'distribuidora_id',
            'jogo_id',
        ]
    }
}

module.exports = JogosDistribuidora
