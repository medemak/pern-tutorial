import React, {Fragment, useEffect, useState} from 'react';

const ListToDos = () => {

    const [todos,setToDos] = useState([]);

    const deleteToDo = async(id) => {
        try {
            const deleteToDo = await fetch(`http://localhost:5000/todos/${id}`, {
                method:'DELETE'
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    const getToDos = async() => {
        try {
            const response = await fetch(`http://localhost:5000/todos/`);
            const jsonData = await response.json();
            setToDos(jsonData);
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getToDos()
    },[])

    return (
        <Fragment>
            <table className="table mt-5 text-center">
                <thead>
                <tr>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                    {/*                 
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                    </tr> 
                    */}
                    {todos.map(todo => (
                        <tr key={todo.todo_id}>
                            <td>todo.description</td>
                            <td><button>Edit</button></td>
                            <td><button classname="btn btn-danger" onClick={() => deleteToDo(todo.todo_id)}>Delete</button></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </Fragment>
    )
}

export default ListToDos;