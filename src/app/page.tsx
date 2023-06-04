import { FC } from 'react'
import New from "./new/page.tsx"
import Link from "next/link"

interface HomePage {}

const Home: FC<HomePage> = () => {
  return (
    <>
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl">Todolist</h1>
        <Link href="/new" className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none">New</Link>
      </header>
      <ul>
      </ul>
    </>
  )
}

export default Home
