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