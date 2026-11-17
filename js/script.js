let login = "admin";
let password = "12345";

let userLogin = prompt("Введите логин:");
let userPassword = prompt("Введите пароль:");

if (userLogin === login && userPassword === password) {
    alert("Добро пожаловать!");
} else if (userLogin === login && userPassword !== password) {
    alert("Неверный пароль");
} else {
    alert("Пользователь не найден");
}