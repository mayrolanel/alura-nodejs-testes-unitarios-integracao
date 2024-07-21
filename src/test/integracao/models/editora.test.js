import {
  describe, expect, it, jest,
} from '@jest/globals';
import Editora from '../../../models/editora.js';

describe('Editora', () => {
  const objetoEditora = {
    nome: 'CDC',
    cidade: 'Sao Paulo',
    email: 'c@c.com',
  };
  it('deve instanciar uma editora', () => {
    const editora = new Editora(objetoEditora);

    expect(editora).toEqual(
      expect.objectContaining(objetoEditora),
    );
  });

  it('deve salvar no BD', async () => {
    const editora = new Editora(objetoEditora);

    const dados = await editora.salvar();

    expect(dados.nome).toBe(objetoEditora.nome);
  });

  it.only('deve fazer uma simulação de chamada ao BD', () => {
    const editora = new Editora(objetoEditora);
    editora.salvar = jest.fn().mockReturnValue({
      id: 10,
      nome: 'CDC',
      cidade: 'Sao Paulo',
      email: 'c@c.com',
      created_at: '2024-20-07',
      updated_at: '2024-20-07',
    });

    const retorno = editora.salvar();

    expect(retorno).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...objetoEditora,
        created_at: expect.any(String),
        updated_at: expect.any(String),
      }),
    );
  });
});
