'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Jogo extends ValidatorAbstract {
  get rules() {
    return {
      // validation rules
      nome: 'required|max:20',
      data_de_criac: 'required|max:10',
      lancamento: 'required|max:10',
      genero: 'required|max:20',
      preco: 'required|max:6',
      dlc: 'min:5',
      plataforma: 'required|max:45',
      legenda: 'min:3',
      linguagem: 'required|min:5',
      modos_de_jogo: 'required|min:10',
      distribuidora: 'required|min:5',
      estudio: 'required|min:5',
      duracao: 'min:2'
    }
  }
}

module.exports = Jogo
