// Задание 1. Вывод чисел


for (let i = 1; i <= 50; i++) {
    console.log(i);
}

console.log("Цикл завершён");



// Задание 2. Чётные и нечётные числа


for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + " - Чётное");
    } else {
        console.log(i + " - Нечётное");
    }
}




// Задание 3. Сумма чисел


let sum = 0;
let i = 1;

while (i <= 100) {
    sum += i;
    i++;
}

console.log("Сумма чисел от 1 до 100: " + sum);




// Задание 4. Таблица умножения


let number = 7;

for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}



// Задание 5. Обратный отсчёт


let count = 10;

do {
    console.log(count);
    count--;
} while (count >= 1);

console.log("Старт!");



// Задание 6. Пропуск чисел

for (let i = 1; i <= 30; i++) {
    if (i % 5 === 0) {
        continue;
    }

    console.log(i);
}



// Задание 7. Остановка цикла

for (let i = 1; i <= 100; i++) {
    if (i === 35) {
        break;
    }

    console.log(i);
}



// Задание 8. Учёт посещаемости студентов

let totalStudents = 10;
let present = 0;
let absent = 0;

for (let i = 1; i <= totalStudents; i++) {
    if (i === 3 || i === 6 || i === 9) {
        console.log("Студент №" + i + " - отсутствует");
        absent++;
    } else {
        console.log("Студент №" + i + " - присутствует");
        present++;
    }
}

console.log("Всего студентов: " + totalStudents);
console.log("Присутствуют: " + present);
console.log("Отсутствуют: " + absent);



// Задание 9. Прямоугольник из символов

for (let i = 1; i <= 4; i++) {
    let line = "";

    for (let j = 1; j <= 6; j++) {
        line += "*";
    }

    console.log(line);
}



// Задание 10. Система начисления баллов

let points = 0;
let completedTasks = 0;

while (points < 100) {
    points += 10;
    completedTasks++;

    console.log("Задание " + completedTasks + " - " + points + " баллов");
}

console.log("Всего выполнено заданий: " + completedTasks);
console.log("Итоговый балл: " + points);
