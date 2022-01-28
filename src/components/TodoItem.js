import React from 'react';
import "./TodoItem.css"

import Checkbox from '@material-ui/core/Checkbox'
import { useDispatch } from 'react-redux';
import {setCheck} from "../features/todoSlice"

const TodoItem = (props) => {
    const dispatch = useDispatch()
    const handleCheck = () => {dispatch(setCheck(props.id))}

  return <div className="todoItem">
    <Checkbox checked={props.done} color="primary" onChange={handleCheck} inputProps={{"aria-label":"secondary checkbox"}} /> 
    <p className={props.done && "todoItem--done"}>{props.name}</p>    
  </div>;
};

export default TodoItem;
