import React from "react";
import './TodoCounter.css';

function TodoCounter({totalTodos, completedTodos}){
    
    return (
        <h2 className="TodoCounter" >Has completado {totalTodos} de {completedTodos} TODOs</h2>
    );
}

export {TodoCounter}