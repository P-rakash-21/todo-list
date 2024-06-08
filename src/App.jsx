import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoName, setTodoName] = useState('');
  const [todoDate, setTodoDate] = useState('');

  const addTodo = () => {
    if (todoName === '' || todoDate === '') {
      alert('Please enter a todo name and date.');
      return;
    }

    const newTodo = { name: todoName, date: todoDate };
    setTodos([...todos, newTodo]);
    setTodoName('');
    setTodoDate('');
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="input-container">
        <input 
          type="text" 
          value={todoName} 
          onChange={(e) => setTodoName(e.target.value)} 
          placeholder="Todo name" 
        />
        <input 
          type="date" 
          value={todoDate} 
          onChange={(e) => setTodoDate(e.target.value)} 
        />
        <button id="add-button" onClick={addTodo}>Add</button>
      </div>
      <ul id="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <span>{todo.name}</span>
            <span>{todo.date}</span>
            <button className="delete-button" onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
