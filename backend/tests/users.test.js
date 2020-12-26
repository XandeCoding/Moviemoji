const Lab = require('@hapi/lab');
const { expect } = require('@hapi/code');

const {
    afterEach, beforeEach, describe, it
  } = exports.lab = Lab.script();
  const { start } = require('../index');

  describe('Testando Rotas de Usuarios', () => {
    let server;
  
    beforeEach(async () => {
      server = await start(true);
    });
  
    afterEach(async () => {
      await server.stop();
    });

    it('Criar um usuario', async () => {
        const res = await server.inject({
          method: 'POST',
          url: '/users',
          payload: {
            name: 'Fabiano Gomes',
            email: 'fabiano@gmail.com',
            username: 'fabiano',
            password: '1234f'
          }
        });
    
        expect(res.statusCode).to.equal(200);
    });

    it('Pegar um usuario', async () => {
        const res = await server.inject({
          method: 'GET',
          url: '/users/1'
        })
    
        expect(res.statusCode).to.equal(200);
    });

    it('Editar um usuario', async () => {
        const res = await server.inject({
          method: 'PUT',
          url: '/users/1',
          payload: {
            name: 'Fabiano Gomes',
            email: 'fabiano@gmail.com',
            username: 'fabianog',
            password: 'f1234'
          }
        });
    
        expect(res.statusCode).to.equal(200);
    });

    it('Deletar um usuario', async () => {
        const res = await server.inject({
          method: 'DELETE',
          url: '/users/1'
        })
    
        expect(res.statusCode).to.equal(200);
    });
});