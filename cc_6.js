
// step 2: Create a base class called Employee with the following properties
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    describe() {
        return `${this.name} works in ${this.department} department.`;
    }
}

// Step 3: Create a subclass called Manager that extends Employee
class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }

    describe() {
        return `${this.name} manages ${this.teamSize} people in the ${this.department} department.`;
    }
}

// Step 4: Create a few sample employees and managers using new Employee() and new Manager().
const employees = [
    new Employee("Elizabeth", "Accounting"),
    new Employee("Isabella", "Finance"),
    new Employee("John", "HR")
];

const Managers = [
    new Manager("Bob", "Finance", 6),
    new Manager("Robert", "HR", 4),
    new Manager("Jennifer", "Accounting", 10)
    
];

for (let emp of employees){
    console.log(emp.describe());
}

for (let man of Managers){
    console.log(man.describe());
}