'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

/*
Route.get('/jogos', 'JogoController.index')
Route.get('/perifericos', 'PerifericoController.index')
Route.get('/plataformas', 'PlataformaController.index')
Route.get('/dlcs', 'DlcController.index')
Route.get('/estudios', 'EstudioController.index')
Route.get('/distribuidoras', 'DistribuidoraController.index')
Route.get('/jogosDistribuidoras', 'JogosDistribuidoraController.index')
Route.get('/jogosEstudios', 'JogosEstudioController.index')
Route.get('/jogosDlcs', 'JogosDlcController.index')
Route.get('/jogosPlataformas', 'JogosPlataformaController.index')
Route.get('/perifericosPlataformas', 'PerifericosPlataformaController.index')
*/

Route.resource('/users', 'UserController').apiOnly()
Route.post('/token', 'UserController.token')

Route.group(() => {
  Route.resource('/jogos', 'JogoController')
    .apiOnly()
    .validator(new Map([
      [['store', 'update'], 'Jogo']
    ]))
  Route.resource('/perifericos', 'PerifericoController')
    .apiOnly()
    .validator(new Map([
      [['store', 'update'], 'Periferico']
    ]))
  Route.resource('/plataformas', 'PlataformaController')
    .apiOnly()
    .validator(new Map([
      [['store', 'update'], 'Plataforma']
    ]))
  Route.resource('/dlcs', 'DlcController')
    .apiOnly()
    .validator(new Map([
      [['store', 'update'], 'Dlc']
    ]))
  Route.resource('/estudios', 'EstudioController')
    .apiOnly()
    .validator(new Map([
      [['store', 'update'], 'Estudio']
    ]))
  Route.resource('/distribuidoras', 'DistribuidoraController')
    .apiOnly()
    .validator(new Map([
      [['store', 'update'], 'Distribuidora']
    ]))
  Route.resource('/jogosDistribuidoras', 'JogosDistribuidoraController')
    .apiOnly()
    .validator(new Map([
      [['store', ' update'], 'JogosDistribuidora']
    ]))
  Route.resource('/jogosEstudios', 'JogosEstudioController')
    .apiOnly()
    .validator(new Map([
      [['store', 'update'], 'JogosEstudio']
    ]))
  Route.resource('/jogosDlcs', 'JogosDlcController')
    .apiOnly()
    .validator(new Map([
      [['store', 'update'], 'JogosDlc']
    ]))
  Route.resource('/jogosPlataformas', 'JogosPlataformaController')
    .apiOnly()
    .validator(new Map([
      [['store', 'update'], 'JogosPlataforma']
    ]))
  Route.resource('/perifericosPlataformas', 'PerifericosPlataformaController')
    .apiOnly()
    .validator(new Map([
      [['store', 'update'], 'PerifericosPlataforma']
    ]))
}).middleware('auth')
