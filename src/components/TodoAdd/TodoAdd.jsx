import React from "react";

function TodoAdd() {
    return (
        <form action="">
            <input 
                type="text" 
                className="input-add" 
                value="Tarea" 
                placeholder="Agrega una nueva tarea"
            />

            <button className="button-add" type="submit">
                Añadir
            </button>
        </form>
    );
}

export default TodoAdd;