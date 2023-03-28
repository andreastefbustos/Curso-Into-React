import React from "react";
import './todoLoading.css';

function TodosLoading(){
    return (
        <div className="LoadingTodo-container">
            <span className="LoadingTodo-completeIcon"></span>
            <p>Estamos cargando, no desesperes...</p>
            <span className="LoadingTodo-deleteIcon"></span>
        </div>
        
    );
}

export { TodosLoading };