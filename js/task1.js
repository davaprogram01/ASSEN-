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