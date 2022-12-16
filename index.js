const mysql = require('mysql2');
const Sequelize = require('sequelize');
const consoleTable = require('console.table');
const inquirer = require('inquirer');
const util = require('util');
require('dotenv').config();

const db = new Sequelize(
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

//prompt to begin changes to db/ view db
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
        //switch statement to account for multiple answers which need to handle different logic
        switch (answer.action) {
            case 'View All Employees':
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

            case 'Exit':
                db.end();
                break;
        }
    });
    
}

const viewAllEmployees = () => {
    //We just need a query that displays a table with all the employees
    db.query(`SELECT * FROM employee`, (err, result) => {
        if(err) {
            console.log(err);
        }else {
        console.log(result);
        }
        console.log('RESPONSE HANDLED');
    })
};

const viewDepartment = () => {
    //Need a query that shows all departments
    db.query(`SELECT * FROM department`, (err, result) => {
        if(err) {
            console.log(err);
        }else {
        console.log(result);
        }
        console.log('RESPONSE HANDLED');
    })
};

const viewRoles = () => {
    //Need a query that shows all roles
    db.query(`SELECT * FROM roles`, (err, result) => {
        if(err) {
            console.log(err);
        }else {
        console.log(result);
        }
        console.log('RESPONSE HANDLED');
    })
};

const addEmployee = () => {
    //use inquirer to prompt more questions about employee data
    inquirer.prompt
    (
        {
            type: 'input',
            message: 'What is the first name of the employee?',
            name: 'first_name'
        },
        {
            type: 'input',
            message: 'What is the last name of the employee?',
            name: 'last_name'
        },
        {
            type: 'input',
            message: `What is the employee's role?`,
            name: 'addRole'
        },
        {
            type: 'input',
            message: 'Who is their manager?',
            name: 'employeeManager'
        }

    )
    // add data to db
    //show added data
};

const addRole = () => {
    //use inquirer to prompt more questions about role data
    inquirer.prompt
    (
        {
            type: 'input',
            message: 'What is the name of the role?',
            name: 'addRole'
        },
        {
            type: 'input',
            message: 'What is the salary for the role?',
            name: 'addSalary'
        },
        {
            type: 'input',
            message: 'What is the department_id for the role?',
            name: 'addRole'
        },
    );
    // add data to db
    //show added data
};

const updateRole = () => {
    //use inquirer to prompt more questions about role changes
    // update data
    //show updated data
};

//This function tests the connection and only starts application if connection is successful
const init = () => {
    if(db){
        prompt();
    }else {
        throw(err);
    }
};

init();