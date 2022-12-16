const mysql = require('mysql2');
const Sequelize = require('sequelize');
const consoleTable = require('console.table');
const inquirer = require('inquirer');
const util = require('util');
require('dotenv').config();

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: process.env.db_username,
      // MySQL password
      password: process.env.password,
      database: process.env.database
    },
    console.log(`Connected to the books_db database.`)
  );

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

            case 'Add Employee':
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
    db.query(`SELECT * FROM employee ORDER BY id`, (err, result) => {
        if(err) {
            console.log(err);
        }else {
        console.table(result);
        }
        console.log('RESPONSE HANDLED');
        prompt();
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
        prompt();
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
        prompt();
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
            type: 'list',
            message: `What is the employee's role?`,
            name: 'addRole',
            choices: []
        },
        {
            type: 'input',
            message: 'Who is their manager?',
            name: 'employeeManager'
        }

    ).then (data => {
        let first_name = data.first_name;
        let last_name = data.last_name;
        let newRole = data.addRole;
        let newManager = data.employeeManager;

        db.query(`INSERT INTO employee(first_name, last_name, role_id, manage_id) VALUES (${first_name}, ${last_name}, ${newRole}, ${newManager}, )`);
    })
    // add data to db
    //show added data
    prompt();
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
            name: 'addDepartment'
        },
    );
    // add data to db
    //show added data
    prompt();
};

const updateRole = () => {
    //use inquirer to prompt more questions about role changes
    inquirer.prompt
    (
        {
            name: 'update employee',
            type: 'list',
            message: `Which employee's role do you want to upate?`,
            choices: []
        },
        {
            type: 'input',
            message: 'What is the new role?',
            name: 'addRole'
        },
    );
    // update data
    //show updated data
    prompt();
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