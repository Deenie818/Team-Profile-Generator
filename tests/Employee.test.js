//parent class
const Employee = require ('../lib/employee.js');
const employee = new Employee('Sam', '1', 'sam@gmail.com');

test('creates an employee object', () => {
    expect(employee.name).toBe('Sam');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('sam@gmail.com');

});

test('tests to getName() method', () => {
    expect(employee.name).toBe('Sam');
})

test('tests to getID() method', () => {
    expect(employee.id).toBe('1');

})

test('tests to getEmail() method', () => {
    expect(employee.email).toBe('sam@gmail.com'); 
})

test('tests to getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');

});