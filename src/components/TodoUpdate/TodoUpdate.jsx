import React from "react";
import { FaEdit } from "react-icons/fa";

function TodoUpdate() {
    return (
        <form action="">
            <input 
                type="text" 
                className="input-update" 
                value="Tarea" 
                placeholder="Agrega una nueva tarea"
            />

            <button className="button-edit" type="submit">
                <FaEdit/>
            </button>
        </form>
    );
}

export default TodoUpdate;