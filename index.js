const operations = [1000, -700, 300, -500, 10000];
let balance = 100;

function sumBalance(operations) {
  for (const operation of operations) {
    balance += operation;
  }

  console.log(balance);
  return balance;
}

function canBuy(operations) {
  for (const operation of operations) {
    if (balance - operation < 0) {
      console.log("Недостаточно денег на балансе");
      return false;
    }
    return true;
  }
}

function averageIncome(operations) {
  let positiveIncome = {
    countOperation: 0,
    income: 0,
  };
  let negativeIncome = {
    countOperation: 0,
    income: 0,
  };

  for (const operation of operations) {
    if (operation > 0) {
      positiveIncome.income += operation;
      positiveIncome.countOperation++;
    } else {
      negativeIncome.income += operation;
      negativeIncome.countOperation++;
    }
  }

  console.log(
    `Средний доход ${positiveIncome.income / positiveIncome.countOperation}`,
    `Средний расход ${negativeIncome.income / negativeIncome.countOperation}`,
  );
}

sumBalance(operations);
canBuy(operations);
averageIncome(operations);
