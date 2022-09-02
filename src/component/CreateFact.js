// import React from 'react'
// import { useNavigate } from "react-router-dom"
// import {CreateFact}

// function CreateFact() {
//   return (
//     <div>
//       <h2>Create Fact!</h2>
//     </div>
//   )
// }

// export default CreateFact;

import { useNavigate } from "react-router-dom"


function Create() {
    const nav = useNavigate()

    const createTheTodo = (e) => {
        const todo = {description: e.target.description.value, complete: false}
        createTodo(todo)
        nav('/')
    }

return(
    <div>
        <h3>Create a Todo</h3>
        <form onSubmit={createTheTodo}>
            <input 
            type='text' 
            name='description' 
            id='dsc'/> 
            <br />
            <input type='submit'/>
        </form>
    </div>
)
}

export default Create
