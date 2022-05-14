const Manager = require ('../lib/Manager.js');
const manager = new Manager('Sam', '1', 'sam@gmail.com', '304');

test('creates an employee object', () => {
    expect(manager.name).toBe('Sam');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('sam@gmail.com');
    expect(manager.officeNumber).toBe('304');

});

test('tests to getName() method', () => {
    expect(manager.name).toBe('Sam');
})

test('tests to getID() method', () => {
    expect(manager.id).toBe('1');

})

test('tests to getEmail() method', () => {
    expect(manager.email).toBe('sam@gmail.com'); 
})

test('test to getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('304');
})

test('tests to getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');

})

