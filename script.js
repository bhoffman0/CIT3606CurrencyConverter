// Add your currency exchange rate here
const exchangeRates = {
    "USD": {
      "USD": 1,
      // Add more "to" currencies and rates as needed
    },
    "EUR": {
      "USD": 1.07,
      // Add more "to" currencies and rates as needed
    },
    "JPY": {
      "USD": 0.0068,
      "Euro": 0.0057,
    },

    // Add more "from" currencies as needed
  };


  const convert = () => {
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const fromAmount = document.getElementById("fromAmount").value;

    const exchangeRate = exchangeRates[fromCurrency][toCurrency];
    const toAmount = fromAmount * exchangeRate;
    document.getElementById("toAmount").value = toAmount;
  }