// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require('./Employee');

class Engineer extends Employee {

    constructor(id, email, name, github){
        super(id, email, name);
        this.github = github; 


    }

    getRole(){
        return "Engineer";
    }

    getGit() {
        return this.github;
    }
}


module.exports = Engineer;