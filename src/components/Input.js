import React, {useEffect, useState} from 'react';
import "./Input.css"
import { useDispatch } from 'react-redux';
import { saveTodo } from '../features/todoSlice';
import { useRef } from 'react';

const Input = () => {
  const inputRef = useRef(null)
    const [input,setInput] = useState("")//Valor del input
    const dispatch = useDispatch()

    const addTodo = () => {
        dispatch(saveTodo({
            item:input,
            done:false,
            id:Date.now()
        }))
        setInput("")
    }

  return <div className='input'>
    <input ref={inputRef} type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
    <button onClick={() => addTodo()}>Add!</button>   
  </div>;
};

export default Input;
