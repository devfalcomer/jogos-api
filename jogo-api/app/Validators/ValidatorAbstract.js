'use strict'

class ValidatorAbstract {
  get validateAll() {
    return true
  }

  get messages() {
    return {
      'required': "O campo '{{ field }}' é obrigatório",
      'max': "O campo '{{ field }}' ultrapassou o valor máximo",
      'min': "O campo '{{ field }}' não atingiu o valor mínimo",
      'integer': "O campo '{{ field }}' deve ser inteiro",
      'email': "O campo '{{ field }}' deve ser um email válido"
    }
  }

  async fails(errorMessagens) {
    return this.ctx.response.status(400).send(errorMessagens)
  }
}
module.exports = ValidatorAbstract
