import { useEffect, useState } from 'react'
import './App.css'
import { User } from "./types/types"
import useUserApi from "./hooks/useUsersApi"
import SearchBar from './components/SearchBar'
import UserList from './components/UserList'

function App() {

  const { users } = useUserApi()
  const [query, setQuery] = useState<string>("");
  const [fakeLoading, setFakeLoading] = useState<boolean>(false)

  useEffect(() => {
    setFakeLoading(true);
    const timeout = setTimeout(() => {
      setFakeLoading(false);
    }, 1000)
    return () => clearTimeout(timeout);
  }, [query])


  function filterUsersByQuery(users: User[], query: string) {
    return users.filter(user => user.name.toLowerCase().includes(query.toLowerCase()));
  }

  const filteredUsers = filterUsersByQuery(users, query);

  return (
    <div className="content">
      <div className="header">
        <span>Users</span>
        <SearchBar query={query} setQuery={setQuery}/>
      </div>
      <UserList users={filteredUsers} fakeLoading={fakeLoading}/>
    </div>
  )
}

export default App
