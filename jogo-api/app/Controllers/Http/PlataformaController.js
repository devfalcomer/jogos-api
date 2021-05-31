'use strict'

const Plataforma = use('App/models/Plataforma')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with plataformas
 */
class PlataformaController {
  /**
   * Show a list of all plataformas.
   * GET plataformas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    return Plataforma.query().fetch();
  }

  /**
   * Create/save a new plataforma.
   * POST plataformas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const campos = Plataforma.getCamposPlataforma()
    const plataformas = request.only(campos)

    return await Plataforma.create(plataformas)
  }

  /**
   * Display a single plataforma.
   * GET plataformas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    return await Plataforma.query()
      .with('Periferico')
      .with('JogosPlataformas')
      .where('id', params.id)
      .first()
  }

  /**
   * Update plataforma details.
   * PUT or PATCH plataformas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const plataformas = await Plataforma.findOrFail(params.id);

    const campos = Plataforma.getCamposPlataforma()
    const dados = request.only(campos)

    plataformas.merge(dados)
    await plataformas.save()

    return plataformas
  }

  /**
   * Delete a plataforma with id.
   * DELETE plataformas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const plataforma = await Plataforma.findOrFail(params.id);
    return await plataforma.delete();
  }
}

module.exports = PlataformaController
