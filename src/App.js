import React from 'react';
import './App.css';
import Input from "./components/Input"
import TodoItem from "./components/TodoItem"
import { useSelector } from 'react-redux';
import { selectTodoList } from './features/todoSlice';

const todoList = [{item:"todo",done:false,id:Date.now()},{item:"todo2",done:true,id:Date.now()+1}]

function App() {
  const todoList = useSelector(selectTodoList)
  return (
    <div className="App">
      <div className="app__container">
        <div className="app__todocontainer">
          {todoList.map((item)=> (<TodoItem name={item.item} done={item.done} id={item.id} />))}
        </div>
        <Input /> 
      </div>  
      
    </div>
  );
}

export default App;
