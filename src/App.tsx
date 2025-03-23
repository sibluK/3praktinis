import { useCallback, useEffect, useMemo, useState } from 'react'
import './App.css'
import { User } from "./types/types"
import useUserApi from "./hooks/useUsersApi"
import SearchBar from './components/SearchBar'
import UserList from './components/UserList'

function App() {

  const { users, loading } = useUserApi()
  const [query, setQuery] = useState<string>("");
  const [fakeLoading, setFakeLoading] = useState<boolean>(false)

  // Fake loading bet prideda nereikalingu perkrovimu del fakeLoading useState
  useEffect(() => {
    if (query === "") {
      setFakeLoading(false);
      return;
    }
    
    setFakeLoading(true);
    const timeout = setTimeout(() => {
      setFakeLoading(false);
    }, 1000)
    return () => clearTimeout(timeout);
  }, [query])


  const filterUsersByQuery = useCallback((users: User[], query: string) => {
    console.log("FILTERING USERS");
    return users.filter(user => user.name.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  // useMemo sumažino filtravimo kiekį kai keičiasi query
  const filteredUsers = useMemo(() => filterUsersByQuery(users, query), [users, query]); 

  // Nieko nekeicia useCallback naudojimas
  const handleQueryChange = useCallback((input: string) => {
    setQuery(input);
  }, [query])

  return (
    <div className="content">
      <div className="header">
        <span>Users</span>
        <SearchBar query={query} setQuery={handleQueryChange}/>
      </div>
      {fakeLoading || loading ? (
        <div className="searching-message">Loading...</div>
      ) : (
        <UserList users={filteredUsers} />
      )}
    </div>
  )
}

export default App
