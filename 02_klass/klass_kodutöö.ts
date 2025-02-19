class Student {
    name: string;
    age: number;
    grade: number;

    constructor(name: string, age: number, grade: number) {
        if (age < 0) throw new Error("Vanus ei saa olla negatiivne");
        if (grade < 1 || grade > 12) throw new Error("Klass peab olema 1-12");

        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    getInfo(): string {
        return "Nimi: " + this.name + ", Vanus: " + this.age + ", Klass: " + this.grade;
    }

    isAdult(): boolean {
        return this.age >= 18;
    }
}

const student1 = new Student("Mari", 17, 11);
const student2 = new Student("Jüri", 19, 12);
const student3 = new Student("Kati", 15, 9);

console.log(student2.getInfo());
console.log(student1.isAdult());

const allStudents = [student1, student2, student3];

const twelfthGraders = allStudents.filter(student => student.grade === 12);
console.log(twelfthGraders.length);