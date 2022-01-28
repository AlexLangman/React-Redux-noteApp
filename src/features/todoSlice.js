import { createSlice } from '@reduxjs/toolkit';

const initialState = {//Aca ponemos todas las variables globales
    todoList:[]
};

const todoSlice = createSlice({
  name: "todos",//Nombre de slice
  initialState,
  reducers: {
      saveTodo: (state, action) => {
          //state es el estado actual de saveTodo
          //action es la accion que se ejecuta. Este tiene un payload
          //action.payload es el parametro que le pasamos (por Ej: id)
          state.todoList.push(action.payload)
      },
      setCheck: (state,action) => {
          state.todoList.map(item => {
              if (action.payload===item.id){
                  if (item.done ===true){item.done=false}
                  else {item.done=true}
              }
          })
      }
  },
});

export const {saveTodo, setCheck} = todoSlice.actions;//Exportamos las acciones (nos permiten comunicarnos con los states)
export const selectTodoList = state => state.todos.todoList

export default todoSlice.reducer;
