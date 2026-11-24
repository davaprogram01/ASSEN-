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