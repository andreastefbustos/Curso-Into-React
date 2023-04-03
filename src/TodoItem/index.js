import React from "react";
// import { CompleteIcon } from "../TodoIcon/CompleteIcon";
// import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import { HiCheckCircle } from "react-icons/hi";
import { MdOutlineDeleteForever } from "react-icons/md"
import './TodoItem.css';

function TodoItem(props){
   
    return (
        <li className="TodoItem">
            {/* <CompleteIcon
            completed={props.completed}
            onComplete={props.onComplete}
            /> */}
            <span 
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick= {props.onComplete}>
                <HiCheckCircle />
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            {/* <DeleteIcon
            onDelete={props.onDelete}
            /> */}
            <span 
            className="Icon Icon-delete"
            onClick={props.onDelete}>
                <MdOutlineDeleteForever />
            </span>

        </li>
    );
}

export { TodoItem };

