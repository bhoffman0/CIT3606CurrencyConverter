
// conversion rates for usd and eur 
const Yen_to_USD = 0.0068;
const Yen_to_EUR = 0.0063;

function convertYen(){
    const yen = document.getElementById("yenInput").value;

    if (yen === "" || yen <= 0) {
        alert("Please enter a valid amount for Yen.");
        return;
    }

    // used to calc conversions
    const usd = yen * Yen_to_USD;
    const eur = yen * Yen_to_EUR;

    // Now seperated to show output fields seperately USD | EUR
    document.getElementById("usdOutput").value = usd;
    document.getElementById("eurOutput").value = eur;
    }

    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("convertBtn").addEventListener("click", convertYen);
    })