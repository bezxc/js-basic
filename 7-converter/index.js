const exchangeRates = {
  RUB_TO_USD: 0.1,
  USD_TO_RUB: 76,
  RUB_TO_EUR: 0.09,
  EUR_TO_RUB: 83,
  USD_TO_EUR: 0.85,
  EUR_TO_USD: 1.18,
};

function convertCurrency(amount, fromCurrency, toCurrency) {
  const rateKey = `${fromCurrency}_TO_${toCurrency}`;
  if (!exchangeRates.hasOwnProperty(rateKey)) {
    return null;
  }

  const convertedAmount = amount * exchangeRates[rateKey];

  return convertedAmount;
}

console.log(convertCurrency(1000, "RUB", "USD")); // 100
console.log(convertCurrency(1000, "USD", "EUR")); // 850
console.log(convertCurrency(1000, "RUB", "JPY")); // null
