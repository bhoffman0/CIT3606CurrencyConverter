// Add your currency exchange rate here
const exchangeRates = {
    "USD": {
      "USD": 1,
      "EUR": 0.93,
      "SK": 9.35,
      "JPY": 147.40,
      "KRW": 1392.27,
      "RUP": 16583.00,
      "PHP": 58.17,
      // Add more "to" currencies and rates as needed
    },
    
    "EUR": {
      "USD": 1.07,
      "EUR": 1,
      "SK": 11.04,
      "JPY": 0.0057,
      "KRW": 1639.69,
      "RUP": 17824.00,
      "PHP": 67.91,
      // Add more "to" currencies and rates as needed
    },
    "JPY": {
      "USD": 147.40,
      "EUR": 0.0057,
      "SK": 0.075,
      "JPY": 1,
      "KRW": 11.12,
      "RUP": 120.00,
      "PHP": 0.39,
      // Add more "to" currencies and rates as needed
    },

    "RUP": {
      "USD": 0.000060,
      "EUR": 0.000056,
      "KRW": 0.088,
      "RUP": 1,
      "SK": 0.107,
      "JPY": 0.0083,
      "KRW": 0.011,
      "PHP": 0.0035,
      // Add more "to" currencies and rates as needed
    },

    "KRW": {
      "USD": 0.00072,
      "EUR": 0.00061,
      "RUP": 0.011,
      "KRW": 1,
      "SK": 0.075,
      "JPY": 0.0083,
      "PHP": 0.041,
    },

    "SK": {
      "USD": 0.11,
      "EUR": 0.090,
      "RUP": 1.00,
      "JPY": 0.0083,
      "KRW": 0.011,
      "PHP": 6.16,
    },

   "PHP": {
      "USD": 0.017,
      "EUR": 0.015,
      "RUP": 288.14,
      "KRW": 24.24,
      "SK": 0.16,
      "JPY": 2.57,
      "PHP": 1,
    },

    
  };

  const convert = () => {
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const fromAmount = document.getElementById("fromAmount").value;

    const exchangeRate = exchangeRates[fromCurrency][toCurrency];
    const toAmount = fromAmount * exchangeRate;
    document.getElementById("toAmount").value = toAmount;
  }