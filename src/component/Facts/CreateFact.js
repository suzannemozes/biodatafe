// mockup from budget app


function CreateFact(props) { //props is one parameter is an object that in this case holds all of the values we get from the attributes on our custom element with key: value name 
  return (
    <div>
      <div>{props.title}</div>
      <div>
        <h2>{props.people}</h2>
        <div>
          {/* <JournalDate date={props.date} /> */}
          </div>
      </div>
    </div>
  );
}

export default CreateFact;

// const factSchema = new mongoose.Schema({
//   title: String,
//   people: [],
//   place: String,
//   year: Number,
//   month: Number,
//   day: Number,
// });

// import { useNavigate } from "react-router-dom"


// function Create() {
//     const nav = useNavigate()

//     const createTheTodo = (e) => {
//         const todo = {description: e.target.description.value, complete: false}
//         createTodo(todo)
//         nav('/')
//     }

// return(
//     <div>
//         <h3>Create a Todo</h3>
//         <form onSubmit={createTheTodo}>
//             <input 
//             type='text' 
//             name='description' 
//             id='dsc'/> 
//             <br />
//             <input type='submit'/>
//         </form>
//     </div>
// )
// }

// export default Create
