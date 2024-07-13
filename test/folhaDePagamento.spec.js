// eslint-disable-next-line import/extensions
import { somaHorasExtras, calculaDescontos } from '../index.js';

describe('Calculo de folha', () => {
  it('deve fazer a soma das horas extras', () => {
    const horas = somaHorasExtras(2000, 500);

    expect(horas).toBe(2500);
  });

  it('deve descontar o valor do salario', () => {
    const horas = calculaDescontos(2500, 200);

    expect(horas).toBe(2300);
  });
});
