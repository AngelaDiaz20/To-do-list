import { useState } from 'react';
import TodoAdd from './components/TodoAdd/TodoAdd';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <>
      <div>
          <h1>Lista de tareas</h1>
          <div className='counter'>
            <h3>N° Tareas: 4</h3>
            <h3>Pendientes: 3</h3>
          </div>

          <div>
            <h3>Agregar Tarea</h3>
            <TodoAdd/>
          </div>

          <TodoList/>
      </div>
    </>
  );
}

export default App;
