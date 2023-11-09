import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiDeleteBin4Line } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState(null);

  const submitUpdate = (todoId, value) => {
    updateTodo(todoId, value);
    setEdit(null);
  };

  return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={() => completeTodo(todo.id)} className='complete-button' style={{ marginRight: '8px' }}>
          ✓
        </button>
        {edit === todo.id ? (
          <TodoForm
            edit={{ id: todo.id, value: todo.text }}
            onSubmit={(value) => submitUpdate(todo.id, value)}
          />
        ) : (
          <span onDoubleClick={() => setEdit(todo.id)}>{todo.text}</span>
        )}
      </div>
      <div className='icons'>
        <RiDeleteBin4Line onClick={() => removeTodo(todo.id)} className='delete-icon' />
        <TiEdit onClick={() => setEdit(todo.id)} className='edit-icon' />
      </div>
    </div>
  ));
};

export default Todo;
