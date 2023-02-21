// import './App.css';

import React, { useState } from 'react';
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const defaultTodos = [
  {text: 'Cortar cebollas', completed: true},
  {text: 'Cortar tomates', completed: false},
  {text: 'Cortar paltas', completed: false}
]


function App() {
  const [todos, setTodos] = useState(defaultTodos)
  const [searchValue, setSearchValue] = useState('')
  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  let searchedTodos = [];

  if(!searchValue.length >=1){
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText)
    })
  }
  
  return (
    <React.Fragment>
      <TodoCounter
      total={totalTodos}
      completed={completedTodos}
      />
      
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue} 
      />
      
      <TodoList>
        {searchedTodos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
            />
          ))}
      </TodoList>
      
      <CreateTodoButton />
    </React.Fragment>
    
  );
}

export default App;
