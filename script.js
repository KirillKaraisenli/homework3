// let name = "Kirill";
// let secondname = "Karaisenli";
// let fullname = `${name} ${secondname}`;
// console.log(fullname);
// console.log(fullname.toUpperCase());
// console.log(fullname.charAt());
// console.log(fullname.indexOf('e'));

// Напиши скрипт який виведе рядок в форматі: “Гість x y 
// поселяється в n номер g”, 
// підставивши замість x, y, n, g значення змінних.

// const x = "John";
// const y = "Doe";
// const n = "Hotel";
// const g = 10;

// const message = `Гість ${x} ${y} поселяється в ${n} номер ${g}`
// console.log(message);

// Створи змінну яка буде зберігати рядок 
// “Ваш баланс поповнено на 1”.
//  Додай в кінець рядка довільну кількість нулів.
//   Довжину рядка дізнайся за допомогою властивості.

// let balance = "Ваш баланс поповнено на 1";
// console.log("balance:", balance.length);
// let newbalance = balance.padEnd(28, 0)
// console.log(newbalance);

// 1

let result = 5 + 5 + '5';
console.log(result);
console.log(typeof result);

// 2

let email = prompt("Ввєдіть свою адресу.");
console.log(`Ваш email ${email}, у ньому ${email.length} символів, наявність @ ${email.includes(`@`)}.`);

// 3 

let firstletter = "My";
let secondletter = "name";
let thirdletter = "is";
let fullname = `${firstletter}, ${secondletter}, ${thirdletter} Viktor.`;
console.log(fullname);

// 4

let userName = "Pirat";
let payment = "467"
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень.`)