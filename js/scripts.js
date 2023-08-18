class Student {
    constructor(firstName, lastName, birthYear, grades) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = grades;
        this.attendance = new Array(25).fill(null);
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    calculateAverageGrade() {
        if (this.grades.length === 0) {
            return 0;
        }
        const sum = this.grades.reduce((total, grade) => total + grade, 0);
        return sum / this.grades.length;
    }

    present() {
        this.updateAttendance(true);
    }

    absent() {
        this.updateAttendance(false);
    }

    updateAttendance(isPresent) {
        const emptyIndex = this.attendance.findIndex(item => item === null);

        if (emptyIndex !== -1) {
            this.attendance[emptyIndex] = isPresent;
        }
    }
    summary() {
        const averageGrade = this.calculateAverageGrade();
        const attendanceRatio = this.attendance.filter(Boolean).length / this.attendance.length;

        if (averageGrade > 90 && attendanceRatio > 0.9) {
            return "Молодець!";
        } else if (averageGrade > 90 || attendanceRatio > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}


const student1 = new Student("Іван", "Петров", 2000, [90, 100, 95, 90]);
const student2 = new Student("Марія", "Сидоренко", 2001, [95, 90, 92, 88]);
const student3 = new Student("Олександр", "Коваль", 1999, [80, 75, 85, 78]);


student1.present();
student1.present();
student1.present();
student1.absent();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();

console.log(student1.attendance)

student2.present();
student2.present();
student2.present();
student2.absent();

console.log(`Студент 1: Ім'я: ${student1.firstName} ${student1.lastName} Вік: ${student1.getAge()} років Середній бал: ${student1.calculateAverageGrade()} Резюме: ${student1.summary()}`);
console.log(`Студент 2: Ім'я: ${student2.firstName} ${student2.lastName} Вік: ${student2.getAge()} років Середній бал: ${student2.calculateAverageGrade()} Відвідуваність: ${student2.attendance} Резюме: ${student2.summary()}`);
console.log(`Студент 3: Ім'я: ${student3.firstName} ${student3.lastName} Вік: ${student3.getAge()} років Середній бал: ${student3.calculateAverageGrade()} Резюме: ${student3.summary()}`);






