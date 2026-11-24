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