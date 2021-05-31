'use strict'

const Dlc = use('App/models/Dlc')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with dlcs
 */
class DlcController {
  /**
   * Show a list of all dlcs.
   * GET dlcs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    return Dlc.query().fetch();
  }

  /**
   * Create/save a new dlc.
   * POST dlcs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const campos = Dlc.getCamposDlc()
    const dlc = request.only(campos)

    return await Dlc.create(dlc)
  }

  /**
   * Display a single dlc.
   * GET dlcs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    return await Dlc.query()
      .with('Jogos_dlc')
      .where('id', params.id)
      .first()
  }

  /**
   * Update dlc details.
   * PUT or PATCH dlcs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const dlc = await Dlc.findOrFail(params.id);

    const campos = Dlc.getCamposDlc()
    const dados = request.only(campos)

    dlc.merge(dados)
    await dlc.save()

    return dlc
  }

  /**
   * Delete a dlc with id.
   * DELETE dlcs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const dlc = await Dlc.findOrFail(params.id);
    return await dlc.delete();
  }
}

module.exports = DlcController
