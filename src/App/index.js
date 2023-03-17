import React, { useState, useEffect } from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';


// const defaultTodos = [
//   {text: 'Learn English', completed: false},
//   {text: 'Learn React', completed: false},
//   {text: 'Work', completed: false}
// ]

function App() {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}


export default App;
