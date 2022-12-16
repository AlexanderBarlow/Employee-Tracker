DROP DATABASE IF EXISTS employee_db;
CREATE IF NOT EXISTS employee_db;

USE employee_db;

CREATE TABLE department (
    id INT NOT NULL AUTO INCREMENT PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE role (
    id INT NOT NULL AUTO INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    dapartment_id INT,
    FOREIGN KEY (department_id)
    REFERENCE department(id)
    ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT NOT NULL AUTO INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id)
    REFERENCE role(id)
    ON DELETE SET NULL
)