"use client"
import { FC } from "react"

interface todoItemProps {
  id: string
  title: string
  complete: boolean
  toggleTodo: (id: string, complete: boolean) => void
}

const TodoItem: FC<todoItemProps> = (
  { id, title, complete, toggleTodo }
) => {
  return (
    <li className="flex gap-1 items-center">
      <input 
        id={id} 
        defaultChecked={complete} 
        type="checkbox" 
        className="cursor-pointer peer" 
        onChange={e => toggleTodo(id, e.target.checked)}
      />
      <label htmlFor={id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">
        {title}
      </label>
    </li>
  )
}

export default TodoItem
