import React, { useState } from 'react'
import CreateTodoField from './create-todo-field/CreateTodoField'
import TodoItem from './item/TodoItem'

const data = [
    {
        _id: 'rgdasf',
        title: 'Go to the gym',
        isCompleted: false,
    },
    {
        _id: 'pkjnml',
        title: 'Get order',
        isCompleted: false,
    },
    {
        _id: 'qadfbgf',
        title: 'Write code',
        isCompleted: false,
    },
]

const Home = () => {
    const [todolist, setTodolist] = useState(data)

    const changeTodolist = id => {
        const copy = [...todolist]
        const current = copy.find(t => t._id === id)
        current.isCompleted = !current.isCompleted
        setTodolist(copy)
    }

    const removeTodo = id => setTodolist([...todolist].filter(t => t._id !== id))

  return (
    <section className='text-white w-4/5 mx-auto'>
        <h1 className='text-2xl font-bold text-center mb-8'>TODO Application</h1>
        {todolist.map(todo => (
            <TodoItem 
            key={todo._id} 
            todo={todo}
            removeTodo={removeTodo}
            changeTodolist={changeTodolist}
            />))}
            <CreateTodoField setTodolist={setTodolist} />
    </section>
  )
}

export default Home