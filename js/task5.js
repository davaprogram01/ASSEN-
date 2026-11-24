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