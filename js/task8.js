// Задание 8. Информация об автомобиле

const car = {
    brand: "BMW",
    model: "M5",
    year: 2022,
    price: 50000
};

// Вывести марку и модель автомобиля
console.log(car.brand);
console.log(car.model);

// Изменить стоимость автомобиля
car.price = 55000;

// Добавить свойство color
car.color = "Черный";

// Создать метод getInfo(), который выводит информацию об автомобиле
car.getInfo = function() {
    console.log("Марка: " + this.brand);
    console.log("Модель: " + this.model);
    console.log("Год выпуска: " + this.year);
    console.log("Стоимость: " + this.price);
    console.log("Цвет: " + this.color);
};

// Вызвать метод getInfo()
car.getInfo();