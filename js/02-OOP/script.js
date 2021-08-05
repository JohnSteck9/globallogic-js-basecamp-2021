import Student from "./Student.js";
import University from "./University.js";
import User from "./User.js";
import Worker from "./Worker.js";

console.log("=================== University ==================");
const lp = new University("National University Lviv Polytechnic", "Lviv", 7955);
const fr = new University("Ivana Franka University", "Lviv", 999);
const tu = new University("University-of-Toronto", "Toronto", 1515);

console.log(lp.getAddress());
console.log(fr.getAddress());
console.log(tu.getAddress());

console.log("===================== User =====================");
const user = new User("Mykhailo", "Felishtan", 1999);

console.log(user);
// console.log(user.#_name); -> Error
console.log(user.getFullName());
console.log(user.getFullInfo());

console.log("===================== Student =====================");
const student1 = new Student("John", "Steck", 1991, 2014, lp);

console.log(student1);
console.log(student1.getCourse()); // 6
console.log(student1.isFinished()); // true
console.log(Student.getCounter()); // 1
console.log(student1.getFullInfo()); // John Steck, 1991, National University Lviv Polytechnic, 2014

const student2 = new Student("FirstName", "LastName", 1991, 2019);

console.log(student2);
console.log(student2.getCourse()); // 3
console.log(student2.isFinished()); // false
console.log(Student.getCounter()); // 2
console.log(student2.getFullInfo()); // FirstName LastName, 1991, Unknown University, 2019

console.log("====================== Worker ======================");
const worker1 = new Worker("Tom", "Joi", 1991, 20, 34);
console.log(Worker.getCounter()); // 1

console.log(worker1.getFullName()); // Tom Joi
console.log(worker1.isRetired()); // false
console.log(worker1.getSalary()); // 680
console.log(worker1.getDays()); // 34
console.log(worker1.getRate()); // 20
worker1.setRetired(true);
console.log(worker1.getSalary()); // 0

const worker2 = new Worker("Liza", "Black", 2000, 10, 11);
console.log(Worker.getCounter()); // 2

console.log(worker2.getFullName()); // Liza Black
console.log(worker2.isRetired()); // false
console.log(worker2.getSalary()); // 110
console.log(worker2.getDays()); // 11
console.log(worker2.getRate()); // 10

worker1.setRetired(true);
console.log(worker1.getSalary()); // 0

const worker3 = new Worker("Katy", "Strong", 1950, 100, 9, true);
console.log(Worker.getCounter()); // 3

console.log(worker3.getFullName()); // Katy Strong
console.log(worker3.isRetired()); // true
console.log(worker3.getSalary()); // 0
console.log(worker3.getDays()); // 9
console.log(worker3.getRate()); // 100


console.log("====================== Worker ======================");

console.log(worker3.setDays(5)); // 0
console.log(worker3.getDays()); // 9
console.log(worker3.getRate()); // 100