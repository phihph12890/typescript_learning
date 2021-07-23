//public
class Person1 {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}
let person1: Person1 = new Person1("Hồ Hoàng Phi");
console.log(person1.name);

/////////////////////////////////////////////////////////////////////////
//Private
class Person2 {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }
}
let person2: Person2 = new Person2("Hồ Phi");
console.log(person2.getName());
person2.setName("lll");
console.log(person2.getName());

////////////////////////////////////////////////////////////////////////
//Protected
class Person3 {
    private id: number;
    protected name: string;

    public constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }

    public getId() {
        return this.id;
    }

    public toString(): string {
        return `${this.id} - ${this.name}`;
    }
}
//extends
class Employee extends Person3 {
    private salary: number;
    public constructor(id: number, name: string, salary: number) {
        super(id, name);
        this.salary = salary;
    }
    public getSalary() {
        return this.salary;
    }
    public setSalary(salary: number) {
        this.salary = salary;
    }
    public toString(): string {
        return `${super.toString()} - ${this.salary}`;
    }
}
let e: Employee = new Employee(1, "Phi", 1000);
console.log(e.toString());

///////////////////////////////////////////////////////////////////////////////
//interface
interface Workable {
    doWork(): void;
}
class Person4 implements Workable {
    private id: number;
    protected name: string;

    public constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }

    public getId() {
        return this.id;
    }

    public toString(): string {
        return `${this.id} - ${this.name}`;
    }

    public doWork() {
        console.log("Do something...");
    }
}
let person4: Person4 = new Person4(1, "KK");
person4.doWork();

///////////////////////////////////////////////////////////////////////////////
// abstract
interface Workable {
    doWork(): void;
}
abstract class Person5 implements Workable {
    private id: number;
    protected name: string;

    public constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    public getName() {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }

    public getId() {
        return this.id;
    }

    public toString(): string {
        return `${this.id} - ${this.name}`;
    }

    abstract doWork(): void;
}

interface FPTStaff {
    workPlace(): string;
}
class Employee1 extends Person5 implements FPTStaff {
    private salary: number;

    public constructor(id: number, name: string, salary: number) {
        super(id, name);
        this.salary = salary;
    }
    public getSalary() {
        return this.salary;
    }
    public setSalary(salary: number) {
        this.salary = salary;
    }
    public toString(): string {
        return `${super.toString()} - ${this.salary}`;
    }

    public workPlace(): string {
        return "FPT";
    }

    public doWork(): void {
        console.log("Coding...");
    }
}
let emp: Employee1 = new Employee1(2, "Phi", 500);
emp.doWork();
console.log(emp.workPlace());

class Student extends Person5 {
    public doWork(): void {
        console.log("Studying...");
    }
}
let s: Person5 = new Student(1, "Phi");
console.log(s);
s.doWork();

//////////////////////////////////////////////////////////////////

