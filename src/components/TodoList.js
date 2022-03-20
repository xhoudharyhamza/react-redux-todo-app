import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'
export default function TodoList() {
    const todos = useSelector((state) => state.reducer.todos)
  return (
    <div className="container">
        <div className="row todo-list">
            <div className="col-md-6 col-sm-12">
                <h2 className='text-center'>All Todo's</h2>
                {todos.length==0?<p className='text-center'>Nothing to Show Yet</p>:todos.map((element,index)=>{
                    return <Todo todo={element} key={index} id={index}/>
                })}
            </div>
        </div>
    </div>
  )
}
