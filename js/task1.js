// Задание 1. Список студентов

let students = ["Давид", "Александр", "Нурбек", "Алина", "Максим"];

// Выведите весь массив в консоль
console.log(students);

// Выведите первого и последнего студента
console.log(students[0]);
console.log(students[students.length - 1]);

// Добавьте нового студента в конец массива
students.push("Артур");
console.log(students);

// Удалите первого студента
students.shift();
console.log(students);

// Выведите количество студентов
console.log(students.length);



// Задание 2. Список покупок

let products = ["Молоко", "Сыр", "Яблоки", "Хлеб", "Мясо"];

// Добавьте новый продукт в начало массива
products.unshift("Картофель");

// Удалите последний продукт
products.pop();

// Замените третий продукт на другой
products[2] = "Бананы";

// Проверьте, есть ли в массиве продукт «Хлеб»
console.log(products.includes("Хлеб"));

// Выведите обновлённый массив
console.log(products);


// Задание 4. Работа с числами

const numbers = [10, 25, 30, 45, 50, 65, 80];

// С помощью map() создайте массив, в котором каждое число увеличено в 2 раза
const doubled = numbers.map(num => num * 2);
console.log(doubled);

// С помощью filter() получите числа больше 40
const filtered = numbers.filter(num => num > 40);
console.log(filtered);

// С помощью find() найдите первое число больше 50
const found = numbers.find(num => num > 50);
console.log(found);

// С помощью reduce() вычислите сумму всех чисел
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);






// Задание 5. Список товаров

const products = [
    "Ноутбук",
    "Мышка",
    "Клавиатура",
    "Монитор",
    "Наушники",
    "Принтер"
];

// С помощью slice() получите первые три товара
const firstThree = products.slice(0, 3);
console.log(firstThree);

// С помощью splice() удалите «Монитор»
products.splice(3, 1);

// С помощью splice() добавьте «Веб-камеру» на место третьего элемента
products.splice(2, 0, "Веб-камера");

// Выведите обновлённый массив
console.log(products);







// Задание 6. Результаты тестирования

const scores = [95, 45, 78, 60, 32, 88, 100, 55];

// С помощью filter() получите результаты от 60 баллов и выше
const passed = scores.filter(score => score >= 60);
console.log(passed);

// С помощью map() добавьте к каждому результату 5 баллов, но итог не должен превышать 100
const updated = passed.map(score => Math.min(score + 5, 100));
console.log(updated);

// С помощью find() найдите первый результат ниже 50
const lowScore = scores.find(score => score < 50);
console.log(lowScore);

// С помощью reduce() вычислите средний балл всех студентов
const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
console.log(average);






// Задание 7. Информация о студенте

const student = {
    name: "Давид",
    age: 18,
    group: "SIT-K-26",
    profession: "Программист"
};

// Вывести имя и группу студента
console.log(student.name);
console.log(student.group);

// Изменить возраст
student.age = 19;

// Добавить свойство email
student.email = "david@gmail.com";

// Удалить свойство profession
delete student.profession;

// Вывести обновлённый объект
console.log(student);






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





// Задание 9. Электронный журнал

const student = {
    name: "Алексей",
    group: "ВР-1-26",
    grades: [5, 4, 5, 3, 4],

    // Добавить новую оценку в массив grades
    getAverage: function() {
        return this.grades.reduce((sum, grade) => sum + grade, 0) / this.grades.length;
    },

    // Создать метод getStatus()
    getStatus: function() {
        if (this.getAverage() >= 3) {
            return "Успевает";
        } else {
            return "Не успевает";
        }
    }
};

// Вывести имя и группу студента
console.log(student.name);
console.log(student.group);

// Добавить новую оценку в массив grades
student.grades.push(5);

// Вывести всю информацию о студенте и результат работы методов
console.log(student);
console.log("Оценки:", student.grades);
console.log("Средний балл:", student.getAverage());
console.log("Статус:", student.getStatus());