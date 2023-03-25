/// Первое задание

var question = prompt("Введите цвет(красный, желтый, зеленый)")

if(question === "красный"){
    console.log("Cтой!!!");
}else if(question === "желтый"){
    console.log("Жди!!!");
}else if(question === "зеленый"){
    console.log("Вперед");
}else{
    console.log("Вы ввели ошибку");
}

/// Второе задание

var number = Number ( prompt("Введи число(от 1 до 9)") )

if ( number === 1 ){
    console.log("I");
}else if ( number === 2){
    console.log("II");
}else if ( number === 3){
    console.log("III");
}else if ( number === 4){
    console.log("IV");
}else if ( number === 5){
    console.log("V");
}else if ( number === 6){
    console.log("VI");
}else if ( number === 7){
    console.log("VII");
}else if ( number === 8){
    console.log("VIII");
}else if ( number === 9){
    console.log("IX");
}else{
    console.log("Вы ввели ошибку");
}

/// Третье задание
var bait = 1561569;
var kbait = bait / 1024;
var mbait = bait / (1024 * 1024);
console.log(bait + " байт = килобай " + kbait);
console.log(bait + " байт = мегабайт " + mbait);