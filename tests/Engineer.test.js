// In addition to Employee's properties and methods, Engineer will also have:

// github // GitHub username

// getGithub()

// getRole() // Overridden to return 'Engineer'

const Engineer = require ('../lib/Engineer.js');
const engineer = new Engineer('Sam', '1', 'sam@gmail.com', 'Deenie818');

test('creates an employee object', () => {
    expect(engineer.name).toBe('Sam');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('sam@gmail.com');
    expect(engineer.github).toBe('Deenie818');

});

test('tests to getName() method', () => {
    expect(engineer.name).toBe('Sam');
})

test('tests to getID() method', () => {
    expect(engineer.id).toBe('1');

})

test('tests to getEmail() method', () => {
    expect(engineer.email).toBe('sam@gmail.com'); 
})

test('test to getGithub() method', () => {
    expect(engineer.getGithub()).toBe('Deenie818');
})

test('tests to getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');

});

