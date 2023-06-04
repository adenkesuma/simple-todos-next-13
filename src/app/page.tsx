import { FC } from 'react'

interface HomePage {}

const Home: FC<HomePage> = () => {
  return (
    <>
      <header>
        <h1 className="text-2xl">Todolist</h1>
      </header>
      <ul>
      </ul>
    </>
  )
}

export default Home
