'use strict'

const Distribuidora = use('App/models/Distribuidora')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with distribuidoras
 */
class DistribuidoraController {
  /**
   * Show a list of all distribuidoras.
   * GET distribuidoras
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    return Distribuidora.query().fetch();
  }

  /**
   * Create/save a new distribuidora.
   * POST distribuidoras
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const campos = Distribuidora.getCamposDistribuidora()
    const distribuidora = request.only(campos)

    return await Distribuidora.create(distribuidora)
  }

  /**
   * Display a single distribuidora.
   * GET distribuidoras/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    return await Distribuidora.query()
      .with('estudios')
      .with('Jogos')
      .where('id', params.id)
      .first()
  }

  /**
   * Update distribuidora details.
   * PUT or PATCH distribuidoras/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const distribuidora = await Distribuidora.findOrFail(params.id);

    const campos = Distribuidora.getCamposDistribuidora()
    const dados = request.only(campos)

    distribuidora.merge(dados)
    await distribuidora.save()

    return distribuidora
  }

  /**
   * Delete a distribuidora with id.
   * DELETE distribuidoras/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const distribuidora = await Distribuidora.findOrFail(params.id);
    return await distribuidora.delete();
  }
}

module.exports = DistribuidoraController
