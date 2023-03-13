import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';
import { useState } from 'react';

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initTodoList = [
    { id: 1, title: 'Eat', status: 'new' },
    { id: 2, title: 'Code', status: 'completed' },
    { id: 3, title: 'Sleep', status: 'new' },
  ];
  const [todoList, setTodoList] = useState(initTodoList);
  const [filterdStatus, setFilteredStatus] = useState('all');

  const handleTodoClick = (todo, index) => {
    // Clone current array to the new one
    const newTodoList = [...todoList];

    // Toggle state
    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === 'new' ? 'completed' : 'new',
    };

    // Update todo list
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    setFilteredStatus('all');
  };

  const handleShowNewClick = () => {
    setFilteredStatus('new');
  };

  const handleShowCompletedClick = () => {
    setFilteredStatus('completed');
  };

  const renderedTodoList = todoList.filter((todo) => filterdStatus === 'all' || filterdStatus === todo.status);

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />

      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowNewClick}>Show New</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
      </div>
    </div>
  );
}

export default TodoFeature;
