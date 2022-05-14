// In addition to Employee's properties and methods, Intern will also have:

// school

// getSchool()

// getRole() // Overridden to return 'Intern'


const Intern = require ('../lib/Intern.js');
const intern = new Intern ('Sam', '1', 'sam@gmail.com', 'UCLA');

test('creates an employee object', () => {
    expect(intern.name).toBe('Sam');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('sam@gmail.com');
    expect(intern.school).toBe('UCLA');

});

test('tests to getName() method', () => {
    expect(intern.name).toBe('Sam');
})

test('tests to getID() method', () => {
    expect(intern.id).toBe('1');

})

test('tests to getEmail() method', () => {
    expect(intern.email).toBe('sam@gmail.com'); 
})

test('test to getSchool() method', () => {
    expect(intern.getSchool()).toBe('UCLA');
})

test('tests to getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');

});

