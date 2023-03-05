//Написать программу, которая через prompt считывает число и выводит в консоль число равное 10% от введенного числа

/*const num = prompt("Input Number"); 

console.log(num * 0.1); */




//Написать программу, которая получает два числа и выводит наименьшее

/*let num1 = prompt("Input Number1")
let num2 = prompt("Input Number2")

let minNumber = num1 < num2 ? num1 : num2; 

console.log(minNumber); */



//Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений: ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’

/*let number = prompt("Input Number");
if (number < 100) {
  console.log("Number menche 100");
} else if (number > 100) {
  console.log("Number bolche 100");
} else {
  console.log("Number ravno 100");
}*/



//Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) и выводит в консоль сообщение ‘Hello, <name>’, если пользователь совершеннолетний, или ‘Hi, <name>’, если пользователь несовершеннолетний.

let name = prompt("Input Name")
let age = prompt("Input Age")
if (age >= 18) {
  console.log(`Hello, ${name}!`)
} else {
  console.log(`HI, ${name}!`)
}


