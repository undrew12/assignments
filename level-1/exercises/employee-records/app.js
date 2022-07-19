let employees = []

function Employee(name, jobTitle, salary, status = "Full-time"){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status
    this.printEmployeeForm = function(){
        console.log(this.name, this.jobTitle, this.salary, this.status)
    }
}

Employee.prototype.status = function(){
    console.log(this.status)
}

let bob = new Employee("Bob", "Construction worker", "$2500/month", "Contract")
bob.printEmployeeForm()
let joe = new Employee("Joe", "Office worker", "$2750/month", "Full-time")
joe.printEmployeeForm()
let fred = new Employee("Fred", "Manager", "$3250/month", "Full-time")
fred.printEmployeeForm()

employees.push(Employee)