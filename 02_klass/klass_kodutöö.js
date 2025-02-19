var Student = /** @class */ (function () {
    function Student(name, age, grade) {
        if (age < 0)
            throw new Error("Vanus ei saa olla negatiivne");
        if (grade < 1 || grade > 12)
            throw new Error("Klass peab olema 1-12");
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    Student.prototype.getInfo = function () {
        return "Nimi: " + this.name + ", Vanus: " + this.age + ", Klass: " + this.grade;
    };
    Student.prototype.isAdult = function () {
        return this.age >= 18;
    };
    return Student;
}());
var student1 = new Student("Mari", 17, 11);
var student2 = new Student("Jüri", 19, 12);
var student3 = new Student("Kati", 15, 9);
console.log(student2.getInfo());
console.log(student1.isAdult());
var allStudents = [student1, student2, student3];
var twelfthGraders = allStudents.filter(function (student) { return student.grade === 12; });
console.log(twelfthGraders.length);
