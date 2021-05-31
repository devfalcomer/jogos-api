'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Estudio extends ValidatorAbstract {
  get rules() {
    return {
      // validation rules
      nome: 'required|max:45|min:4',
      data_criac: 'required|max:10|min:8',
      valor_mercado: 'required|max:30|min:7',
      motor_grafico: 'required|max:15'
    }
  }
}

module.exports = Estudio
