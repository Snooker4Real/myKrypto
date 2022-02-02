const walletBtc = document.getElementById("btc-wallet-total");
const walletEth = document.getElementById("eth-wallet-total");

const priceBtc = document.getElementById("btc-current-price");
const priceEth = document.getElementById("eth-current-price");

const buttonBtc = document.getElementById("refreshBtc");
const buttonEth = document.getElementById("refreshEth");

buttonBtc.onclick = function () {

    fetch("https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT")
        .then(response => response.json())
        .then(data => {
            priceBtc.innerHTML = data.lastPrice;
            fetch("wallet/BTC")
                .then(response2 => response2.json())
                .then(data2 => {
                    walletBtc.innerHTML = data2.total * data.lastPrice;
                });
        });

}

buttonEth.onclick = function () {

    fetch("https://api.binance.com/api/v3/ticker/24hr?symbol=ETHUSDT")
        .then(response => response.json())
        .then(data => {
            priceEth.innerHTML = data.lastPrice;
            fetch("wallet/BTC")
                .then(response2 => response2.json())
                .then(data2 => {
                    walletEth.innerHTML = data2.total * data.lastPrice;
                });
        });

}