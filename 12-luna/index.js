const cards = [
  {
    valid: true,
    number: "4627100101654724",
  },
  {
    valid: false,
    number: "4561-1213-4367-2612",
  },
  {
    valid: true,
    number: "5467929858074128",
  },
  {
    valid: false,
    number: "4525746396502645",
  },
];

function validateCardNumber(cardNumber) {
  const arrayFromstring = cardNumber.replaceAll("-", "").split("").map(Number);

  const lunaArr = arrayFromstring.map((num, index) => {
    if (index % 2 == 0) {
      return num * 2 > 9 ? num * 2 - 9 : num * 2;
    }
    return Number(num);
  });

  const sumArrValues = lunaArr.reduce((acc, current) => {
    acc += current;

    return acc;
  }, 0);

  return sumArrValues % 10 === 0;
}

cards.forEach((card) => {
  const { valid, number } = card;
  console.log("+-----------------------------------+");
  console.log(`| Валидный/не валидный номер: ${valid} |`);
  console.log(`| Результат работы алгоритма: ${validateCardNumber(number)} |`);
  console.log("+-----------------------------------+");
});
