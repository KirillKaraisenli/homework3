
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