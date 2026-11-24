// Задание 3. Оценки студентов

const grades = [5, 4, 3, 5, 4, 2, 5];

// Выведите количество оценок
console.log(grades.length);

// Найдите первую и последнюю оценку
console.log(grades[0]);
console.log(grades[grades.length - 1]);

// Добавьте новую оценку 5
grades.push(5);

// Удалите последнюю оценку
grades.pop();

// С помощью цикла выведите все оценки по отдельности
for (let i = 0; i < grades.length; i++) {
    console.log(grades[i]);
}