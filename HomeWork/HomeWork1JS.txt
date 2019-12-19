let a = parseInt(prompt("Введіть оцінку від 2 до 5"));
let b = parseInt(prompt("Введіть оцінку від 2 до 5"));
let c = parseInt(prompt("Введіть оцінку від 2 до 5"));
let d = (a + b + c) / 3;
document.write(d);
if (d > 2 && d < 2.5) {
    document.write("BAD");
}
if (d > 2.5 && d < 3.3) {
    document.write("SO-SO");
}
if (d > 3.3 && d < 4.2) {
    document.write("GOOD");
}
if (d == 5) {
    document.write("EXCELLENT");
}

/////////planet
let planet = prompt("Enter number planet: Меркурій - 1, Венера - 2, Земля - 3, Марс - 4, Юпітер - 5,Сатурн - 6, Уран - 7, Нептун - 8, Плутон - 9");
switch (planet) {
    case '1': document.write("Меркурій є найближчою до Сонця (0,4 а.о.) й найменшою планетою системи (0,055 маси Землі). ");
        break;
    case '2': document.write("Венера близька за розміром і масою до Землі (її маса становить 0,815 земної).");
        break;
    case '3': document.write("Земля є найбільшою та найщільнішою серед внутрішніх планет.");
        break;
    case '4': document.write("Марс менший за Землю та Венеру (0,107 маси Землі).");
        break;
    case '5': document.write("Юпітер має масу, в 318 разів більшу від земної, і є в 2,5 рази масивнішим від усіх інших планет разом узятих.");
        break;
    case '6': document.write("Сатурн, відомий своєю системою кілець, має структуру атмосфери і магнітосфери, дещо подібну до відповідних структур Юпітера.");
        break;
    case '7': document.write("Уран з масою, в 14 разів більшою, ніж у Землі, є найлегшою із зовнішніх планет. ");
        break;
    case '8': document.write("Нептун, хоча і дещо менший від Урана, але масивніший (17 мас Землі) і тому щільніший.");
        break;
    case '9': document.write("20 січня 2016 року астрономи з Каліфорнійського технологічного інституту Костянтин Батигін і Майкл Браун повідомили про можливу дев'яту планету на околиці Сонячної системи, за межами орбіти Плутона.");
        break;
    default: document.write("Error!!!");
}

//////////////////////////////////Calculator
let num_1;
 let num_2;
 let rez;
let action = prompt(
  "Виберіть дію, яку хочете виконати на калькуляторі :  додавання - 1, віднімання 2, множення - 3 , ділення - 4"
);
switch (action) {
  case '1':
    num_1 = parseInt(prompt("Введіть перше число"));
    num_2 = parseInt(prompt("Введіть друге число"));
    rez = num_1 + num_2;
    document.write(" Pезультат додавання: ", num_1, " + ", num_2, " = ", rez);
    break;
  case '2':
     num_1 = parseInt(prompt("Введіть перше число"));
     num_2 = parseInt(prompt("Введіть друге число"));
     rez = num_1 - num_2;
     document.write(" Pезультат віднімання: ", num_1, " - ", num_2, " = ", rez);
    break;
  case '3':
     num_1 = parseInt(prompt("Введіть перше число"));
     num_2 = parseInt(prompt("Введіть друге число"));
     rez = num_1 * num_2;
     document.write(" Pезультат множення: ", num_1, " * ", num_2, " = ", rez);
    break;
  case '4':
     num_1 = parseInt(prompt("Введіть перше число"));
     num_2 = parseInt(prompt("Введіть друге число"));
     if (num_2==0)
     {
        document.write(" Ділення на 0 неможливе!!!"); 
     }
     else{
        rez = num_1 / num_2;
        document.write(" Pезультат ділення: ", num_1, " / ", num_2, " = ", rez);
     }
     
    break;
  default:
    document.write("R.T.F.M");
    break;
}