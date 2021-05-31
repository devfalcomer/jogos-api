'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Plataforma extends ValidatorAbstract {
  get rules() {
    return {
      // validation rules
      nome: 'required|max:25|min:1',
      preco: 'required|min:3',
      requisitos: 'required|min:5',
      empplats: 'required|min:5'
    }
  }
}

module.exports = Plataforma
