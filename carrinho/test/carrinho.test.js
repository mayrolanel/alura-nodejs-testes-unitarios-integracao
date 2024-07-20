import Carrinho from '../carrinho';
import Item from '../item';

describe('Carrinho', () => {
  it('deve iniciar vazio', () => {
    const carrinho = new Carrinho();

    expect(carrinho.subtotal).toBeNull;
  });

  it('deve ter itens', () => {
    const banana = new Item('Banana', 2, 5);
    const maca = new Item('Maca', 0.5, 1);

    const carrinho = new Carrinho();
    carrinho.adiciona(banana);
    carrinho.adiciona(maca);

    expect(typeof carrinho).toBe('object');
    expect(carrinho.itens[0]).toBe(banana);
    expect(carrinho.itens[1]).toBe(maca);

    expect(carrinho.itens).toContain(banana);
    expect(carrinho.itens).toContain(maca);
  });

  it('deve ter a propriedade "total" na inicialização', () => {
    const carrinho = new Carrinho();

    expect(carrinho).toHaveProperty('total');
  });

  it('deve lançar erro ao finalizar comprar com carrinho vazio', () => {
    const carrinho = new Carrinho();

    expect(() => carrinho.finalizaCompra()).toThrowError('Carrinho de compras vazio');
  });

  it('deve adicionar frete', () => {
    const carrinho = new Carrinho();
    carrinho.adicionaFrete(2);

    expect(carrinho.frete).toBe(2);
  });

  it('deve finalizar comprar', () => {
    const banana = new Item('Banana', 2, 5);
    const maca = new Item('Maca', 1, 5);

    const carrinho = new Carrinho();
    carrinho.adiciona(banana);
    carrinho.adiciona(maca);

    carrinho.adicionaFrete(10);

    expect(carrinho.finalizaCompra()).toStrictEqual({
      subtotal: 15,
      frete: 10,
      total: 25,
    });
  });
});
