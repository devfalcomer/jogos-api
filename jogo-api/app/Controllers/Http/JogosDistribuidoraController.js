'use strict'

const JogosDistribuidora = use('App/models/JogosDistribuidora')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with jogosdistribuidoras
 */
class JogosDistribuidoraController {
  /**
   * Show a list of all jogosdistribuidoras.
   * GET jogosdistribuidoras
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    return JogosDistribuidora.query().fetch();
  }

  /**
   * Create/save a new jogosdistribuidora.
   * POST jogosdistribuidoras
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const campos = JogosDistribuidora.getCamposJogosDistribuidora()
    const jogosdistribuidora = request.only(campos)

    return await JogosDistribuidora.create(jogosdistribuidora)
  }

  /**
   * Display a single jogosdistribuidora.
   * GET jogosdistribuidoras/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    return await JogosDistribuidora.findOrFail(params.id);
  }

  /**
   * Update jogosdistribuidora details.
   * PUT or PATCH jogosdistribuidoras/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const jogosdistribuidora = await JogosDistribuidora.findOrFail(params.id);

    const campos = JogosDistribuidora.getCamposJogosDistribuidora()
    const dados = request.only(campos)

    jogosdistribuidora.merge(dados)
    await jogosdistribuidora.save()

    return jogosdistribuidora
  }

  /**
   * Delete a jogosdistribuidora with id.
   * DELETE jogosdistribuidoras/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const jogosdistribuidora = await JogosDistribuidora.findOrFail(params.id);
    return await jogosdistribuidora.delete();
  }
}

module.exports = JogosDistribuidoraController
