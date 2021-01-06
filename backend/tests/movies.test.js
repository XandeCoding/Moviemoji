const Lab = require('@hapi/lab');
const { expect } = require('@hapi/code');

const {
  afterEach, beforeEach, describe, it
// eslint-disable-next-line no-multi-assign
} = exports.lab = Lab.script();
const { start } = require('../index');

describe('Testando Rotas de Movies', () => {
  let server;

  beforeEach(async () => {
    server = await start(true);
  });

  afterEach(async () => {
    await server.stop();
  });

  it('Criar uma filme', async () => {
    const res = await server.inject({
      method: 'POST',
      url: '/movies',
      payload: {
        name: 'Forrest Gump',
        description: `Tom Hanks estrela como Forrest Gump, um homem ingênuo que
          se vê envolvido em quase todos os principais eventos das décadas de 60 e 70.`,
        gender: 'Comédias românticas',
        image: 'none'
      }
    });

    expect(res.statusCode).to.equal(200);
  });

  it('Pegar um filme', async () => {
    const res = await server.inject({
      method: 'GET',
      url: '/movies/1'
    })

    expect(res.statusCode).to.equal(200);
  });

  it('Pegar todos os filmes', async () => {
    const res = await server.inject({
      method: 'GET',
      url: '/movies'
    })

    expect(res.statusCode).to.equal(200);
  });

  it('Deletar um filme', async () => {
    const res = await server.inject({
      method: 'DELETE',
      url: '/movies/1'
    })

    expect(res.statusCode).to.equal(200);
  });

  it('Editar um filme', async () => {
    const res = await server.inject({
      method: 'PUT',
      url: '/movies/1',
      payload: {
        name: 'Forrest Gump',
        description: `Tom Hanks estrela como Forrest Gump, um homem ingênuo que
          se vê envolvido em quase todos os principais eventos das décadas de 60 e 70.`,
        gender: 'Comédias românticas / Drama',
        image: 'none'
      }
    });

    expect(res.statusCode).to.equal(200);
  });
});
