// import './App.css';

import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const todos = [
  {text: 'Cortar cebollas', completed: false},
  {text: 'Cortar tomates', completed: false},
  {text: 'Cortar paltas', completed: false}
]


function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <input placeholder="Cebolla"/> 
      
      <TodoList>
        {todos.map(todo => (
            <TodoItem key={todo.text} text={todo.text}/>
          ))}
      </TodoList>
      
      <CreateTodoButton />
    </React.Fragment>
    
  );
}

export default App;
