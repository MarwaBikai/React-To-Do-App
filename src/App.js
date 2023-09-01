import logo from './logo.svg';
import './App.css';
import './styles.css'
import { useEffect, useState } from 'react';
import Form from './Form';
import TodoList from './TodoList';
function App() {

  const [todos , setTodos]=useState(()=>{

    const localValue = localStorage.getItem("ITEMS")

    if(localValue == null) return []

    return JSON.parse(localValue)

  })


  //you can't use hooks conditionally
  //put hooks at the beginning of the files
  

  useEffect ( ()=> {

    localStorage.setItem("ITEMS" , JSON.stringify(todos))
  } , [todos] )

  //anytime you want to change state through setState
  //you must use a function that has the saved version of
  //what you want
  //look at setTodos




  function addtoDo(title){

    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title, completed: false },
    ])
  }

function toggleTodo(id , completed){


  setTodos (currentTodos=> {

    return currentTodos.map(

      todo => {

        //arrow function gets todo object as a param
        // has id , title and completed props
    
        //change in todo from the current todo list
        //newest version of it


        if (todo.id === id ){

         return {...todo , completed}
        }

        return todo 
//If the id of the current to-do item does not match the id provided as a parameter, you simply return the original todo object without any changes.

      } ) } )
      }

        //returns a todo object that
        //has a modified property= completed
        //(if modified)

    

        // The result of this expression is a 
        // new object that has the same properties 
        // as the original todo object except for
        //  the completed property, which is updated
        //   based on the value of completed.

     
  

//IDS and Keys
//Check Notion/Advanced React



function deleteTodo(id){

  setTodos(

    currentTodos => {

      return currentTodos.filter(

        todo => todo.id !== id )
      
    }
  ) 
} 
  return (

    <div className="App">



      <Form onSubmit={addtoDo}/>

      <h1 className="header">
        Todo List
      </h1>

 
      <TodoList deleteTodo={deleteTodo} toggleTodo={toggleTodo} todos={todos}/>
 
    </div>
  );
}

export default App;
