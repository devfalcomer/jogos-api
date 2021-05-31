'use strict'

const Estudio = use('App/models/Estudio')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with estudios
 */
class EstudioController {
  /**
   * Show a list of all estudios.
   * GET estudios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    return Estudio.query().fetch();
  }

  /**
   * Create/save a new estudio.
   * POST estudios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const campos = Estudio.getCamposEstudio()
    const estudio = request.only(campos)

    return await Estudio.create(estudio)
  }

  /**
   * Display a single estudio.
   * GET estudios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    return await Estudio.query()
      .with('distribuidoras')
      .with('Jogos_estudio')
      .where('id', params.id)
      .first()
  }

  /**
   * Update estudio details.
   * PUT or PATCH estudios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const estudios = await Estudio.findOrFail(params.id);

    const campos = Estudio.getCamposEstudio()
    const dados = request.only(campos)

    estudios.merge(dados)
    await estudios.save()

    return estudios
  }

  /**
   * Delete a estudio with id.
   * DELETE estudios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const estudio = await Estudio.findOrFail(params.id);
    return await estudio.delete();
  }

}

module.exports = EstudioController
