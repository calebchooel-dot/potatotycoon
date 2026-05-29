let potato = 0;
let baby_farmer = 0;
let extra_clicker = 0;
let farmer = 0; 
let tractor = 0;
let potato_machine = 0;

function potatoClick() {
    potato += extra_clicker + 1;
    update();
}

function buy(item) {
    if (item == 1 && potato >= 10) {
        potato -= 10;
        baby_farmer ++;   
    } else if (item == 2 && potato >= 80) {
        potato -= 80;
        farmer ++;
    } else if (item == 3 && potato >= 900) {
        potato -= 900;
        tractor ++;
    } else if (item == 4 && potato >= 10000) {
        potato -= 10000;
        potato_machine ++;
    } else if (item == 5 && potato >= 1000) {
        potato -= 1000;
        extra_clicker ++;
    } 
    update();
}

function sell() {
    let options = document.getElementsByName("item");
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            let selected = options[i].value;
            let count = Number(document.getElementById("sellNum").value);

            if (selected == "babyFarmer" && baby_farmer >= count) {
                let amount = count * 10 * 0.75
                if (window.prompt(`Sell {count} {selected} for {amount}? Enter "yes" to proceed.`) == "yes") {
                    baby_farmer -= count;
                    potato += amount;
                }
            } else if (selected == "farmer" && farmer >= count) {
                let amount = count * 80 * 0.75
                if (window.prompt(`Sell {count} {selected} for {amount}? Enter "yes" to proceed.`) == "yes") {
                    farmer -= count;
                    potato += amount;
                }
            } else if (selected == "tractor" && tractor >= count) {
                let amount = count * 900 * 0.75
                if (window.prompt(`Sell {count} {selected} for {amount}? Enter "yes" to proceed.`) == "yes") {
                    tractor -= count;
                    potato += amount;
                }
            } else if (selected == "extraClicker" && extra_clicker >= count) {
                let amount = count * 1000 * 0.75
                if (window.prompt(`Sell {count} {selected} for {amount}? Enter "yes" to proceed.`) == "yes") {
                    extra_clicker -= count;
                    potato += amount;
                }
            } else if (selected == "potatoMachine" && potato_machine >= count) {
                let amount = count * 10000 * 0.75
                if (window.prompt(`Sell {count} {selected} for {amount}? Enter "yes" to proceed.`) == "yes") {
                    potato_machine -= count;
                    potato += amount;
                }
            }
        }
    }
    update();
}

setInterval(function() {
    potato += farmer * 1;
    potato += tractor * 10;
    potato += potato_machine * 70;

    document.getElementById("potatoLabel").innerHTML =
    `Potatoes: ${potato}`;
}, 1000)

setInterval(function() {
    potato += baby_farmer * 1
    document.getElementById("potatoLabel").innerHTML =
    `Potatoes: ${potato}`;
}, 5000)

function update() {
    let total = baby_farmer * 0.2 + farmer * 1 + tractor * 8 + potato_machine * 60;
    document.getElementById("stats").innerHTML = 
    `Potatoes/sec: ${total}<br>Potato/click: ${extra_clicker + 1}`;

    document.getElementById("potatoLabel").innerHTML = 
    `Potatoes: ${potato}`;

    document.getElementById("babyFarmerLabel").innerHTML = 
        `Baby Farmers: ${mouse}<br>1 potato/click`; 
    document.getElementById("babyFarmerButton").innerHTML = 
        `Buy Baby Farmer: $${Math.round(10*1.25**baby_farmer)}`;

    document.getElementById("farmerLabel").innerHTML = 
        "Farmers: " + farmer + "<br>1 potato/sec";
    document.getElementById("farmerButton").innerHTML = 
        `Buy Farmer: $${Math.round(80*1.27**farmer)}`;

    document.getElementById("tractorLabel").innerHTML = 
        "Tractors: " + tractor + "<br>8 potatos/sec";
    document.getElementById("tractorButton").innerHTML = 
        `Buy Tractor: $${Math.round(900*1.29**tractor)}`;

    document.getElementById("potatoMachineLabel").innerHTML = 
        "Potato Machines: " + potato_machine + "<br>60 potatos/sec"; 
    document.getElementById("potatoMachineButton").innerHTML = 
        `Buy Potato Machine: $${Math.round(10000*1.31**potato_machine)}`;

    document.getElementById("extraClickerLabel").innerHTML = 
        "Extra Clickers: " + extra_clicker + "<br>60 potatos/sec"; 
    document.getElementById("extraClickerButton").innerHTML = 
        `Buy Extra Clicker: $${Math.round(1000*1.35**extra_clicker)}`;
}