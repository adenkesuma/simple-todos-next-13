import { FC } from 'react'
import { prisma } from "@/db"
import Link from "next/link"
import TodoItem from "@/components/todo-item.tsx"

async function toggleTodo(id: string, complete: boolean) {
  "use server"

  console.log(id, complete)
  await prisma.todo.update({ where: { id }, data: { complete }})
}

const getTodos = () => {
  return prisma.todo.findMany()
}

const Home = async () => {
  const todos = await getTodos()

  return (
    <>
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl">Todolist</h1>
        <Link href="/new" className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none">New</Link>
      </header>
      <ul>
        {
          todos.map(todo => (
            <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
          ))
        } 
      </ul>
    </>
  )
}

export default Home
