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