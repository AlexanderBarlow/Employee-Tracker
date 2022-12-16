const mysql = require('mysql2');
const Sequelize = require('sequelize');
const consoleTable = require('console.table');
const { default: inquirer } = require('inquirer');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.database,
    process.env.db_username,
    process.env.password,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
console.log ('Success')

console.table(
    `      ------------------------
    |                        |
    |    EMPLOYEE TRACKER    |
    |                        |
    -------------------------`
)

const prompt = () => {
    inquirer.prompt
    ({
        name: 'action',
        type: 'list',
        message: 'What would you like to do',
        choices: [ 
        'View All Employees',
        'View Departments',
        'View Roles',
        'Add Employee',
        'Add Departments',
        'Add Role',
        'Update Employee Role'
    ]
    }).then(data => {
        console.log(data);
        let answer = data;

        switch (answer.action) {
            case 'View Employees':
                viewAllEmployees();
                break;

            case 'View Departments':
                viewDepartment();
                break;

            case 'View Roles':
                viewRoles();
                break;

            case 'Add Employees':
                addEmployee();
                break;

            case 'Add Role':
                addRole();
                break;

            case 'Update Employee Role':
                updateRole();
                break;
        }
    });
    
}

const viewAllEmployees = () => {
    //We just need a query that displays a table with all the employees
};

const viewDepartment = () => {
    //Need a query that shows all departments
};

const viewRoles = () => {
    //Need a query that shows all roles
};

const addEmployee = () => {
    //use inquirer to prompt more questions about employee data
    // add data to db
    //show added data
};

const addRole = () => {
    //use inquirer to prompt more questions about role data
    // add data to db
    //show added data
};

const updateRole = () => {
    //use inquirer to prompt more questions about role changes
    // update data
    //show updated data
};