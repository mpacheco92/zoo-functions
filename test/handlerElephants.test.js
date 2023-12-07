const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('se retorna undefined ao não receber parametro', () => {
    expect(handlerElephants()).toBe(undefined);
  });

  it('se retorna erro ao não receber uma string', () => {
    expect(handlerElephants(5)).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('se retorna a quantidade de elefantes no zoo ao receber "count" como parametro', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('se retorna um array com os nomes dos elefantes ao receber "names" como parametro', () => {
    expect(handlerElephants('names')).toContain('Bea');
  });

  it('se retorna um numero proximo a 10.5 ao receber "averageAge" como parametro', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
});
