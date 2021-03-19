const User = require('./index');

test('Cenario 1: Turbo disponível', () => {
  /**
   * Regras:
   * Consumidor tem 390 de Score de crédito, possui o Serasa Turbo disponível e 5 dívidas
   */
  const user = new User(390);
  user.setDebts(5);

  const userData = user.getScore();

  expect(userData.score).toBe(390);
  expect(userData.boost.status).toBe(1);
  expect(userData.boost.value).toBe(78);
  expect(userData.boost.message).toBe('Você pode aumentar seu Score em até');
});

test('Cenario 2: Turbo perdido', () => {
  /**
   * Regras:
   * Consumidor tem 559 de Score de crédito, possui o Serasa Turbo disponível e 5 dívidas
   * e essas 5 dívidas foram negociadas mas deixou de pagar e assim quebrou o seu Serasa Turbo.
   */
  const user = new User(559);
  user.setDebts(5);
  user.acceptOffer();
  user.acceptOffer();
  user.acceptOffer();
  user.acceptOffer();

  let userData = user.getScore();
  expect(userData.boost.status).toBe(3);

  user.acceptOffer();
  userData = user.getScore();
  expect(userData.boost.status).toBe(4);

  user.brokenOffer();
  userData = user.getScore();

  expect(userData.score).toBe(559);
  expect(userData.boost.status).toBe(2);
  expect(userData.boost.value).toBe(28);
  expect(userData.boost.message).toBe('Você perdeu o turbo do seu Score');
});

test('Cenario 3: Turbo a liberar', () => {
  /**
   * Regras:
   * Consumidor tem 200 de Score de crédito, possui o Serasa Turbo disponível e
   * 2 dívidas e uma divida foi negociada a outra ainda é possível liberar os
   * pontos disponíveis no seu Serasa Turbo
   */
  const user = new User(200);
  user.setDebts(2);
  user.acceptOffer();

  const userData = user.getScore();

  expect(userData.score).toBe(200);
  expect(userData.boost.status).toBe(3);
  expect(userData.boost.value).toBe(20);
  expect(userData.boost.message).toBe('Você pode aumentar seu Score');
});

test('Cenario 4: Turbo ativo', () => {
  /**
   * Regras:
   * Consumidor tem 359 de Score de crédito, possui o Serasa Turbo disponível e 3 dívidas
   * e as 3 dividas foram negocias e o consumidor ganhou seus pontos no Serasa Turbo
   */
  const user = new User(359);
  user.setDebts(3);
  user.acceptOffer();
  user.acceptOffer();
  user.acceptOffer();

  const userData = user.getScore();

  expect(userData.score).toBe(359);
  expect(userData.boost.status).toBe(4);
  expect(userData.boost.value).toBe(72);
  expect(userData.boost.message).toBe('Você ativou o turbo do seu Score');
});

test('Cenario 5: Turbo indisponível', () => {
  /**
   * Regras:
   * Consumidor tem 787 de Score de crédito mas não está elegível para o Serasa Turbo,
   * pois ele não ativou seu Cadastro Positivo e assim ele não tem pontos disponíveis.
   */
  const user = new User(787, false);

  const userData = user.getScore();

  expect(userData.score).toBe(787);
  expect(userData.boost.status).toBe(5);
  expect(userData.boost.value).toBe(null);
  expect(userData.boost.message).toBe('Você não possui turbo disponível');
});
