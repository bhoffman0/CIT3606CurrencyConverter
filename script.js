// Add your currency exchange rate here
const exchangeRates = {
    "USD": {
      "USD": 1,
      "EUR": 0.93,
      "SK": 9.35,
      "JPY": 147.40,
      "KRW": 1392.27,
      "RUP": 16583.00,

      // Add more "to" currencies and rates as needed
    },
    
    "EUR": {
      "USD": 1.07,
      "EUR": 1,
      "SK": 11.04,
      "JPY": 0.0057,
      "KRW": 1639.69,
      "RUP": 17824.00,
      // Add more "to" currencies and rates as needed
    },
    "JPY": {
      "USD": 147.40,
      "EUR": 0.0057,
      "SK": 0.075,
      "JPY": 1,
      "KRW": 11.12,
      "RUP": 120.00,
      // Add more "to" currencies and rates as needed
    },
    // Add more "from" currencies as needed

    "RUP": {
      "USD": 0.000060,
      "EUR": 0.000056,
      "KRW": 0.088,
      "RUP": 1,
      "SK": 0.107,
      "JPY": 0.0083,
      "KRW": 0.011,
      // Add more "to" currencies and rates as needed
    },
    "JPY": {
      "USD": 0.0068,
      "Euro": 0.0057,
    },

    "KRW": {
      "USD": 0.00072,
      "EUR": 0.00061,
      "RUP": 0.011,
      "KRW": 1,
      "SK": 0.075,
      "JPY": 0.0083,
    },

    "SK": {
      "USD": 0.11,
      "EUR": 0.090,
      "RUP": 1.00,
      "JPY": 0.0083,
      "KRW": 0.011
    }
  };

  const convert = () => {
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const fromAmount = document.getElementById("fromAmount").value;

    const exchangeRate = exchangeRates[fromCurrency][toCurrency];
    const toAmount = fromAmount * exchangeRate;
    document.getElementById("toAmount").value = toAmount;
  }