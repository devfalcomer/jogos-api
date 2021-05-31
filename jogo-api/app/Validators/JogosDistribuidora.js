'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class JogosDistribuidora extends ValidatorAbstract {
  get rules() {
    return {
      // validation rules
      distribuidora_id: 'required|min:1',
      jogo_id: 'required|min:1'
    }
  }
}

module.exports = JogosDistribuidora