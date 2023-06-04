import { FC } from "react"
import Link from "next/link"
import { prisma } from "@/db"
import { redirect } from "next/navigation"

async function createTodo(data: FormData) {
  "use server"

  const title = data.get("title")?.valueOf()

  if (typeof title !== "string" || title.length === 0) {
    throw Error("Invalid Title")
  }

  await prisma.todo.create({
    data: {
      title, complete: false
    }
  })

  redirect("/")
}

const New = () => {
  return (
    <>
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-2xl">New</h1>
      </header>
      <form action={createTodo} className="flex gap-6 flex-col">
        <input
          placeholder="type your todo..."
          type="text"
          name="title"
          className="border border-slate-100 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <div className="flex gap-6 items-center justify-between">
          <Link href=".." className="cursor-pointer">Back</Link>
          <button className="border border-slate-100 text-slate-100 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none">Add Todo</button>
        </div>
      </form>
    </>
  )
}

export default New
