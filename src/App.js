import React from 'react';
import './App.css';
import Head from './components/Head';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import 'bootstrap/dist/css/bootstrap.css';



function App() {
  return (
    <div className="App mx-4 my-1">
      <Head/>
      <TodoInput/>
      <TodoList/> 
    </div>
  );
}

export default App;
