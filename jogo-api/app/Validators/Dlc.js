'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Dlc extends ValidatorAbstract {
  get rules() {
    return {
      // validation rules
      nome: 'required|min:3',
      preco: 'required|min:3',
      data_lanca: 'required|max:10|min:8'
    }
  }
}

module.exports = Dlc
