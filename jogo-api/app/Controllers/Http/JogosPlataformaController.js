'use strict'

const JogosPlataforma = use('App/models/JogosPlataforma')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with jogosplataformas
 */
class JogosPlataformaController {
  /**
   * Show a list of all jogosplataformas.
   * GET jogosplataformas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    return JogosPlataforma.query().fetch();
  }

  /**
   * Create/save a new jogosplataforma.
   * POST jogosplataformas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const campos = JogosPlataforma.getCamposJogosPlataforma()
    const jogosplataforma = request.only(campos)

    return await JogosPlataforma.create(jogosplataforma)
  }

  /**
   * Display a single jogosplataforma.
   * GET jogosplataformas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    return await JogosPlataforma.findOrFail(params.id);
  }

  /**
   * Update jogosplataforma details.
   * PUT or PATCH jogosplataformas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const jogosplataforma = await JogosPlataforma.findOrFail(params.id);

    const campos = JogosPlataforma.getCamposJogosPlataforma()
    const dados = request.only(campos)

    jogosplataforma.merge(dados)
    await jogosplataforma.save()

    return jogosplataforma
  }

  /**
   * Delete a jogosplataforma with id.
   * DELETE jogosplataformas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const jogosplataforma = await JogosPlataforma.findOrFail(params.id);
    return await jogosplataforma.delete();
  }
}

module.exports = JogosPlataformaController
