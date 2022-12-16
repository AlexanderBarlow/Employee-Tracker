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

const prompt = () => {
    inquirer.prompt
    ({
        name: 'action',
        type: 'list',
        message: 'What would you like to do',
        choices: [ 
        'View Employees',
        'View Departments',
        'View Roles',
        'Add Employees',
        'Add Departments',
        'Add Roles',
        'Update Employee Role',
        'Exit'
    ]
    }).then(data => {
        console.log(data);
        let answer = data;

        switch (answer.action) {
            case 'View Employees':
                viewAllEmployees();
                break;

            case 'View Departments':
                viewByDepartment();
                break;

            case 'View Roles':
                viewByManager();
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