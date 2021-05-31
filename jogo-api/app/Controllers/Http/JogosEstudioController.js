'use strict'

const JogosEstudio = use('App/models/JogosEstudio')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with jogosestudios
 */
class JogosEstudioController {
  /**
   * Show a list of all jogosestudios.
   * GET jogosestudios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    return JogosEstudio.query().fetch();
  }

  /**
   * Create/save a new jogosestudio.
   * POST jogosestudios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const campos = JogosEstudio.getCamposJogosEstudio()
    const jogosestudio = request.only(campos)

    return await JogosEstudio.create(jogosestudio)
  }

  /**
   * Display a single jogosestudio.
   * GET jogosestudios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    return await JogosEstudio.findOrFail(params.id);
  }

  /**
   * Update jogosestudio details.
   * PUT or PATCH jogosestudios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const jogosestudio = await JogosEstudio.findOrFail(params.id);

    const campos = JogosEstudio.getCamposJogosEstudio()
    const dados = request.only(campos)

    jogosestudio.merge(dados)
    await jogosestudio.save()

    return jogosestudio
  }

  /**
   * Delete a jogosestudio with id.
   * DELETE jogosestudios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const jogosestudios = await JogosEstudio.findOrFail(params.id);
    return await jogosestudios.delete();
  }
}

module.exports = JogosEstudioController
