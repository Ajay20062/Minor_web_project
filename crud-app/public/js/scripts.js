// This file contains the JavaScript code for the application. It handles user interactions and communicates with the backend to perform CRUD operations.

document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'http://localhost:3000/api/todos'; // Adjust the URL as needed

    // Function to fetch and display todos
    const fetchTodos = async () => {
        const response = await fetch(apiUrl);
        const todos = await response.json();
        const todoList = document.getElementById('todo-list');
        todoList.innerHTML = '';

        todos.forEach(todo => {
            const li = document.createElement('li');
            li.textContent = `${todo.title} - ${todo.completed ? 'Completed' : 'Pending'}`;
            li.dataset.id = todo._id;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => deleteTodo(todo._id);

            const updateButton = document.createElement('button');
            updateButton.textContent = 'Update';
            updateButton.onclick = () => updateTodo(todo._id);

            li.appendChild(updateButton);
            li.appendChild(deleteButton);
            todoList.appendChild(li);
        });
    };

    // Function to create a new todo
    const createTodo = async (title) => {
        await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, completed: false }),
        });
        fetchTodos();
    };

    // Function to delete a todo
    const deleteTodo = async (id) => {
        await fetch(`${apiUrl}/${id}`, {
            method: 'DELETE',
        });
        fetchTodos();
    };

    // Function to update a todo
    const updateTodo = async (id) => {
        const newTitle = prompt('Enter new title:');
        if (newTitle) {
            await fetch(`${apiUrl}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title: newTitle }),
            });
            fetchTodos();
        }
    };

    // Event listener for the form submission
    document.getElementById('todo-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('todo-input').value;
        if (title) {
            createTodo(title);
            document.getElementById('todo-input').value = '';
        }
    });

    // Initial fetch of todos
    fetchTodos();
});