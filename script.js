// Add your currency exchange rate here
const exchangeRates = {
    "USD": {
      "USD": 1,
      "GBP": 0.75,
      // Add more "to" currencies and rates as needed
    },
    "EUR": {
      "USD": 1.07,
      "GBP": 0.87,
      // Add more "to" currencies and rates as needed
    },
    "GBP" : {
      "USD": 1.33,
      "EUR": 1.15,
      // Add more "to" currencies and rates as needed
    }
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