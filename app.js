let tg = window.Telegram.Webapp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37"

let item = "";

let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")
let btn6 = document.getElementById("btn6")

btn1.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали товар номер 1!");
        inem = "1";
        tg.MainButton.show();
    }
});
btn2.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали товар номер 2!");
        inem = "2";
        tg.MainButton.show();
    }
});
btn3.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали товар номер 3!");
        inem = "3";
        tg.MainButton.show();
    }
});
btn4.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали товар номер 4!");
        inem = "4";
        tg.MainButton.show();
    }
});
btn5.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали товар номер 5!");
        inem = "5";
        tg.MainButton.show();
    }
});
btn6.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вы выбрали товар номер 6!");
        inem = "6";
        tg.MainButton.show();
    }
});

Telegram.Webapp.onEvent("amainButtonClicked", function(){
    tg.sendData(item);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p")
p.innerText = `${tg.initDataUnsafe.first_name}
${tg.initDataUnsafe.last_name}`

usercard.appendChild(p);


