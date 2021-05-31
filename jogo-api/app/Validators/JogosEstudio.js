'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class JogosEstudio extends ValidatorAbstract {
  get rules() {
    return {
      // validation rules
      jogo_id: 'required|min:1',
      estudio_id: 'required|min:1'
    }
  }
}

module.exports = JogosEstudio
