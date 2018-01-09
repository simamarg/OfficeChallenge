// Document class
var Document = function(name) {
    this.employeeName = name;
};

// Employee class and function
var Employee = function(name) {
    this.name = name;
};

Employee.prototype.work = function(office) {
    var REQUIRED_DOCUMENTS = 10;
    for (var i = 0; i < REQUIRED_DOCUMENTS; i++) {
        var tempDoc = new Document(this.name);
        office.documents.push(tempDoc);
    }
};

// Manager class and functions
var Manager = function(name) {
    this.name = name;
    this.employees = [];
};

Manager.prototype.hireEmployee = function(name) {
    var employee = new Employee(name);
    this.employees.push(employee);
};

Manager.prototype.askEmployeesToWork = function(office) {
    this.employees.forEach(function(employee) {
        employee.work(office);
    });
};

// Cleaner class and function
var Cleaner = function(name) {
    this.name = name;
};

Cleaner.prototype.clean = function() {
    console.log('Clean');
};

// Office class and functions
var Office = function() {
    this.documents = [];
    this.managers = [];
    this.cleaners = [];
};

Office.prototype.hireManager = function(name) {
    var manager = new Manager(name);
    this.managers.push(manager);
};

Office.prototype.hireCleaner = function(name) {
    var cleaner = new Cleaner(name);
    this.cleaners.push(cleaner);
};

Office.prototype.startWorkDay = function() {
    for (var i = 0; i < this.managers.length; i++) {
        this.managers[i].askEmployeesToWork(this);
    }
    for (var i = 0; i < this.cleaners.length; i++) {
        this.cleaners[i].clean();
    }
};