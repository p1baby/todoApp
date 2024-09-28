import cn from 'classnames'
import React from 'react'
import { BsTrash } from 'react-icons/bs'
import Check from './Check'

const TodoItem = ({todo, changeTodolist, removeTodo }) => {
  return (
		<section className='flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full'>
			<button
				className='flex items-center'
				onClick={() => changeTodolist(todo._id)}
			>
				<Check isCompleted={todo.isCompleted} />
				<span
					className={cn({
						'line-through': todo.isCompleted,
					})}
				>
					{todo.title}
				</span>
			</button>
			<button onClick={() => removeTodo(todo._id)}>
				<BsTrash
					size={22}
					className='text-gray-600 hover:text-gray-400 transition-colors ease-in-out duration-300'
				/>
			</button>
		</section>
	)
}

export default TodoItem