'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class JogosEstudio extends Model {
    static getCamposJogosEstudio() {
        return [
            'jogo_id',
            'estudio_id'
        ]
    }
}

module.exports = JogosEstudio
