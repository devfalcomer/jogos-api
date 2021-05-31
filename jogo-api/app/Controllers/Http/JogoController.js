'use strict'

const Jogo = use('App/models/Jogo')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with jogos
 */
class JogoController {
  /**
   * Show a list of all jogos.
   * GET jogos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    return Jogo.query().fetch();
  }

  /**
   * Create/save a new jogo.
   * POST jogos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const campos = Jogo.getCamposJogo()
    const jogos = request.only(campos)

    return await Jogo.create(jogos)
  }

  /**
   * Display a single jogo.
   * GET jogos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    return await Jogo.query()
      .with('JogosDistribuidora')
      .with('JogosDlc')
      .with('JogosEstudio')
      .with('JogosPlataforma')
      .where('id', params.id)
      .first()
  }

  /**
   * Update jogo details.
   * PUT or PATCH jogos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const jogos = await Jogo.findOrFail(params.id);

    const campos = Jogo.getCamposJogo()
    const dados = request.only(campos)

    jogos.merge(dados)
    await jogos.save()

    return jogos
  }

  /**
   * Delete a jogo with id.
   * DELETE jogos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const jogo = await Jogo.findorFail(params.id);
    return await jogo.delete();
  }
}

module.exports = JogoController
