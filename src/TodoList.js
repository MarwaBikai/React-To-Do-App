import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ todos , deleteTodo ,toggleTodo }) {
  return (
    <div>
      
      <ul className="list">

        {todos.length==0 && "No Todos"}

     

      {todos.map(
        
        todo => (




        <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
))}


</ul>


       

    </div>
  )
}
