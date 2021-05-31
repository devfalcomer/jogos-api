'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class JogosDlc extends ValidatorAbstract {
  get rules() {
    return {
      // validation rules
      jogo_id: 'required|min:1',
      dlc_id: 'required|min:1'
    }
  }
}

module.exports = JogosDlc
