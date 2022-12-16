INSERT INTO department (name)
VALUES ('Management');
INSERT INTO department (name)
VALUES ('Sales');
INSERT INTO department (name)
VALUES ('Sales');


INSERT INTO roles (title, salary, department_id)
VALUES ('Manager', '85.000', 1);
INSERT INTO roles (title, salary, department_id)
VALUES ('Sales', '65.000', 2);
INSERT INTO roles (title, salary, department_id)
VALUES ('Sales', '65.000', 3);

INSERT INTO employee (first_name, last_name, manager_id)
VALUES ('Michael', 'Scott',  null);
INSERT INTO employee (first_name, last_name,  manager_id)
VALUES ('Jim', 'Halpert', 1);
INSERT INTO employee (first_name, last_name,  manager_id)
VALUES ('Dwight', 'Schrute',  1);
