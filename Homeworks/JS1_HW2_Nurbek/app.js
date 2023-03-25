var chisla = Number(prompt("Введите число(от 1 до 9"))
switch (chisla) {
    case 1:
        console.log("I");
        break;
    case 2:
        console.log("II");
        break;
    case 3:
        console.log("III");
        break;
    case 4:
        console.log("IV");
        break;
    case 5:
        console.log("V");
        break;
    case 6:
        console.log("VI");
        break;
    case 7:
        console.log("VII");
        break;
    case 8:
        console.log("VIII");
        break;
    case 9:
        console.log("IX");
        break;
    default:
        console.log("Ошибка");
}

//2 

var customer = {
    name: "Eugene",
    surname: "Kiselev",
    fatherName: "Dmitrievich",
    isResident: true,
    id: 0,
    birthDate: null,
    passport: {
      series: "ID",
      documentNo: "12345",
      expiryDate: "01-01-2025",
      issueDate: "01-01-2015",
    },
    type: 1,
    sex: true
    // getFullName: function () {
    //   return this.surname + " " + this.name + " " + this.fatherName;
    // },
    // phoneNumbers: ["+996555111222", "+996700111222", "+79051112233"],
    // isMobileBankingUser: true,
    // console.log(customer);
  };
  console.log(
    "Пол клиента: " + (customer.sex === true ? "Мужской" : "Женский" )    // условие === true ? true : false
  )
  console.log(
    "Тип клиента: " + (customer.type === 1 ? "Физическое лицо" : "Юридическое лицо")
  )
  
//3


var carta =  ["46782346", "45781218", "79874568", "12157845", "36151845", "41250895", "41201961"]
var counter = 0 

for(var i = 0; i < carta.length; i++){
   if(carta[i][0] === "4")
    counter++
}

console.log('Карт VISA ' + counter + " из 7");

