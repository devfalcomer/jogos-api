'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class JogosPlataforma extends ValidatorAbstract {
  get rules() {
    return {
      // validation rules
      jogo_id: 'required|min:1',
      plataforma_id: 'required|min:1'
    }
  }
}

module.exports = JogosPlataforma
