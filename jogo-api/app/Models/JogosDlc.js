'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class JogosDlc extends Model {
    static getCamposJogosDlc() {
        return [
            'jogo_id',
            'dlc_id'
        ]
    }
}

module.exports = JogosDlc
