import React from "react";
import { FaTrash } from "react-icons/fa";
import TodoUpdate from "../TodoUpdate/TodoUpdate";

function TodoItem() {
    return (
        <li>
            <span>
                <label htmlFor="" className="container-done"></label>
            </span>
            <TodoUpdate/>
            <button className="button-delete"><FaTrash/></button>
        </li>
    );
}

export default TodoItem;