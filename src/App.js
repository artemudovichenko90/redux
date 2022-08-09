import React from 'react';
import Counter from './components/Counter';
import TaskForm from './components/Todo/TaskForm';
import TasksList from './components/Todo/TasksList';


function App(props) {

  return (
    <>
      <Counter />
      <hr />
      <TaskForm />
      <TasksList />

    </>
  );
}

export default App;
