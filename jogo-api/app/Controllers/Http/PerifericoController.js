'use strict'

const Periferico = use('App/models/Periferico')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with perifericos
 */
class PerifericoController {
  /**
   * Show a list of all perifericos.
   * GET perifericos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    return Periferico.query().fetch();
  }
  /**
   * Create/save a new periferico.
   * POST perifericos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const campos = Periferico.getCamposPeriferico()
    const periferico = request.only(campos)

    return await Periferico.create(periferico)
  }

  /**
   * Display a single periferico.
   * GET perifericos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    return await Periferico.query()
      .with('Plataformas')
      .where('id', params.id)
      .first()
  }

  /**
   * Update periferico details.
   * PUT or PATCH perifericos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const perifericos = await Periferico.findOrFail(params.id);

    const campos = Periferico.getCamposPeriferico()
    const dados = request.only(campos)

    perifericos.merge(dados)
    await perifericos.save()

    return perifericos
  }

  /**
   * Delete a periferico with id.
   * DELETE perifericos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const periferico = await Periferico.findOrFail(params.id);
    return await periferico.delete();
  }
}

module.exports = PerifericoController
