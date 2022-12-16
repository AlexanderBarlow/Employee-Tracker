INSERT INTO department (id, name)
VALUES ('1', 'Management');
INSERT INTO department (id, name)
VALUES ('2', 'Sales');
INSERT INTO department (id, name)
VALUES ('3', 'Accounting');


INSERT INTO roles (id, title, salary, department_id)
VALUES ('1', 'Manager', '85.000', 1);
INSERT INTO roles (id, title, salary, department_id)
VALUES ('2', 'Sales-Associate', '65.000', 2);
INSERT INTO roles (id, title, salary, department_id)
VALUES ('3', 'Accountant', '65.000', 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Michael', 'Scott', 1,  null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Jim', 'Halpert',  2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Dwight', 'Schrute', 2, 1);
