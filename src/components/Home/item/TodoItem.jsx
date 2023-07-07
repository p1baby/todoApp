import React from 'react'
import Check from './Check'
import cn from 'classnames';
import {BsTrash} from 'react-icons/bs'

const TodoItem = ({todo, changeTodolist, removeTodo }) => {
  return (
		<div className='flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full'>
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
		</div>
	)
}

export default TodoItem