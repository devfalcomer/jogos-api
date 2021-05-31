'use strict'

const PerifericosPlataforma = use('App/models/PerifericosPlataforma')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with perifericosplataformas
 */
class PerifericosPlataformaController {
  /**
   * Show a list of all perifericosplataformas.
   * GET perifericosplataformas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    return PerifericosPlataforma.query().fetch();
  }

  /**
   * Create/save a new perifericosplataforma.
   * POST perifericosplataformas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const campos = PerifericosPlataforma.getCamposPerifericosPlataforma()
    const perifericosplataforma = request.only(campos)

    return await PerifericosPlataforma.create(perifericosplataforma)
  }

  /**
   * Display a single perifericosplataforma.
   * GET perifericosplataformas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    return await PerifericosPlataforma.findOrFail(params.id);
  }

  /**
   * Update perifericosplataforma details.
   * PUT or PATCH perifericosplataformas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const perifericosplataforma = await PerifericosPlataforma.findOrFail(params.id);

    const campos = PerifericosPlataforma.getCamposPerifericosPlataforma()
    const dados = request.only(campos)

    perifericosplataforma.merge(dados)
    await perifericosplataforma.save()

    return perifericosplataforma
  }

  /**
   * Delete a perifericosplataforma with id.
   * DELETE perifericosplataformas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const perifericosplataforma = await PerifericosPlataforma.findOrFail(params.id);
    return await perifericosplataforma.delete();
  }
}

module.exports = PerifericosPlataformaController
