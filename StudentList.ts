import { Student } from "./Student";

export class StudentList {
    students: Array<Student>;

    constructor(students: Array<Student>) {
        this.students = students
    }

    getStudents() {
        return this.students;
    }

    updateStudentName(id: string, name: string) {
        if (this.checkStudentId(id)) {
            for (let index = 0; index < this.students.length; index++) {
                const element = this.students[index];

                if (element.studentId === id) {
                    element.name = name;
                    return element;
                }
            }
        }

        return "Student id doesnt exists";
    }

    checkStudentId(id: string) {
  
        let checkStudent = this.students.find(element => element.studentId === id);

        if (checkStudent) return true;

        return false;
    }

    updateAge(id: string, age: number) {
        let student = this.students.find(element => element.studentId === id);

        if (student) {
            student.age = age;
            return student;
        }

        return "Student id doesnt exists";
    }

    removeStudent(id: string) {
    
        let student = this.students.find(element => element.studentId === id);

        if(student){
            student.studentId = id;
            return student;
        }
    }

    updateCollege(id: string, newCollegeName: string) {
       
        let student = this.students.find(element => element.studentId === id);

        if(student){
            student.college = newCollegeName;
            return student;
        }
    }

    updateAddress(id: string, newAddress: string) {
     
        let student = this.students.find(element => element.studentId === id);

        if(student){
            student.address = newAddress;
            return student;
        }
    }

    updateCourse(id: string, newCourse: string) {
      
        let student = this.students.find(element => element.studentId === id);

        if(student){
            student.course = newCourse;
            return student;
        }
    }

    updateGender(id: string, newGender: string) {
   
        let student = this.students.find(element => element.studentId === id);

        if(student){
            student.gender = newGender;
            return student;
        }
    }
}