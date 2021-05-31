'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Distribuidora extends ValidatorAbstract {
  get rules() {
    return {
      // validation rules
      nome: 'required|max:45|min:3',
      date_de_criac: 'required|max:10|min:8',
      valor_mercado: 'required|max:50|min:5',
      estudio: 'required|max:15',
      estudio_id: 'required|min:1'
    }
  }
}

module.exports = Distribuidora
