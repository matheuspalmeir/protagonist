/* eslint-disable consistent-return */

function User(score = 0, hasBoot = true) {
  this.debts = 0;
  this.history = [];
  this.userScore = score;
  this.userHasBoost = hasBoot;

  // eslint-disable-next-line no-nested-ternary
  const calculateMaxBoost = () => ((this.userScore < 500)
    ? this.userScore * 0.2
    : this.userScore < 800
      ? this.userScore * 0.05
      : this.userScore * 0.03);

  this.checkBoost = () => {
    const maxBoost = calculateMaxBoost();
    const isBroken = this.history.find((h) => h.status === 'broken');
    const isAccepted = this.history.map((h) => h.status === 'accept');
    const debtsPaid = isAccepted ? isAccepted.length : 0;
    const boostData = {
      available: maxBoost,
      lost: 0,
      pending: 0,
      complete: 0,
    };

    // Verifica se ele possui o Turbo
    if (!this.userHasBoost) {
      return;
    }

    // Se não possui histórico e possui débitos e possui turbo => Então, possui turbo disponível.
    if (this.history.length === 0 && this.debts) {
      return boostData;
    }

    if (isBroken) {
      boostData.lost = maxBoost;
      return boostData;
    }

    // Caso o consumidor tenha pago todas suas dividas, ele tem um boost completo e ativo!
    if (isAccepted && this.debts === 0) {
      boostData.available = 0;
      boostData.lost = 0;
      boostData.complete = maxBoost;
      return boostData;
    }

    // O consumidor não terminou de pagar suas contas é não quebrou nenhum acordo
    boostData.available = maxBoost / (this.debts + debtsPaid);
    boostData.pending = maxBoost - boostData.available;
    return boostData;
  };

  const setNewStatus = (boost) => {
    let newStatus = [5, null];

    if (!boost) {
      return newStatus;
    }

    const status = Object.keys(boost);
    status.forEach((key) => {
      if (boost[key]) {
        switch (key) {
          case 'lost': {
            newStatus = [2];
            break;
          }
          case 'pending': {
            newStatus = [3];
            break;
          }
          case 'available': {
            newStatus = [1];
            break;
          }
          default: {
            newStatus = [4];
          }
        }
        newStatus.push(boost[key]);
      }
    });

    return newStatus;
  };

  this.statusBoost = () => {
    const boost = this.checkBoost();
    return setNewStatus(boost);
  };

  this.setDebts = (newDebts) => {
    this.debts = newDebts;
  };

  this.setScore = (newScore) => {
    this.userScore = newScore;
  };

  this.setHasBoot = (newValue) => {
    this.userHasBoost = newValue;
  };

  this.acceptOffer = () => {
    // Pagou sua negociação
    this.debts -= 1;
    this.history.push({ status: 'accept' });
  };

  this.brokenOffer = () => {
    // Quebrou algum acordo por nao ter pago a dívida ou apareceu mais uma negativaçāo no seu CPF
    this.debts += 1;
    this.history.push({ status: 'broken' });
  };

  const generateBoostMessage = (boost) => {
    switch (boost[0]) {
      case 1: {
        return 'Você pode aumentar seu Score em até';
      }
      case 2: {
        return 'Você perdeu o turbo do seu Score';
      }
      case 3: {
        return 'Você pode aumentar seu Score';
      }
      case 4: {
        return 'Você ativou o turbo do seu Score';
      }
      default: {
        return 'Você não possui turbo disponível';
      }
    }
  };

  this.getScore = () => {
    const boost = this.statusBoost();
    const boostValue = Math.round(boost[1]);
    const boostMessage = generateBoostMessage(boost);
    const userData = {
      score: this.userScore,
      boost: {
        status: boost[0],
        value: boostValue === 0 ? null : boostValue,
        message: boostMessage,
      },
    };

    return userData;
  };
}

module.exports = User;
