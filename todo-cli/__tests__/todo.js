const todoList = require('../todo');

const { all, add, markAsComplete } = todoList();

describe('Todo List Test Suite', () => {
    test('should add new todo', () => { 
        expect(all.length).toBe(0);
        add({
            title: 'Test todo',
            completed:false,
            dueDate: new Date().toISOString().split("T")[0]
        });
        expect(all.length).toBe(1);
     })

     test('should mark todo as complete', () => {
        expect(all[0].completed).toBe(false);
        markAsComplete(0);
        expect(all[0].completed).toBe(true);
     })
});