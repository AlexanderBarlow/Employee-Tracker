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

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Michael', 'Scott', 1,  null);
INSERT INTO employee (first_name, last_name, role_id,  manager_id)
VALUES ('Jim', 'Halpert', 2, 1);
INSERT INTO employee (first_name, last_name, role_id,  manager_id)
VALUES ('Dwight', 'Schrute', 3,  1);
