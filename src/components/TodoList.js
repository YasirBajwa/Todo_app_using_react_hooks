import React,{useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList(props) {
    const [todos,setTodos] = useState([]);

    const addTodo = (todo) =>{
        if(!todo.text || /^\s*$/.test(todo.text) ){
            return
        }
        const newTodos = [todo,...todos]

        setTodos(newTodos);
    }

    const completTodo = (id) => {
        let updatedTodos = todos.map( (todo) =>{
            if (todo.id === id){
                todo.isComplete = !todo.isComplete
            }
        })
        setTodos(updatedTodos);
    }
    
    return (
        <div>
              <h1>What are you doing?</h1>
              <TodoForm  onSubmit={addTodo} />   
              <Todo todo={todos} completTodo = {completTodo}/>      
        </div>
    )
}

export default TodoList
