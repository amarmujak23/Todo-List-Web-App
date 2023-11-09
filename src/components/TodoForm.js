import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim()) {
      if (props.edit) {
        // If editing, pass the updated value and the ID
        props.onSubmit({
          id: props.edit.id, // Pass the ID of the edited todo
          text: input,
        });
      } else {
        // If adding a new todo, generate a new ID
        props.onSubmit({
          id: Math.floor(Math.random() * 10000),
          text: input,
        });
      }
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input edit"
          />
          <button onClick={handleSubmit} className="todo-button edit">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a todo!"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input"
            ref={inputRef}
          />
          
        </>
      )}
    </form>
  );
}

export default TodoForm;
