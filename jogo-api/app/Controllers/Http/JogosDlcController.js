'use strict'

const JogosDlc = use('App/models/JogosDlc')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with jogosdlcs
 */
class JogosDlcController {
  /**
   * Show a list of all jogosdlcs.
   * GET jogosdlcs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    return JogosDlc.query().fetch();
  }

  /**
   * Create/save a new jogosdlc.
   * POST jogosdlcs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const campos = JogosDlc.getCamposJogosDlc()
    const jogosdlc = request.only(campos)

    return await JogosDlc.create(jogosdlc)
  }

  /**
   * Display a single jogosdlc.
   * GET jogosdlcs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    return await JogosDlc.findOrFail(params.id);
  }

  /**
   * Update jogosdlc details.
   * PUT or PATCH jogosdlcs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const jogosdlc = await JogosDlc.findOrFail(params.id);

    const campos = JogosDlc.getCamposJogosDlc()
    const dados = request.only(campos)

    jogosdlc.merge(dados)
    await jogosdlc.save()

    return jogosdlc
  }

  /**
   * Delete a jogosdlc with id.
   * DELETE jogosdlcs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const jogosdlc = await JogosDlc.findOrFail(params.id);
    return await jogosdlc.delete();
  }
}

module.exports = JogosDlcController
