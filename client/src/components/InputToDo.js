import React, {Fragment, useState} from 'react';

const InputToDo = () => {
    const [description, setDescription] = useState("")

    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const body = {description};
            const response = await fetch('http://localhost:5000/todos', {
                method:"POST",
                headers: {"Content-Type": "application/json"},
                body:JSON.stringify(body)
            });
            console.log(response)
        } catch (error) {
            console.log(error.message)
        }
    }
    
    return(
        <Fragment>
            <h1 className="text-center mt-5">Input ToDo</h1>
            <form className="d-flex mt-5">
                <input type="text" className="form-control" value={description} onChange={
                    e => setDescription(e.target.value)
                }/>
                <button className="btn btn-success" onSubmit={onSubmitForm}>Add</button>
            </form>
        </Fragment>
    )
}
export default InputToDo;