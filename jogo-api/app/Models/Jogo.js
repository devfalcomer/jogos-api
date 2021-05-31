'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Jogo extends Model {
    static getCamposJogo() {
        return [
            'nome',
            'data_de_criac',
            'lancamento',
            'genero',
            'preco',
            'dlc',
            'plataforma',
            'legenda',
            'linguagem',
            'modos_de_jogo',
            'distribuidora',
            'estudio',
            'duracao'
        ]
    }
    JogosDistribuidora() {
        return this.belongsToMany('App/Models/Distribuidora').pivotTable('jogos_distribuidoras')
    }
    JogosDlc() {
        return this.belongsToMany('App/Models/Dlc').pivotTable('jogos_dlcs')
    }
    JogosEstudio() {
        return this.belongsToMany('App/Models/Estudio').pivotTable('jogos_estudios')
    }
    JogosPlataforma() {
        return this.belongsToMany('App/Models/Plataforma').pivotTable('jogos_plataformas')
    }
}

module.exports = Jogo
