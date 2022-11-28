import {TodoAdd} from './components/TodoAdd/TodoAdd';
import {TodoList} from './components/TodoList/TodoList';
import { useTodo } from './hooks/useTodo';

function App() {

  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo
  } = useTodo();

  return (
    <>
      <div>
          <h1>Lista de tareas</h1>
          <div className='counter'>
            <h3>N° Tareas: {todosCount} </h3>
            <h3>Pendientes: {pendingTodosCount} </h3>
          </div>

          <div>
            <h3>Agregar Tarea</h3>
            <TodoAdd handleNewTodo={handleNewTodo}/>
          </div>

          <TodoList
            todos={todos}
            handleUpdateTodo = {handleUpdateTodo}
            handleDeleteTodo = {handleDeleteTodo}
            handleCompleteTodo = {handleCompleteTodo}
          />
      </div>
    </>
  );
}

export default App;
