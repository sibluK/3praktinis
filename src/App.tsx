import { useState } from 'react'
import './App.css'

type User = {
  id: number,
  name: string,
  email: string,
  city: string
}

function App() {

  const [users, setUsers] = useState<User[]>([])
  const [query, setQuery] = useState<string>("");

  return (
    <>

    </>
  )
}

export default App
