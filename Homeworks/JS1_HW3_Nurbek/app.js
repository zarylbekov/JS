//1

var firstname = prompt ("Введите имя")
var nameUsers = prompt ("Введите фамилию")
function firstandName(one,two){
    console.log("Здравствуйте," + two + " " + one);
}
firstandName(firstname, nameUsers)

2
var oneNum = Number(prompt(" Введите первое число"))
var twoNum = Number(prompt("Введите второе число"))

function moreless(a,b){
    if(isNaN(a) || isNaN(b) || a, b = " "){  
        console.log("У вас ошибка!!!");
    }else if( a < b){
        console.log("Число " + a + " меньше " + b);
    }else if( b < a){
        console.log("Число " + b + " меньше " + a);
    }else{
        console.log("Числа равны");
    }
}
 moreless(oneNum,twoNum)

3

    var Numberone = Number(
    prompt("Введите целое положительное число: ") 
    );
    var general = 0;
    function chislo(c) {
    if (isNaN(c) || c <= 0) {
        console.log("Ошибка!!!");
        return;
    }
    for (var i = 0; i <= c; i++) {
        general += i;  
    }
    console.log("Сумма числа " + c + " равна: " + general);
    }
    chislo(Numberone)

4

var Numberone = Number(prompt("Введите положительное число: "));
function chisloOne (d){
    if (isNaN(d) || d <= 0) {
             console.log("Ошибка!!! Введите числа корректно");
               return;
        }
    for ( var i = 2; i <= 10; i++){
        console.log(d + " X " + i + " = " + (d * i))
    }
}
chisloOne(Numberone)





