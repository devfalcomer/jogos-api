'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class PerifericosPlataforma extends ValidatorAbstract {
  get rules() {
    return {
      // validation rules
      data_de_criac: 'required|max:10',
      valor_mercado: 'required|max:6',
      plataforma_id: 'required|min:1',
      periferico_id: 'required|min:1'
    }
  }
}

module.exports = PerifericosPlataforma
