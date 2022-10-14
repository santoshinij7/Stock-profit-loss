const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const checkBtn = document.querySelector("#check-btn");
const outputMsg = document.querySelector("#output");

function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > 0 && quantity > 0 && current > 0) {
        if (initial > current) {
            var loss = (initial - current) * quantity;
            var lossPercentage = (loss / (initial * quantity)) * 100;

            msgColor("red");
            showMsg(`oh! ohh! Your total Loss is ${loss} by ${lossPercentage.toFixed(2)}%.`);
        } else if (initial < current) {
            var profit = (current - initial) * quantity;
            var profitPercentage = (profit / (initial * quantity)) * 100;

            msgColor("green");
            showMsg(`Yeah! Your total Profit is ${profit} by ${profitPercentage.toFixed(2)}%.`);
        } else {
            msgColor("black");
            showMsg(`No Profit No Loss!!`);
        }
    } else {
        msgColor("blue");
        showMsg(`Input Value can't be Negative or Zero!!`);
    }
}

function msgColor(color) {
    outputMsg.style.color = color;
}

function showMsg(msg) {
    outputMsg.innerText = msg;
}

function clickHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    if (ip && qty && curr) {
        calculateProfitAndLoss(ip, qty, curr);
    } else {
        msgColor("Red");
        showMsg("Please fill all the details!!");
    }
}

checkBtn.addEventListener("click", clickHandler);
