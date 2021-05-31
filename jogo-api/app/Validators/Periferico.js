'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Periferico extends ValidatorAbstract {
  get rules() {
    return {
      // validation rules
      nome: 'required|max:45|min:5',
      marca: 'required|min:4',
      preco: 'required|min:3',
    }
  }
}

module.exports = Periferico
