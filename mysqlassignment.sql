-- Write a SQL query to retrieve all columns from the "employees table.
select
    *
from
    employees;

-- Write a SQL query to retrieve the names of all employees whose salary is greater than $50,000
select
    name
from
    employees
where
    salary > 50000;

-- Write a SQL query to retrieve the names and salaries of all employees, sorted in descending order of salary.
select
    name,
    salary
from
    employees
order by
    salary desc;

-- Write a SQL query to calculate the total number of employees in the "employees" table.
select
    count(*) as totalemployees
from
    employees;

-- Write a SQL query to calculate the average salary for each department.
select
    avg(salary),
    department_name
from
    employees
    inner join departments using (department_id)
group by
    department_name;

-- Write a SQL query to insert a new employee record into the "employees" table with the following details: name, salary, and department_id.
INSERT INTO
    employees (employee_id, name, salary, department_id)
VALUES
    (4, 'James Ross', 90000, 1);
-- Write a SQL query to update the salary of an employee with a specific employee_id.
update employees
set salary = 80000
where employee_id = 3;

--  Write a SQL query to retrieve the names of employees who earn more than the average salary
select name
from employees
where employees.salary > (
    select avg(salary) from employees inner join departments
using(department_id));

--Write a SQL query to delete all records from the "employees" table where the salary is less than $30,000.
delete from employees
where salary < 30000
