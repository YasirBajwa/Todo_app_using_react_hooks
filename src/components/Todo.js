import React,{useState} from 'react'

function Todo() {
    const [todos,setTodos] = useState(['Apple','Banana','Orange']);
    let [value,setValue] = useState([]);


    const add_todo = () => {
        setTodos( [...todos,value] );
        setValue('');
    }
    const delete_all = () => {
        setTodos([]);
    }
    const delete_todo = (index) => {
        todos.splice(index,1);
        setTodos([...todos])
        

    }
    const update_todo = (value,index) =>{
        let update_val = prompt('Enter updated value',value);
        todos[index] = update_val;
        setTodos([...todos]);
    }
    return (
        <div>
            <h1>Todo</h1>
            <input placeholder='Add Todo' value={value} type='text'
              onChange={ (e) => setValue(e.target.value) }
              />
            <button onClick= { () => add_todo()}>ADD TODO</button>
            <button onClick= { () => delete_all()}>DELETE ALL</button>
            <ul>
                {todos.map((value,index) =>{
                    return <li key={index}>
                        {value}
                        <button onClick = { () => update_todo(value,index)}>EDIT</button>
                        <button onClick= { () => delete_todo(index)}>DELETE</button>
                        </li>
                })}
            </ul>
        </div>
    )
}

export default Todo
